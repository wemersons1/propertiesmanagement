import React, { Suspense } from 'react';
import styles from './Master.module.css';
import Header from "../../components/Layout/Header";
import { Navigate, Route, Routes } from "react-router-dom";

const Admin = () => {

    const Dashboard = React.lazy(() => import('../Admin/Dashboard'));

    const Business = React.lazy(() => import('./Business'));
    const BusinessCreate = React.lazy(() => import('./Business/Create'));
    const Busines = React.lazy(() => import('./Business/Busines'));

    const Users = React.lazy(() => import('./Users'));
    const UsersCreate = React.lazy(() => import('./Users/Create'));
    const User = React.lazy(() => import('./Users/User'));

    const PlansCreate = React.lazy(() => import('./Plans/Create'));
    const Plans = React.lazy(() => import('./Plans'));
    const Plan = React.lazy(() => import('./Plans/Plan'));

    const Config = React.lazy(() => import('../Admin/Taxes'));

    return (
        <div className={styles.Master}>
            <Header />
            <div className={styles.Content}>
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/business/:id" element={<Busines />} />
                        <Route path="/business/create" element={<BusinessCreate />} />
                        <Route path="/business" element={<Business />} />

                        <Route path="/users/:id" element={<User />} />
                        <Route path="/users/create" element={<UsersCreate />} />
                        <Route path="/users" element={<Users />} />

                        <Route path="/plans/:id" element={<Plan />} />
                        <Route path="/plans/create" element={<PlansCreate />} />
                        <Route path="/plans" element={<Plans />} />

                        <Route path="/config" element={<Config />} />

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

export default Admin;
