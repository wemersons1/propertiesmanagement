import React from 'react';
import styles from './MainInformation.module.css';

const MainInformation = ({value, type}) => {

    if(type === 'info') {

        return (
            <div className={styles.Info}>
                {value}
            </div>
        );
    }

    return (
        <div className={styles.Main}>
            {value}
        </div>
    )

}

export default MainInformation;