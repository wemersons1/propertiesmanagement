import React, { useContext, useState } from 'react';
import Sidebar from "../components/Layout/Sidebar";
import Admin from "./Admin";
import styles from './System.module.css';
import Master from "./Master";
import Seller from './Seller';
import Clerk from "./Clerk";
import Expedition from "./Expedition";
import Context from '../Hook/Context';

const System = ({ role }) => {

    let system = null;
    const [today, setToday] = useState(new Date().toJSON().slice(0, 10));
    const { user } = useContext(Context);

    switch (role) {
        case 'admin':
            system = <Admin />;
            break;
        case 'master':
            system = <Master />;
            break;
        case 'seller':
            system = <Seller />;
            break;
        case 'clerk':
            system = <Clerk />;
            break;
        case 'expedition':
            system = <Expedition />;
            break;
    }
    if (role === 'seller') {

        return (
            <div className={styles.System}>
                {system}
                <div className={styles.HeightMenu}></div>
                <Sidebar role={role} />
            </div>
        );
    }

    if ((new Date(today) < new Date(user?.company?.plan[0]?.pivot.date_limit ?? '1994-01-01'))) {
        return (
            <div className={styles.System}>
                <Sidebar role={role} />
                {system}
            </div>
        );
    }

    return (
        <div className={styles.System}>
            {system}
        </div>
    );

}

export default System;
