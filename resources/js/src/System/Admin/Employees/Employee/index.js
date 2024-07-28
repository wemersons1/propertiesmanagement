import React, {useState, useEffect, useContext} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import {Row, Col} from 'react-bootstrap';
import Button from "../../../../components/Button";
import {useNavigate, useParams} from "react-router-dom"
import Input from '../../../../components/Input';
import Context from '../../../../Hook/Context';
import SweetAlert from "../../../../components/SweetAlert";
import axios from 'axios';
import Spinner from "../../../../components/Spinner";
import Select2 from "../../../../components/Select2";
import {formatTypeUser} from "../../../../Hook/util/help";
import {formatMask} from "../../../../Hook/util/help";

const Employee = () => {

    const [sendingEmployee, setSendingEmployee] = useState(false);
    const [name, setName] = useState('');
    const [rolesChange, setRolesChange] = useState([]);
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
    const {id} = useParams();

    /*  SWEET ALERT  */

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);
    const [allRoles, setAllRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(2);
    const navigate = useNavigate();
    const [loadingEmployee, setLoadingEmployee] = useState(true);

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

        axios.get(`/api/v1/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            let admissionDateTreated = response.data.admission_date.split('-');
            admissionDateTreated = `${admissionDateTreated[2]}/${admissionDateTreated[1]}/${admissionDateTreated[0]}`;
            let birthDateTreated = response.data.birth_date.split('-');
            birthDateTreated = `${birthDateTreated[2]}/${birthDateTreated[1]}/${birthDateTreated[0]}`;

            setEmail(response.data.email);
            setBirthDate(birthDateTreated);
            setName(response.data.name);
            setCpf(response.data.cpf);
            setRg(response.data.rg);
            setEmittingOrgan(response.data.emitting_organ);
            setAdmissionDate(admissionDateTreated);
            setPhone1(response.data.phone1);
            setPhone2(response.data.phone2);
            setRolesChange(response.data.roles.map(role => {
                return {
                    value: role.id,
                    label: formatTypeUser(role.name)
                }
            }));
            setCommission(response.data.commission);

        }).finally(() => setLoadingEmployee(false));

    }, []);

    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
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
            cpf: (cpf),
            rg: rg,
            birth_date: `${birthTreated[2]}-${birthTreated[1]}-${birthTreated[0]}`,
            active: active ? 1 : 0,
            phone1: formatMask(phone1 ?? ''),
            phone2: formatMask(phone2 ?? ''),
            admission_date: `${admission[2]}-${admission[1]}-${admission[0]}`,
            emitting_organ: emittingOrgan,
            commission,
            roles: rolesTreated
        }

        password.length ? data['password'] = password : null;

        axios.put(`/api/v1/employees/${id}`, data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Funcionário atualizado com sucesso');
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

    const checkUser = () => {

        let verify = false;

        rolesChange.forEach(item => {

            if(item.label === 'Vendedor') {
                verify = true;
            }
        });

        return verify;
    }


    const setRoles = value => {

        setRolesChange(value);

    }

    if(loading || loadingEmployee) return (<Spinner/>);

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do funcionário'}
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

                    <Col lg={ 4 }>
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

                    <Col lg={  3}>
                        <Select2
                            value={rolesChange}
                            onChange={value => setRoles(value ?? [])}
                            label={'Tipo(s)'}
                            isMulti={true}
                            options={allRoles}
                        />
                    </Col>

                    <Col lg={  3}>
                        <Input
                            type={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            label={'Email'}
                            name={'email'}
                            placeholder={'email@exemplo.com'}
                        />
                    </Col>

                    <Col lg={  3}>
                        <Input
                            type={"password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            label={'Senha'}
                            placeholder={'***********'}
                        />
                    </Col>

                    <Col lg={  3}>
                        <Input
                            type={'number'}
                            step={'0.1'}
                            min={0}
                            value={commission}
                            onChange={e => setCommission(e.target.value)}
                            label={'Comissão'}
                            required={checkUser()}
                        />
                    </Col>

                    <Col lg={12}>
                        <Button disabled={sendingEmployee} styleIcon={'save'}>Salvar alterações

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

export default Employee;
