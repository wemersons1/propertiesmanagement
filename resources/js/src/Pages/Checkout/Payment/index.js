import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import { PUBLIC_KEY, translateMessageError } from '../../../config/mercado-pago';
import HeaderNavigator from '../HeaderNavigator';
import CardPayment from './CardPayment';
import CardTypePayment from './CardTypePayment';
import './payment.css';
import styles from './Payment.module.css';
import './creditCard.css';
import Header from '../ListPlans/Header';
import HeaderLogged from '../../../components/Layout/Header';
import Context from '../../../Hook/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ImEye } from 'react-icons/im';
import Button from '../../../components/Button';
import { MdOutlineContentCopy } from 'react-icons/md';
import imgChip from './img/chip-cartao-credito.png';
import { GiPayMoney } from 'react-icons/gi';
import { valida_cpf_cnpj } from '../../../Hook/util/check_cpf_cnpj';
import Swal from "sweetalert2";
import Message from '../../../components/Message';

const Payment = () => {
    let url = window.location.href.replace('https://', '').replace('http://', '');
    url = url.split('/').splice(1).join('/');
    url = url.split('?').splice(1).join('?');
    url = url.split('#')[0];
    url = atob(url);
    var paramsBusca = new URLSearchParams(url);

    const [typePayment, setTypePayment] = useState('');
    const [showBilling, setShowBilling] = useState(false);
    const { token, user, setUser } = useContext(Context);
    const [linkBilling, setLinkBilling] = useState('');
    const [showPix, setShowPix] = useState(false);
    const [qrCode, setQrCode] = useState('');
    const [showMessageError, setShowMessageError] = useState(false);
    const [showMessageErrorDenied, setShowMessageErrorDenied] = useState(false);
    const [company, setCompany] = useState(() => {

        return {
            plan_id: paramsBusca.get("plan_id") ?? 0,
            name: paramsBusca.get("name") ?? '',
            cnpj: paramsBusca.get("cnpj") ?? '',
            type: paramsBusca.get('type') ?? '',
        }
    });

    const plan_id = paramsBusca.get('plan_id') ?? 0;
    const navigate = useNavigate();
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [showCredit, setShowCredit] = useState(false);
    const [loadingPaymentCredit, setLoadingPaymentCredit] = useState(false);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    const generatePayment = async (type) => {

        setShowCredit(false);
        setShowPix(false);
        setShowBilling(false);
        setLoadingPayment(true);

        let url = window.location.href.split('?')[1].split('#')[0];
        let paramsBusca = new URLSearchParams(atob(url));
        let data = { plan_id };

        if (!plan_id) {
            navigate(-1);
        }

        if (paramsBusca.get('name') && !user?.company && !user?.company?.plan.length) {

            let dataCompany = {};

            dataCompany['name'] = paramsBusca.get('name');
            dataCompany['cnpj'] = paramsBusca.get('cnpj');

            const company = await axios.post('/api/v1/my-account/company', dataCompany, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            let copyUser = { ...user };
            copyUser.company = company.data;
            copyUser.company_id = company.data.id;
            localStorage.setItem('@QuickSale:user', JSON.stringify(copyUser));
        }

        const payment = await axios.post(`/api/v1/plan/payment/${type}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (payment) {

            if (type === 'billing') {
                setLinkBilling(payment.data.link_billing);
                setShowBilling(true);
                setShowCredit(false);
                setShowPix(false);

            } else if (type === 'pix') {
                setQrCode(payment.data);
                setShowPix(true);
                setShowCredit(false);
                setShowBilling(false);
            }

            setLoadingPayment(false);

        }
    }


    function addFieldErrorMessages(error) {
        if (error) {
            error.forEach((e, index) => {
                Toast.fire({
                    icon: 'error',
                    title: translateMessageError(e.message)
                });

            });
        }
    }

    useEffect(async () => {

        let planValue = "0";

        let url = window.location.href.replace('https://', '').replace('http://', '');
        url = url.split('/').splice(1).join('/');
        url = url.split('?').splice(1).join('?');
        url = url.split('#')[0];
        url = atob(url);
        var paramsBusca = new URLSearchParams(url);

        const plan_id = paramsBusca.get('plan_id') ?? 0;

        if (plan_id) {
            planValue = await axios.get(`/api/v1/plans/${plan_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        const mp = new MercadoPago(PUBLIC_KEY);
        const cardForm = mp.cardForm({
            amount: planValue.data.value_total.toString(),
            iframe: true,
            form: {
                id: 'form-checkout',
                cardholderName: {
                    id: 'form-checkout__cardholderName',
                    placeholder: "Titular do cartão",
                },
                cardholderEmail: {
                    id: 'form-checkout__cardholderEmail',
                    placeholder: 'E-mail'
                },
                cardNumber: {
                    id: 'form-checkout__cardNumber-container',
                    placeholder: 'Número do cartão',
                },
                securityCode: {
                    id: 'form-checkout__securityCode-container',
                    placeholder: 'Código de segurança'
                },
                installments: {
                    id: 'form-checkout__installments',
                    placeholder: 'Parcelas'
                },
                expirationDate: {
                    id: 'form-checkout__expirationDate-container',
                    placeholder: 'Data de vencimento (MM/YYYY)',
                },
                identificationType: {
                    id: 'form-checkout__identificationType',
                    placeholder: 'Tipo de documento'
                },
                identificationNumber: {
                    id: 'form-checkout__identificationNumber',
                    placeholder: 'Número do documento'
                },
                issuer: {
                    id: 'form-checkout__issuer',
                    placeholder: 'Banco emissor'
                }
            },
            callbacks: {
                onValidityChange: (error, field) => {
                    addFieldErrorMessages(error);
                },
                onFormMounted: function (error) {
                    if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
                },
                onSubmit: async (event) => {
                    event.preventDefault();

                    if (valida_cpf_cnpj(document.getElementById('form-checkout__identificationNumber').value)) {

                        const {
                            paymentMethodId,
                            issuerId,
                            cardholderEmail: email,
                            amount,
                            token: tokenPayment,
                            installments,
                            identificationNumber,
                            identificationType
                        } = cardForm.getCardFormData();

                        setLoadingPaymentCredit(true);

                        if (paramsBusca.get('name') && !user?.company && !user?.company?.plan.length) {

                            let dataCompany = {};

                            dataCompany['name'] = paramsBusca.get('name');
                            dataCompany['cnpj'] = paramsBusca.get('cnpj');

                            const company = await axios.post('/api/v1/my-account/company', dataCompany, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });

                            let copyUser = { ...user };
                            copyUser.company = company.data;
                            copyUser.company_id = company.data.id;

                            localStorage.setItem('@QuickSale:user', JSON.stringify(copyUser));
                        }


                        await fetch('/api/v1/plan/payment/credit', {

                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            },
                            body: JSON.stringify({
                                plan_id,
                                card: {
                                    paymentMethodId,
                                    issuerId,
                                    cardholderEmail: user.email,
                                    amount,
                                    token: tokenPayment,
                                    installments,
                                    identificationNumber,
                                    identificationType
                                }
                            })
                        }).then(async response => {

                            if (!response.ok) {
                                response = await response.json();

                                if (response.message === 'Invalid card_token_id') {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 4000);
                                }

                                setShowMessageError(true);
                                setTimeout(() => {
                                    setShowMessageError(false);
                                }, 10000);
                            }

                            return response.json();

                        }).then(response => {

                            setLoadingPaymentCredit(false);

                            if (+response.payment_status_id !== 6 &&
                                +response.payment_status_id !== 7 &&
                                +response.payment_status_id !== 8) {
                                navigate(`/payment-processed?payment=${response.payment_status_id}`);
                            } else {

                                setShowMessageErrorDenied(true);

                            }

                        }).catch(err => {

                            setLoadingPaymentCredit(false);
                        });

                    } else {

                        Toast.fire({
                            icon: 'error',
                            title: `Cpf ou Cnpj inválido`
                        });
                    }

                },
                onFetching: function (resource) {
                    const progressBar = document.querySelector('.progress-bar')
                    progressBar.removeAttribute('value')

                    return () => {
                        progressBar.setAttribute('value', '0')
                    }
                }
            }
        });

    }, []);

    return (
        <div>
            {
                user ? <HeaderLogged /> : <Header />
            }
            <HeaderNavigator data={company} />
            <div className={styles.Create}>
                <div>
                    <CardTypePayment
                        onClick={() => generatePayment('pix')}
                        title={'Pix'}
                        id={'pix'}
                        typePayment={typePayment === 'pix' ? typePayment : null}
                        setTypePayment={setTypePayment}
                    />
                    <CardTypePayment
                        title={'Crédito'}
                        id={'credit'}
                        onClick={() => {
                            setShowCredit(true);
                            setShowBilling(false);
                            setShowPix(false);
                        }}
                        typePayment={typePayment === 'credit' ? typePayment : null}
                        setTypePayment={setTypePayment}
                    />
                    <CardTypePayment
                        onClick={() => generatePayment('billing')}
                        title={'Boleto'}
                        id={'billing'}
                        typePayment={typePayment === 'billing' ? typePayment : null}
                        setTypePayment={setTypePayment}
                    />

                    {

                        (!loadingPayment) ? null :
                            <Spinner />
                    }

                    <div className={(!showCredit && !showPix && !showBilling) ? styles.Hidden : null}>
                        <CardPayment id={typePayment} >

                            {
                                !showBilling ? null :
                                    <>
                                        <p style={{ fontSize: '1.3rem' }} className={'text-center text-danger bold'}>Foi encaminhado um e-mail com o boleto para o endereço {user.email}</p>
                                        <a href={linkBilling} target="_blank">
                                            <Button
                                                type={'button'}

                                            >
                                                <ImEye className={'icon icon-left'} size={30} /> Visualizar boleto
                                            </Button>
                                        </a>
                                    </>
                            }

                            {
                                !showPix ? null :
                                    <>
                                        <div className={`${styles.Pix}`}>
                                            <div className={'d-flex'}>
                                                <input className={'h5'} id={'qrcode'} value={qrCode.qr_code} />
                                                <button type={'button'} onClick={() => {
                                                    document.querySelector("#qrcode").select();
                                                    document.execCommand("copy");
                                                }}>
                                                    <MdOutlineContentCopy size={20} className={'icon icon-right'} />
                                                </button>
                                            </div>
                                            <img width={200} height={200} src={"data:image/png;base64, " + qrCode.qr_code_base64} />

                                        </div>
                                    </>

                            }

                            <div className={`${styles.Credit} ${!showCredit ? styles.Hidden : null}`}>
                                <form id={'form-checkout'} className="form">
                                    <h1 class="text-center">Cartão de crédito</h1>
                                    <div class="credit-card">
                                        <img class="img-credit-card" width="35px" src={imgChip} />

                                        <div class="info-bottom">
                                            <div>
                                                <span>nome</span>
                                                <h3>JOHN DOE</h3>
                                            </div>

                                            <div>
                                                <span>validade</span>
                                                <h3>MM/AAAA</h3>
                                            </div>
                                        </div>
                                        <span class="cartd-number-title">número</span>
                                        <div class="credit-card-number">
                                            <span>0123</span> <span>4567</span> <span>8910</span> <span>1112</span>
                                        </div>
                                    </div>

                                    <div id="form-checkout__cardNumber-container" className="container"></div>
                                    <div id="form-checkout__expirationDate-container" className="container"></div>
                                    <input type="text" required name="cardholderName" id="form-checkout__cardholderName" />
                                    <input type="email" name="cardholderEmail" className={'d-none'} id="form-checkout__cardholderEmail" />
                                    <div id="form-checkout__securityCode-container" className="container"></div>
                                    <select className={'d-none'} name="issuer" id="form-checkout__issuer"></select>
                                    <select name="identificationType" id="form-checkout__identificationType"></select>
                                    <input type="text" required name="identificationNumber" id="form-checkout__identificationNumber" />
                                    <select name="installments" id="form-checkout__installments"></select>
                                    {
                                        !showMessageError ? null :
                                            <p className={'h5 text-center my-3 text-danger bold'}>Erro ao realizar pagamento, verifique os dados e tente novamente</p>
                                    }

                                    {
                                        !showMessageErrorDenied ? null :
                                            <p className={'h5 text-center my-3 text-danger bold'}>Erro ao processar pagamento, verifique se possui saldo ou se os dados foram digitados corretamente</p>
                                    }
                                    <button className={`${loadingPaymentCredit ? styles.Hidden : null} button-credit-card`} type="submit" id="form-checkout__submit">
                                        Realizar pagamento
                                    </button>
                                    {
                                        loadingPaymentCredit ? <p className={'h4 text-center bold my-3 text-info '}>Estamos processando, por favor aguarde...</p> : null
                                    }
                                    <progress value="0" className="progress-bar d-none">Carregando...</progress>
                                </form>
                            </div>
                        </CardPayment>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Payment;
