import React, {useState, useContext, useEffect} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import {useNavigate} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Spinner from "../../../../components/Spinner";
import Message from "../../../../components/Message";
import {formatTypeUser} from "../../../../Hook/util/help";
import Select2 from "../../../../components/Select2";

const Create = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [roleId, setRoleId] = useState(1);
    const [allRoles, setAllRoles] = useState([]);

    const [loadingRoles, setLoadingRoles] = useState(true);
    const [showMessageError, setShowMessageError] = useState(false);
    const [rolesChange, setRolesChange] = useState([]);

    const [success, setSuccess] = useState(false);

    const {token} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/v1/users/roles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            let rolesTreated = response.data.map(role => {
                return {
                    value: role.id,
                    label: formatTypeUser(role.name)
                }
            });

            setAllRoles([rolesTreated[0]]);
            setRolesChange([rolesTreated[0]]);

            setLoadingRoles(false);
        })

    }, []);

    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
    }

    const handlerSubmit = e => {
        e.preventDefault();
        let data = {};

        if(passwordConfirmation === password) {
            setShowMessageError(false);

            const rolesTreated = [];

            rolesChange.forEach(role => {
                rolesTreated.push({id: role.value});
            });

            data['name'] = name;
            data['email'] = email;
            data['password'] = password;
            data['password_confirmation'] = passwordConfirmation;
            data['roles'] = rolesTreated;

            axios.post('/api/v1/users', data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Usuário cadastrado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);
            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setSweetShow(true);
            });

        } else {

            setShowMessageError(true);

        }

    }


    const setRoles = value => {

        setRolesChange(value);

    }


    if(loadingRoles) return (<Spinner/>);

     return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de usuário'}
            />

            <CardForm type={'smaller'}>
                <form onSubmit={handlerSubmit}>
                    <Select2
                        isDisabled
                        value={rolesChange}
                        onChange={value => setRoles(value ?? [])}
                        label={'Tipo(s)'}
                        isMulti={true}
                        options={allRoles}
                    />
                    <Input
                        type={"text"}
                        required
                        label={'Nome'}
                        name={'name'}
                        placeholder={'name example'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        type={"email"}
                        required
                        label={'Email'}
                        name={'email'}
                        placeholder={'email@example.com'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        required
                        label={'Senha'}
                        placeholder={'*********'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        required
                        label={'Repetir senha'}
                        name={'email'}
                        placeholder={'*********'}
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />

                    {showMessageError ? <Message type={'error'}>Confirme a senha</Message> : null}

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

export default Create;
