import React, { useEffect, useState } from 'react';
import Header from '../ListPlans/Header';
import styles from './VerifyEmail.module.css';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {

    const [email, setEmail] = useState('');

    useEffect(() => {

        let params = window.location.href.split('?')[1];
        let email = atob(params);
        var paramsBusca = new URLSearchParams(email);
        setEmail(paramsBusca.get('email') ?? 'Email não informado');
    }, []);

    return (
        <div className={styles.EmailVerify}>
            <h1>Obrigado por se cadastrar!</h1>
            <p>Foi encaminhado um e-mail de confirmação para o endereço {email}</p>
            <p>
                <Link to={'/list-plans'}><RiArrowGoBackLine size={20} style={{ fill: "blue" }} /> Voltar para o início</Link>
            </p>
        </div>
    );
}

export default VerifyEmail;
