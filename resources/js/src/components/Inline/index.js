import React from 'react';
import styles from './Inline.module.css';

const Inline = ({children, type, background}) => {

    if(type) {
        return (
            <div className={type ? `${styles[type]} ${styles[background]}` : styles.Inline}>
                {children}
            </div>
        );
    }

    return (
        <div className={styles.Inline2}>
            {children}
        </div>
    );
}

export default Inline;
