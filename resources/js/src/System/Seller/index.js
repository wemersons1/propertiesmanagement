import React, {Suspense, useState} from 'react';
import styles from './Seller.module.css';
import Header from "../../components/Layout/Header";
import {Navigate, Route, Routes} from "react-router-dom";

const Seller = () => {

    const Dashboard = React.lazy(() => import('./Dashboard'));

    const Categories = React.lazy(() => import('../Admin/Categories'));
    const Category = React.lazy(() => import('../Admin/Categories/Category'));

    const Products = React.lazy(() => import('./Products'));
    const ProductsList = React.lazy(() => import('./Products'));
    const Product = React.lazy(() => import('./../Admin/Products/Product'));

    const Clients = React.lazy(() => import('./../Admin/Clients'));
    const ClientsCreate = React.lazy(() => import('./../Admin/Clients/Create'));
    const Client = React.lazy(() => import('./../Admin/Clients/Client'));

    const CartPending = React.lazy(() => import('./CartPending'));
    const Orders = React.lazy(() => import('./Orders'));
    const Order = React.lazy(() => import('../Clerk/Orders/Order'));

    const Advisors = React.lazy(() => import('./Advisors'));
    const AdvisorsCreate = React.lazy(() => import('./Advisors/Create'));
    const Advisor = React.lazy(() => import('./Advisors/Advisor'));

    const Me = React.lazy(() => import('./Me'));

    return (
        <div className={styles.Master}>
            <Header />
            <div className={styles.Content}>
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}/>

                        <Route path="/categories/:id" element={<Category />}/>
                        <Route path="/categories" element={<Categories />}/>

                        <Route path="/products/:id" element={<Product />}/>
                        <Route path="/products" element={<Products />}/>

                        <Route path="/clients/:id" element={<Client/>}/>
                        <Route path="/clients/create" element={<ClientsCreate />}/>
                        <Route path="/clients" element={<Clients />}/>

                        <Route path="/advisors/:id" element={<Advisor/>}/>
                        <Route path="/advisors/create" element={<AdvisorsCreate />}/>
                        <Route path="/advisors" element={<Advisors />}/>

                        <Route path="/orders/edit/:id" element={<ProductsList />}/>
                        <Route path="/orders/save/:id" element={<CartPending />}/>
                        <Route path="/orders/:id" element={<Order />}/>
                        <Route path="/orders" element={<Orders />}/>

                        <Route path="/chart-pending" element={<CartPending />}/>

                        <Route path="/me" element={<Me />}/>

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
