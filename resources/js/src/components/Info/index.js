import React from 'react';
import styles from './Info.module.css';

const Info = ({children, type}) => {

    return (
        <div className={`${styles.Info} ${styles[type]}`}>
            {children}
        </div>
    );
}

export default Info;