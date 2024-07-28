import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import Context from "../../../Hook/Context";
import MenuMobile from "./MenuMobile";
import Logo from "../../../Pages/Login/img/logo.png";

import { BiLogOutCircle, BiTransferAlt, BiUserCircle } from "react-icons/bi";
import {
    MdListAlt,
    MdDashboard,
    MdAddBusiness,
    MdOutlineRequestPage,
    MdOutlineCategory,
    MdOutlinePaid,
    MdRule
} from "react-icons/md";

import { VscGear } from 'react-icons/vsc';

import { ImExit } from "react-icons/im";
import { GiHamburgerMenu, GiPayMoney } from "react-icons/gi";
import { FaUsers, FaUserTie, FaUserCog } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

const Sidebar = ({ role }) => {

    const { signOut, user } = useContext(Context);
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    let sidebar = null;

    if (role === "master") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/business"}
                    >
                        <MdAddBusiness className={styles.Icon} />
                        Empresas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/users"}
                    >
                        <FaUserCog className={styles.Icon} />
                        Usuários
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Planos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/config"}
                    >
                        <VscGear className={styles.Icon} />
                        Config.
                    </NavLink>
                </li>
                <li>
                    <button onClick={signOut}>
                        <ImExit className={styles.Icon} />
                        Sair
                    </button>
                </li>
            </ul>
        );
    } else if (role === "admin") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/employees"}
                    >
                        <BiUserCircle className={styles.Icon} />
                        Funcionários
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/advisors"}
                    >
                        <FaUserTie className={styles.Icon} />
                        Assessores
                    </NavLink>
                </li>
                <li>
                    <button
                        className={`${showSubMenu ? styles.LinkActive : ""} ${styles.SubMenu
                            }`}
                        onClick={() => setShowSubMenu(!showSubMenu)}
                    >
                        <BsBoxSeam className={styles.Icon} />
                        Produtos
                    </button>
                </li>
                {showSubMenu && (
                    <div className={styles.SubMenuSelected}>
                        <li>
                            <NavLink
                                className={(navData) =>
                                    navData.isActive ? styles.LinkActive : ""
                                }
                                to={"/products"}
                            >
                                <BsBoxSeam className={styles.Icon} />
                                Produtos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) =>
                                    navData.isActive ? styles.LinkActive : ""
                                }
                                to={"/categories"}
                            >
                                <MdOutlineCategory className={styles.Icon} />
                                Categorias
                            </NavLink>
                        </li>
                    </div>
                )}
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/orders"}
                    >
                        <MdOutlineRequestPage className={styles.Icon} />
                        Pedidos
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/transactions"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Transações
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/payments-employees"}
                    >
                        <GiPayMoney className={styles.Icon} />
                        Pagamentos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/expenses"}
                    >
                        <MdOutlinePaid className={styles.Icon} />
                        Entrada/Saída
                    </NavLink>
                </li>
            </ul>
        );
    } else if (role === "seller") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/orders"}
                    >
                        <MdOutlineRequestPage className={styles.Icon} />
                        Pedidos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/advisors"}
                    >
                        <MdListAlt className={styles.Icon} />
                        Assessores
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/categories"}
                    >
                        <MdOutlineCategory className={styles.Icon} />
                        Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/products"}
                    >
                        <BsBoxSeam className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>
                <li>
                    <button onClick={signOut}>
                        <BiLogOutCircle className={styles.Icon} />
                        Sair
                    </button>
                </li>
            </ul>
        );
    } else if (role === "clerk") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/orders"}
                    >
                        <MdOutlineRequestPage className={styles.Icon} />
                        Pedidos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/transactions"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Transações
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/payments-employees"}
                    >
                        <GiPayMoney className={styles.Icon} />
                        Pagamentos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/expenses"}
                    >
                        <MdOutlinePaid className={styles.Icon} />
                        Entrada/Saída
                    </NavLink>
                </li>
                <li>
                    <button onClick={signOut}>
                        <BiLogOutCircle className={styles.Icon} />
                        Sair
                    </button>
                </li>
            </ul>
        );
    } else if (role === "expedition") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/orders"}
                    >
                        <MdOutlineRequestPage className={styles.Icon} />
                        Pedidos
                    </NavLink>
                </li>
                <li>
                    <button onClick={signOut}>
                        <BiLogOutCircle className={styles.Icon} />
                        Sair
                    </button>
                </li>
            </ul>
        );
    }

    if (role !== 'seller') {
        return (
            <div>
                <div className={showMenu ? styles.BurgerMenu : styles.BackgroundTransparent}>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu style={showMenu ? { fill: "white" } : { fill: "#1E293B" }} size={35} />
                    </button>
                </div>

                <div className={`${styles.Sidebar} ${!showMenu ? styles.HideSidebar : null}`} onClick={() => setShowMenu(false)}>
                    <div >
                        <Link className={styles.Logo} to={'/'}>
                            <img src={user.company?.imageLogoCode.length > 15 ? user.company.imageLogoCode : Logo} width={"175px"} />
                        </Link>
                    </div>
                    {sidebar}
                </div>

            </div>

        );
    }

    return (
        <MenuMobile />
    );

}

export default Sidebar;
