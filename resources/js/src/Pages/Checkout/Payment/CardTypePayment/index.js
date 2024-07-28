import styles from './CardTypePayment.module.css'
import React from "react";

const CardTypePayment = ({ title, id, setTypePayment, typePayment, onClick }) => {

    let code = window.location.href.split('?')[1];
    code = code.split('#')[0];

    return (
        <a onClick={() => {
            setTypePayment(id);
            onClick()
        }} href={`?${code}#${id}`}>
            <div className={`${styles.CardTypePayment} ${styles[typePayment]}`}>
                <h4>{title}</h4>
            </div>
        </a>

    );
}

export default CardTypePayment;
