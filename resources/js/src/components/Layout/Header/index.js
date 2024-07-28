import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from './Header.module.css';
import Context from "../../../Hook/Context";
import { BsArrowLeft, BsCart4 } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { GoChevronDown } from 'react-icons/go';
import { GrDocumentConfig } from 'react-icons/gr';
import { BiLogOutCircle } from 'react-icons/bi';
import { FaEdit } from "react-icons/fa";
import { GiCalculator } from 'react-icons/gi';

import axios from 'axios';

const Header = () => {

    const today = new Date(new Date().toJSON().slice(0, 10));
    const [showSubMenu, setShowSubMenu] = useState(false);
    const { user, role, signOut, token, setUser } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {

        setInterval(() => {

            const pathName = window.location.pathname;

            if ((pathName !== '/list-plans' && pathName !== '/payment' && pathName !== '/data-company')) {
                axios.get('/api/v1/my-account', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {

                    if ((today > new Date(response.data.company.plan[0].pivot.date_limit)) && (pathName !== '/list-plans' && pathName !== '/payment' && pathName !== '/data-company')) {

                        localStorage.setItem('@QuickSale:user', JSON.stringify(response.data));
                        setUser(response.data);
                        navigate('/list-plans');
                    }

                });
            }

        }, 150000);

    }, []);

    return (
        <div>
            <div className={styles.HeaderHidden}>

            </div>
            <header className={`${styles.Header}`}>
                <div>
                    {
                        role !== 'seller' ? null :

                            <div id={'search'} className={styles.Search}>

                                <button onClick={() => navigate(-1)} className={styles.Icon}>
                                    <BsArrowLeft size={25} style={{ fill: "#4e4e4e" }} />
                                </button>

                            </div>

                    }

                </div>

                <ul>
                    {
                        user?.company ?
                            <li onBlur={() => setShowSubMenu(false)} onClick={role !== 'admin' ? () => navigate('/me') : () => setShowSubMenu(!showSubMenu)}>Olá, {user.name.split(' ')[0]}{role === 'admin' ? <GoChevronDown /> : null}</li>
                            :
                            <li onClick={() => {
                                signOut();
                                navigate('/');
                            }}>Sair</li>

                    }

                    {
                        showSubMenu &&
                        <div style={!showSubMenu ? { display: "none" } : null} className={styles.SubMenu}>
                            <li onClick={() => setShowSubMenu(false)}>
                                <Link to={`/taxes`}>
                                    <GiCalculator size={20} /> Taxas
                                </Link>
                            </li>
                            <li onClick={() => setShowSubMenu(false)}>
                                <Link to={`/config`}>
                                    <GrDocumentConfig size={20} /> Config.
                                </Link>
                            </li>

                            <li onClick={() => {
                                signOut();
                                navigate('/');
                            }}>
                                <BiLogOutCircle size={20} /> Sair
                            </li>
                        </div>
                    }

                </ul>

                {
                    role === 'seller' ?
                        <button style={{ backgroundColor: "transparent" }} onClick={() => navigate('/chart-pending')}>
                            <div className={styles.Cart}>
                                <div id={'show-item-cart'} className={styles.QuantityItems}>1</div>
                                <BsCart4 size={25} />
                            </div>
                        </button> : null
                }

            </header>
        </div>

    );
}

export default Header;
