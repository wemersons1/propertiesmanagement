import React, {useState, useContext, useEffect, useMemo} from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Select from "../../../../components/Select";
import {Col, Row} from "react-bootstrap";
import Select2 from "../../../../components/Select2";
import InputMoney from "../../../../components/InputMoney";
import TextArea from "../../../../components/TextArea";
import {formatDate, isObjectEmpty} from "../../../../Hook/util/help";
import Table from "../../../../components/Table";
import Pagination from "../../../../components/Pagination";
import Spinner from "../../../../components/Spinner";
import styles from './Create.module.css'

const Create = () => {

    const [description, setDescription] = useState('');
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [sizes, setSizes] = useState([]);
    const [success, setSuccess] = useState(false);
    const {token} = useContext(Context);
    const navigate = useNavigate();
    const [allAdvisors, setAllAdvisors] = useState([]);
    const [allSellers, setAllSellers] = useState([]);
    const [loadingSellers, setLoadingSellers] = useState(true);
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('advisor');
    const [dateInit, setDateInit] = useState('');
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


    const onClose = e => {
        setSweetShow(false);
        if(success){
            navigate(-1);
        }
    }

    useEffect(() => {

        axios.get('/api/v1/users?role_name=seller&all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllSellers(response.data.map(seller => {

                return {
                    value: seller.employee_id,
                    label: seller.employee.name
                }
            }))

            setLoadingSellers(false);
        });

        axios.get('/api/v1/payment-forms', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setFormChanged(response.data[0].id);
            setAllPaymentForms(response.data);

            setLoadingPaymentsForms(false);
        });

        axios.get('/api/v1/advisors?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllAdvisors(response.data.map(seller => {

                return {
                    value: seller.id,
                    label: seller.name
                }
            }))

            setLoadingSellers(false);
        });

    }, []);

    const handlerSubmit = e => {
        e.preventDefault();
        let data = {
            date_init: dateInit,
            date_end: dateEnd,
            description,
            amount: amount ?? 0,
            payment_form_id: formChanged
        };

        if(type === 'advisor') {
            data['advisor_id'] = employeeChanged.value;
        } else {
            data['seller_id'] = employeeChanged.value;
        }

        axios.post('/api/v1/payment-employee-advisor', data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSweetText('Pagamento registrado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);
        }).catch(err => {
            setSweetText(err.response.data.error);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);
        }).finally(() => {

            setSweetShow(true);
        });

    }

    useEffect(() => {

        if(!isObjectEmpty(employeeChanged) && dateInit.length && dateEnd.length) {

            let params = {};
            params['from'] = dateInit;
            params['to'] = dateEnd;
            params['id'] = employeeChanged.value;
            params['type'] = type;
            params['page'] = page;

            axios.get(`/api/v1/payment-employee-advisor/commission`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }, params
            }).then(response => {

                setTotalSales(response.data.total_sale);
                setTotalItemsCount(response.data.all_transactions.total);
                setItemsCountPerPage(response.data.all_transactions.per_page);

                setAmount(response.data.commission);
                setAllItems(response.data.all_transactions.data.map(item => {

                    return {
                        ...item,
                        commission: parseFloat(item.commission).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        price: parseFloat(item.price).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        discount: parseFloat(item.discount).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        price_final: parseFloat(item.price_final).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        quantity: `${item.quantity}x ${(parseFloat(item.price_final)).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}`,
                        total: ((parseFloat(item.price_final) * +item.quantity)).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        }),
                        created_at: formatDate(item.created_at.split(' ')[0]) + ` ${item.created_at.split(' ')[1]}`
                    }
                }));

            });
        }

    }, [employeeChanged, dateInit, dateEnd, page])

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
    ], []);

    if(loadingPaymentsForms) return (<Spinner/>);

    return (
        <div >

            <HeaderButtonPage
                type={'back'}
                h2={'Registro de pagamento'}
            />

            <form onSubmit={handlerSubmit}>

                <CardForm height={'biggest'}>
                    <Row>
                        <Col lg={2}>
                            <Select
                                label={'Tipo'}
                                onChange={e => {
                                    setType(e.target.value)
                                    setEmployeeChanged({});
                                    setAmount(0);
                                }}
                            >
                                <option value={'advisor'}>Assessor</option>
                                <option value={'seller'}>Vendedor</option>
                            </Select>
                        </Col>

                        <Col lg={2}>
                            <Select2
                                label={`Selecione o ${type === 'advisor' ? 'Assessor' : 'Vendedor'}`}
                                onChange={value => {
                                    setEmployeeChanged(value);
                                    setDateInit(new Date().toJSON().slice(0, 10))
                                    setDateEnd(new Date().toJSON().slice(0, 10))
                                }}
                                value={employeeChanged}
                                options={type === 'advisor' ? allAdvisors : allSellers}
                            />
                        </Col>

                        <Col lg={2}>
                            <InputMoney
                                label={`Valor total vendido`}
                                disabled
                                value={totalSales}
                            />
                        </Col>

                        <Col lg={2}>
                            <Input
                                type={'date'}
                                value={dateInit}
                                onChange={e => setDateInit(e.target.value)}
                            />
                        </Col>

                        <Col lg={2}>
                            <Input
                                type={'date'}
                                value={dateEnd}
                                onChange={e => setDateEnd(e.target.value)}
                            />
                        </Col>

                        <Col lg={2}>
                            <InputMoney
                                label={`Valor a pagar`}
                                onChange={(e, value) => setAmount(value)}
                                value={amount}
                            />
                        </Col>

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
                                value={description}
                                label={'Descrição'}
                                onChange={e => setDescription(e.target.value)}
                            >{description}</TextArea>
                        </Col>
                    </Row>

                    <Button styleIcon={'save'}>Registrar</Button>


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
        </div>
    );
}

export default Create;
