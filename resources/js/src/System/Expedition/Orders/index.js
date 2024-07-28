import React, {useState, useEffect, useContext, useMemo} from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Message from "../../../components/Message";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {Link} from "react-router-dom";
import {IoMdSearch} from "react-icons/io";
import {translateStatusPayment, translateStatusProduct, firstLetterUppercase} from "../../../Hook/util/help";

const Orders = () => {

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);

    const [name, setName] = useState('');

    const {token} = useContext(Context);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;

        axios.get(`/api/v1/orders?page=${page}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setOrders(response.data.data.map(model => {

                let createdTreated = model.created_at.split('T')[0];
                createdTreated = createdTreated.split('-');
                createdTreated = `${createdTreated[2]}/${createdTreated[1]}/${createdTreated[0]} ` + model.created_at.split('T')[1].split('.')[0];

                return {
                    id: model.id,
                    client: firstLetterUppercase(model.client.name),
                    status: translateStatusPayment(model.status.name),
                    created_at: createdTreated,
                    receive: translateStatusProduct(model.status_object.name)
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
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Cliente',
            accessor: 'client',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Recebimento',
            accessor: 'receive',
        },
        {
            Header: 'Data',
            accessor: 'created_at',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/orders/${row.row.original.id}`} >
                        <IoMdSearch  size={20} color="#2F4F4F" />
                    </Link>
                </>
            ),
        }
    ], []);

    if (loading) return (<Spinner/>);

    return (
        <>
            <h1>Pedidos</h1>

            <Filter>
                <Row>
                    <Col lg={4}>
                        <Input
                            label={'Nome'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Col>
                </Row>

            </Filter>

            {
                orders.length ? <Table columns={columns} data={orders}/> :
                    <Message type={'info'}>Nenhum pedido encontrada</Message>
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

export default Orders;
