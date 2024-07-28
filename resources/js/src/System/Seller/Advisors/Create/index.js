import React, {useState, useContext} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import {useNavigate} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import {formatMask} from "../../../../Hook/util/help";
const Create = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState('');
    const [rg, setRg] = useState('');
    const [phone1, setPhone1] = useState('');

    const [success, setSuccess] = useState(false);

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
        let data = {};

        data['name'] = name;
        data['email'] = email;
        data['document'] = formatMask(document);;
        data['rg'] = rg;
        data['phone1'] = formatMask(phone1);

        axios.post('/api/v1/advisors', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Assessor cadastrado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.message);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSweetShow(true);
        });
    }

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de Assessor'}
            />

            <CardForm type={'smaller'}>
                <form onSubmit={handlerSubmit}>
                    <Input
                        type={"text"}
                        required
                        label={'Nome'}
                        name={'name'}
                        placeholder={'name example'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        type={"email"}
                        label={'Email'}
                        name={'email'}
                        placeholder={'email@example.com'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type={"mask"}
                        label={'CPF'}
                        mask={'999-999-999-99'}
                        value={document}
                        onChange={e => setDocument(e.target.value)}
                    />
                    <Input
                        type={"text"}
                        label={'RG'}
                        name={'rg'}
                        placeholder={'99999999'}
                        value={rg}
                        onChange={e => setRg(e.target.value)}
                    />

                    <Input
                        type={"mask"}
                        label={'Celular'}
                        name={'email'}
                        mask={'(99) - 99999 - 9999'}
                        value={phone1}
                        onChange={e => setPhone1(e.target.value)}
                    />

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
