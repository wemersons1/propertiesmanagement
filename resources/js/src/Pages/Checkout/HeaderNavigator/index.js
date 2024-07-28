import React, { useContext, useState } from 'react';
import { MdPublishedWithChanges, MdAppRegistration, MdMonetizationOn } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../../../Hook/Context';
import styles from './HeaderNavigator.module.css';
import { goToPayment, goToPlans, goToDataCompany } from './util';

const HeaderNavigator = (data) => {

    const navigate = useNavigate();
    const [showPayment, setShowPayment] = useState(() => {
        let url = window.location.href.replace('https://', '').replace('http://', '');
        url = url.split('/').splice(1).join('/');
        url = url.split('?').splice(1).join('?');

        let paramsBusca = new URLSearchParams(atob(url.split('#')[0]));

        return paramsBusca.get('plan_id') !== 'free';
    });

    const { user } = useContext(Context);

    const goToPaymentFunction = () => {

        let url = goToPayment(data.data);

        if (url) {
            navigate(url);
        }
    }

    const goToPlansFunction = () => {

        let url = goToPlans(data.data);

        if (url) {
            navigate(url);
        }
    }

    const goToDataCompanyFunction = () => {

        let url = window.location.href;
        url = url.split('?')[1];
        url = atob(url.split('#')[0]);

        let paramsBusca = new URLSearchParams(url);

        url = goToDataCompany(paramsBusca.get('plan_id') ?? 1, false);

        if (url) {
            navigate(url);
        }
    }

    return (
        <div className={styles.HeaderNavigator}>
            <button onClick={() => goToPlansFunction()}>
                <MdPublishedWithChanges style={{ fill: "#4e4e4e" }} size={60} />
            </button>
            {
                user?.company?.plan?.length ? null :
                    <button onClick={() => goToDataCompanyFunction()}>
                        <MdAppRegistration style={{ fill: location.pathname === '/data-company' ? "#03C04A" : "#4e4e4e" }} size={60} />
                    </button>
            }

            {
                !showPayment ? null :
                    <button onClick={() => goToPaymentFunction()}>
                        <MdMonetizationOn style={{ fill: location.pathname === '/payment' ? "#03C04A" : "#4e4e4e" }} size={60} />
                    </button>
            }
        </div>
    );
}

export default HeaderNavigator;
