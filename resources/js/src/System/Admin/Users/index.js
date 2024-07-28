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
import {firstLetterUppercase, formatTypeUser} from "../../../Hook/util/help";

const Users = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);

    const [name, setName] = useState('');

    const {token} = useContext(Context);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;

        axios.get(`/api/v1/users?page=${page}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setUsers(response.data.data.map(user => {
                return {
                    id: user.id,
                    name: firstLetterUppercase(user.name),
                    company: user?.company?.name ? firstLetterUppercase(user.company.name) : 'NÃO DISPONÍVEL',
                    email: user.email
                }
            }));
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);
        }).finally(() => {
            setLoading(false);
        });
    }, [page, name]);

    const columns = useMemo(() => [
        {
            Header: 'Nome',
            accessor: 'name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Empresa',
            accessor: 'company',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/users/${row.row.original.id}`}>
                        <FaEdit size={20} color="#2F4F4F"/>
                    </Link>
                </>
            ),
        }
    ], []);

    if (loading) return (<Spinner/>);

    return (
        <>
            <HeaderButtonPage
                h1={'Usuários'}
                type={'store'}
                to={'/users/create'}
                title={'Cadastrar'}
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
                            label={'Nome'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Nome'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Col>
                </Row>
            </Filter>

            {
                users.length ? <Table columns={columns} data={users}/> :
                    <Message type={'info'}>Nenhum usuário encontrado</Message>
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

        </>
    );
}

export default Users;
