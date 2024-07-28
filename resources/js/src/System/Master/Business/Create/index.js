import React, { useState, useContext, useEffect } from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import styles from './Create.module.css';
import { initialStateAddress, initialStateCompany } from "./util";
import Inline from "../../../../components/Inline";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { formatMask, isObjectEmpty } from "../../../../Hook/util/help";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Select2 from '../../../../components/Select2';
import InputMoney from '../../../../components/InputMoney';
import Select from '../../../../components/Select';

const Create = () => {

    const [company, setCompany] = useState(initialStateCompany);
    const [address, setAddress] = useState(initialStateAddress);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [logoImage, setLogoImage] = useState('');
    const [sellerApplyDiscount, setSellerApplyDiscount] = useState(false);
    const [haveAdvisor, setHaveAdvisor] = useState(false);
    const [allPlans, setAllPlans] = useState([]);
    const [planChange, setPlanChange] = useState({});
    const [quantityMonths, setQuantityMonths] = useState(12);
    const [type, setType] = useState(1);
    const [success, setSuccess] = useState(false);

    const { token } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('/api/v1/plans?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllPlans(response.data.map(plan => {
                return {
                    ...plan,
                    value: plan.id,
                    label: `${plan.name}, Mensal: ${parseFloat(plan.value_by_month).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })} - Total: ${parseFloat(plan.value_total).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })}`
                }
            }));
        });

    }, []);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    const setCompanyChange = e => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        });
    }

    const setAddressChange = e => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }

    const getAddress = () => {

        let zipCodeFormated = address.zip_code.replace('-', '');
        axios.get(`https://viacep.com.br/ws/${zipCodeFormated}/json/`).then(response => {

            if (response.data.erro === true) {
                setAddress({
                    ...address, neighborhood: "",
                    city: "", state: "", street: ""
                });
            }
            else {

                setAddress({
                    ...address,
                    neighborhood: response.data.bairro,
                    city: response.data.localidade,
                    state: response.data.uf,
                    street: response.data.logradouro
                });
            }

        }).catch(err => {
            setAddress({
                ...address, neighborhood: "",
                city: "", state: "", street: ""
            });
        })
    }

    const handlerSubmit = e => {
        e.preventDefault();

        if (!logoImage?.name?.length) {

            Toast.fire({
                icon: 'error',
                title: 'Por favor selecione uma logo para continuar'
            });

        } else {

            const data = new FormData();

            data.append("name", company.name);
            data.append("email", company.email);
            data.append("cnpj", formatMask(company.cnpj));
            data.append("representative", company.representative);
            data.append("phone1", company.phone1);
            data.append("phone2", company.phone2);
            data.append("zip_code", address.zip_code);
            data.append("state", address.state);
            data.append("city", address.city);
            data.append("neighborhood", address.neighborhood);
            data.append("street", address.street);
            data.append("complement", address.complement);
            data.append("number", address.number);
            data.append("logo_image", logoImage);
            data.append("seller_apply_discount", sellerApplyDiscount ? '1' : '0');
            data.append("have_advisor", haveAdvisor ? '1' : '0');
            data.append("plan_id", planChange?.value);

            axios.post('/api/v1/companies', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Empresa cadastrada com sucesso');
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

    return (
        <div className={styles.Create}>
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de empresa'}
            />

            <form onSubmit={handlerSubmit}>
                <h4>Dados da empresa</h4>

                <Row>
                    <Col lg={6}>
                        <Select2
                            label={'Plano'}
                            value={planChange}
                            options={allPlans}
                            onChange={setPlanChange}
                        />
                    </Col>

                </Row>

                <Row>
                    <Col lg={3}>
                        <Input
                            type={"text"}
                            value={company.name}
                            onChange={setCompanyChange}
                            required
                            label={'Nome'}
                            name={'name'}
                            placeholder={'Nome da empresa'}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            type={'text'}
                            label={'CNPJ'}
                            onChange={setCompanyChange}
                            required
                            mask={'99.999.999/9999-99'}
                            name={'cnpj'}
                            value={company.cnpj}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            type={'email'}
                            label={'Email'}
                            required
                            onChange={setCompanyChange}
                            name={'email'}
                            value={company.email}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            type={'text'}
                            label={'Representante'}
                            required
                            onChange={setCompanyChange}
                            name={'representative'}
                            value={company.representative}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Input
                            type={'text'}
                            mask={'(99) 99999-9999'}
                            label={'Contato 1'}
                            name={'phone1'}
                            onChange={setCompanyChange}
                            value={company.phone1}
                        />
                    </Col>
                    <Col lg={6}>
                        <Input
                            type={'text'}
                            mask={'(99) 99999-9999'}
                            label={'Contato 2'}
                            name={'phone2'}
                            onChange={setCompanyChange}
                            value={company.phone2}
                        />
                    </Col>
                </Row>

                <h4>Endereço</h4>

                <Inline style={'flex'}>
                    <Input
                        type={'text'}
                        id={'zip_code'}
                        name={'zip_code'}
                        onChange={setAddressChange}
                        label={'Cep'}
                        mask={'99999-999'}
                        value={address.zip_code}
                        onBlur={getAddress}
                        placeholder={'99999-999'}
                    />

                    <Input
                        type={'text'}
                        id={'state'}
                        name={'state'}
                        onChange={setAddressChange}
                        label={'Estado'}
                        value={address.state}
                        placeholder={'Estado'}
                    />

                    <Input
                        type={'text'}
                        id={'city'}
                        name={'city'}
                        onChange={setAddressChange}
                        label={'Cidade'}
                        value={address.city}
                        placeholder={'Cidade'}
                    />
                </Inline>
                <Inline>

                    <Input
                        type={'text'}
                        id={'neighborhood'}
                        name={'neighborhood'}
                        onChange={setAddressChange}
                        label={'Bairro'}
                        value={address.neighborhood}
                        placeholder={'Bairro'}
                    />
                    <Input
                        type={'text'}
                        id={'street'}
                        name={'street'}
                        onChange={setAddressChange}
                        label={'Rua, Avenida'}
                        value={address.street}
                        placeholder={'Rua, Avenida'}
                    />
                    <Input
                        type={'text'}
                        id={'number'}
                        name={'number'}
                        onChange={setAddressChange}
                        label={'Número'}
                        value={address.number}
                        placeholder={'Ex: 01, S/N'}
                    />

                    <Input
                        type={'text'}
                        id={'complement'}
                        name={'complement'}
                        onChange={setAddressChange}
                        label={'Complemento'}
                        value={address.complement}
                        placeholder={'Ex: Quadra: xx, Lote: xx'}
                    />
                </Inline>

                <h4>Configuração</h4>

                <Row>
                    <Col lg={3}>
                        <input
                            id={'active'}
                            type={'checkbox'}
                            checked={sellerApplyDiscount}
                            onChange={() => setSellerApplyDiscount(!sellerApplyDiscount)}
                        />
                        <label htmlFor={'active'}>Vendedor aplica desconto</label>

                    </Col>

                    <Col lg={3}>
                        <input
                            id={'have_advisor'}
                            type={'checkbox'}
                            checked={haveAdvisor}
                            onChange={() => setHaveAdvisor(!haveAdvisor)}
                        />
                        <label htmlFor={'have_advisor'}>Possui assessor</label>

                    </Col>

                    <Col lg={3}>
                        <Input
                            label={'Logo da empresa'}
                            id={'logo'}
                            type={'file'}
                            onChange={e => setLogoImage(e.target.files[0])}
                            placeholder={logoImage?.name ?? 'Logo da empresa'}
                        />
                    </Col>
                </Row>

                <Button styleIcon={'save'}>Cadastrar</Button>

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

export default Create;
