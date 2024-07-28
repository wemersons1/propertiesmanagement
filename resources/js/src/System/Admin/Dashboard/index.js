import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from "../../../components/Card";
import { MdOutlineAttachMoney } from 'react-icons/md';
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import Table from "../../../components/Table";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import {
    firstLetterUppercase,
    formatDate,
    formatDateInput,
    formatDatePick, getMonthName,
    translateStatusPayment
} from "../../../Hook/util/help";
import Message from "../../../components/Message";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdLeaderboard } from 'react-icons/md';
import Chart from "../../../components/Chart";
import styles from './Dashboard.module.css';

const Dashboard = () => {

    const [loading, setLoading] = useState(true);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [report, setReport] = useState({});
    const { token } = useContext(Context);
    const [total, setTotal] = useState(0);
    const [paymentsTypes, setPaymentsTypes] = useState([]);
    const [quantityStatusesCarts, setQuantityStatusesCarts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [quantitySalesBySeller, setQuantitySaLesBySeller] = useState([]);
    const [labelSalesBySeller, setLabelSalesBySeller] = useState([]);

    const [totalSalesBySeller, setTotalSalesBySeller] = useState([]);
    const [labelTotalSalesBySeller, setLabelTotalSalesBySeller] = useState([]);

    const [allComissionsSellers, setAllComissionsSellers] = useState([]);
    const [labelComissionsSellers, setLabelComissionsSellers] = useState([]);

    const [quantitySalesByAdvisor, setQuantitySalesByAdvisor] = useState([]);
    const [labelQuantitySalesByAdvisor, setLabelQuantitySalesByAdvisor] = useState([]);

    const [labelTotalCommissionByAdvisor, setLabelTotalCommissionByAdvisor] = useState([]);
    const [totalCommissionByAdvisor, setTotalCommissionByAdvisor] = useState([]);

    const [totalSalesByAdvisor, setTotalSalesByAdvisor] = useState([]);
    const [labelTotalSalesByAdvisor, setLabelTotalSalesByAdvisor] = useState([]);

    const [labelPaymentType, setLabelPaymentType] = useState([]);
    const [typePayment, setPaymentType] = useState([]);

    const [quantitySalesByProducts, setQuantitySalesByProducts] = useState([]);
    const [labelQuantitySalesByProducts, setLabelQuantitySalesByProducts] = useState([]);

    const [totalSalesByProduct, setTotalSalesByProducts] = useState([]);
    const [labelTotalSalesByProduct, setLabelTotalSalesByProduct] = useState([]);

    const [gainsByProducts, setGainsByProducts] = useState([]);
    const [labelGainsByProducts, setLabelGainsByProducts] = useState([]);

    const [totalSalesInMonths, setTotalSalesInMonths] = useState([]);
    const [labelTotalSalesInMonths, setLabelTotalSalesInMonths] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    const [labelForPaymentsTypes, setLabelsForPaymentsTypes] = useState([]);
    const [paymentsTypesAvailable, setPaymentsTypesAvailable] = useState([]);

    const [showAllAvailableByPaymentTypes, setShowAvailableByPaymentTypesd] = useState(false);
    const [showAllSalesByPaymentTypes, setShowSalesByPaymentTypes] = useState(false);
    const [showAllSalesByMonths, setShowAllSalesByMonths] = useState(false);
    const [showAllQuantityProductsSold, setShowAllQuantityProductsSold] = useState(false);
    const [showAllTotalSoldByProduct, setShowAllTotalSoldByProduct] = useState(false);
    const [showAllGainsByProduct, setShowAllGainsByProduct] = useState(false);
    const [showAllQuantitySoldBySeller, setShowAllQuantitySoldBySeller] = useState(false);
    const [showAllTotalSoldBySeller, setShowAllTotalSoldBySeller] = useState(false);
    const [showAllCommissionBySeller, setShowAllCommissionBySeller] = useState(false);
    const [showAllQuantitySoldByAdvisor, setShowAllQuantitySoldByAdvisor] = useState(false);
    const [showAllTotalSoldByAdvisor, setShowAllTotalSoldByAdvisor] = useState(false);
    const [showAllTotalCommissionByAdvisor, setShowAllTotalCommissionByAdvisor] = useState(false);

    useEffect(() => {

        let params = {};
        const today = new Date().toJSON().slice(0, 10);

        !from ? params['from'] = today : params['from'] = formatDatePick(from);
        !to ? params['to'] = today : params['to'] = formatDatePick(to);

        axios.get('/api/v1/report/admin', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            if (response.data.total_available_by_payment_types) {

                let quantity = [];
                let labels = [];

                response.data.total_available_by_payment_types.forEach(item => {
                    if (parseFloat(item.value)) {
                        quantity.push(item.value);
                        labels.push(item.name);
                    }
                });

                setPaymentsTypesAvailable(quantity);
                setLabelsForPaymentsTypes(labels);

            }

            if (response.data.quantity_sales_by_seller) {

                let quantity = [];
                let labels = [];

                response.data.quantity_sales_by_seller.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setQuantitySaLesBySeller(quantity);
                setLabelSalesBySeller(labels);

            }

            if (response.data.sales_by_months) {

                let quantity = [];
                let labels = [];

                response.data.sales_by_months.forEach(item => {
                    quantity.push(item.total);
                    labels.push(`${getMonthName(item.month)}/${item.year}`);
                });

                setLabelTotalSalesInMonths(labels);
                setTotalSalesInMonths(quantity);

            }

            if (response.data.payments_types) {

                let quantity = [];
                let labels = [];

                response.data.payments_types.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setLabelPaymentType(labels);
                setPaymentType(quantity);

            }

            if (response.data.total_sales_by_product) {

                let quantity = [];
                let labels = [];

                response.data.total_sales_by_product.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });
                setLabelTotalSalesByProduct(labels);
                setTotalSalesByProducts(quantity);

            }

            if (response.data.total_sales_by_sellers) {

                let quantity = [];
                let labels = [];

                response.data.total_sales_by_sellers.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });
                setLabelTotalSalesBySeller(labels);
                setTotalSalesBySeller(quantity);

            }

            if (response.data.quantity_sales_by_product) {

                let quantity = [];
                let labels = [];

                response.data.quantity_sales_by_product.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });
                setLabelQuantitySalesByProducts(labels);
                setQuantitySalesByProducts(quantity);

            }

            if (response.data.total_commission_by_sellers) {

                let quantity = [];
                let labels = [];

                response.data.total_commission_by_sellers.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });
                setLabelComissionsSellers(labels);
                setAllComissionsSellers(quantity);

            }

            if (response.data.gains_sales_by_product) {

                let quantity = [];
                let labels = [];

                response.data.gains_sales_by_product.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setLabelGainsByProducts(labels);
                setGainsByProducts(quantity);


            }

            if (response.data.total_commission_by_advisors) {

                let quantity = [];
                let labels = [];

                response.data.total_commission_by_advisors.forEach(item => {
                    quantity.push(item.commission);
                    labels.push(item.name);
                });

                setLabelTotalCommissionByAdvisor(labels);
                setTotalCommissionByAdvisor(quantity);

            }


            if (response.data.total_sales_by_advisors) {

                let quantity = [];
                let labels = [];

                response.data.total_sales_by_advisors.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setLabelTotalSalesByAdvisor(labels);
                setTotalSalesByAdvisor(quantity);

            }

            if (response.data.quantity_sales_by_advisors) {

                let quantity = [];
                let labels = [];

                response.data.quantity_sales_by_advisors.forEach(item => {
                    quantity.push(item.total);
                    labels.push(item.name);
                });

                setQuantitySalesByAdvisor(quantity);
                setLabelQuantitySalesByAdvisor(labels);

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
                    payment_form: <span className={'fw-bold'}>{model?.payment_form.name}</span>
                }

            }));

        }).finally(() => {
            setLoading(false);
            setLoadingData(false);
        });

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
                        <IoMdSearch size={20} color="#2F4F4F" />
                    </Link>
                </>
            ),
        }
    ], []);

    if (loading) return (<Spinner />);


    return (
        <div>
            <h1 className={'mb-3'}>Dashboard</h1>
            <Row >
                <Col md={3}>
                    <DatePicker
                        value={from}
                        onChange={value => {
                            setFrom(value);
                            setLoadingData(true);
                        }}
                        inputPlaceholder={from}
                        shouldHighlightWeekends
                        inputClassName={styles.InputDate}// custom class
                        formatInputText={() => {
                            const today = new Date().toJSON().slice(0, 10);
                            if (!from) return formatDate(today);
                            return formatDateInput(from)
                        }}
                    />
                </Col>
                <Col md={3}>
                    <DatePicker
                        value={to}
                        onChange={value => {
                            setTo(value);
                            setLoadingData(true)
                        }}
                        inputPlaceholder={to}
                        shouldHighlightWeekends
                        inputClassName={styles.InputDate}// custom class
                        formatInputText={() => {
                            const today = new Date().toJSON().slice(0, 10);
                            if (!to) return formatDate(today);
                            return formatDateInput(to)
                        }}
                    />
                </Col>

            </Row>

            {
                loadingData ? <Spinner /> :
                    <div>
                        <div className={styles.FirstLineCard}>
                            <div lg={3}>
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
                            </div>

                            <div>
                                <div className={styles.Subtraction}></div>
                            </div>

                            <div lg={3}>
                                <Card
                                    type={'model-2'}
                                    title={'Total pagamentos'}
                                    icon={
                                        <MdOutlineAttachMoney
                                            className={"icon-left"}
                                            style={{ fill: "#8B0000" }}
                                            size={50}
                                        />
                                    }
                                    value={
                                        parseFloat(report?.total_used_for_payments ?? 0).toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <div className={styles.Equal}></div>
                                <div className={styles.Equal}></div>
                            </div>

                            <div lg={3}>
                                <Card
                                    type={'model-2'}
                                    title={'Saldo em caixa'}
                                    icon={
                                        <MdOutlineAttachMoney
                                            className={"icon-left"}
                                            style={{ fill: "#00c383" }}
                                            size={50}
                                        />
                                    }
                                    value={
                                        (parseFloat(report?.total_available ?? 0)).toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className={styles.FirstLineCard}>
                            <div lg={3}>
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
                            </div>
                            <div>
                            </div>
                            <div lg={3}>
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
                            </div>
                            <div>
                            </div>

                            <div lg={3}>
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
                            </div>
                        </div>

                        <Row>

                            {
                                paymentsTypesAvailable.length ?
                                    <Col md={4}>
                                        <Card
                                            showBigger={showAllAvailableByPaymentTypes}
                                            setShowBigger={setShowAvailableByPaymentTypesd}
                                            title={'Saldo em caixa por tipo de pagamento'}
                                        >
                                            <Chart
                                                type={'polar'}
                                                data={paymentsTypesAvailable}
                                                title={labelForPaymentsTypes}
                                                size={showAllAvailableByPaymentTypes ? 2 : null}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                typePayment.length ?
                                    <Col md={4}>
                                        <Card
                                            showBigger={showAllSalesByPaymentTypes}
                                            setShowBigger={setShowSalesByPaymentTypes}
                                            title={'Vendas por tipo de pagamento'}
                                        >
                                            <Chart
                                                type={'polar'}
                                                data={typePayment}
                                                title={labelPaymentType}
                                                size={showAllSalesByPaymentTypes ? 2 : null}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                totalSalesInMonths.length ?
                                    <Col md={4}>
                                        <Card
                                            showBigger={showAllSalesByMonths}
                                            setShowBigger={setShowAllSalesByMonths}
                                            title={'Total de vendas por mês'}
                                        >
                                            <Chart
                                                size={showAllSalesByMonths ? 2 : null}
                                                horizontal={false}
                                                nameItem={'Venda no mês'}
                                                type={'bar'}
                                                data={showAllSalesByMonths ? totalSalesInMonths : [...totalSalesInMonths].splice(0, 5)}
                                                title={showAllSalesByMonths ? labelTotalSalesInMonths : [...labelTotalSalesInMonths].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                        </Row>

                        <Row>
                            {
                                quantitySalesByProducts.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllQuantityProductsSold}
                                            setShowBigger={setShowAllQuantityProductsSold}
                                            title={'Quantidade de produtos vendidos'}
                                        >
                                            <Chart
                                                size={showAllQuantityProductsSold ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Quantidade'}
                                                type={'bar'}
                                                data={showAllQuantityProductsSold ? quantitySalesByProducts : [...quantitySalesByProducts].splice(0, 5)}
                                                title={showAllQuantityProductsSold ? labelQuantitySalesByProducts : [...labelQuantitySalesByProducts].splice(0, 5)}

                                            />
                                        </Card>

                                    </Col> : null
                            }
                            {

                                totalSalesBySeller.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllTotalSoldByProduct}
                                            setShowBigger={setShowAllTotalSoldByProduct}
                                            title={'Total de vendas por produto'}
                                        >
                                            <Chart
                                                size={showAllTotalSoldByProduct ? 4 : null}

                                                horizontal={true}
                                                nameItem={'Total vendido'}
                                                type={'bar'}
                                                data={showAllTotalSoldByProduct ? totalSalesByProduct : [...totalSalesByProduct].splice(0, 5)}
                                                title={showAllTotalSoldByProduct ? labelTotalSalesByProduct : [...labelTotalSalesByProduct].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                allComissionsSellers.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllGainsByProduct}
                                            setShowBigger={setShowAllGainsByProduct}
                                            title={'Ganhos por produto'}
                                        >
                                            <Chart
                                                size={showAllGainsByProduct ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Ganhos'}
                                                type={'bar'}
                                                data={showAllGainsByProduct ? gainsByProducts : [...gainsByProducts].splice(0, 5)}
                                                title={showAllGainsByProduct ? labelGainsByProducts : [...labelGainsByProducts].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                        </Row>

                        <Row>
                            {
                                quantitySalesBySeller.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllQuantitySoldBySeller}
                                            setShowBigger={setShowAllQuantitySoldBySeller}
                                            title={'Quantidade de vendas por vendedor'}
                                        >
                                            <Chart
                                                size={showAllQuantitySoldBySeller ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Quantidade'}
                                                type={'bar'}
                                                data={showAllQuantitySoldBySeller ? quantitySalesBySeller : [...quantitySalesBySeller].splice(0, 5)}
                                                title={showAllQuantitySoldBySeller ? labelSalesBySeller : [...labelSalesBySeller].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }
                            {
                                totalSalesBySeller.length ?
                                    <Col md={4}>
                                        <Card

                                            title={'Total de vendas por vendedor'}
                                            showBigger={showAllTotalSoldBySeller}
                                            setShowBigger={setShowAllTotalSoldBySeller}
                                        >
                                            <Chart
                                                size={showAllTotalSoldBySeller ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Total vendido'}
                                                type={'bar'}
                                                data={showAllTotalSoldBySeller ? totalSalesBySeller : [...totalSalesBySeller].splice(0, 5)}
                                                title={showAllTotalSoldBySeller ? labelTotalSalesBySeller : [...labelTotalSalesBySeller].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                allComissionsSellers.length ?
                                    <Col md={4}>
                                        <Card

                                            title={'Total de comissões por vendedor'}
                                            showBigger={showAllCommissionBySeller}
                                            setShowBigger={setShowAllCommissionBySeller}
                                        >
                                            <Chart
                                                size={showAllCommissionBySeller ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Comissão'}
                                                type={'bar'}
                                                data={showAllCommissionBySeller ? allComissionsSellers : [...allComissionsSellers].splice(0, 5)}
                                                title={showAllCommissionBySeller ? labelComissionsSellers : [...labelComissionsSellers].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                        </Row>

                        <Row>
                            {
                                quantitySalesByAdvisor.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllQuantitySoldByAdvisor}
                                            setShowBigger={setShowAllQuantitySoldByAdvisor}
                                            title={'Quantidade de vendas por assessor'}
                                        >
                                            <Chart
                                                size={showAllQuantitySoldByAdvisor ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Quantidade'}
                                                type={'bar'}
                                                data={showAllQuantitySoldByAdvisor ? quantitySalesByAdvisor : quantitySalesByAdvisor.slice(0, 5)}
                                                title={showAllQuantitySoldByAdvisor ? labelQuantitySalesByAdvisor : labelQuantitySalesByAdvisor.slice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                totalSalesByAdvisor.length ?
                                    <Col md={4}>
                                        <Card

                                            showBigger={showAllTotalSoldByAdvisor}
                                            setShowBigger={setShowAllTotalSoldByAdvisor}
                                            title={'Total de vendas por assessor'}
                                        >
                                            <Chart
                                                size={showAllTotalSoldByAdvisor ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Total vendido'}
                                                type={'bar'}
                                                data={showAllTotalSoldByAdvisor ? totalSalesByAdvisor : [...totalSalesByAdvisor].splice(0, 5)}
                                                title={showAllTotalSoldByAdvisor ? labelTotalSalesByAdvisor : [...labelTotalSalesByAdvisor].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                            {
                                totalCommissionByAdvisor.length ?
                                    <Col md={4}>
                                        <Card
                                            showBigger={showAllTotalCommissionByAdvisor}
                                            setShowBigger={setShowAllTotalCommissionByAdvisor}
                                            title={'Total de comissões por assessor'}
                                        >
                                            <Chart
                                                size={showAllTotalCommissionByAdvisor ? 4 : null}
                                                horizontal={true}
                                                nameItem={'Comissão'}
                                                type={'bar'}
                                                data={showAllTotalCommissionByAdvisor ? totalCommissionByAdvisor : [...totalCommissionByAdvisor].splice(0, 5)}
                                                title={showAllTotalCommissionByAdvisor ? labelTotalCommissionByAdvisor : [...labelTotalCommissionByAdvisor].splice(0, 5)}
                                            />
                                        </Card>

                                    </Col> : null
                            }

                        </Row>


                        {
                            orders.length ?
                                <Table
                                    columns={columns}
                                    data={orders}
                                /> :
                                <Message type={'info'}>Nenhum pedido pendente dentro do período</Message>
                        }


                    </div>
            }

        </div>
    )
}

export default Dashboard;
