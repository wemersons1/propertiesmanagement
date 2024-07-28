import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../../../Hook/Context';
import styles from '../../Checkout/VerifyEmail/VerifyEmail.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { SiAdguard } from 'react-icons/si';

const PaymentProcessed = () => {
    let params = window.location.href.split('?')[1];
    let url = (params);
    var paramsBusca = new URLSearchParams(url);
    const [resultPayment, setResultPayment] = useState(paramsBusca.get('payment'));
    const { token, setUser } = useContext(Context);
    const today = new Date(new Date().toJSON().slice(0, 10));

    useEffect(() => {

        if (+paramsBusca.get('payment') === 1) {
            setTimeout(() => {
                axios.get('/api/v1/my-account', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {

                    if ((today <= new Date(response.data.company.plan[0].pivot.date_limit))) {

                        localStorage.setItem('@QuickSale:user', JSON.stringify(response.data));
                        setUser(response.data);
                    }

                });

            }, 15000);
        }

    }, []);

    return (
        <div className={styles.EmailVerify}>

            {
                +resultPayment === 1 ?
                    <>
                        <div className={'mb-4 d-flex justify-content-center align-items-center'}>
                            <BsCheckCircle
                                size={150}
                                style={{ fill: "#42ba96" }}
                            />
                        </div>

                        <h1 className={'text-success'}>Pagamento confirmado com sucesso</h1>
                        <p>Em instantes você irá poder usufluir de nossos serviços!</p>
                    </> :
                    <>
                        <div className={'mb-4 d-flex justify-content-center align-items-center'}>
                            <SiAdguard
                                size={150}
                                style={{ fill: "#df4759" }}
                            />
                        </div>

                        <h1>Seu pagamento está em análise</h1>
                        <p>Dentro de de 24hs será processado</p>
                    </>
            }

        </div>
    );
}

export default PaymentProcessed;
