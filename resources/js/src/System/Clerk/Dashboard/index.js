import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from "../../../components/Card";
import {MdOutlineAttachMoney} from 'react-icons/md';
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import Table from "../../../components/Table";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import styles from '../../Clerk/Dashboard/Dashboard.module.css';
import {
    firstLetterUppercase,
    formatDate,
    formatDateInput,
    formatDatePick,
    translateStatusPayment
} from "../../../Hook/util/help";
import Message from "../../../components/Message";
import {Link} from "react-router-dom";
import {IoMdSearch} from "react-icons/io";
import {MdLeaderboard} from 'react-icons/md';
import Chart from "../../../components/Chart";

const Dashboard = () => {

    const [loading , setLoading] = useState(true);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [report, setReport] = useState({});
    const {token} = useContext(Context);
    const [total, setTotal] = useState(0);
    const [paymentsTypes, setPaymentsTypes] = useState([]);
    const [quantityStatusesCarts, setQuantityStatusesCarts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [labelPaymentType, setLabelPaymentType] = useState([]);
    const [typePayment, setPaymentType] = useState([]);

    useEffect(() => {

        let params = {};
        const today = new Date().toJSON().slice(0,10);

        !from ? params['from'] = today : params['from'] = formatDatePick(from);
        !to ? params['to'] = today : params['to'] = formatDatePick(to);

        axios.get('/api/v1/report/clerk', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            if(response.data.quantity_sales_by_seller) {

                let quantity = [];
                let labels = [];

                response.data.payments_types.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setLabelPaymentType(labels);
                setPaymentType(quantity);

            }

            setReport(response.data);
            let totalTreated = 0;

            let payments = [];
            payments.push([`Período ${formatDate(!from ? today : formatDatePick(from))} - ${formatDate(!to ? today : formatDatePick(to))}`, 'Pagamentos']);

            response.data.payments_types.forEach(item => {
                totalTreated = totalTreated + parseFloat(item.total);
                payments.push([item.name, parseFloat(item.total)]);
            });

            payments[0][1] = 'Total: ' + totalTreated.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            });

            let quantityTotalCarts = [];
            quantityTotalCarts.push(["Status", "Quantidade por status"],);

            response.data.total_carts.forEach(cart => {

                quantityTotalCarts.push([cart.name, cart.total]);

            });

            setPaymentsTypes(payments);
            setTotal(totalTreated);
            setQuantityStatusesCarts(quantityTotalCarts);
            setOrders(response.data.lasts_orders.map(model => {

                let totalItem = 0;

                model.products.forEach(item => {
                    totalItem = totalItem + (parseFloat(item.pivot.price_final) * parseFloat(item.pivot.quantity));
                });

                totalItem = totalItem - +model.discount;

                let createdTreated = model.created_at.split('T')[0];
                createdTreated = createdTreated.split('-');
                createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]} ` + model.created_at.split('T')[1].split('.')[0];

                return {
                    ...model,
                    id: model.id,
                    client: firstLetterUppercase(model.client.name) ,
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
                    payment_form: <span className={'fw-bold'}>{model?.payment_form.name}</span>
                }

            }));

        }).finally(() => setLoading(false));

    }, [from, to]);

    const columns = useMemo(() => [
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
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/orders/${row.row.original.id}`} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>
                </>
            ),
        }
    ], []);

    if(loading) return (<Spinner/>);


    return (
        <div>
            <h1 className={'mb-3'}>Dashboard</h1>
            <Row >
                <Col md={3}>
                    <DatePicker
                        value={from}
                        onChange={setFrom}
                        inputPlaceholder={from}
                        shouldHighlightWeekends
                        inputClassName={styles.InputDate}// custom class
                        formatInputText={() => {
                            const today = new Date().toJSON().slice(0,10);
                            if (!from) return formatDate(today);
                            return formatDateInput(from)
                        }}
                    />
                </Col>
                <Col md={3}>
                    <DatePicker
                        value={to}
                        onChange={setTo}
                        inputPlaceholder={to}
                        shouldHighlightWeekends
                        inputClassName={styles.InputDate}// custom class
                        formatInputText={() => {
                            const today = new Date().toJSON().slice(0,10);
                            if (!to) return formatDate(today);
                            return formatDateInput(to)
                        }}
                    />
                </Col>

            </Row>

            <Row>
                <Col lg={3}>
                    <Card
                        type={'model-2'}
                        title={'Total recebido'}
                        icon={
                            <MdOutlineAttachMoney
                                className={"icon-left"}
                                style={{ fill: "#00c383" }}
                                size={50}
                            />
                        }
                        value={
                            (parseFloat(report?.total_sales ?? 0)).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }
                    />
                </Col>

                <Col lg={3}>
                    <Card
                        type={'model-2'}
                        title={'Total pendente'}
                        icon={
                            <MdOutlineAttachMoney
                                className={"icon-left"}
                                style={{ fill: "#ffc107" }}
                                size={50}
                            />
                        }
                        value={
                            parseFloat(report?.total_pending ?? 0).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }
                    />
                </Col>

                <Col lg={3}>
                    <Card
                        type={'model-2'}
                        title={'Total cancelado'}
                        icon={
                            <MdOutlineAttachMoney
                                className={"icon-left"}
                                style={{ fill: "#8B0000" }}
                                size={50}
                            />
                        }
                        value={
                            parseFloat(report?.total_canceled ?? 0).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }
                    />
                </Col>

               {/* <Col lg={3}>
                    <Card
                        type={'model-2'}
                        title={'Descontos'}
                        icon={
                            <MdOutlineAttachMoney
                                className={"icon-left"}
                                style={{ fill: "#fc045c" }}
                                size={50}
                            />
                        }
                        value={
                            parseFloat(report?.total_discounts ?? 0).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }
                    />
                </Col>*/}

                <Col lg={3}>
                    <Card
                        type={'model-2'}
                        title={'Total de vendas'}
                        icon={
                            <MdLeaderboard
                                className={"icon-left"}
                                style={{ fill: "#2596be" }}
                                size={50}
                            />
                        }
                        value={report.quantity_sales ?? 0}
                    />
                </Col>
            </Row>

            {/*  <Row>
                {
                        paymentsTypes.length > 1 &&
                    <Col>

                            <Card>
                                <Chart
                                    chartType="Bar"
                                    width="100%"
                                    height="250"
                                    data={paymentsTypes}
                                    options={{
                                        chart: {
                                            title: "Tipos de pagamentos",
                                        },

                                    }}
                                />
                            </Card>

                    </Col>
                }

            </Row>*/}

            <Row>

                {
                    typePayment.length ?
                        <Col md={6}>
                            <Card
                                title={'Quantidade de vendas por vendedor'}
                            >
                                <Chart
                                    type={'polar'}
                                    data={typePayment}
                                    title={labelPaymentType}
                                />
                            </Card>

                        </Col> : null
                }

            </Row>

            <Col>
                {
                    orders.length ?
                        <Table
                            columns={columns}
                            data={orders}
                        /> :
                        <Message type={'info'}>Nenhum pedido pendente dentro do período</Message>
                }
            </Col>
        </div>
    )
}

export default Dashboard;
