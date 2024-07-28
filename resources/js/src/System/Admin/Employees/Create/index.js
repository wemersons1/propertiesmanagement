import React, {useState, useEffect, useContext} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import {Row, Col} from 'react-bootstrap';
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import Input from '../../../../components/Input';
import Context from '../../../../Hook/Context';
import SweetAlert from "../../../../components/SweetAlert";
import axios from 'axios';
import Spinner from "../../../../components/Spinner";
import {formatMask, formatTypeUser} from "../../../../Hook/util/help";
import Select2 from "../../../../components/Select2";

const EmployeesCreate = () => {

    const [sendingEmployee, setSendingEmployee] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [emittingOrgan, setEmittingOrgan] = useState('');
    const [active, setActive] = useState(true);
    const [commission, setCommission] = useState('');
    const [password, setPassword] = useState('');

    const {token, user} = useContext(Context);

    /*  SWEET ALERT  */

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);
    const [allRoles, setAllRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rolesChange, setRolesChange] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        axios.get(`/api/v1/users/roles`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllRoles(response.data.map(role => {
                return {
                    value: role.id,
                    label: formatTypeUser(role.name)
                }
            }));

        }).finally(() => setLoading(false));

    }, []);

    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
    }

    const checkUser = () => {

        let verify = false;

        rolesChange.forEach(item => {

            if(item.label === 'Vendedor') {
                verify = true;
            }
        });

        return verify;
    }

    const handlerSubmit = e => {

        setSendingEmployee(true);
        e.preventDefault();

        let data = {};

        let birthTreated = birthDate.split('/');
        let admission = admissionDate.split('/');

        const rolesTreated = [];

        rolesChange.forEach(role => {
            rolesTreated.push({id: role.value});
        });

        data = {
            name: name,
            email: email,
            cpf: formatMask(cpf),
            rg: rg,
            birth_date: `${birthTreated[2]}-${birthTreated[1]}-${birthTreated[0]}`,
            active: active ? 1 : 0,
            phone1: formatMask(phone1),
            phone2: formatMask(phone2),
            admission_date: `${admission[2]}-${admission[1]}-${admission[0]}`,
            emitting_organ: emittingOrgan,
            commission,
            password,
            roles: rolesTreated
        }

        axios.post('/api/v1/employees', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Funcionário cadastrado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.message);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSendingEmployee(false);
            setSweetShow(true);
        });
    }

    const setRoles = value => {

        setRolesChange(value);

    }

    if(loading) return (<Spinner/>);

    return (
        <div>
            <HeaderButtonPage
            type={'back'}
            h2={'Cadastro de funcionário'}
            />

            <form onSubmit={handlerSubmit}>
                <Row>
                    <Col>
                        <input
                            id={'active'}
                            type={'checkbox'}
                            checked={active}
                            onChange={e => setActive(!active)}
                        />
                        <label className={'icon-right'} htmlFor={'active'}>Funcionário ativo</label>
                    </Col>
                </Row>
                <Row>

                     <Col lg={4}>
                        <Input
                            type={"text"}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            label={'Nome'}
                            name={'name'}
                            placeholder={'Nome do Funcionário'}
                        />
                    </Col>

                    <Col lg={4}>
                        <Input
                            type={"mask"}
                            mask={'999.999.999-99'}
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            required
                            label={'CPF'}
                            name={'cpf'}
                            placeholder={'999.999.999-99'}
                        />
                    </Col>
                    <Col>
                        <Input
                            type={"mask"}
                            value={birthDate}
                            onChange={e =>{
                                setBirthDate(e.target.value);
                            }}
                            required
                            label={'Data de Nascimento'}
                            name={'birth_date'}
                            mask={'99/99/9999'}
                        />

                    </Col>

                    <Col lg={4}>
                        <Input
                            type={"number"}
                            value={rg}
                            onChange={e => setRg(e.target.value)}
                            required
                            label={'RG'}
                            name={'rg'}
                            placeholder={'5555555'}
                        />
                    </Col>

                    <Col lg={4}>
                        <Input
                            type={"text"}
                            value={emittingOrgan}
                            onChange={e => setEmittingOrgan(e.target.value)}
                            required
                            label={'Orgão emissor/UF'}
                            placeholder={'Ex: SSP/UF'}
                        />
                    </Col>

                    <Col lg={4}>
                        <Input
                            type={"mask"}
                            value={admissionDate}
                            onChange={e => {
                                setAdmissionDate(e.target.value);
                            }}
                            required
                            label={'Data de Admissão'}
                            name={'birth_date'}
                            mask={'99/99/9999'}
                        />
                    </Col>
                    <Col lg={ 6}>
                        <Input
                            type={"mask"}
                            value={phone1}
                            onChange={e => setPhone1(e.target.value)}
                            label={'Celular'}
                            mask={'(99) 99999-9999'}
                        />
                    </Col>

                    <Col lg={ 6}>
                        <Input
                            type={"mask"}
                            value={phone2}
                            onChange={e => setPhone2(e.target.value)}
                            label={'Telefone'}
                            mask={'(99) 9999-9999'}
                        />
                    </Col>

                    <Col lg={ !checkUser() ? 4 : 3}>
                        <Select2
                            value={rolesChange}
                            onChange={value => setRoles(value ?? [])}
                            label={'Tipo(s)'}
                            isMulti={true}
                            options={allRoles}
                        />
                    </Col>

                    <Col lg={ !checkUser() ? 4 :  3}>
                        <Input
                            type={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            label={'Email'}
                            name={'email'}
                            placeholder={'email@exemplo.com'}
                        />
                    </Col>

                    <Col lg={ !checkUser() ? 4 : 3}>
                        <Input
                            type={"password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            label={'Senha'}
                            placeholder={'***********'}
                        />
                    </Col>

                    {
                        checkUser() &&  <Col lg={  3}>
                            <Input
                                type={'number'}
                                step={'0.1'}
                                min={0}
                                value={commission}
                                required={checkUser()}
                                onChange={e => setCommission(e.target.value)}
                                label={'Comissão'}
                            />
                        </Col>
                    }



                    <Col lg={12}>
                        <Button styleIcon={'save'}>Cadastrar

                            {sendingEmployee ? <Spinner size={'small'}/> : null}
                        </Button>
                    </Col>

                </Row>
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

export default EmployeesCreate;
