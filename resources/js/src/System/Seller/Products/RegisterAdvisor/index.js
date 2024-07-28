import React, {useState, useContext} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import {useNavigate} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import {formatMask} from "../../../../Hook/util/help";
const RegisterAdvisor = ({setRegisterSuccess}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState('');
    const [rg, setRg] = useState('');
    const [phone1, setPhone1] = useState('');
    const {token} = useContext(Context);

    const handlerSubmit = e => {
        e.preventDefault();
        let data = {};

        data['name'] = name;
        data['email'] = email;
        data['document'] = formatMask(document);;
        data['rg'] = rg;
        data['phone1'] = phone1;

        axios.post('/api/v1/advisors', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setRegisterSuccess(true);
        }).catch(err => {
            setRegisterSuccess(false);
        });
    }

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de Assessor'}
            />

            <CardForm type={'smaller'}>
                <form onSubmit={handlerSubmit}>
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
                        type={"mask"}
                        label={'CPF'}
                        mask={'999-999-999-99'}
                        value={document}
                        onChange={e => setDocument(e.target.value)}
                    />

                    <Input
                        type={"mask"}
                        label={'Celular'}
                        name={'email'}
                        mask={'(99) - 99999 - 9999'}
                        value={phone1}
                        onChange={e => setPhone1(e.target.value)}
                    />

                    <Button styleIcon={'save'}>Cadastrar</Button>
                </form>
            </CardForm>

        </div>
    );
}

export default RegisterAdvisor;
