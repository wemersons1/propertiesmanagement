import React, { useContext, useEffect, useState } from 'react';
import Context from "../Hook/Context";
import System from "../System";
import Pages from "../Pages";
import { formatTypeUser } from "../Hook/util/help";
import styles from "../components/Layout/Sidebar/Sidebar.module.css";
import Checkout from '../Pages';
import Header from '../Pages/Checkout/ListPlans/Header';

const Router = () => {

    const { user, setRole, role } = useContext(Context);

    const renderRoles = () => {

        return user.roles.map((item, index) => {

            return (
                <li key={item.id} onClick={() => setRole(item.name)} className={role === item.name || (index === 0 && !role) ? styles.MenuActive : styles.MenuUnActive} >

                    {formatTypeUser(item.name)}

                </li>
            );
        });
    }

    if (user) {

        return (
            <>
                {
                    user?.roles?.length > 1 ?
                        <ul className={styles.MenuHeader}>
                            {renderRoles()}
                        </ul> : null
                }

                {

                    (
                        (user?.company?.plan && user?.company?.plan[0] &&
                            (new Date(new Date().toJSON().slice(0, 10)) < new Date(user?.company?.plan[0]?.pivot?.date_limit)))) ?
                        < System role={role ?? user?.roles[0]?.name} /> :
                        <Checkout role={role ?? user?.roles[0]?.name} />
                }

            </>
        );
    }

    return (
        <>

            < Pages />
        </>
    );
}

export default Router;
