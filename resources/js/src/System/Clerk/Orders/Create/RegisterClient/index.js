import React, { useState, useContext } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import Message from '../../../../../components/Message';
import Context from '../../../../../Hook/Context';
import { formatMask } from '../../../../../Hook/util/help';

const RegisterClient = ({ show, setShow, setClients, clients }) => {

    const handleClose = () => setShow(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phone1, setPhone1] = useState('');
    const [storeClientSuccess, setStoreClientSuccess] = useState(false);

    const { token } = useContext(Context);

    /*  SWEET ALERT  */

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    const handlerSubmit = e => {
        e.preventDefault();

        let data = {};

        data = {
            name: name,
            email: email,
            document: formatMask(cpf),
            rg: rg,
            phone1: formatMask(phone1),
        }

        axios.post('/api/v1/clients', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Cliente cadastrado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
            setStoreClientSuccess(true);
            setTimeout(() => {

                setShow(false);
                setName('');
                setEmail('');
                setCpf('');
                setRg('');
                setPhone1('');
                setStoreClientSuccess(false);

            }, 3000);
            const clientsCopy = [...clients];
            clientsCopy.unshift({
                value: response.data.id,
                label: response.data.name
            });
            setClients(clientsCopy);

        }).catch(err => {
            setSweetText(err.response.data.error);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSweetShow(true);
        });
    }

    return (
        <Modal centered={true} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de cliente</Modal.Title>
            </Modal.Header>
            <form onSubmit={handlerSubmit}>
                <Modal.Body>
                    <Input
                        type={"text"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        label={'Nome'}
                        name={'name'}
                        placeholder={'Nome do cliente'}
                    />

                    <Input
                        type={"mask"}
                        mask={'999.999.999-99'}
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        label={'CPF'}
                        name={'cpf'}
                        placeholder={'999.999.999-99'}
                    />

                    <Input
                        type={"number"}
                        value={rg}
                        onChange={e => setRg(e.target.value)}
                        label={'RG'}
                        name={'rg'}
                        placeholder={'5555555'}
                    />

                    <Input
                        type={"email"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        label={'Email'}
                        name={'email'}
                        placeholder={'email@exemplo.com'}
                    />

                    <Input
                        type={"mask"}
                        value={phone1}
                        onChange={e => setPhone1(e.target.value)}
                        label={'Celular'}
                        mask={'(99) 99999-9999'}
                    />
                    {
                        storeClientSuccess ? <Message type={'info'}>Cliente cadastrado com sucesso</Message> : null

                    }
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col xs={4}>
                            <Button style={'grey'} onClick={handleClose}>
                                Sair
                            </Button>
                        </Col>
                        <Col xs={8}>
                            <Button>
                                Cadastrar
                            </Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </form>

        </Modal>
    );
}

export default RegisterClient;
