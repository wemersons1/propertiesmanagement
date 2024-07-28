import React, { Suspense, useContext } from 'react';
import styles from './Admin.module.css';
import Header from "../../components/Layout/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Context from '../../Hook/Context';

const Admin = () => {

    const ListPlans = React.lazy(() => import('./../../Pages/Checkout/ListPlans'));
    const DataCompany = React.lazy(() => import('./../../Pages/Checkout/DataCompany'));
    const Payment = React.lazy(() => import('./../../Pages/Checkout/Payment'));

    const Dashboard = React.lazy(() => import('./Dashboard'));

    const Categories = React.lazy(() => import('./Categories'));
    const CategoriesCreate = React.lazy(() => import('./Categories/Create'));
    const Category = React.lazy(() => import('./Categories/Category'));

    const Products = React.lazy(() => import('./Products'));
    const ProductsCreate = React.lazy(() => import('./Products/Create'));
    const Product = React.lazy(() => import('./Products/Product'));

    const Users = React.lazy(() => import('./Users'));
    const UsersCreate = React.lazy(() => import('./Users/Create'));
    const User = React.lazy(() => import('./Users/User'));

    const Employees = React.lazy(() => import('./Employees'));
    const EmployeesCreate = React.lazy(() => import('./Employees/Create'));
    const Employee = React.lazy(() => import('./Employees/Employee'));

    const Clients = React.lazy(() => import('./Clients'));
    const ClientsCreate = React.lazy(() => import('./Clients/Create'));
    const Client = React.lazy(() => import('./Clients/Client'));

    const Advisors = React.lazy(() => import('./../Seller/Advisors'));
    const AdvisorsCreate = React.lazy(() => import('./../Seller/Advisors/Create'));
    const Advisor = React.lazy(() => import('./../Seller/Advisors/Advisor'));

    const PaymentsAdvisors = React.lazy(() => import('./PaymentsAdvisors'));
    const PaymentsAdvisorsCreate = React.lazy(() => import('./PaymentsAdvisors/Create'));
    const PaymentAdvisor = React.lazy(() => import('./PaymentsAdvisors/PaymentAdvisor'));

    const Expenses = React.lazy(() => import('./Expenses'));
    const ExpensesCreate = React.lazy(() => import('./Expenses/Create'));
    const Expense = React.lazy(() => import('./Expenses/Expense'));

    const Orders = React.lazy(() => import('./../Clerk/Orders'));
    const Order = React.lazy(() => import('./../Clerk/Orders/Order'));
    const OrderCreate = React.lazy(() => import('./../Clerk/Orders/Create'));
    const OrderGive = React.lazy(() => import('./../Expedition/Orders/Order'));

    const Taxes = React.lazy(() => import('./../Admin/Taxes'));

    const Config = React.lazy(() => import('./../Admin/Config'));

    const Transactions = React.lazy(() => import('../Clerk/Transactions'));

    const { user } = useContext(Context);

    return (
        <div className={styles.Admin}>
            <Header />
            <div className={styles.Content}>
                <Suspense fallback={""}>
                    <Routes>

                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/categories/create" element={<CategoriesCreate />} />
                        <Route path="/categories/:id" element={<Category />} />
                        <Route path="/categories" element={<Categories />} />

                        <Route path="/products/create" element={<ProductsCreate />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route path="/products" element={<Products />} />

                        <Route path="/users/:id" element={<User />} />
                        <Route path="/users/create" element={<UsersCreate />} />
                        <Route path="/users" element={<Users />} />

                        <Route path="/employees/:id" element={<Employee />} />
                        <Route path="/employees/create" element={<EmployeesCreate />} />
                        <Route path="/employees" element={<Employees />} />

                        <Route path="/clients/:id" element={<Client />} />
                        <Route path="/clients/create" element={<ClientsCreate />} />
                        <Route path="/clients" element={<Clients />} />

                        <Route path="/advisors/:id" element={<Advisor />} />
                        <Route path="/advisors/create" element={<AdvisorsCreate />} />
                        <Route path="/advisors" element={<Advisors />} />

                        <Route path="/payments-employees/:id" element={<PaymentAdvisor />} />
                        <Route path="/payments-employees/create" element={<PaymentsAdvisorsCreate />} />
                        <Route path="/payments-employees" element={<PaymentsAdvisors />} />

                        <Route path="/expenses/:id" element={<Expense />} />
                        <Route path="/expenses/create" element={<ExpensesCreate />} />
                        <Route path="/expenses" element={<Expenses />} />

                        <Route path="/orders/give/:id" element={<OrderGive />} />
                        <Route path="/orders/:id" element={<Order />} />
                        <Route path="/orders/create" element={<OrderCreate />} />
                        <Route path="/orders" element={<Orders />} />

                        <Route path="/taxes" element={<Taxes />} />
                        <Route path="/config" element={<Config />} />

                        <Route path="/transactions" element={<Transactions />} />

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
