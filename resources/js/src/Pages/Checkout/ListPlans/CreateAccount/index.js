import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import { initialStateUser } from './initialStates';
import styles from './CreateAccount.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAccount = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    const [user, setUser] = useState(initialStateUser);
    const [emailVerified, setEmailVerified] = useState(true);
    const [showMessageErrorPassword, setShowMessageErrorPassword] = useState(false);
    const [messageErrorPassword, setMessageErrorPassword] = useState('');
    const navigate = useNavigate();

    const emailVerifiedFunction = () => {
        axios.get(`/api/v1/check-email?email=${user.email}`)
            .then(() => setEmailVerified(true)).catch(() => setEmailVerified(false));
    }

    const handlerSubmit = e => {
        e.preventDefault();
        if (emailVerified && passwordCorrect()) {
            axios.post('/api/v1/create-account', user).then(response => {
                let hashEmail = btoa(`email=${user.email}`);
                navigate(`/verify-email?${hashEmail}`);
            }).catch(err => {

            });
        }
    }

    const passwordCorrect = () => {
        if (user.password.length < 8) {
            setMessageErrorPassword('A Senha deve ter pelo menos 8 dígitos');
            setShowMessageErrorPassword(true);
            return false;
        } else {
            setShowMessageErrorPassword(false);
        }

        if (user.password !== user.password_confirmation) {
            setMessageErrorPassword('O campo Senha e Repetir senha não conferem');
            setShowMessageErrorPassword(true);
            return false;
        } else {
            setShowMessageErrorPassword(false);
        }

        return true;
    }

    return (
        <div className={styles.CreateAccount}>
            <Modal centered={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastre-se</Modal.Title>
                </Modal.Header>
                <form onSubmit={handlerSubmit}>
                    <Modal.Body>
                        <Input
                            className={'border'}
                            label={'Nome'}
                            name={'name'}
                            onChange={e => setUser({
                                ...user,
                                [e.target.name]: e.target.value
                            })}
                            value={user.name}
                            required
                        />
                        <Input
                            className={'border'}
                            type={'mask'}
                            mask={'(99)99999-9999'}
                            label={'Celular'}
                            required
                            value={user.phone1}
                            name={'phone1'}
                            onChange={e => setUser({
                                ...user,
                                [e.target.name]: e.target.value
                            })}
                        />
                        <Input
                            className={'border'}
                            label={'Email'}
                            name={'email'}
                            type={'email'}
                            onChange={e => {
                                setUser({
                                    ...user,
                                    [e.target.name]: e.target.value
                                })
                                setEmailVerified(true);
                            }}
                            value={user.email}
                            required
                            onBlur={emailVerifiedFunction}
                        />
                        {
                            emailVerified ? null :
                                <p className={'text-danger'} style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                    Já existe cadastro com este e-mail
                                </p>
                        }
                        <Input
                            className={'border'}
                            label={'Senha'}
                            name={'password'}
                            onChange={e => {
                                setUser({
                                    ...user,
                                    [e.target.name]: e.target.value
                                });
                                setShowMessageErrorPassword(false);
                            }}
                            value={user.password}
                            required
                            type={'password'}
                            onBlur={passwordCorrect}
                        />

                        <Input
                            className={'border'}
                            label={'Repetir senha'}
                            name={'password_confirmation'}
                            onChange={e => {
                                setUser({
                                    ...user,
                                    [e.target.name]: e.target.value
                                });
                                setShowMessageErrorPassword(false);
                            }}
                            value={user.password_confirmation}
                            required
                            type={'password'}
                            onBlur={passwordCorrect}
                            onClick={() => setShowMessageErrorPassword(false)}
                            onFocus={() => setShowMessageErrorPassword(false)}
                        />

                        {
                            !showMessageErrorPassword ? null :
                                <p className={'text-danger'} style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                    {messageErrorPassword}
                                </p>
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
        </div>
    );
}

export default CreateAccount;
