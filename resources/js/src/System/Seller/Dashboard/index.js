import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from "../../../components/Card";
import { GiTakeMyMoney} from 'react-icons/gi';
import{BsCart4} from 'react-icons/bs';
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import Table from "../../../components/Table";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import styles from './Dashboard.module.css';
import {formatDate, formatDateInput, formatDatePick} from "../../../Hook/util/help";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import axios from "axios";
import {RiErrorWarningLine} from "react-icons/ri";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {VscError} from "react-icons/vsc";
import {MdLeaderboard} from 'react-icons/md';
import Message from "../../../components/Message";

const Dashboard = () => {

    const [loading , setLoading] = useState(true);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [report, setReport] = useState({});
    const {token} = useContext(Context);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [orders, setOrders] = useState([]);

    const checkStatus = status => {

        switch (status) {

            case 'pending':
                return <RiErrorWarningLine className={'icon-warning'} />;
            case 'paid':
                return <AiOutlineCheckCircle className={'icon-success'}/>;
            case 'canceled':
                return <VscError className={'icon-danger'}/>;

        }
    }


    useEffect(() => {

        let params = {};
        const today = new Date().toJSON().slice(0,10);

        !from ? params['from'] = today : params['from'] = formatDatePick(from);
        !to ? params['to'] = today : params['to'] = formatDatePick(to);

        axios.get('/api/v1/report/seller', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            let reportTreated = {
                ...response.data,
                total_discount: parseFloat(response.data.total_discount ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
                total_sales: parseFloat(response.data.total_sales ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
                commission: parseFloat(response.data.commission ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
                total_liquidity: parseFloat((response?.data?.total_sales && response?.data?.total_discount) ?
                    (response?.data?.total_sales - response?.data?.total_discount) : 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
            }

            setReport(reportTreated);

        }).finally(() => setLoading(false));

    }, [from, to]);

    useEffect(() => {
        let params = {};
        const today = new Date().toJSON().slice(0,10);

        !from ? params['from'] = today : params['from'] = formatDatePick(from);
        !to ? params['to'] = today : params['to'] = formatDatePick(to);

        axios.get(`/api/v1/orders/me?pending=1`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setOrders(response.data.data.map(model => {

                let totalItem = 0;

                model.products.forEach(item => {
                    totalItem = totalItem + (parseFloat(item.pivot.price_final) * parseFloat(item.pivot.quantity));
                });

                totalItem = totalItem - +model.discount;

                let createdTreated = model.created_at.split('T')[0];
                createdTreated = createdTreated.split('-');
                createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]} ` + model.created_at.split('T')[1].split('.')[0];

                return {
                    id: model.id,
                    client: model.client.name,
                    status: checkStatus(model.status.name),
                    created_at: createdTreated,
                    total: parseFloat(totalItem).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })
                }
            }));

        }).finally(() => {
            setLoadingOrders(false);
        });
    }, []);

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
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Data',
            accessor: 'created_at',
        },
        {
            Header: 'Total',
            accessor: 'total',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/orders/${row.row.original.id}`}>
                        <FaEdit size={20} color="#2F4F4F"/>
                    </Link>
                </>
            ),
        }
    ], []);


    if(loading || loadingOrders) return (<Spinner/>);

    return (
        <div>
          {/*  <Row>
                <Col className={'d-flex justify-content-center'}>
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
                <Col className={'d-flex justify-content-center'}>
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

            </Row>*/}

        {/*    <Row>
                <Col>
                    <Card
                        type={'model-2'}
                        title={'Meus ganhos'}
                        icon={
                            <GiTakeMyMoney
                                className={"icon-left icon-right"}
                                style={{ fill: "#00c383" }}
                                size={50}
                            />
                        }
                        value={report.commission}
                    />

                </Col>
            </Row>
            <Row>
                <Col>
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
                        value={report.total_sales}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card
                        type={'model-2'}
                        title={'Vendas'}
                        icon={
                            <BsCart4
                                className={"icon-left"}
                                style={{ fill: "#fca51e" }}
                                size={50}
                            />
                        }
                        value={report.quantity_sales}
                    />
                </Col>
            </Row>*/}
            {
                !orders.length ? <Message type={'info'}>Nenhum pedido registrado até o momento</Message> :
                <Table
                    columns={columns}
                    data={orders}
                />
            }
        </div>
    );
}

export default Dashboard;
