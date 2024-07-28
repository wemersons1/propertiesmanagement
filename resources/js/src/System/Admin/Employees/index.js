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
import Input from "../../../components/Input";
import {firstLetterUppercase} from "../../../Hook/util/help";
import Pagination from "../../../components/Pagination";
import {BsCheckCircle} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Button from "../../../components/Button";
import SweetAlert from "../../../components/SweetAlert";

const Employees = () => {

    const [employes, setEmployes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [email, setEmail] = useState('');

    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [idDelete, setIdDelete] = useState(0);
    const [success, setSuccess] = useState(true);
    const [phone, setPhone] = useState('');

    const {token, user} = useContext(Context);

    useEffect(() => {

        let params = {};
        name.length ? params['name'] = name : null;
        document.length ? params['cpf'] = document : null;
        email.length ? params['email'] = email : null;
        phone.length ? params['phone1'] = phone : null;
        params['page'] = page;

        axios.get('/api/v1/employees', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setEmployes(response.data.data.map(employee => {

                let createdTreated =  'Indisponível'

                if(employee.created_at) {

                    createdTreated = employee.created_at.split('T');
                    createdTreated = createdTreated[0].split('-');
                    createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]}`;
                }

                let birthDateTreated;
                birthDateTreated = employee.birth_date.split('-');
                birthDateTreated = `${birthDateTreated[2]}/${birthDateTreated[1]}/${birthDateTreated[0]}`;

                return {
                    id: employee.id,
                    name: firstLetterUppercase(employee.name),
                    email: employee.email,
                    cpf: employee.cpf,
                    rg: employee.rg,
                    phone: employee.phone1 ?? 'Indisponível',
                    birth_date: birthDateTreated ?? 'Indisponível',
                    company_name: firstLetterUppercase(employee.company.name),
                    active: employee.active ? <span><BsCheckCircle className={'icon-left icon-success'}/>Ativo</span> : <span><AiOutlineCloseCircle className={'icon-left icon-red'} />Inativo</span>,
                    created_at: createdTreated,
                }
            }));

            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);

        }).finally(() => {
            setLoading(false);
        });

    }, [name, document, email, page, success, phone]);

    const columns = useMemo(() => [
        {
            Header: 'Nome',
            accessor: 'name'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'CPF',
            accessor: 'cpf'
        },
        {
            Header: 'Telefone',
            accessor: 'phone'
        },
        {
            Header: 'Data de Nascimento',
            accessor: 'birth_date'
        },
        {
            Header: 'Empresa',
            accessor: 'company_name'
        },
        {
            Header: 'Data de registro',
            accessor: 'created_at'
        },
        {
            Header: 'Status',
            accessor: 'active'
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/employees/${row.row.original.id}`} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>
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

    ], []);

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/employees/${idDelete}`, {
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


    if(loading) return (<Spinner />);

    return (
        <div>

            <HeaderButtonPage
                h1={'Funcionários'}
                type={'store'}
                to={'/employees/create'}
                title={'Cadastrar funcionário'}
            />

            <Filter>
                <Row>

                    <Col lg={3}>
                        <Input
                            label={'Nome'}
                            value={name}
                            onChange={e => {
                                setName(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Cpf'}
                            value={document}
                            onChange={e => {
                                setDocument(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Email'}
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Telefone'}
                            value={phone}
                            onChange={e => {
                                setPhone(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                </Row>
            </Filter>

            {
                employes.length ? <Table columns={columns} data={employes}/> :
                <Message type={'info'}>Nenhum funcionário cadastrado</Message>
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

            <SweetAlert
                onConfirm={deleteItem}
                onCancel={() => setShow(false)}
                showCancel={true}
                title={'Atenção'}
                type={'warning'}
                btnConfirmStyle={'success'}
                text={'Tem certeza que deseja excluir o funcionário ?'}
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

export default Employees;
