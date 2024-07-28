import React, { useContext, useState } from 'react';
import styles from './Header.module.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import logo from '../../../Login/img/logo.png';
import { BsHandIndex } from 'react-icons/bs';
import CreateAccount from '../CreateAccount';
import Context from '../../../../Hook/Context';
import HeaderLogged from '../../../../components/Layout/Header';

const Header = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <div style={{ height: "5rem" }}></div>
            <div className={styles.Header}>
                <Link to={'/list-plans'}>
                    <img width={100} src={logo} />
                </Link>

                <div className={'d-flex'}>
                    <Link to={'/login'} >
                        <Button>
                            <Link to={'/login'}>
                                <AiOutlineLogin size={18} style={{ fill: "#0275d8" }} /> Entrar
                            </Link>
                        </Button>
                    </Link>
                    <Button
                        onClick={() => setShow(true)}
                    >
                        <BsHandIndex size={18} style={{ fill: "#0275d8" }} /> Cadastre-se
                    </Button>
                </div>
            </div>

            <CreateAccount
                show={show}
                setShow={setShow}
            />

        </>

    );
}

export default Header;
