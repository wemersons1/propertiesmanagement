import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick }) => {

    return (
        <button
            onClick={onClick}
            type={'button'}
            className={styles.Button
            }>
            {children}
        </button>
    );
}

export default Button;
