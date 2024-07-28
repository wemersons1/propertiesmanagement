import React from 'react';
import styles from './CheckOption.module.css';

const CheckOption = ({quantity, title, state, onClick, color}) => {

    return (
        <div className={`${styles.CheckOption} ${state ? styles[color] : null}`}>
            <div
                onClick={onClick}
                className={ `${styles.Title} ${state ? styles[color] : null}` }
            >
                {title}
            </div>
            <div className={styles.Quantity}>
                {quantity}
            </div>
        </div>
    );
}

export default CheckOption;