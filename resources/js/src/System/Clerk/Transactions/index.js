import React, {useState, useEffect, useContext, useMemo} from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Message from "../../../components/Message";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {formatDate, isObjectEmpty} from "../../../Hook/util/help";
import Select2 from "../../../components/Select2";
import {Link} from "react-router-dom";
import {IoMdSearch} from "react-icons/io";

const Transactions = () => {
    const [loading, setLoading] = useState(true);
    const [payments, setPayments] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [from, setFrom] = useState(new Date().toJSON().slice(0,10));
    const [to, setTo] = useState(new Date().toJSON().slice(0,10));
    const [clerk, setClerk] = useState('');
    const [transactionChange, setTransactionChange] = useState({});
    const [allTransactions, setAllTransactions] = useState([]);
    const [total, setTotal] = useState(0);
    const [name, setName] = useState('');
    const [loadingPayments, setLoadingPayments] = useState(false);

    const {token, role} = useContext(Context);

    useEffect(() => {

        axios.get('/api/v1/payment-forms', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllTransactions(response.data.map(transaction => {
                return {
                    value: transaction.id,
                    label: transaction.name
                }
            }))
        });

    }, []);


    useEffect(() => {

        setLoadingPayments(true);

        let params = {};

        if(from.length && to.length) {
            name.length ? params['client'] = name : null;
            clerk.length ? params['clerk'] = clerk : null
            params['from'] = from;
            params['to'] = to;
            !isObjectEmpty(transactionChange) ? params['payment_form_id'] = transactionChange.value : null;

            let url = role === 'clerk' ? `/api/v1/transactions?page=${page}&role=clerk` : `/api/v1/transactions?page=${page}`;

            axios.get(url,{
                headers: {
                    Authorization: `Bearer ${token}`
                }, params
            }).then(response => {
                setTotal(response.data.total);
                setPayments(response.data.data.data.map(payment => {

                    return {
                        ...payment,
                        client: payment?.client?.name ?? 'Indefinido',
                        clerk: payment?.clerk?.name ?? 'Indefinido',
                        payment_form: payment?.payment_form?.name,
                        amount: parseFloat(payment.value).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        date: formatDate(payment.date.split(' ')[0])+' '+payment.date.split(' ')[1]
                    }
                }));

                setTotalItemsCount(response.data.data.total);
                setItemsCountPerPage(response.data.data.per_page);
            }).finally(() => {
                setLoading(false);

                setLoadingPayments(false);
            });
        }

    }, [page, name, from, to, clerk, transactionChange]);


    const columns = useMemo(() => [
        {
            Header: 'Pedido',
            accessor: 'cart_id',
        },
        {
            Header: 'Cliente',
            accessor: 'client',
        },
        {
            Header: 'Caixa',
            accessor: 'clerk',
        },
        {
            Header: 'Forma de pgto.',
            accessor: 'payment_form',
        },
        {
            Header: 'Valor',
            accessor: 'amount',
        },
        {
            Header: 'Data',
            accessor: 'date',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/orders/${row.row.original.cart_id}`} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>
                </>
            ),
        }
    ], []);

    if (loading && role?.length) return (<Spinner/>);

    return (
        <>
            <h1>Transações</h1>

            <Filter>
                <Row>
                    <Col lg={role === 'admin' ? 3 : 4}>
                        <Input
                            type={'date'}
                            label={'Período inicial'}
                            value={from}
                            onChange={e => {
                                setFrom(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={role === 'admin' ? 3 : 4}>
                        <Input
                            type={'date'}
                            label={'Período final'}
                            value={to}
                            onChange={e => {
                                setTo(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={role === 'admin' ? 3 : 4}>
                        <Input
                            label={'Cliente'}
                            value={name}
                            onChange={e => {
                                setName(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>

                    {
                        role === 'admin' ?
                            <Col lg={3}>
                                <Input
                                    label={'Caixa'}
                                    value={clerk}
                                    onChange={e => {
                                        setClerk(e.target.value)
                                        setPage(1);
                                    }}
                                />
                            </Col> : null
                    }

                    <Col lg={3}>
                        <Select2
                            label={'Forma de pgto.'}
                            options={allTransactions}
                            onChange={value => {
                                setTransactionChange(value ?? {})
                                setPage(1);
                            }}
                            isClearable
                        />
                    </Col>

                </Row>

            </Filter>
            <Row>
                <Col>
                  <h1 className={'text-end'}>Total: {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h1>
                </Col>
            </Row>

            {
                loadingPayments ? <Spinner/> :

                payments.length ? <Table columns={columns} data={payments}/> :
                    <Message type={'info'}>Nenhuma transação realizada</Message>
            }

            {
                !(totalItemsCount > itemsCountPerPage) ? null :
                    <Pagination
                        handlePageChange={e => setPage(e)}
                        activePage={page}
                        itemsCountPerPage={itemsCountPerPage}
                        totalItemsCount={totalItemsCount}
                        pageRangeDisplayed={5}
                    />
            }

        </>
    );
}

export default Transactions;
