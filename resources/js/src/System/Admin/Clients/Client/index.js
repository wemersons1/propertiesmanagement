import React, {useState, useContext, useEffect} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import {Row, Col} from 'react-bootstrap';
import Button from "../../../../components/Button";
import {useNavigate, useParams} from "react-router-dom"
import Input from '../../../../components/Input';;
import Context from '../../../../Hook/Context';
import SweetAlert from "../../../../components/SweetAlert";
import axios from 'axios';
import CardForm from "../../../../components/CardForm";
import {formatMask} from "../../../../Hook/util/help";
import Spinner from "../../../../components/Spinner";

const EmployeesCreate = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phone1, setPhone1] = useState('');
    const [loading, setLoading] = useState(true);

    const {token} = useContext(Context);

    /*  SWEET ALERT  */

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);

    const {id} = useParams();

    const navigate = useNavigate();

    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
    }

    useEffect(() => {
        axios.get(`/api/v1/clients/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setCpf(response.data.document);
            setName(response.data.name);
            setRg(response.data.rg);
            setEmail(response.data.email);
            setPhone1(response.data.phone1);

        }).finally(() => setLoading(false));
    }, []);

    const handlerSubmit = e => {
        e.preventDefault();

        let data = {};

        data = {
            name: name,
            email: email,
            rg: rg,
            phone1: formatMask(phone1),
        }

        if(cpf) {
            data['document'] = formatMask(cpf);
        }

        axios.put(`/api/v1/clients/${id}`, data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Cliente cadastrado com sucesso');
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

    if(loading) return (<Spinner/>);

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do cliente'}
            />

            <CardForm type={'smaller'}>

                <form onSubmit={handlerSubmit}>

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

export default EmployeesCreate;
