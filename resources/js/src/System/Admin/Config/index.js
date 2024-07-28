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
    const [applyDiscount, setApplyDiscount] = useState(false);
    const [haveAdvisor, setHaveAdvisor] = useState(false);

    useEffect(() => {

        axios.get('/api/v1/config-system/admin', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setHaveAdvisor(+response.data.have_advisor === 1);
            setApplyDiscount(+response.data.seller_apply_discount === 1);
            setLoading(false);
        });

    }, []);

    const onClose = () => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    const handlerSubmit = e => {
        e.preventDefault();
        let data = {};
        data['seller_apply_discount'] = applyDiscount;
        data['have_advisor'] = haveAdvisor;

        axios.put('/api/v1/config-system/admin', data, {
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

    }

    if (loading) return (<Spinner />);

    return (
        <div>
            <h2>Configuração</h2>
            <form onSubmit={handlerSubmit}>
                <CardForm type={'medium'}>
                    <div className={'d-flex align-items-center'}>
                        <input id={'applyDescount'} checked={applyDiscount} onChange={() => setApplyDiscount(!applyDiscount)} className={'mr-2'} type={'checkbox'} />
                        <label htmlFor={'applyDescount'} className={'h5'}>Vendedor aplica desconto</label>
                    </div>

                    <div className={'d-flex align-items-center'}>
                        <input id={'haveAdvisor'} checked={haveAdvisor} onChange={() => setHaveAdvisor(!haveAdvisor)} className={'mr-2'} type={'checkbox'} />
                        <label htmlFor={'haveAdvisor'} className={'h5'}>Possui assessor</label>
                    </div>

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
        </div>

    );
}

export default Config;
