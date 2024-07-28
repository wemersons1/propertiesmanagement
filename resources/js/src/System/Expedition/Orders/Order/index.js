import React, {useState, useContext, useEffect, useMemo} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import {useNavigate, useParams} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Spinner from "../../../../components/Spinner";
import Message from "../../../../components/Message";
import {Col, Row} from "react-bootstrap";
import Select from "../../../../components/Select";
import InputMoney from "../../../../components/InputMoney";
import Table from "../../../../components/Table";
import {AiOutlineDoubleRight} from "react-icons/ai";

const Order = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [loadingOrder, setLoadingOrder] = useState(true);
    const [showMessageError, setShowMessageError] = useState(false);
    const [allPaymentsTypes, setAllPaymentsTypes] = useState([]);
    const [paymentFormId, setPaymentFormId] = useState(1);
    const [totalValue, setTotalValue] = useState(0);

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [paymentsTypesMade, setPaymentsTypesMade] = useState([]);

    const {token} = useContext(Context);
    const navigate = useNavigate();
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [moneyMissing, setMoneyMissing] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/api/v1/orders/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setOrder(response.data);

            let totalValueTreated = 0;

            response.data.products.forEach(product => {
                totalValueTreated = totalValueTreated + +product.pivot.quantity * parseFloat(product.pivot.price_final);
            })

            totalValueTreated = totalValueTreated - response.data.discount;

            setPaymentsTypesMade([{payment_form_id: 1, value: totalValueTreated}]);

            setTotalValue(totalValueTreated);

            setLoadingOrder(false);

            let allQuantitys = 0;

            let productsTreated = response.data.products.map(product => {

                allQuantitys = allQuantitys + product.pivot.quantity;

                let name = product.pivot.name;
                let quantity = product.pivot.quantity;
                let price = +product.pivot.quantity * parseFloat(product.pivot.price_final);

                price = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });

                return {
                    name: name,
                    quantity: quantity,
                    unit_value: parseFloat(product.pivot.price_final).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
                    total_value: price,
                    size: product.size.name ?? 'N'
                }

            });

            setProducts(productsTreated);

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
        if(success){
            navigate(-1);
        }
    }

    const handlerSubmit = () => {

        let url = `/api/v1/orders/receive/${id}`;

        axios.put(url, {},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Pedido retirado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.message);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSweetShow(true);
        });
    }

    const setPaymentMadeChange = (e, index) => {

        let copyPaymentsMade = [...paymentsTypesMade];

        copyPaymentsMade[index] = {...copyPaymentsMade[index], [e.target.name]:e.target.value}

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

        totalValueTreated = totalValue - totalValueTreated;

        copyAllPayments.push({payment_form_id: 1, value: totalValueTreated});

        setPaymentsTypesMade(copyAllPayments);

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
            accessor: 'quantity',
        }
    ], []);

    if(loadingOrder || loading) return (<Spinner/>);

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do pedido'}
            />

            <CardForm type={'smaller'}>

                    <Input
                        type={'text'}
                        value={translateStatus(order.status.name)}
                        disabled
                        label={'Status'}
                    />
                    <Input
                        type={"text"}
                        disabled
                        label={'Nome'}
                        name={'name'}
                        placeholder={'name example'}
                        value={order.client.name}
                    />

                    <Input
                        type={"text"}
                        disabled
                        label={'Nome'}
                        name={'name'}
                        placeholder={'name example'}
                        value={order.employee.name}
                    />

                    <Table
                        columns={columns}
                        data={products}
                    />

                    {showMessageError ? <Message type={'error'}>Soma de todos os pagamentos são inferiores a {parseFloat(totalValue - order.discount).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</Message> : null}

                {
                    order.status_object.name !== 'received' && order.status.name === 'paid'?
                    <Row>
                        <Col>
                            <Button styleIcon={'save'} onClick={handlerSubmit}>Retirar pedido<span style={{marginRight: "1rem"}}></span> <AiOutlineDoubleRight className={'icon icon-right'} size={20} /></Button>
                        </Col>
                    </Row> : null
                }

            </CardForm>

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
