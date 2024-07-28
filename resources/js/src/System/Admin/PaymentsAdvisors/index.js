import React, {useState, useEffect, useContext, useMemo} from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Message from "../../../components/Message";
import Pagination from "../../../components/Pagination";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {formatCnpj, formatDate, isObjectEmpty} from "../../../Hook/util/help";
import {MdOutlineReceiptLong} from 'react-icons/md';
import styles from './PaymentsAdvisors.module.css'
import Button from "../../../components/Button";
import SweetAlert from "../../../components/SweetAlert";
import Select from "../../../components/Select";
import Select2 from "../../../components/Select2";
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai";
import {MdOutlineCreditCardOff} from 'react-icons/md';

const PaymentsAdvisors = () => {
    const [loading, setLoading] = useState(true);
    const [payments, setPayments] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [from, setFrom] = useState(new Date().toJSON().slice(0,10));
    const [to, setTo] = useState(new Date().toJSON().slice(0,10));
    const [allItemsPayment, setAllItemsPayment] = useState([]);
    const [operator, setOperator] = useState('');
    const [payment, setPayment] = useState({});

    const [name, setName] = useState('');

    const {token, role, user} = useContext(Context);

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [idDelete, setIdDelete] = useState(0);
    const [success, setSuccess] = useState(true);
    const [typeChanged, setTypeChanged] = useState('');
    const [haveAdvisor, setHaveAdvisor] = useState(null);
    const [totalSales, setTotalSales] = useState(0);
    const [datTable, setDataTable] = useState([]);
    const [nameEmployee, setNameEmployee] = useState('');
    const [type, setType] = useState(0);
    const [allSellers, setAllSellers] = useState([]);
    const [allAdvisors, setAllAdvisors] = useState([]);
    const [allEmployees, setAllEmployees] = useState([]);
    const [employeeChanged, setEmployeeChanged] = useState({});
    const [allTransactions, setAllTransactions] = useState([]);
    const [transactionChange, setTransactionChange] = useState({});

    const [total, setTotal] = useState(0);


    useEffect(async () => {

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

        let employeesTreated = [], advisorsTreated = [];

        const employees = await axios.get('/api/v1/employees?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const advisors = await axios.get('/api/v1/advisors?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        employees.data.forEach(item => {

            employeesTreated.push({value: item.id, label: `Vendedor - ${item.name}`})

        });

        setAllSellers([...employeesTreated]);


        advisors.data.forEach(item => {

            advisorsTreated.push({value: item.id, label: `Assessor - ${item.name}`})
            employeesTreated.push({value: item.id, label: `Assessor - ${item.name}`})

        });

        setAllAdvisors([...advisorsTreated]);


        setAllEmployees(employeesTreated)


    }, []);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;
        params['from'] = from;
        params['to'] = to;
        +type ? params['type_id'] = type : null;
        !isObjectEmpty(employeeChanged) ? params['employee'] = employeeChanged.label.replaceAll('Vendedor - ', '').replaceAll('Assessor - ', '') : null;
        !isObjectEmpty(transactionChange) ? params['payment_form_id'] = transactionChange.value : null;

        axios.get(`/api/v1/payment-employee-advisor?page=${page}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setTotal(parseFloat(response.data.total_paid));

            setPayments(response.data.data.data.map(payment => {

                return {
                    ...payment,
                    name: payment?.seller?.name ?? payment?.advisor?.name,
                    type: payment?.seller ? 'Vendedor' : 'Assessor',
                    period: `${formatDate(payment.date_init)} - ${formatDate(payment.date_end)}`,
                    amount: parseFloat(payment.amount).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    }),
                    id: payment.id,
                    operator: payment.user.name,
                    date_init: payment.date_init,
                    date_end: payment.date_end,
                    employee_id: payment.seller_id ?? payment.advisor_id,
                    have_advisor: +payment.advisor_id > 0,
                    receipt_verified: payment.receipt_verified ? <AiOutlineCheckCircle className={'icon-success'}/> : <MdOutlineCreditCardOff className={'icon-verify'}/>,
                    payment_form: payment.payment_form.name
                }
            }));

            setTotalItemsCount(response.data.data.total);
            setItemsCountPerPage(response.data.data.per_page);
        }).finally(() => {
            setLoading(false);
        });
    }, [page, name, from, to, success, type, employeeChanged, transactionChange]);


    const generateReceipt = (item, index) => {

        setNameEmployee(item?.advisor ? item.advisor.name : item.seller.name);
        setTypeChanged(item.type);
        setHaveAdvisor(item.advisor_id);
        let params = {id: item.employee_id, from: item.date_init, to: item.date_end, type: item.type === 'Vendedor' ? 'seller' : 'advisor'};

        if(item.type === 'Vendedor') {

            params['payment_seller_id'] = item.id;

        } else {

            params['payment_advisor_id'] = item.id;

        }

        setOperator(item.operator);
        setPayment(item);

        axios.get('/api/v1/payment-employee-advisor/commission?size=5000', {

            headers: {
                Authorization: `Bearer ${token}`
            }, params

        }).then(response => {

            const data = [];
            let totalTreated = 0;

            let total = 0;

            response.data?.all_transactions.data.forEach(item => {

                if(typeChanged === 'Vendedor' && !haveAdvisor) {

                    totalTreated = +item.quantity * parseFloat(item.price_final);

                } else if(typeChanged === 'Vendedor') {

                    totalTreated = +item.quantity * parseFloat(item.price)

                } else {
                    totalTreated = +item.quantity * parseFloat(item.price_final)
                }

                total = total + totalTreated;

                data.push({
                    product: item.product,
                    quantity: item.quantity,
                    total: parseFloat(totalTreated).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    }),
                    gains: parseFloat(item.commission).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    }),
                });
            })

            setTotalSales(total)
            setDataTable(data);
            setAllItemsPayment(response.data.all_transactions.data);

            window.print();


            let dataVerified = {};
            dataVerified['payment_id'] = item.id;
            dataVerified['type'] = 'advisor_seller';

            axios.post('/api/v1/receipts/verified', dataVerified,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(() => {
                const copyPayments = [...payments];
                copyPayments[index].receipt_verified = <AiOutlineCheckCircle className={'icon-success'}/>;
                setPayments(copyPayments);
            });

        });
    }

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Tipo',
            accessor: 'type',
        },
        {
            Header: 'Funcionário',
            accessor: 'name',
        },
        {
            Header: 'Operador',
            accessor: 'operator',
        },
        {
            Header: 'Período',
            accessor: 'period',
        },
        {
            Header: 'Forma pgto.',
            accessor: 'payment_form',
        },
        {
            Header: 'Valor pago',
            accessor: 'amount',
        },
        {
            Header: 'Impresso',
            accessor: 'receipt_verified',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/payments-employees/${row.row.original.id}`}>
                        <FaEdit size={20} color="#2F4F4F"/>
                    </Link>
                    <button style={{background: "transparent"}} onClick={() => generateReceipt(row.row.original, row.row.index)}>
                        <MdOutlineReceiptLong size={23} color="#2F4F4F" style={{fill: "#FFD700"}}/>
                    </button>
                    <Button
                        type={'destroy'}
                        onClick={() => {
                            setShow(true);
                            setIdDelete(row.row.original.id)
                        }}
                    >
                    </Button>
                </>
            ),
        }
    ], [payments]);

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/payment-employee-advisor/${idDelete}`, {
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

        }).finally(() =>  setSweetShow(true));

    }

    const renderProducts = () => {

        const columnsTable = [
            {
                Header: 'Nome',
                accessor: 'product',
            },
            {
                Header: 'Qtd',
                accessor: 'quantity',
            },
            {
                Header: 'Sub total',
                accessor: 'total',
            },

        ]

        return (

            <Table
                size={'small'}
                columns={columnsTable}
                data={datTable}
            />

        )

    }

    if (loading && role?.length) return (<Spinner/>);

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

                    <h2>Data: {payment?.created_at && formatDate(payment?.created_at?.split('T')[0])}</h2>
                    <h2>Operador: {operator}</h2>
                    <h2>{typeChanged}: {nameEmployee}</h2>
                    <div className={'border my-2'}></div>

                    <h2>Produtos</h2>

                    {
                      renderProducts()
                    }

                    <div className={'border my-2'}></div>

                    <h2>Dados do pagamento</h2>
                    <h2>Forma de pagamento {payment?.payment_form?.name}</h2>
                    <h2 style={{textAlign: "right"}}>Total: {parseFloat(totalSales).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    })}</h2>
                    <h2 style={{textAlign: "right"}}>Comissão: {payment.amount}</h2>

                    {
                        payment.description ?
                            <>
                                <div className={'border my-2'}></div>
                                <h2 className={'my-2'}>Descrição: </h2>
                                <h2>{payment.description ?? ''}</h2>
                            </> : null
                    }

                </div>

            </div>

            <HeaderButtonPage
                showStore={true}
                h1={'Pagamentos'}
                type={'store'}
                to={'/payments-employees/create'}
                title={'Cadastrar'}
            />

            <Filter>
                <Row>
                    <Col lg={3}>
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
                    <Col lg={3}>
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
                    <Col lg={3}>
                       <Select
                            label={'Tipo'}
                            value={type}
                            onChange={e => {
                                setType(e.target.value)
                                setPage(1);
                            }}
                       >
                           <option value={0}>Todos</option>
                           <option value={1}>Vendedor</option>
                           <option value={2}>Assessor</option>

                       </Select>
                    </Col>
                    <Col lg={3}>
                        <Select2
                            label={'Funcionário'}
                            value={employeeChanged}
                            onChange={value => {
                                setEmployeeChanged(value ?? {})
                                setPage(1);
                            }}
                            options={!+type ? allEmployees : +type === 1 ? allSellers : allAdvisors}
                            isClearable
                        />
                    </Col>
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

            <h1 style={{textAlign: "right"}}>Total: {total.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            })}</h1>

            {
                payments.length ? <Table columns={columns} data={payments}/> :
                    <Message type={'info'}>Nenhum pagamento realizado</Message>
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

            <SweetAlert
                onConfirm={deleteItem}
                onCancel={() => setShow(false)}
                showCancel={true}
                title={'Atenção'}
                type={'warning'}
                btnConfirmStyle={'success'}
                text={'Tem certeza que deseja deletar pagamento ?'}
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

export default PaymentsAdvisors;
