import React, {useState, useEffect, useContext, useMemo} from 'react';
import HeaderButtonPage from '../../../components/HeaderButtonPage';
import Context from "../../../Hook/Context";
import Table from "../../../components/Table";
import Spinner from "../../../components/Spinner";
import Message from '../../../components/Message';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import Filter from "../../../components/Filter";
import {Row, Col} from 'react-bootstrap';
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import SweetAlert from "../../../components/SweetAlert";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import Input from "../../../components/Input";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';
import Select from "../../../components/Select";
import {GiAlarmClock} from 'react-icons/gi';
import {BsClockHistory} from 'react-icons/bs';
import Card from '../../../components/Card';
import {BiPrinter} from 'react-icons/bi';
import styles from './Expenses.module.css';
import axios from 'axios';
import {RiFileExcel2Line} from 'react-icons/ri';


const Expenses = () => {

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(true);
    const [page, setPage] = useState(1);
    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [idDelete, setIdDelete] = useState(0);
    const [from, setFrom] = useState(new Date().toJSON().slice(0,10));
    const [to, setTo] = useState(new Date().toJSON().slice(0,10));
    const [allPaymentsForms, setAllPaymentsForms] = useState([]);
    const [paymentChange, setPaymentChange] = useState(0);
    const [loadingExpenses, setLoadingExpenses] = useState(false);
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(0);
    const [situation, setSituation] = useState(0);
    const [send, setSend] = useState(false);

    const {token, role, user} = useContext(Context);

    useEffect(() => {

        axios.get('/api/v1/payment-forms', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllPaymentsForms(response.data);
        });

    }, []);

    useEffect(() => {

        setLoadingExpenses(true);

        let params = {};
        params['page'] = page;
        params['from'] = from;
        params['to'] = to;
        +paymentChange ? params['payment_form_id'] = paymentChange : null;
        +type ? params['expenses_type_id'] = type : null;
        +status === 1 ? params['paid'] = 1 : (+status === 2 ? params['paid'] = 0 : null);

        axios.get('/api/v1/expenses?size=10', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setExpenses(response.data.data.data.map(item => {

                let datePayment = item.date_payment.split(' ')[0].split('-');
                datePayment = `${datePayment[2]}/${datePayment[1]}/${datePayment[0]}`;

                let situation = 0 ? <span className={'text-warning'}><BsClockHistory className={'icon-left icon-warning'}/>Em atraso</span> : <span className={'text-success'}><GiAlarmClock className={'icon-left icon-success'}/>Em dias</span>

                return {
                    ...item,
                    status: item.type.name === 'in' ? <span><AiOutlineArrowUp className={'icon-left icon-success'}/>Entrada</span> : <span><AiOutlineArrowDown className={'icon-left icon-danger'}/>Saída</span>,
                    total: parseFloat(item.value).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL'
                    }),
                    date_payment: datePayment,
                    payment_form: item.payment_form.name,
                    url: item.payment_id ? `/orders/${item.payment.cart_id}` : (item.payment_employee_advisor_id ?
                    `/payments-employees/${item.payment_employee_advisor_id}` : `/expenses/${item.id}`)
                }
            }));
            setTotal(response.data);
            setTotalItemsCount(response.data.data.total);
            setItemsCountPerPage(response.data.data.per_page);

        }).finally(() => {
            setLoading(false);

            setLoadingExpenses(false);
        });

    }, [page, success, from, to, paymentChange, type, status]);

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Descrição',
            accessor: 'description'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Data',
            accessor: 'date_payment'
        },
        {
            Header: 'Forma pgto.',
            accessor: 'payment_form'
        },
        {
            Header: 'Total',
            accessor: 'total'
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={row.row.original.url} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>

                </>
            ),
        }

    ], []);

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/expenses/${idDelete}`, {
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

    const getPrint = () => {

        let params = {};
        params['from'] = from;
        params['to'] = to;
        params['pdf'] = true;

        axios.get('/api/v1/expenses', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            let logo = user.company?.imageLogoCode.length > 15 ? user.company.imageLogoCode : '';

            document.getElementById('section-to-print').innerHTML = response.data.content_html.split('<body>')[1].split('</body>')[0];
            document.getElementById('logo').src = logo;

            window.print();

        });

    }

    const downloadExcel = () => {

        setSend(true);
        let params = {from, to, excel: true};

        axios.get(`/api/v1/expenses`, {
            responseType: 'blob',
            headers: {
                "Authorization": `Bearer ${token}`
            }, params
        }).then( response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;

            let fromTreated = from.split('-');
            fromTreated = `${fromTreated[2]}/${fromTreated[1]}/${fromTreated[0]}`;

            let toTreated = to.split('-');
            toTreated = `${toTreated[2]}/${toTreated[1]}/${toTreated[0]}`;

            link.setAttribute('download', `Entradas_saídas_${fromTreated} - ${toTreated}.xlsx`);
            document.body.appendChild(link);
            link.click();
        }).finally(() => setSend(false))
    }


    if(loading) return (<Spinner />);

    return (
        <div>

            <div id={"section-to-print"}>

            </div>

            <HeaderButtonPage
                h1={'Entrada/Saída'}
                type={'store'}
                to={'/expenses/create'}
                showStore={true}
            />

            <Filter>
                <Row>
                    <Col lg={3}>
                        <Input
                            label={'Período inicial'}
                            value={from}
                            type={'date'}
                            onChange={e => setFrom(e.target.value)}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Período final'}
                            value={to}
                            type={'date'}
                            onChange={e => setTo(e.target.value)}
                        />
                    </Col>
                    <Col lg={3}>
                        <Select
                            onChange={e => setType(e.target.value)}
                            value={type}
                            label={'Tipo'}
                        >
                            <option value={0}>Todos</option>
                            <option value={2}>Saída</option>
                            <option value={1}>Entrada</option>

                        </Select>
                    </Col>
                    <Col lg={3}>
                        <Select
                            onChange={e => setPaymentChange(e.target.value)}
                            value={paymentChange}
                            label={'Tipo de pgto.'}
                        >
                            <option value={0}>Todos</option>

                            {
                                allPaymentsForms.map(payment => {
                                    return (<option key={payment.id} value={payment.id}>{payment.name}</option>);
                                })
                            }
                        </Select>
                    </Col>
                    {/* <Col lg={3}>
                        <Select
                            onChange={e => setStatus(e.target.value)}
                            value={status}
                            label={'Status'}
                        >
                            <option value={0}>Todos</option>
                            <option value={1}>Concluído</option>
                            <option value={2}>Pendente</option>

                        </Select>
                    </Col>
                    <Col lg={3}>
                        <Select
                            onChange={e => setSituation(e.target.value)}
                            value={situation}
                            label={'Situação'}
                        >
                            <option value={0}>Todos</option>
                            <option value={1}>Á vencer</option>
                            <option value={1}>Em atraso</option>
                            <option value={3}>Em dias</option>

                        </Select>
                    </Col> */}
                </Row>
            </Filter>

            <Row className={'d-flex justify-content-end'}>
                <Col md={3}>
                    <Button disabled={send} onClick={downloadExcel}><RiFileExcel2Line style={{fill: "white"}} className={'icon-left'}/> Excel {send && <Spinner size={'small'} />}</Button>
                </Col>
            </Row>

            {
                loadingExpenses ? <Spinner/> :
                    <>
                        {
                            expenses.length ? <Table columns={columns} data={expenses}/> :
                                <Message type={'info'}>Nenhuma despesa registrada período</Message>
                        }

                        {
                            (totalItemsCount > itemsCountPerPage) &&
                            <Pagination
                            handlePageChange={e => setPage(e)}
                            activePage={page}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={totalItemsCount}
                            pageRangeDisplayed={5}
                        />
                        }
                    </>
            }


            <Row className={styles.Border}>

                <Col md={'3'}>
                        <Card
                            type={'model-3'}
                            title={'Total entradas'}
                            icon={
                                <AiOutlineArrowUp
                                    className={"icon-left icon-success"}
                                    size={50}
                                />
                            }
                            value={
                                parseFloat(total.total_in).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />

                </Col>
                <Col md={'3'}>
                        <Card
                            type={'model-3'}
                            title={'Total saída'}
                            icon={
                                <AiOutlineArrowDown
                                    className={"icon-left icon-danger"}
                                    size={50}
                                />
                            }
                            value={
                                parseFloat(total.total_out).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />

                </Col>
                <Col md={'3'}>
                        <Card
                            type={'model-3'}
                            title={'Saldo do caixa'}
                            icon={
                                <RiMoneyDollarCircleLine
                                    className={"icon-left"}
                                    size={50}
                                />
                            }
                            value={
                                (parseFloat(total.total_in) - parseFloat(total.total_out)).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />
                </Col>
                <Col md={'3'} className={'d-flex justify-content-end'}>
                    <button className={styles.Print} onClick={getPrint}>
                        <span>Impressão</span> <BiPrinter size={30} style={{fill: "white"}}/>
                    </button>
                </Col>
            </Row>

            {
                role === 'clerk' ? null :

                <Row className={styles.ResultGeneral}>
                <Col md={'3'}>
                        <Card
                            type={'model-3'}
                            title={'Custo produtos vendidos'}
                            icon={
                                <RiMoneyDollarCircleLine
                                    className={"icon-left icon-danger"}
                                    size={45}
                                />
                            }
                            value={
                                parseFloat(total.total_products_sold).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />

                </Col>
                <Col md={'3'}>
                        <Card
                            type={'model-3'}
                            title={'Resultado geral'}
                            icon={
                                <RiMoneyDollarCircleLine
                                    className={"icon-left icon-success"}
                                    size={45}
                                />
                            }
                            value={
                                ((parseFloat(total.total_in) - parseFloat(total.total_out)) - parseFloat(total.total_products_sold)).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />

                </Col>
        </Row>

            }

            <SweetAlert
                onConfirm={deleteItem}
                onCancel={() => setShow(false)}
                showCancel={true}
                title={'Atenção'}
                type={'warning'}
                btnConfirmStyle={'success'}
                text={'Tem certeza que deseja excluir despesa ?'}
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

        </div>
    );
}

export default Expenses;
