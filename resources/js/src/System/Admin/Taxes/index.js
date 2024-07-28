import React, { useContext, useState, useEffect } from 'react';
import CardForm from "../../../components/CardForm";
import { Col, Row } from "react-bootstrap";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import SweetAlert from "../../../components/SweetAlert";
import Context from "../../../Hook/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../components/Spinner";

const Config = () => {

    const [showAdd, setShowAdd] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [sizeName, setSizeName] = useState('');
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);
    const { token, role } = useContext(Context);
    const navigate = useNavigate();
    const [loading, setLoading] = useState([]);
    const [taxes, setTaxes] = useState({});

    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {

        axios.get('/api/v1/config-system', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSizes(response.data?.payments_forms);
            setTaxes(response.data?.taxes);
            setLoading(false);
        });

    }, []);

    const removeItem = () => {

        setShow(false);

        let copySizes = [...sizes];
        let id = copySizes[index].id;

        axios.delete(`/api/v1/config-system/payments-forms/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            copySizes.splice(index, 1);
            setSizes(copySizes);

        });

    }

    const renderSizeList = () => {

        return sizes.map((size, index) => {

            return (
                <Row key={index}>
                    <Col xs={9}>
                        <Input
                            label={'Nome'}
                            value={size.name}
                            onChange={e => {
                                let copySizes = [...sizes];
                                copySizes[index] = { ...copySizes[index], name: e.target.value };
                                setSizes(copySizes);

                            }}
                        />
                    </Col>
                    <Col xs={3} className={'d-flex align-items-center'}>
                        <Button
                            type={'delete'}
                            onClick={() => {
                                setShow(true);
                                setIndex(index);
                            }}
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

                                axios.post('/api/v1/config-system/payments-forms', {
                                    payments: [{ name: sizeName }]
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                }).then(response => {

                                    let copySizes = [...sizes];
                                    copySizes.push({ name: sizeName, id: response.data.id });
                                    setSizes(copySizes.reverse());
                                    setShowAdd(false);
                                    setSizeName('');

                                });

                            }}
                        />
                        <Col xs={1}></Col>
                        <Col xs={3} className={'d-flex align-items-center'}>
                            <Button
                                type={'delete'}
                                onClick={() => {
                                    setShowAdd(false);
                                    setSizeName('');
                                }}
                            />
                        </Col>
                    </Col>
                </Row>

            </Row>
        );

    }

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }


    const handlerSubmit = e => {
        e.preventDefault();

        let data = {};

        if (role === 'master') {

            data['payments'] = sizes;

            axios.put('/api/v1/config-system/payments-forms', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Configuração cadastrada com sucesso');
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

        } else {

            data['taxes'] = taxes;

            axios.post('/api/v1/config-system', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Taxa cadastrada com sucesso');
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



    }

    const renderTaxes = () => {

        let items = [];

        for (let i = 1; i <= 12; i++) {

            items.push(
                <Col lg={2}>
                    <Input
                        type={'number'}
                        label={`Credito ${i}x`}
                        name={`credit${i}x`}
                        value={taxes[`credit${i}x`]}
                        onChange={e => setTaxes({ ...taxes, [e.target.name]: e.target.value })}
                    />
                </Col>
            );
        }

        items.push(<Col lg={2}>
            <Input
                type={'number'}
                label={`Débito`}
                name={`debit`}
                value={taxes['debit']}
                onChange={e => setTaxes({ ...taxes, [e.target.name]: e.target.value })}
            />
        </Col>);

        return items

    }

    if (loading) return (<Spinner />);

    return (

        <div>
            <form onSubmit={handlerSubmit}>
                <CardForm type={'medium'}>
                    {
                        role !== 'master' ?
                            <>

                                <Col xs={9}>
                                    <h1 className={'text-dark'}>Taxas</h1>
                                </Col>

                                <Row>
                                    {renderTaxes()}
                                </Row>

                            </>

                            :

                            <>

                                <Row>
                                    <Col xs={9}>
                                        <h1 className={'text-dark'}>Formas de pagamento</h1>
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
                            </>
                    }

                    <Button>Salvar alterações</Button>

                </CardForm>
            </form>

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

            <SweetAlert
                onConfirm={removeItem}
                onCancel={() => setShow(false)}
                showCancel={true}
                title={'Atenção'}
                type={'warning'}
                btnConfirmStyle={'success'}
                text={'Tem certeza que deseja excluir tipo de pagamento ?'}
                show={show}
                confirmBtnText={'Ok'}
                cancelBtnText={'Cancelar'}
                closeOnClickOutside={false}
            />

        </div>

    );
}

export default Config;
