import React, {useContext, useState} from 'react';
import CardForm from "../../../../components/CardForm";
import Input from "../../../../components/Input";
import {formatMask} from "../../../../Hook/util/help";
import axios from "axios";
import Context from "../../../../Hook/Context";
import {RiSaveLine} from 'react-icons/ri';

const RegisterClient = ({setRegisterSuccess}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phone1, setPhone1] = useState('');

    const {token} = useContext(Context);

    const handlerSubmit = e => {
        e.preventDefault();

        let data = {};

        data = {
            name: name,
            email: email,
            document: formatMask(cpf),
            rg: rg,
            phone1,
        }

        axios.post('/api/v1/clients', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setRegisterSuccess(true);
        }).catch(err => {
            setRegisterSuccess(false);
        })
    }

    return (
        <div>
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

                    <button style={{color: "white", backgroundColor: "#88c54b", fontSize: "1.5rem", borderRadius: ".5rem", padding: ".5rem"}}>
                        <RiSaveLine className={'icon icon-right'}/>Registrar cliente
                    </button>

                </form>

            </CardForm>

        </div>
    );

}

export default RegisterClient;
