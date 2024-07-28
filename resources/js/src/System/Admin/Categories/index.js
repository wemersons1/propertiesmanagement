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
import {firstLetterUppercase} from "../../../Hook/util/help";
import SweetAlert from "../../../components/SweetAlert";
import Button from "../../../components/Button";

const Brands = () => {
    const [loading, setLoading] = useState(true);
    const [business, setBusiness] = useState([]);
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


    const [name, setName] = useState('');

    const {token, role} = useContext(Context);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;

        axios.get(`/api/v1/brands?page=${page}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {
            setBusiness(response.data.data);
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);
        }).finally(() => {
            setLoading(false);
        });
    }, [page, name, success]);

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Nome',
            Cell: (row) => (
                <span style={{whiteSpace: "nowrap", overflow: "hiden", textOverflow: "ellipsis"}}>
                  {firstLetterUppercase(row.row.original.name)}
                </span>
            ),
        },
        {
            Header: 'Descrição',
            Cell: (row) => (
                <span style={{whiteSpace: "nowrap", overflow: "hiden", textOverflow: "ellipsis"}}>
                  {row.row.original.description ? firstLetterUppercase(row.row.original.description) : '...'}
                </span>
            ),
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/categories/${row.row.original.id}`}>
                        <FaEdit size={20} color="#2F4F4F"/>
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

        axios.delete(`/api/v1/brands/${idDelete}`, {
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


    if (loading && role?.length) return (<Spinner/>);

    return (
        <>

            {
                role === 'admin' ?
                    <HeaderButtonPage
                        h1={'Categorias'}
                        type={'store'}
                        to={'/categories/create'}
                        title={'Cadastrar'}
                    /> : null
            }

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
                business.length ? <Table columns={columns} data={business}/> :
                    <Message type={'info'}>Nenhuma categoria cadastrada</Message>
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
                text={'Tem certeza que deseja excluir a categoria ?'}
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

export default Brands;
