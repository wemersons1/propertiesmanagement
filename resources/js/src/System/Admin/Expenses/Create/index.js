import React, { useState, useContext, useEffect, useMemo } from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Select from "../../../../components/Select";
import { Col, Modal, Row } from "react-bootstrap";
import Select2 from "../../../../components/Select2";
import InputMoney from "../../../../components/InputMoney";
import TextArea from "../../../../components/TextArea";
import { calculateTotalValue, formatDate, isObjectEmpty } from "../../../../Hook/util/help";
import Table from "../../../../components/Table";
import Pagination from "../../../../components/Pagination";
import Spinner from "../../../../components/Spinner";
import styles from './Create.module.css';
import RegisterClient from "../../../Seller/CartPending/RegisterClient";
import Message from "../../../../components/Message";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Create = () => {

    const [description, setDescription] = useState('');
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [sizes, setSizes] = useState([]);
    const [success, setSuccess] = useState(false);
    const { token } = useContext(Context);
    const navigate = useNavigate();
    const [allAdvisors, setAllAdvisors] = useState([]);
    const [allSellers, setAllSellers] = useState([]);
    const [loadingSellers, setLoadingSellers] = useState(true);
    const [amount, setAmount] = useState('');
    const [type, setType] = useState(2);
    const [datePayment, setDatePayment] = useState(new Date().toJSON().slice(0, 10));
    const [dateEnd, setDateEnd] = useState('');
    const [employeeChanged, setEmployeeChanged] = useState({});
    const [allItems, setAllItems] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(0);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [loadingPaymentsForms, setLoadingPaymentsForms] = useState(true);
    const [allPaymentsForms, setAllPaymentForms] = useState([]);
    const [formChanged, setFormChanged] = useState('');
    const [totalSales, setTotalSales] = useState(0);
    const [allExpenses, setAllExpenses] = useState([]);
    const [expenseChange, setExpenseChange] = useState({});
    const [value, setValue] = useState(0);
    const [paid, setPaid] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [expenseName, setExpenseName] = useState('');
    const [showMessageExpenseSuccess, setShowMessageExpenseSuccess] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    useEffect(() => {
        axios.get('/api/v1/payment-forms', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setFormChanged(response.data[0].id);
            setAllPaymentForms(response.data);

            setLoadingPaymentsForms(false);
        });
    }, [])

    useEffect(() => {

        axios.get('/api/v1/expenses/name?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllExpenses(response.data.map(expense => {

                return {
                    value: expense.id,
                    label: expense.name
                }
            }))

        });

    }, [modalShow]);

    const handlerSubmit = e => {
        setLoadingSpinner(true);
        e.preventDefault();
        let data = {
            expenses_type_id: type,
            expenses_name_id: expenseChange.value,
            payment_form_id: formChanged,
            value,
            date_payment: datePayment,
            description,
            paid
        };

        if (type === 'advisor') {
            data['advisor_id'] = employeeChanged.value;
        } else {
            data['seller_id'] = employeeChanged.value;
        }

        axios.post('/api/v1/expenses', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Operação realizada com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.error);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setLoadingSpinner(false);
            setSweetShow(true);
        });
    }

    const columns = useMemo(() => [
        {
            Header: 'Pedido',
            accessor: 'id',
        },
        {
            Header: 'Cliente',
            accessor: 'client',
        },
        {
            Header: 'Dia',
            accessor: 'created_at',
        },
        {
            Header: 'Produto',
            accessor: 'product',
        },
        {
            Header: 'Preço',
            accessor: 'price',
        },
        {
            Header: 'Quantidade',
            accessor: 'quantity',
        },
        {
            Header: 'Total',
            accessor: 'total',
        },
        {
            Header: 'Desconto',
            accessor: 'discount',
        },
        {
            Header: 'Comissão',
            accessor: 'commission',
        },
    ], []);

    const registerExpense = e => {
        e.preventDefault();
        let data = {};

        data['name'] = expenseName;

        axios.post('/api/v1/expenses/name', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setShowMessageExpenseSuccess(true);
            setTimeout(() => {
                setModalShow(false);
                setExpenseName('');
                setShowMessageExpenseSuccess(false);
            }, 2000);
        });

    }

    return (
        <div >
            <HeaderButtonPage
                type={'back'}
                h2={'Registro de entrada/saída'}
            />
            <form onSubmit={handlerSubmit}>

                <CardForm height={'biggest'}>
                    <Row>
                        <Col lg={3}>
                            <h3 className={'text-left fw-bold'}>Detalhes {+type === 1 ? 'do recebimento' : 'da saída'}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Select
                                label={'Tipo'}
                                onChange={e => {
                                    setType(e.target.value)
                                    setAmount(0);
                                }}
                            >
                                <option value={2}>Saída</option>
                                <option value={1}>Entrada</option>
                            </Select>
                        </Col>
                        <Col lg={3} className={'d-flex align-items-center'}>
                            <Select2
                                label={`Selecione a ${+type === 1 ? 'Entrada' : 'Saída'}`}
                                onChange={value => {
                                    setExpenseChange(value);
                                }}
                                value={expenseChange}
                                options={allExpenses}
                            />
                            <div className={styles.MarginLeft}>
                                <Button
                                    type={'add'}
                                    onClick={() => setModalShow(true)}
                                >

                                </Button>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <InputMoney
                                label={`Valor`}
                                value={value}
                                onChange={(e, valueEvent) => setValue(valueEvent)}
                            />
                        </Col>

                        <Col lg={3}>
                            <Input
                                type={'date'}
                                value={datePayment}
                                onChange={e => setDatePayment(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <hr />
                    <Row>
                        <h3 className={'text-left fw-bold'}>Status</h3>
                    </Row>

                    <Row>
                        <Col lg={3}>
                            <input
                                id={'paid'}
                                type={'checkbox'}
                                checked={paid}
                                onChange={() => setPaid(!paid)}
                            />
                            <label htmlFor={'paid'}>
                                <h4>{+type === 1 ? 'Recebido' : 'Pago'}</h4>
                            </label>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <h3 className={'text-left fw-bold'}>Forma(s) de pagamento</h3>
                    </Row>
                    <Row className={'p-3'}>
                        {
                            allPaymentsForms.map(form => {
                                return (

                                    <Col>
                                        <div className={styles.Radio}>
                                            <label htmlFor={`element${form.id}`}>{form.name}</label>
                                            <input
                                                id={`element${form.id}`}
                                                type={'radio'}
                                                checked={formChanged === form.id}
                                                onChange={e => setFormChanged(form.id)}
                                            />
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Col>
                            <TextArea
                                label={'Descrição'}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            >{description}</TextArea>
                        </Col>
                    </Row>

                    <Button
                        styleIcon={'save'}
                        disabled={loadingSpinner}
                    >

                        {loadingSpinner ? <Spinner size={'small'} /> : null}
                        Registrar
                    </Button>

                    {
                        !allItems.length ? null :
                            <Table
                                columns={columns}
                                data={allItems}
                            />
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


                </CardForm>

            </form>

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

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShow(false)} animation={true}
                style={{ textAlign: "center" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: "100%" }} id="contained-modal-title-vcenter">
                        <Row>
                            <Col><p>Cadastro de {+type === 1 ? 'Entrada' : 'Saída'}</p></Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={registerExpense} style={{ backgroundColor: "lightgrey" }}>
                        <Row className={'d-flex align-items-center'}>
                            <Col lg={9}>
                                <Input
                                    label={'Nome'}
                                    value={expenseName}
                                    onChange={e => setExpenseName(e.target.value)}
                                    required
                                    className={'border'}
                                />
                            </Col>
                            {
                                showMessageExpenseSuccess ? <Message type={'info'}>Saída registrada com sucesso</Message> : null
                            }
                            <Col>
                                <Button>Registrar</Button>
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Create;
