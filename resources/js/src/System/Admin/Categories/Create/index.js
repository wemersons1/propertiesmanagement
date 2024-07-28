import React, {useState, useContext} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TextArea from "../../../../components/TextArea";
import CardForm from "../../../../components/CardForm";
import {Row, Col} from 'react-bootstrap';

const Create = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive] = useState(true);

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [sizes, setSizes] = useState([]);
    const [success, setSuccess] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [sizeName, setSizeName] = useState('');
    const {token} = useContext(Context);
    const navigate = useNavigate();


    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
    }

    const handlerSubmit = e => {
        e.preventDefault();
        let data = {
            active,
            name,
            description,
            sizes
        };

        axios.post('/api/v1/brands', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Categoria cadastrada com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.error);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSweetShow(true);
        });

    }

    const renderSizeList = () => {

        const removeItem = index => {

            let copySizes = [...sizes];
            copySizes.splice(index, 1);

            setSizes(copySizes);

        }

        return sizes.map((size, index) => {

            return (
                <Row key={index}>
                    <Col xs={9}>
                        <Input
                            label={'Nome'}
                            value={size.name}
                            onChange={e => {

                                let copySizes = [...sizes];
                                copySizes[index] = {name: e.target.value};
                                setSizes(copySizes);

                            }}
                        />
                    </Col>
                    <Col xs={3} className={'d-flex align-items-center'}>
                        <Button
                            type={'delete'}
                            onClick={() => removeItem(index)}
                        />
                    </Col>
                </Row>
            );

        });

    }

    const addItem = () => {

        return (
            <Row>

                <Row >
                    <Col xs={10}>
                        <Input
                            label={'Nome'}
                            value={sizeName}
                            onChange={e => setSizeName(e.target.value)}
                        />
                    </Col>
                    <Col xs={2} className={'d-flex align-items-center'}>
                        <Button
                            type={'add'}
                            onClick={() => {
                                let copySizes = [...sizes];
                                copySizes.push({name: sizeName});
                                setSizes(copySizes.reverse());
                                setShowAdd(false);
                                setSizeName('');
                            }}
                        />
                    </Col>
                </Row>

            </Row>
        );

    }

    return (
        <div >

            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de categoria'}
            />

            <CardForm type={'smaller'}>

                <form onSubmit={handlerSubmit}>
                    <h4>Dados da categoria</h4>

                    <input
                        id={'active'}
                        type={'checkbox'}
                        checked={active}
                        onChange={() => setActive(!active)}
                    />
                    <label htmlFor={'active'}>Ativo</label>

                    <Input
                        type={"text"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        label={'Nome'}
                        name={'name'}
                        placeholder={'Nome da categoria'}
                    />
                    <TextArea
                        type={'text'}
                        label={'Descrição'}
                        onChange={e => setDescription(e.target.value)}
                        required
                        value={description}
                    />

                    <CardForm type={'smaller'}>
                        <Row>
                            <Col xs={9}>
                                <h4 className={'text-dark'}>Tamanhos</h4>
                            </Col>
                            <Col xs={3}>
                                <Button
                                    type={'add'}
                                    onClick={() => setShowAdd(true)}
                                >
                                    Adicionar
                                </Button>
                            </Col>
                        </Row>

                        {showAdd && addItem()}

                        {renderSizeList()}

                    </CardForm>

                    <Button styleIcon={'save'}>Cadastrar</Button>

                </form>

            </CardForm>

            <SweetAlert
                onConfirm={onClose}
                title={sweetTitle}
                type={sweetType}
                btnConfirmStyle={'success'}
                text={sweetText}
                show={sweetShow}
                confirmBtnText={'Ok'}
                closeOnClickOutside={false}
            />
        </div>
    );
}

export default Create;
