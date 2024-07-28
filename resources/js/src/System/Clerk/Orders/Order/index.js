import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Spinner from "../../../../components/Spinner";
import Message from "../../../../components/Message";
import { Col, Modal, Row } from "react-bootstrap";
import Select from "../../../../components/Select";
import InputMoney from "../../../../components/InputMoney";
import Table from "../../../../components/Table";
import { checkUser, isObjectEmpty } from "../../../../Hook/util/help";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Card from "../../../../components/Card";
import Select2 from "../../../../components/Select2";
import axios from 'axios';

const Order = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [loadingOrder, setLoadingOrder] = useState(true);
    const [showMessageError, setShowMessageError] = useState(false);
    const [allPaymentsTypes, setAllPaymentsTypes] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [paymentsTypesMade, setPaymentsTypesMade] = useState([]);

    const { token, user, role } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [moneyMissing, setMoneyMissing] = useState(0);
    const [products, setProducts] = useState([]);
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);
    const [productSelected, setProductSelected] = useState({});
    const [loadingAdvisors, setLoadingAdvisors] = useState(true);
    const [allAdvisors, setAllAdvisors] = useState([]);
    const [advisorChanged, setAdvisorChanged] = useState({});
    const [showMessageErrorBiggest, setShowMessageErrorBiggest] = useState(false);
    const [paymentDate, setPaymentDate] = useState(new Date().toJSON().slice(0, 10));

    useEffect(() => {

        axios.get('/api/v1/advisors?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            let advisorsTreated = [{ value: 0, label: "Sem assessor" }];

            response.data.forEach(advisor => {
                advisorsTreated.push({ value: advisor.id, label: advisor.name });
            });

            setAllAdvisors(advisorsTreated);
        });

        axios.get(`/api/v1/orders/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAdvisorChanged(response.data.advisor_id ? {
                value: response.data.advisor.id,
                label: response.data.advisor.name
            } : { value: 0, label: "Sem assessor" });
            setOrder({ ...response.data, discount: response.data.discount ?? 0 });

            let totalValueTreated = 0;

            response.data.products.forEach(product => {
                totalValueTreated = totalValueTreated + +product.pivot.quantity * parseFloat(product.pivot.price_final);
            })

            totalValueTreated = totalValueTreated - parseFloat(response.data.discount);

            let valueInstallments = 0;
            let taxes = response.data.employee.company.taxes_payment;
            let installment = +response.data.installments;
            let taxeValue = 0;

            if (+response.data.payment_form_id === 3) {

                taxeValue = parseFloat(taxes[`credit${installment}x`]);

                valueInstallments = totalValueTreated + ((totalValueTreated * taxeValue) / 100)

            } else if (+response.data.payment_form_id === 4) {

                taxeValue = parseFloat(taxes[`debit`]);
                valueInstallments = totalValueTreated + ((totalValueTreated * taxeValue) / 100)

            } else {
                taxeValue = 0;
                valueInstallments = totalValueTreated;
            }

            valueInstallments = valueInstallments / installment

            if (response.data.status.name === 'pending') {
                setPaymentsTypesMade([{
                    payment_form_id: +response.data.payment_form_id,
                    value: totalValueTreated,
                    taxes: taxeValue,
                    installments: +response.data.installments,
                    value_installment: valueInstallments
                }]);

            } else {

                setPaymentDate(response.data.date_paid.split(' ')[0]);

                let valueInstallments = 0;
                let taxes = response.data.employee.company.taxes_payment;
                let taxeValue = 0;

                setPaymentsTypesMade(response.data.payments.map(payment => {

                    if (+payment.payment_form_id === 3) {

                        taxeValue = parseFloat(taxes[`credit${payment.installments}x`]);

                        valueInstallments = totalValueTreated + ((totalValueTreated * taxeValue) / 100)

                    } else if (+payment.payment_form_id === 4) {

                        taxeValue = parseFloat(taxes[`debit`]);
                        valueInstallments = totalValueTreated + ((totalValueTreated * taxeValue) / 100)

                    } else {
                        taxeValue = 0;
                        valueInstallments = totalValueTreated;
                    }


                    return {
                        payment_form_id: +payment.payment_form_id,
                        value: payment.value,
                        taxes: taxeValue,
                        installments: +payment.installments,
                        value_installment: (parseFloat(payment.value) + ((parseFloat(payment.value) * taxeValue) / 100)) / +payment.installments
                    }
                }));

            }

            setLoadingOrder(false);

            let allQuantitys = 0;

            let productsTreated = response.data.products.map(product => {

                allQuantitys = allQuantitys + product.pivot.quantity;

                let name = product.pivot.name;
                let quantity = product.pivot.quantity;
                let price = +product.pivot.quantity * parseFloat(product.pivot.price_final);

                return {
                    id: product.pivot.product_config_id,
                    name: name,
                    quantity: quantity,
                    unit_value: parseFloat(product.pivot.price_final),
                    total_value: price,
                    size: product.size.name ?? 'N',
                    original_value: parseFloat(product.pivot.price_final)
                }

            });

            let totalTreated = (totalValueTreated) + parseFloat(response.data.discount);

            setTotalValue(totalTreated);

            if (response.data.discount > 0) {

                //TOTAL
                //<span style={{color: "white", padding: ".5rem", borderRadius: ".5rem 0 .5rem 0", backgroundColor: "#88c54b"}}>{}</span>
                productsTreated.push({
                    name: "Total",
                    quantity: allQuantitys,
                    unit_value: "-",
                    total_value: parseFloat(totalTreated),
                });

                //DESCONTO
                //<span style={{color: "white", padding: ".5rem", borderRadius: ".5rem 0 .5rem 0", backgroundColor: "salmon"}}>{parseFloat(response.data.discount)}</span>,
                productsTreated.push({
                    name: "Desconto",
                    quantity: allQuantitys,
                    unit_value: "-",
                    total_value: parseFloat(response.data.discount),
                });
            }

            productsTreated.push({
                name: "Á receber",
                quantity: allQuantitys,
                unit_value: "-",
                total_value: parseFloat((totalTreated)),
            });

            setProducts(productsTreated);

        });

        axios.get('/api/v1/products?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(products => {

            let productsTreated = [];

            products.data.forEach(product => {
                product.configs.forEach(item => {

                    productsTreated.push({
                        name: product.name,
                        id: item.id,
                        unit_value: parseFloat(item.price),
                        quantity: 1,
                        total_value: parseFloat(item.price),
                        value: item.id,
                        label: `${product.name} - ${item.size.name.toUpperCase()} - ${parseFloat(item.price).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}`,
                        original_value: parseFloat(item.price),
                        size: item.size.name
                    });

                });
            })

            setAllProducts(productsTreated);

        });

        axios.get(`/api/v1/payment-forms?all=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllPaymentsTypes(response.data);

            setLoading(false);
        });

    }, []);

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    const handlerSubmit = (option) => {


        let url = `/api/v1/orders/${option}/${id}`;

        let data = {};

        let totalChanged = 0;

        paymentsTypesMade.forEach(payment => {

            totalChanged = totalChanged + payment.value;

        });

        if (option === 'paid' && (totalChanged < (totalValue - order.discount))) {

            setShowMessageError(true);
            setShowMessageErrorBiggest(false);

        } else if (option === 'paid' && (totalChanged > (totalValue - order.discount))) {

            setShowMessageError(false);
            setShowMessageErrorBiggest(true);

        }

        else {

            setLoadingPayment(true);

            if (option === 'paid') {
                let productsTreated = [];
                let copyProducts = [...products];
                copyProducts.pop();
                copyProducts.forEach(product => {

                    productsTreated.push({
                        product_config_id: product.id,
                        price_final: product.unit_value,
                        quantity: product.quantity
                    });

                });

                data['discount'] = order.discount;
                data['payments_types'] = paymentsTypesMade;
                data['products'] = productsTreated;
                data['date_payment'] = paymentDate;
                (!isObjectEmpty(advisorChanged) && +advisorChanged.value !== 0) ? data['advisor_id'] = advisorChanged.value : null;

            }

            setShowMessageError(false);

            axios.put(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText(option === 'paid' ? 'Pagamento registrado com sucesso' : 'Pagamento cancelado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);
            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setLoadingPayment(false);
                setSweetShow(true);
            });

        }

    }

    const setPaymentMadeChange = (e, index) => {

        let copyPaymentsMade = [...paymentsTypesMade];

        if ((+e.target.value === 4 && e.target.name === 'payment_form_id')) {//DÉBITO

            let total = (parseFloat(order.employee.company.taxes_payment.debit) * (parseFloat(paymentsTypesMade[index].value) / 100)) + parseFloat(paymentsTypesMade[index].value);

            copyPaymentsMade[index] = {
                ...copyPaymentsMade[index],
                [e.target.name]: e.target.value,
                taxes: order.employee.company.taxes_payment.debit,
                installments: 1,
                value_installment: total
            };

        } else if (+e.target.value === 3 && e.target.name === 'payment_form_id') {

            let total = (parseFloat(order.employee.company.taxes_payment.credit1x) * (parseFloat(paymentsTypesMade[index].value) / 100)) + parseFloat(paymentsTypesMade[index].value);

            copyPaymentsMade[index] = {
                ...copyPaymentsMade[index],
                [e.target.name]: e.target.value,
                taxes: order.employee.company.taxes_payment.credit1x,
                installments: 1,
                value_installment: total
            };

        }
        else if (+copyPaymentsMade[index].payment_form_id === 3 && e.target.name === 'value') {

            copyPaymentsMade[index] = {
                ...copyPaymentsMade[index],
                value_installment: ((parseFloat(order.employee.company.taxes_payment.credit1x) * parseFloat(e.target.value)) / 100) + parseFloat(e.target.value),
                [e.target.name]: e.target.value,
                installments: 1,
                taxes: order.employee.company.taxes_payment.credit1x
            };

        } else if ((+copyPaymentsMade[index].payment_form_id === 4 && e.target.name === 'value')) {//DÉBITO

            let total = (parseFloat(order.employee.company.taxes_payment.debit) * (parseFloat(e.target.value) / 100)) + parseFloat(e.target.value);

            copyPaymentsMade[index] = {
                ...copyPaymentsMade[index],
                [e.target.name]: e.target.value,
                taxes: order.employee.company.taxes_payment.debit,
                installments: 1,
                value_installment: total
            };

        }
        else if (e.target.name === 'value') {

            copyPaymentsMade[index] = { ...copyPaymentsMade[index], [e.target.name]: e.target.value, taxes: 0, installments: 1, value_installment: e.target.value };

        } else {

            copyPaymentsMade[index] = { ...copyPaymentsMade[index], [e.target.name]: e.target.value, taxes: 0, installments: 1, value_installment: copyPaymentsMade[index].value };

        }

        setPaymentsTypesMade(copyPaymentsMade);

    }

    const removePaymentMade = (index) => {

        let copyPaymentsMade = [...paymentsTypesMade];

        setMoneyMissing(copyPaymentsMade[index].value);

        copyPaymentsMade.splice(index, 1);

        setPaymentsTypesMade(copyPaymentsMade);

    }

    const renderPaymentTypes = (payment, index) => {

        return (
            <Row>
                <Col>
                    <Select
                        value={payment.payment_form_id}
                        label={'Tipo'}
                        name={'payment_form_id'}
                        onChange={(e) => setPaymentMadeChange(e, index)}
                    >
                        {
                            allPaymentsTypes.map(payment => {

                                return (
                                    <option value={payment.id} key={payment.id}>
                                        {payment.name}
                                    </option>
                                )
                            })
                        }

                    </Select>
                </Col>

                <Col>
                    <InputMoney
                        name={'value'}
                        label={'Valor'}
                        value={payment.value}
                        onChange={(e, value) => {
                            let eTreated = {

                                target: {
                                    name: "value",
                                    value: value
                                }
                            }
                            setPaymentMadeChange(eTreated, index);
                        }}
                    />
                </Col>

                {+payment.payment_form_id === 3 ? renderInstallments(payment.value, payment, index) : null}

                {+payment.payment_form_id === 4 ? renderInputDebit(payment.value, index) : null}

                <Col lg={1} className={'d-flex align-items-center'}>
                    <Button type={'delete'} onClick={() => removePaymentMade(index)}></Button>
                </Col>

            </Row>
        );
    }

    const renderPaymentsTypesMade = () => {

        return (
            paymentsTypesMade.map((payment, index) => {

                return renderPaymentTypes(payment, index)

            })
        );
    }

    const translateStatus = (status) => {

        switch (status) {
            case 'pending':
                return 'Pendente';
            case 'paid':
                return 'Pago';
            case 'canceled':
                return 'Cancelado';
        }
    }

    const addPaymentsFormMade = () => {

        const copyAllPayments = [...paymentsTypesMade];
        let totalValueTreated = 0;

        copyAllPayments.forEach(payment => {
            totalValueTreated = totalValueTreated + payment.value;
        });

        totalValueTreated = totalValue - totalValueTreated - parseFloat(order.discount);

        copyAllPayments.push({ payment_form_id: 1, value: totalValueTreated, installments: 1, taxes: 0, value_installment: totalValueTreated });

        setPaymentsTypesMade(copyAllPayments);

    }

    const renderInstallments = (value, payment = null, index) => {

        let installments = [];
        let taxes = order.employee.company.taxes_payment;

        let total = totalValue - order.discount;

        let copyAllPayments = [...paymentsTypesMade];

        for (let i = 1; i <= 12; i++) {

            total = (parseFloat(value) + (parseFloat(value) * parseFloat(taxes[`credit${i}x`])) / 100) / i;

            console.log({ ...paymentsTypesMade[index], taxes: taxes[`credit${i}x`], installments: i, value_installment: total })
            installments.push(<option value={JSON.stringify({ ...paymentsTypesMade[index], taxes: taxes[`credit${i}x`], installments: i, value_installment: total })}>
                {
                    `${i}x ${total.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })} =>
                                ${(i * total).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })}`
                }
            </option>);

        }

        return (
            <Col md={4}>
                <Select
                    label={`Parcelamento`}
                    onChange={(e) => {

                        let value = JSON.parse(e.target.value);
                        copyAllPayments[index] = { ...copyAllPayments[index], taxes: value.taxes, installments: value.installments, value_installment: value.value_installment };
                        setPaymentsTypesMade(copyAllPayments);
                    }}
                    value={JSON.stringify(paymentsTypesMade[index])}
                >
                    {installments}
                </Select>
            </Col>
        );
    }

    const renderInputDebit = (value, index) => {


        return (
            <Col md={4}>
                <Input
                    disabled
                    value={`1x ${parseFloat(paymentsTypesMade[index].value_installment).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`}
                />
            </Col>
        );

    }

    const removeItem = row => {

        let index = row.index;
        let copyProducts = [...products];

        if (+copyProducts[index].quantity - 1 >= 1) {

            copyProducts[row.index].quantity = +copyProducts[index].quantity - 1;
            copyProducts[row.index].total_value = copyProducts[row.index].total_value - row.original.original_value;

            copyProducts[products.length - 1].quantity = +copyProducts[products.length - 1].quantity - 1;
            copyProducts[products.length - 1].total_value = copyProducts[products.length - 1].total_value - row.original.original_value;

            setProducts(copyProducts);
            setTotalValue(totalValue - parseFloat(row.original.original_value));
        }

    }


    const addItem = row => {

        let index = row.index;
        let copyProducts = [...products];

        copyProducts[row.index].quantity = +copyProducts[index].quantity + 1;
        copyProducts[row.index].total_value = copyProducts[row.index].total_value + row.original.original_value;

        copyProducts[products.length - 1].quantity = +copyProducts[products.length - 1].quantity + 1;
        copyProducts[products.length - 1].total_value = copyProducts[products.length - 1].total_value + row.original.original_value;

        setProducts(copyProducts);

        setTotalValue(totalValue + parseFloat(row.original.original_value));

    }

    const columns = useMemo(() => [
        {
            Header: 'Nome',
            accessor: 'name',
        },
        {
            Header: 'Tamanho',
            accessor: 'size',
        },

        {
            Header: 'Qtd.',
            Cell: (row) => (
                <>
                    {
                        (+row.row.index !== +products.length - 1 && order.status.name !== 'paid') && (role !== 'seller' && role !== 'expedition') ?
                            <>
                                <Button type={'remove'}
                                    onClick={() => removeItem(row.row)}
                                /> <span className={'mx-3'} />
                            </>
                            : null
                    }
                    {row.row.original.quantity}
                    {
                        (+row.row.index !== +products.length - 1 && order.status.name !== 'paid') && (role !== 'seller' && role !== 'expedition') ?
                            <>
                                <span className={'mx-3'} />
                                <Button
                                    onClick={() => addItem(row.row)} type={'add'}
                                />
                            </> : null
                    }

                </>
            ),
        },
        {
            Header: 'Valor unit.',
            Cell: (row) => (
                <>
                    <InputMoney
                        className={'Normal'}
                        value={row.row.original.unit_value}
                        disabled={order.status.name === 'paid'}
                        onChange={(e, value) => {
                            let copyProducts = [...products];
                            copyProducts[row.row.index].unit_value = value;
                            copyProducts[row.row.index].total_value = value * copyProducts[row.row.index].quantity;

                            let total = 0;

                            copyProducts.forEach(product => {

                                if (product.name !== 'Á receber' && product.name !== "Desconto" && product.name !== "Total") {

                                    total = total + (product.unit_value * product.quantity);

                                }

                            });

                            copyProducts.forEach((product, index) => {

                                if (product.name === 'Á receber') {

                                    copyProducts[index].total_value = total;

                                }

                            });

                            setTotalValue(total);

                            setProducts(copyProducts);

                        }}
                    />
                </>
            ),
        },
        {
            Header: 'Valor Total',
            Cell: (row) => (
                <>
                    {
                        +row.row.index !== +products.length - 1 ? parseFloat(row.row.original.total_value).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) :
                            <span style={{ color: "white", padding: ".5rem", borderRadius: ".5rem 0 .5rem 0", backgroundColor: "#313d6a" }}>
                                {parseFloat(row.row.original.total_value - parseFloat(order.discount)).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</span>

                    }

                </>
            ),
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    {
                        ((+row.row.index !== +products.length - 1 && order.status.name !== 'paid') && (role !== 'seller' && role !== 'expedition')) ? <Button
                            type={'destroy'}
                            onClick={() => deleteLine(row.row)}
                        /> : null

                    }

                </>
            ),
        }
    ], [products, totalValue, order.discount]);

    const deleteLine = row => {

        const copyProducts = [...products];

        setTotalValue(totalValue - parseFloat(row.original.total_value));

        copyProducts[products.length - 1].total_value = copyProducts[products.length - 1].total_value - parseFloat(row.original.total_value);
        copyProducts[products.length - 1].quantity = copyProducts[products.length - 1].quantity - row.original.quantity;

        copyProducts.splice(row.index, 1);
        setProducts(copyProducts)
    }


    const renderProducts = () => {


        return allProducts.map((product, index) => {

            return (
                <Col key={product.id} lg={4}>

                    <Card
                        type={'model-product'}
                        product={product}
                        index={index}
                        setProducts={setAllProducts}
                        products={allProducts}
                    />

                </Col>

            );
        });

    }

    const saveChanges = () => {

        let data = {};

        let totalChanged = 0;

        paymentsTypesMade.forEach(payment => {

            totalChanged = totalChanged + payment.value;

        });

        if (totalChanged < (totalValue - order.discount)) {

            setShowMessageError(true);
            setShowMessageErrorBiggest(false);

        }
        else if (totalChanged > (totalValue - order.discount)) {
            setShowMessageErrorBiggest(true);
            setShowMessageError(false);
        }
        else {

            let productsTreated = [];
            let copyProducts = [...products];
            copyProducts.pop();
            copyProducts.forEach(product => {

                productsTreated.push({
                    product_config_id: product.id,
                    price_final: product.original_value,
                    quantity: product.quantity
                });

            });

            data['discount'] = order.discount;
            data['payments_types'] = paymentsTypesMade;
            data['date_payment'] = paymentDate;
            (!isObjectEmpty(advisorChanged) && +advisorChanged.value !== 0) ? data['advisor_id'] = advisorChanged.value : null;

            setShowMessageError(false);

            axios.put('/api/v1/orders/change-payment/' + id, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Pagamento alterado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);
            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setLoadingPayment(false);
                setSweetShow(true);
            });

        }
    }

    if (loadingOrder || loading) return (<Spinner />);

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do pedido'}
            />

            <CardForm type={'biggest'}>
                <Row>
                    <Col md={6}>
                        <Select2
                            label={'Cliente'}
                            options={allAdvisors}
                            value={advisorChanged}
                            onChange={value => setAdvisorChanged(value ?? {})}
                            isClearable
                        />
                    </Col>
                    <Col md={6}>
                        <Select2
                            label={'Assessor'}
                            options={allAdvisors}
                            value={advisorChanged}
                            onChange={value => setAdvisorChanged(value ?? {})}
                            isClearable
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Input
                            type={"text"}
                            disabled
                            label={'Vendedor'}
                            name={'name'}
                            placeholder={'name example'}
                            value={order.employee.name}
                        />
                    </Col>
                    <Col md={6}>
                        <Input
                            className={translateStatus(order.status.name)}
                            type={'text'}
                            value={translateStatus(order.status.name)}
                            disabled
                            label={'Status'}
                        />
                    </Col>
                </Row>

                <Row className={'d-flex justify-content-end align-items-center'}>
                    {
                        (order.status.name === 'pending') && (role !== 'seller' && role !== 'expedition') ?
                            <Col lg={1}>
                                <Button onClick={() => setShowProducts(true)} type={'add'}>
                                    Adicionar
                                </Button>
                            </Col>

                            : null
                    }

                </Row>

                <Row className={'d-flex justify-content-end'}>
                    {
                        showProducts ?

                            <Col lg={6} className={'d-flex align-items-center'}>
                                <Select2
                                    label={'Produtos'}
                                    options={allProducts}
                                    onChange={value => setProductSelected(value ?? {})}
                                    isClearable
                                />
                                <Button type={'add'}
                                    onClick={() => {

                                        if (!isObjectEmpty(productSelected)) {
                                            const copyProducts = [...products];
                                            copyProducts.unshift(productSelected);
                                            copyProducts[copyProducts.length - 1].quantity = copyProducts[copyProducts.length - 1].quantity + 1;
                                            copyProducts[copyProducts.length - 1].total_value = copyProducts[copyProducts.length - 1].total_value + productSelected.original_value;
                                            setTotalValue(totalValue + productSelected.original_value);
                                            setProducts(copyProducts);
                                            setShowProducts(false);
                                        }

                                    }}
                                />
                                <Button type={'destroy'}
                                    onClick={() => setShowProducts(false)}
                                />
                            </Col>
                            : null
                    }
                </Row>

                <Table
                    columns={columns}
                    data={products}
                />

                <div>

                    <CardForm type={'biggest'}>

                        {
                            role === 'seller' ? null : <h1>Informações para pagamento</h1>
                        }


                        {
                            (role === 'seller' || role === 'expedition') ? null :
                                <Row>
                                    <Col></Col>
                                    <Col lg={6}>
                                        <InputMoney
                                            label={'Desconto'}
                                            value={order.discount}
                                            onChange={(e, value) => {
                                                setOrder({ ...order, discount: value });

                                                setPaymentsTypesMade([{ payment_form_id: 1, value: totalValue - parseFloat(value), taxes: 0, installments: 1, value_installment: totalValue }]);
                                            }}
                                        />
                                    </Col>

                                </Row>
                        }


                        <Row>
                            {
                                role === 'seller' ? null : <Col>
                                    <Input
                                        label={'Data de pagamento'}
                                        value={paymentDate}
                                        onChange={e => setPaymentDate(e.target.value)}
                                        type={'date'}
                                    />
                                </Col>
                            }

                            <Col lg={6}>
                                <InputMoney
                                    label={'Valor total'}
                                    value={(totalValue - order.discount)}
                                    disabled
                                />
                            </Col>

                        </Row>

                    </CardForm>

                    {
                        role === 'seller' ?
                            <Button
                                onClick={() => {

                                    let element = document.getElementById('show-item-cart');

                                    localStorage.setItem('@QuickSale:cart_id', JSON.stringify(id));

                                    navigate('/orders/edit/' + id);

                                }}
                            >Alterar pedido</Button> : null
                    }

                    {
                        order.status.name !== 'canceled' && role !== 'seller' ?
                            <CardForm type={'biggest'}>
                                <h1>Dados do pagamento</h1>
                                <div className={'d-flex justify-content-end'}>
                                    <Button onClick={addPaymentsFormMade} type={'add'}>
                                        Add. pgto.
                                    </Button>

                                </div>

                                {renderPaymentsTypesMade()}

                                {
                                    order.status.name === 'paid' && (checkUser(user, 'admin') || checkUser(user, 'clerk')) ?
                                        <Row>
                                            <Col>
                                                <Button styleIcon={'save'} disabled={loadingPayment} onClick={() => saveChanges()}>
                                                    Salvar alterações
                                                    {loadingPayment ? <Spinner size={'small'} /> : null}
                                                </Button>
                                            </Col>
                                        </Row> : null
                                }

                                {
                                    role === 'seller' ?
                                        <Button>Alterar pedido pedido</Button> : null
                                }

                            </CardForm> : null
                    }

                </div>

                {showMessageError ? <Message type={'error'}>Soma de todos os pagamentos são inferiores a {parseFloat(totalValue - order.discount)
                    .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Message> : null}
                {showMessageErrorBiggest ? <Message type={'error'}>Soma de todos os pagamentos são maiores que {parseFloat(totalValue - order.discount)
                    .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Message> : null}
                {
                    order.status.name === 'pending' && (checkUser(user, 'admin') || checkUser(user, 'clerk')) ?
                        <Row>
                            {
                                (order.status.name === 'pending' && checkUser(user, 'admin')) ?
                                    <Col md={4}>
                                        <Button disabled={loadingPayment} style={'canceled'} onClick={() => handlerSubmit('cancel')}>
                                            Cancelar pedido
                                            {loadingPayment ? <Spinner size={'small'} /> : null}
                                        </Button>
                                    </Col> : null
                            }

                            <Col md={4}>

                            </Col>
                            <Col md={(order.status.name === 'pending' && checkUser(user, 'admin')) ? 4 : 12}>
                                <Button styleIcon={'save'} disabled={loadingPayment} onClick={() => handlerSubmit('paid')}>
                                    Registrar pagamento
                                    {loadingPayment ? <Spinner size={'small'} /> : null}
                                </Button>
                            </Col>
                        </Row> : null
                }

            </CardForm>

            <Modal
                show={showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setShowModal(false)} animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: "100%" }} id="contained-modal-title-vcenter">
                        <h1>Produtos</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        loadingProducts ? <Spinner /> :
                            <Row>
                                {renderProducts()}
                            </Row>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button style={'success'} onClick={() => { }}>Adicionar produtos <AiOutlineDoubleRight size={20} className={'icon'} /></Button>
                </Modal.Footer>
            </Modal>

            <SweetAlert
                onConfirm={onClose}
                title={sweetTitle}
                type={sweetType}
                btnConfirmStyle={'success'}
                text={sweetText}
                show={sweetShow}
                confirmBtnText={'Ok'}
                closeOnClickOutside={false}
            />
        </div>
    );
}

export default Order;
