import React, { Suspense } from 'react';
import styles from './Clerk.module.css';
import Header from "../../components/Layout/Header";
import { Navigate, Route, Routes } from "react-router-dom";

const Seller = () => {

    const Dashboard = React.lazy(() => import('./Dashboard'));

    const Orders = React.lazy(() => import('./Orders'));
    const Order = React.lazy(() => import('./Orders/Order'));
    const OrderCreate = React.lazy(() => import('./Orders/Create'));

    const PaymentsAdvisors = React.lazy(() => import('./../Admin/PaymentsAdvisors'));
    const PaymentsAdvisorsCreate = React.lazy(() => import('./../Admin/PaymentsAdvisors/Create'));
    const PaymentAdvisor = React.lazy(() => import('./../Admin/PaymentsAdvisors/PaymentAdvisor'));

    const Expenses = React.lazy(() => import('../Admin/Expenses'));
    const ExpensesCreate = React.lazy(() => import('../Admin/Expenses/Create'));
    const Expense = React.lazy(() => import('../Admin/Expenses/Expense'));

    const Transactions = React.lazy(() => import('./Transactions'));

    return (
        <div className={styles.Master}>
            <Header />
            <div className={styles.Content}>
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/orders/:id" element={<Order />} />
                        <Route path="/orders/create" element={<OrderCreate />} />
                        <Route path="/orders" element={<Orders />} />

                        <Route path="/payments-employees/:id" element={<PaymentAdvisor />} />
                        <Route path="/payments-employees/create" element={<PaymentsAdvisorsCreate />} />
                        <Route path="/payments-employees" element={<PaymentsAdvisors />} />

                        <Route path="/expenses/:id" element={<Expense />} />
                        <Route path="/expenses/create" element={<ExpensesCreate />} />
                        <Route path="/expenses" element={<Expenses />} />

                        <Route path="/Transactions" element={<Transactions />} />

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

export default Seller;
