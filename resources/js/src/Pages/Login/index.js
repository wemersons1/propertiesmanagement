import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import Input from '../../components/Input';
import Button from "../../components/Button";
import Context from "../../Hook/Context";
import Message from "../../components/Message";
import { Link, useNavigate } from 'react-router-dom';
import Spinner from "../../components/Spinner";
import Logo from './img/logo.png';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const { signIn } = useContext(Context);

    const handlerSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await signIn(user, password);

            setError(false);

            navigate('/admin');

        } catch (e) {

            setError(true);
        }

        setLoading(false);
    }

    const setUserChange = e => {
        setUser(e.target.value);
        setError(false);
    }

    const setPasswordChange = e => {
        setPassword(e.target.value);
        setError(false);
    }

    return (
        <div className={styles.Login}>
            <form onSubmit={handlerSubmit}>
                <h1>
                    <img src={Logo} width={"175px"} />
                </h1>
                <Input
                    placeholder={'example@domain.com'}
                    label={'Email'}
                    required
                    onChange={setUserChange}
                    value={user}
                    type={'email'}
                />
                <Input
                    placeholder={'Senha'}
                    label={'Senha'}
                    required
                    type={'password'}
                    value={password}
                    onChange={setPasswordChange}
                />

                <div className={'d-flex justify-content-between'}>
                    <Link to={'/forgot-password'}>Redefinir senha</Link>
                    <Link to={'/list-plans'}>Cadastre-se</Link>
                </div>
                {error ? <Message type={'error'}>Email ou senha incorretos</Message> : null}

                <Button>Entrar {loading ? <Spinner size={'small'} /> : null}</Button>
            </form>
        </div>
    );
}

export default Login;
