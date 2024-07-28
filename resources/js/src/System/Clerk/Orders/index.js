import React, { useState, useEffect, useContext, useMemo } from 'react';
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Message from "../../../components/Message";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { translateStatusPayment, firstLetterUppercase, isObjectEmpty } from "../../../Hook/util/help";
import styles from "../../Admin/PaymentsAdvisors/PaymentsAdvisors.module.css";
import { MdOutlineReceiptLong } from "react-icons/md";
import SweetAlert from "../../../components/SweetAlert";
import Button from "../../../components/Button";
import Select2 from "../../../components/Select2";
import Select from "../../../components/Select";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCreditCardOff } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';
import HeaderButtonPage from '../../../components/HeaderButtonPage';

const Orders = () => {

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [allItemsPayment, setAllItemsPayment] = useState([]);
    const [operator, setOperator] = useState('');
    const [payment, setPayment] = useState({});

    const [item, setItem] = useState({});
    const [changeButton, setChangeButton] = useState('');

    const [sweetShow2, setSweetShow2] = useState(false);

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [idDelete, setIdDelete] = useState(0);
    const [success, setSuccess] = useState(true);
    const DateObject = new Date();
    const [from, setFrom] = useState(new Date().toJSON().slice(0, 10));
    const [to, setTo] = useState(new Date().toJSON().slice(0, 10));
    const [client, setClient] = useState('');

    const [allClients, setAllClients] = useState([]);
    const [clientChange, setClientChange] = useState({});

    const [allSellers, setAllSellers] = useState([]);
    const [sellerChange, setSellerChange] = useState({});

    const [allAdvisors, setAllAdvisors] = useState([]);
    const [advisorChange, setAdvisorChange] = useState({});

    const [allPaymentsForms, setAllPaymentsForms] = useState([]);
    const [paymentChange, setPaymentChange] = useState({});
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState(0);
    const { token, user, role } = useContext(Context);
    const [total, setTotal] = useState(0);
    const [loadingTable, setLoadingTable] = useState(false);

    useEffect(() => {

        axios.get(`/api/v1/payment-forms?all=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setAllPaymentsForms(response.data.map(client => {
                return {
                    value: client.id,
                    label: client.name
                }
            }));
        });

        axios.get(`/api/v1/users?all=1&role_name=seller`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setAllSellers(response.data.map(client => {
                return {
                    value: client.employee.id,
                    label: client.employee.name
                }
            }));
        });

        axios.get(`/api/v1/advisors?all=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setAllAdvisors(response.data.map(client => {
                return {
                    value: client.id,
                    label: client.name
                }
            }));
        });

        axios.get(`/api/v1/clients?all=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setAllClients(response.data.map(client => {
                return {
                    value: client.id,
                    label: client.name
                }
            }));
        });

    }, [])

    useEffect(() => {

        setLoadingTable(true);
        let params = {};
        client.length ? params['client'] = client : null;
        from.length ? params['from'] = from : null;
        to.length ? params['to'] = to : null;
        status ? params['status_id'] = status : null;
        !isObjectEmpty(clientChange) ? params['client_id'] = clientChange.value : null;
        !isObjectEmpty(sellerChange) ? params['seller_id'] = sellerChange.value : null;
        !isObjectEmpty(advisorChange) ? params['advisor_id'] = advisorChange.value : null;
        !isObjectEmpty(paymentChange) ? params['payment_form_id'] = paymentChange.value : null;
        orderId ? params['order_id'] = orderId : null;

        axios.get(`/api/v1/orders?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(r => {

            setTotal(r.data.total);
            let response = { data: null };

            response.data = r?.data?.data;

            let taxes = response?.data?.data[0]?.employee?.company?.taxes_payment;

            setOrders(response.data.data.map(model => {

                let createdTreated = model.created_at.split('T')[0];
                createdTreated = createdTreated.split('-');
                createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]} `;

                let totalItem = 0;
                let totalSale = 0;

                model.products.forEach(item => {
                    totalSale = totalSale + (parseFloat(item.pivot.price_final) * parseFloat(item.pivot.quantity));
                });

                totalSale = totalSale - parseFloat(model.discount);

                if (model.status.name === 'pending' || model.status.name === 'canceled') {
                    model.products.forEach(item => {
                        totalItem = totalItem + (parseFloat(item.pivot.price_final) * parseFloat(item.pivot.quantity));
                    });

                    totalItem = totalItem - parseFloat(model.discount);

                    if (+model.payment_form_id === 3) {

                        totalItem = totalItem + ((totalItem * parseFloat(taxes[`credit${model.installments}x`])) / 100)


                    } else if (+model.payment_form_id === 4) {

                        totalItem = totalItem + ((totalItem * parseFloat(taxes[`debit`])) / 100)

                    }
                } else {

                    model.payments.forEach(item => {
                        totalItem = totalItem + parseFloat(item.value);
                    });
                }

                let paymentTreated = '';

                if (model?.payments[0]?.payment_form?.name) {

                    model?.payments.map(payment => {

                        paymentTreated = paymentTreated + `, ${payment.payment_form?.name}`;

                    });

                    paymentTreated = paymentTreated.substring(1, paymentTreated.length)
                }

                return {
                    ...model,
                    id: model.id,
                    client: firstLetterUppercase(model.client.name),
                    status: translateStatusPayment(model.status.name),
                    created_at: createdTreated,
                    advisor: model?.advisor?.name ? firstLetterUppercase(model?.advisor?.name) : 'Sem assessor',
                    seller: firstLetterUppercase(model.employee.name),
                    total: parseFloat(totalItem).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    }),
                    status_payment: model.status.name,
                    have_advisor: model?.advisor ?? null,
                    payment_form: <span className={'fw-bold'}>{(model.status.name === 'pending' || model.status.name === 'pending') ? model?.payment_form?.name : paymentTreated ?? "Cancelado"}</span>,
                    verified_receipt_client: model.verified_receipt_client ? <AiOutlineCheckCircle className={'icon-success'} /> : <MdOutlineCreditCardOff className={'icon-verify'} />,
                    verified_receipt_advisor: model.verified_receipt_advisor ? <AiOutlineCheckCircle className={'icon-success'} /> : !model?.advisor ? "Sem assessor" : <MdOutlineCreditCardOff className={'icon-verify'} />,
                    total_sale: totalSale
                }
            }));
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);
        }).finally(() => {
            setLoading(false);
            setLoadingTable(false);
        });
    }, [page, client, success, to, from, client, status, clientChange, sellerChange, advisorChange, paymentChange, orderId]);

    let columns = [];

    if (!orderId) {

        columns = useMemo(() => [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Cliente',
                accessor: 'client',
            },
            {
                Header: 'Vendedor',
                accessor: 'seller',
            },
            {
                Header: 'Assessor',
                accessor: 'advisor',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Data',
                accessor: 'created_at',
            },
            {
                Header: 'Forma de pgto.',
                accessor: 'payment_form',
            },
            {
                Header: 'Total pago',
                accessor: 'total',
            },
            {
                Header: 'Total de venda',
                accessor: 'total_sale',
            },
            {
                Header: 'Imp.cliente',
                accessor: 'verified_receipt_client',
            },

            {
                Header: 'Imp.assessor',
                accessor: 'verified_receipt_advisor',
            },

            {
                Header: 'Ação',
                Cell: (row) => (
                    <>
                        <Link to={`/orders/${row.row.original.id}`} >
                            <IoMdSearch size={20} color="#2F4F4F" />
                        </Link>

                        {
                            row.row.original.status_payment === 'paid' &&

                            <button style={{ background: "transparent" }} onClick={() => {

                                setItem({ ...row.row.original, index: row.row.index });
                                setSweetShow2(true);
                            }}>
                                <MdOutlineReceiptLong size={23} color="#2F4F4F" style={{ fill: "#FFD700" }} />
                            </button>

                        }

                        {
                            role !== 'admin' ? " " :
                                <Button
                                    type={'destroy'}
                                    onClick={() => {
                                        setShow(true);
                                        setIdDelete(row.row.original.id)
                                    }}
                                >
                                </Button>

                        }

                        {
                            row.row.original.status_payment !== "paid" ? " " :
                                <Link to={`/orders/give/${row.row.original.id}`} >
                                    <BiShoppingBag size={20} color="#2F4F4F" />
                                </Link>
                        }

                    </>
                ),
            }
        ], [orders]);

    } else {

        columns = useMemo(() => [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Cliente',
                accessor: 'client',
            },
            {
                Header: 'Vendedor',
                accessor: 'seller',
            },
            {
                Header: 'Assessor',
                accessor: 'advisor',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Data',
                accessor: 'created_at',
            },
            {
                Header: 'Forma de pgto.',
                accessor: 'payment_form',
            },
            {
                Header: 'Total',
                accessor: 'total',
            },
            {
                Header: 'Imp.cliente',
                accessor: 'verified_receipt_client',
            },

            {
                Header: 'Imp.assessor',
                accessor: 'verified_receipt_advisor',
            },

            {
                Header: 'Situação',
                Cell: (row) => (
                    <>
                        {
                            row.row.original.active ? <span className={'fw-bold text-success'}>Ativo</span> : <span className={'fw-bold text-danger'}>Apagado</span>
                        }
                    </>
                ),
            },
            {
                Header: 'Ação',
                Cell: (row) => (
                    <>
                        <Link to={`/orders/${row.row.original.id}`} >
                            <IoMdSearch size={20} color="#2F4F4F" />
                        </Link>

                        {
                            row.row.original.status_payment === 'paid' &&

                            <button style={{ background: "transparent" }} onClick={() => {

                                setItem({ ...row.row.original, index: row.row.index });
                                setSweetShow2(true);
                            }}>
                                <MdOutlineReceiptLong size={23} color="#2F4F4F" style={{ fill: "#FFD700" }} />
                            </button>

                        }

                        {
                            role !== 'admin' ? " " :
                                <Button
                                    type={'destroy'}
                                    onClick={() => {
                                        setShow(true);
                                        setIdDelete(row.row.original.id)
                                    }}
                                >
                                </Button>

                        }


                    </>
                ),
            }
        ], [orders]);

    }


    const generateReceiptClient = (option) => {

        setSweetShow2(false);
        setChangeButton(option)

        setTimeout(() => {

            window.print();

        }, 0);

        let data = {};
        data['order_id'] = item.id;
        data['type'] = 'client';

        axios.post('/api/v1/receipts/verified', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {

            const copyOrders = [...orders];
            copyOrders[item.index].verified_receipt_client = <AiOutlineCheckCircle className={'icon-success'} />;

            setOrders(copyOrders);
        });
    }

    const renderTextReceiptClient = () => {

        const columns = [
            {
                Header: 'Nome',
                accessor: 'product',
            },
            {
                Header: 'Qtd',
                accessor: 'quantity',
            },
            {
                Header: 'Valor un.',
                accessor: 'value_unit',
            },
            {
                Header: 'Sub total',
                accessor: 'total',
            }
        ]

        let productsTreated = [];

        let totalGeneral = 0;

        item?.products?.forEach(product => {

            totalGeneral = totalGeneral + (parseFloat(product.pivot.price_final) * +product.pivot.quantity);

            productsTreated.push({
                product: product.pivot.name,
                quantity: product.pivot.quantity,
                value_unit: parseFloat(product.pivot.price_final).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                }),
                total: (parseFloat(product.pivot.price_final) * +product.pivot.quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })

            });
        });

        totalGeneral = totalGeneral - parseFloat(item.discount);

        return (
            <div>

                <div className={'border my-2'}></div>
                <h2>Pedido n° {item.id}</h2>

                <h2>Data: {item?.created_at}</h2>
                <h2>Cliente: {item?.client}</h2>

                <div className={'border my-2'}></div>

                <h2>Produtos</h2>

                <Table
                    size={'small'}
                    columns={columns}
                    data={productsTreated}
                />
                {
                    parseFloat(item.discount) ?
                        <>

                            <h2>Total geral: {(parseFloat(item.discount) + totalGeneral).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })}</h2>


                            <h2>Desconto: {parseFloat(item.discount).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })
                            }</h2>


                        </> : null
                }

                <h2>Forma(s) de pagamento</h2>

                {

                    item?.payments?.map(i => {

                        return (
                            <h2>{i?.payment_form?.name}: {(parseFloat(i?.value)).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })}</h2>
                        )
                    })
                }

                <h4>Total: {(totalGeneral).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })}</h4>

            </div>
        );

    }

    const generateReceiptAdvisor = (option) => {

        setSweetShow2(false);
        setChangeButton(option)

        setTimeout(() => {

            window.print();

        }, 0);

        let data = {};
        data['order_id'] = item.id;
        data['type'] = 'advisor';

        axios.post('/api/v1/receipts/verified', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {

            const copyOrders = [...orders];
            copyOrders[item.index].verified_receipt_advisor = <AiOutlineCheckCircle className={'icon-success'} />;

            setOrders(copyOrders);

        });

    }


    const renderTextReceiptAdvisor = () => {

        const columns = [
            {
                Header: 'Nome',
                accessor: 'product',
            },
            {
                Header: 'Qtd',
                accessor: 'quantity',
            },
            {
                Header: 'Valor un.',
                accessor: 'value_unit',
            },
            {
                Header: 'Sub total',
                accessor: 'total',
            }
        ]

        let productsTreated = [];

        let totalGeneral = 0;
        let discount = 0;
        if (item.discount) {
            discount = parseFloat(item.discount);
        }

        item?.products?.forEach(product => {

            totalGeneral = totalGeneral + (parseFloat(product.pivot.price_final) * product.pivot.quantity) - parseFloat(product.pivot.discount_by_product);

            productsTreated.push({
                product: product.pivot.name,
                quantity: product.pivot.quantity,
                value_unit: parseFloat(product.pivot.price_final).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                }),
                total: (parseFloat(product.pivot.price_final) * +product.pivot.quantity).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })

            });
        });


        let commission = 0;
        let value_final = 0;
        let value = 0;
        let total = 0;

        item.products.forEach(product => {
            value_final = +product.pivot.quantity * parseFloat(product.pivot.price_final);
            value = +product.pivot.quantity * parseFloat(product.price);
            commission = commission + (value_final - value);
            total = total + value_final;
        });

        commission = commission - discount;

        if ((commission) < 0) commission = 0;

        return (
            <div>
                <div className={'border my-2'}></div>
                <h2>Pedido n° {item.id}</h2>

                <h2>Data: {item?.created_at}</h2>
                <h2>Cliente: {item?.client}</h2>

                <div className={'border my-2'}></div>
                <h2>Produtos</h2>

                <Table
                    size={'small'}
                    columns={columns}
                    data={productsTreated}
                />

                <div className={'border my-2'}></div>
                <h2 style={{ textAlign: "left" }}>Total geral: &nbsp; &nbsp;  {(total).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>

                <h2>Desconto: {parseFloat(item.discount ?? 0).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })
                }</h2>

                <h2 style={{ textAlign: "right" }}>Total: &nbsp; &nbsp;  {(total - parseFloat(item.discount)).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>

                <h2 style={{ textAlign: "right" }}>Comissão: &nbsp; &nbsp;  {(commission).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>
            </div>
        );
    }

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/orders/${idDelete}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setSweetType('success');
            setSweetText('Operação realizada com sucesso');
            setSweetTitle('Sucesso');
            setSuccess(!success);

        }).catch(err => {

            setSweetType('error');
            setSweetText(err.response.data.message);
            setSweetTitle('Erro');

        }).finally(() => setSweetShow(true));

    }


    if (loading) return (<Spinner />);

    return (
        <>
            <div className={styles.Receipt} id={"section-to-print"}>

                <div className={styles.Container}>

                    <div className={'d-flex justify-content-center'}>
                        <img
                            width={100}
                            src={user.company.imageLogoCode}
                        />
                    </div>

                    <h1>{user.company.name}</h1>

                    <h2>Operador: {item?.clerk?.name}</h2>
                    <h2>Vendedor: {item?.employee?.name}</h2>
                    <h2>Assessor: {item?.advisor}</h2>

                    {
                        changeButton === 'advisor' ? renderTextReceiptAdvisor() : renderTextReceiptClient()
                    }

                    <h5 className={'text-center text-uppercase mt-4'}>***  Este tícket não é documento fiscal  ***</h5>
                    <h5 className={'text-center text-uppercase'}>Obrigado e volte sempre!</h5>
                </div>

            </div>

            <HeaderButtonPage
                type={'store'}
                h1={'Pedidos'}
                to={'create'}
            />

            <Filter>
                <Row>
                    <Col lg={3}>
                        <Input
                            type={'date'}
                            label={'Data inicial'}
                            value={from}
                            onChange={e => {
                                setFrom(e.target.value);
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            type={'date'}
                            label={'Data final'}
                            value={to}
                            onChange={e => {
                                setTo(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Select
                            label={'Status'}
                            value={status}
                            onChange={e => {
                                setStatus(e.target.value)
                                setPage(1);
                            }}
                        >
                            <option value={0}>Todos</option>
                            <option value={2}>Pendentes</option>
                            <option value={1}>Aprovados</option>
                            <option value={3}>Cancelados</option>
                        </Select>
                    </Col>
                    <Col lg={3}>
                        <Select2
                            label={'Cliente'}
                            isClearable
                            value={clientChange}
                            onChange={value => {
                                setClientChange(value ?? {})
                                setPage(1);
                            }}
                            options={allClients}
                        />
                    </Col>
                    <Col lg={3}>
                        <Select2
                            label={'Vendedor'}
                            isClearable
                            value={sellerChange}
                            onChange={value => {
                                setSellerChange(value ?? {})
                                setPage(1);
                            }}
                            options={allSellers}
                        />
                    </Col>
                    <Col lg={3}>
                        <Select2
                            label={'Assessor'}
                            isClearable
                            value={advisorChange}
                            onChange={value => {
                                setAdvisorChange(value ?? {})
                                setPage(1);
                            }}
                            options={allAdvisors}
                        />
                    </Col>
                    <Col lg={3}>
                        <Select2
                            label={'Tipo de pagamento'}
                            isClearable
                            value={paymentChange}
                            onChange={value => {
                                setPaymentChange(value ?? {})
                                setPage(1);
                            }}
                            options={allPaymentsForms}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            type={'number'}
                            label={'Número do pedido'}
                            value={orderId}
                            onChange={e => {
                                setOrderId(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                </Row>

            </Filter>
            <Row className={'d-flex justify-content-end'}>
                <Col lg={4}>
                    <h1 className={'text-end'}>{total.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</h1>
                </Col>
            </Row>

            {
                orders.length ? (loadingTable ? <Spinner /> :
                    <>

                        <Table columns={columns} data={orders} />

                        {!(totalItemsCount > itemsCountPerPage) ? null :
                            <Pagination
                                handlePageChange={e => setPage(e)}
                                activePage={page}
                                itemsCountPerPage={itemsCountPerPage}
                                totalItemsCount={totalItemsCount}
                                pageRangeDisplayed={5}
                            />}
                    </>
                ) :
                    <Message type={'info'}>Nenhum pedido encontrado</Message>
            }

            <SweetAlert
                onConfirm={() => generateReceiptClient('client')}
                onCancel={() => generateReceiptAdvisor('advisor')}
                showCancel={!!item.have_advisor}
                title={'Atenção'}
                type={'info'}
                cancelBtnText={'Assessor'}
                btnConfirmStyle={'success'}
                text={"Selecione uma opção para impressão"}
                show={sweetShow2}
                confirmBtnText={'Cliente'}
                closeOnClickOutside={false}
            />

            <SweetAlert
                onConfirm={deleteItem}
                onCancel={() => setShow(false)}
                showCancel={true}
                title={'Atenção'}
                type={'warning'}
                btnConfirmStyle={'success'}
                text={'Tem certeza que deseja excluir o pedido ?'}
                show={show}
                confirmBtnText={'Ok'}
                cancelBtnText={'Cancelar'}
                closeOnClickOutside={false}
            />

            <SweetAlert
                onConfirm={() => setSweetShow(false)}
                title={sweetTitle}
                type={sweetType}
                btnConfirmStyle={'success'}
                text={sweetText}
                show={sweetShow}
                confirmBtnText={'Ok'}
                closeOnClickOutside={false}
            />


        </>
    );
}

export default Orders;
