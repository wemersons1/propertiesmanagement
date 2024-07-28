import React, { Suspense, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from './Checkout/ListPlans/Header';

const Pages = () => {

    const Login = React.lazy(() => import('./Login'));
    const ListPlans = React.lazy(() => import('./Checkout/ListPlans'));
    const DataCompany = React.lazy(() => import('./Checkout/DataCompany'));
    const Payment = React.lazy(() => import('./Checkout/Payment'));
    const VerifyEmail = React.lazy(() => import('./Checkout/VerifyEmail'));
    const PaymentProcessed = React.lazy(() => import('./Checkout/PaymentProcessed'));

    return (
        <Suspense fallback={""}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/list-plans" element={<ListPlans />} />
                <Route path="/data-company" element={<DataCompany />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/payment-processed" element={<PaymentProcessed />} />
                <Route
                    path="*"
                    element={<Navigate to="/list-plans" />}
                />
            </Routes>
        </Suspense>
    );
}

export default Pages;
