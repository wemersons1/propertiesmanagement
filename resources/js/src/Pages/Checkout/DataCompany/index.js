import React, { useState, useContext, useEffect } from 'react';
import HeaderNavigator from '../HeaderNavigator';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from './DataCompany.module.css';
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { formatMask, isObjectEmpty } from "../../../Hook/util/help";
import { useNavigate } from "react-router-dom";
import Header from '../ListPlans/Header';
import { MdNavigateNext } from 'react-icons/md';
import { valida_cpf_cnpj } from '../../../Hook/util/check_cpf_cnpj';
import { goToPayment } from '../HeaderNavigator/util';
import { MdOutlineNotStarted } from 'react-icons/md';
import Context from '../../../Hook/Context';
import SweetAlerts from '../../../components/SweetAlert';
import Message from '../../../components/Message';
import HeaderLogged from '../../../components/Layout/Header';
import Swal from 'sweetalert2';

const DataCompany = () => {

    const [type, setType] = useState(() => {
        let url = window.location.href.replace('https://', '').replace('http://', '');
        url = url.split('/').splice(1).join('/');
        url = url.split('?').splice(1).join('?');
        url = atob(url);

        var paramsBusca = new URLSearchParams(url);

        return paramsBusca.get('type') ?? 'CNPJ';
    });
    const [showMessageDocument, setShowMessageDocument] = useState(false);
    const navigate = useNavigate();
    const [company, setCompany] = useState(() => {
        let url = window.location.href.replace('https://', '').replace('http://', '');
        url = url.split('/').splice(1).join('/');
        url = url.split('?').splice(1).join('?');
        url = atob(url);

        var paramsBusca = new URLSearchParams(url);

        return {
            plan_id: paramsBusca.get("plan_id") ?? 0,
            name: paramsBusca.get("name") ?? '',
            cnpj: paramsBusca.get("cnpj") ?? '',
            type: paramsBusca.get('type') ?? 'CNPJ'
        }
    });

    const [showButtonRegister, setShowButtonRegister] = useState(() => {
        let url = window.location.href.replace('https://', '').replace('http://', '');
        url = url.split('/').splice(1).join('/');
        url = url.split('?').splice(1).join('?');

        let paramsBusca = new URLSearchParams(atob(url));
        return paramsBusca.get('plan_id') === 'free';
    });

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [send, setSend] = useState(false);

    const { token, user, setUser } = useContext(Context);

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

    const goToPaymentFunction = () => {

        let url = goToPayment(company);

        if (url) {
            navigate(url);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, 0);

    const setCompanyChange = e => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        });
    }

    const nextPage = e => {
        e.preventDefault();

        goToPaymentFunction();
    }

    const registerPlan = () => {

        if (!showMessageDocument) {

            setSend(true);

            axios.post('/api/v1/free-account', company, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Plano gratuito cadastrado com sucesso! você possui 20 dias para usufluir de nossos serviços gratuitamente');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setUser(response.data);
                localStorage.setItem('@QuickSale:user', JSON.stringify(response.data));

            }).catch(err => {
                setSweetText(err.response?.data?.error ?? 'Verifique todos os dados e tente novamente');
                setSweetTitle('Erro');
                setSweetType('error');
            }).finally(() => {
                setSweetShow(true);
                setSend(false);
            });
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Selecione um documento válido antes de continuar'
            });
        }
    }

    const onClose = () => {
        setSweetShow(false);
        navigate('/dashboard');
    }

    return (
        <>
            {
                user ? <HeaderLogged /> : <Header />
            }
            <HeaderNavigator data={company} />
            <div className={styles.Create}>
                <form onSubmit={nextPage}>
                    <h2 className={'text-start'}>Dados {type === 'CNPJ' ? 'da empresa' : 'do contratante'}</h2>
                    <div className={'d-flex'}>
                        <div>
                            <input
                                type={'radio'}
                                checked={type === 'CNPJ'}
                                id={'cnpj'}
                                onClick={() => {
                                    setType('CNPJ');
                                    setCompany({ ...company, cnpj: '', type: 'CNPJ' });
                                    setShowMessageDocument(false);
                                }}
                            />
                            <label htmlFor='cnpj'><b>CNPJ</b></label>
                        </div>
                        <div>
                            <input
                                type={'radio'}
                                checked={type === 'CPF'}
                                id={'cpf'}
                                onClick={() => {
                                    setType('CPF')
                                    setCompany({ ...company, cnpj: '', type: 'CPF' });
                                    setShowMessageDocument(false);
                                }}
                            />
                            <label htmlFor='cpf'><b>CPF</b></label>
                        </div>
                    </div>
                    <Input
                        type={'text'}
                        label={type}
                        onChange={e => {
                            setCompanyChange(e);
                            setShowMessageDocument(false);
                        }}
                        required
                        mask={type === 'CNPJ' ? '99.999.999/9999-99' : '999.999.999-99'}
                        name={'cnpj'}
                        value={company.cnpj}
                        onBlur={() => {
                            setShowMessageDocument(!valida_cpf_cnpj(company.cnpj));
                        }}
                    />
                    {
                        !showMessageDocument ? null :
                            <p className={'text-danger'} style={{ fontWeight: "bold", marginLeft: '1rem' }}>
                                {type === 'CNPJ' ? 'Cnpj inválido' : 'Cpf inválido'}
                            </p>
                    }
                    <Input
                        type={"text"}
                        value={company.name}
                        onChange={setCompanyChange}
                        required
                        label={type === 'CNPJ' ? 'Nome da empresa' : 'Nome completo'}
                        name={'name'}
                        placeholder={type === 'CNPJ' ? 'Nome da empresa' : 'Nome completo'}
                    />
                    {
                        showButtonRegister ?
                            (send ? null : <Button type={'button'} onClick={registerPlan} styleIcon={'save'}>Experimente grátis <MdOutlineNotStarted className={'icon-right icon mt-2'} size={20} /></Button>)
                            :
                            <Button styleIcon={'save'}>Prosseguir <MdNavigateNext className={'icon icon-right mt-2'} /></Button>
                    }
                    {
                        send ? <Message type={'info'}>Estamos processando, por favor aguarde...</Message> : null
                    }

                </form>

                <SweetAlerts
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
        </>
    );
}

export default DataCompany;
