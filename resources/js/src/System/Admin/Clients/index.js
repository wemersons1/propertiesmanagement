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
import Pagination from "../../../components/Pagination";
import {checkUser, firstLetterUppercase, formatMask} from "../../../Hook/util/help";
import Button from "../../../components/Button";
import SweetAlert from "../../../components/SweetAlert";

const Clients = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);

    const {token, role} = useContext(Context);

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [idDelete, setIdDelete] = useState(0);
    const [success, setSuccess] = useState(true);

    useEffect(() => {

        let params = {};
        name.length ? params['name'] = name : null;
        document.length ? params['cpf'] = document : null;
        email.length ? params['email'] = email : null;
        phone.length ? params['phone'] = formatMask(phone) : null;
        params['page'] = page;

        axios.get('/api/v1/clients', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setClients(response.data.data.map(employee => {

                let createdTreated =  'Indisponível'

                if(employee.created_at) {

                    createdTreated = employee.created_at.split('T');
                    createdTreated = createdTreated[0].split('-');
                    createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]}`;
                }

                return {
                    id: employee.id,
                    name: firstLetterUppercase(employee.name),
                    email: employee.email ?? 'Não informado',
                    document: employee.document ?? 'Não informado',
                    rg: employee.rg ?? 'Não informado',
                    created_at: createdTreated,
                    phone1: employee.phone1 ?? 'Não informado'
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
            Header: 'Telefone',
            accessor: 'phone1'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'CPF',
            accessor: 'document'
        },
        {
            Header: 'RG',
            accessor: 'rg'
        },
        {
            Header: 'Data de registro',
            accessor: 'created_at'
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/clients/${row.row.original.id}`} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>

                    {
                        role !== 'admin' ? null :
                            <Button
                                type={'destroy'}
                                onClick={() => {
                                    setShow(true);
                                    setIdDelete(row.row.original.id)
                                }}
                            >
                            </Button>
                    }

                </>
            ),
        }

    ], []);

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/clients/${idDelete}`, {
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

            {
                (role === 'seller' ) ? <h1>Clientes</h1> :
                    <HeaderButtonPage
                        h1={'Clientes'}
                        type={'store'}
                        to={'/clients/create'}
                        title={'Cadastrar funcionário'}
                    />
            }

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
                clients.length ? <Table columns={columns} data={clients}/> :
                <Message type={'info'}>Nenhum cliente cadastrado</Message>
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
                text={'Tem certeza que deseja excluir o cliente ?'}
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

export default Clients;
