import React, {useState, useContext, useEffect} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import {useNavigate, useParams} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Spinner from "../../../../components/Spinner";
import Select from "../../../../components/Select";
import Select2 from "../../../../components/Select2";
import Message from "../../../../components/Message";
import {formatTypeUser} from "../../../../Hook/util/help";

const Create = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [roleId, setRoleId] = useState(0);
    const [allRoles, setAllRoles] = useState([]);

    const [loadingRoles, setLoadingRoles] = useState(true);
    const [showMessageError, setShowMessageError] = useState(false);

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rolesChange, setRolesChange] = useState([]);

    const {token} = useContext(Context);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get('/api/v1/users/roles', {
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

            setLoadingRoles(false);
        });

        axios.get(`/api/v1/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            let rolesTreated = response.data.roles.map(role => {
                return {
                    value: role.id,
                    label: formatTypeUser(role.name)
                }
            });

            setRolesChange(rolesTreated);

            setName(response.data.name);
            setEmail(response.data.email);
            setRoleId(response.data.role_id);

            setLoading(false);
        });

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

            data['roles'] = rolesTreated;

            data['name'] = name;
            data['email'] = email;

            if(password.length) {

                data['password'] = password;
                data['password_confirmation'] = passwordConfirmation;

            }

            axios.put(`/api/v1/users/${id}`, data,{
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


    if(loadingRoles || loading) return (<Spinner/>);

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do usuário'}
            />

            <CardForm type={'smaller'}>
                <form onSubmit={handlerSubmit}>
                    <Select2
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
                        label={'Senha'}
                        placeholder={'*********'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Input
                        type={"password"}
                        label={'Repetir senha'}
                        name={'email'}
                        placeholder={'*********'}
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />

                    {showMessageError ? <Message type={'error'}>Confirme a senha</Message> : null}

                    <Button styleIcon={'save'}>Salvar alterações</Button>
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
