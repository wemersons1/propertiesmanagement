import React, {Suspense} from 'react';
import styles from './Expedition.module.css';
import Header from "../../components/Layout/Header";
import {Navigate, Route, Routes} from "react-router-dom";

const Expedition = () => {

    const Dashboard = React.lazy(() => import('./Dashboard'));
    const Orders = React.lazy(() => import('./Orders'));
    const Order = React.lazy(() => import('./Orders/Order'));

    return (
        <div className={styles.Admin}>
            <Header/>
            <div className={styles.Content}>
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}/>

                        <Route path="/orders/:id" element={<Order />}/>
                        <Route path="/orders" element={<Orders />}/>

                        <Route
                            path="*"
                            element={<Navigate to="/dashboard" />}
                        />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default Expedition;
