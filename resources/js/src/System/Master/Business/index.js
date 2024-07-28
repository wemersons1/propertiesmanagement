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

const Business = () => {
    const [loading, setLoading] = useState(true);
    const [business, setBusiness] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);

    const [name, setName] = useState('');

    const {token} = useContext(Context);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;

        axios.get(`/api/v1/companies?page=${page}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {
            setBusiness(response.data.data.map(model => {
                return {
                    id: model.id,
                    name: model.name,
                    cnpj: model.cnpj,
                    email: model.email,
                    phone1: model.phone1,
                    state: model?.address?.state ?? 'NÃO INFORMADO',
                    city: model?.address?.city ?? 'NÃO INFORMADO'
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
            Header: 'Telefone',
            accessor: 'phone1',
        },
        {
            Header: 'Estado',
            accessor: 'state',
        },
        {
            Header: 'Cidade',
            accessor: 'city',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/business/${row.row.original.id}`}>
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
                h1={'Empresas'}
                type={'store'}
                to={'/business/create'}
                title={'Cadastrar empresa'}
            />

            <Filter>
                <Row>
                    <Col lg={4}>
                        <Input
                            label={'Nome'}
                            value={name}
                            onChange={e => {
                                setName(e.target.value)
                                setPage(1);
                            }}
                        />
                    </Col>
                </Row>

            </Filter>

            {
                business.length ? <Table columns={columns} data={business}/> :
                    <Message type={'info'}>Nenhum empresa encontrada</Message>
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

export default Business;
