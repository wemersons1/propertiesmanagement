import React from 'react';
import styles from './CardPayment.module.css';

const CardPayment = ({ children, id }) => {

    return (
        <>
            <div id={id} className={styles.CardPayment}>
                {children}
            </div>
            <div className={styles.CardHidden}>

            </div>
        </>

    );
}

export default CardPayment;
