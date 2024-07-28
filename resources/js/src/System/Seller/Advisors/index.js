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
import SweetAlert from "../../../components/SweetAlert";
import Button from "../../../components/Button";

const Advisors = () => {
    const [loading, setLoading] = useState(true);
    const [advisors, setAdvisors] = useState([]);
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

    const [name, setName] = useState('');

    const {token, role} = useContext(Context);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;
        phone.length ? params['phone'] = phone: null;

        let url = '';

        if(role === 'seller') {

            url = `/api/v1/advisors?page=${page}`;
        } else {

            url = `/api/v1/advisors?page=${page}`;
        }

        axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setAdvisors(response.data.data.map(advisor => {

                return {
                    ...advisor,
                    email: advisor.email ?? 'Não informado',
                    document: advisor.document ?? 'Não informado',
                    rg: advisor.rg ?? 'Não informado',
                    phone1: advisor.phone1 ?? 'Não informado',
                }
            }));
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);
        }).finally(() => {
            setLoading(false);
        });
    }, [page, name, success, phone]);

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
            Header: 'Cpf',
            accessor: 'document',
        },
        {
            Header: 'Rg',
            accessor: 'rg',
        },
        {
            Header: 'Celular',
            accessor: 'phone1',
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={`/advisors/${row.row.original.id}`}>
                        <FaEdit size={20} color="#2F4F4F"/>
                    </Link>
                    {
                        role !== "admin" ? null :
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

        axios.delete(`/api/v1/advisors/${idDelete}`, {
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


    if (loading) return (<Spinner/>);

    return (
        <>

            {
                role === 'seller' ? <h1>Assessores</h1> :
                    <HeaderButtonPage
                        type={'store'}
                        h1={'Assessores'}
                        to={'/advisors/create'}
                    />
            }

            <Filter>
                <Row>
                    <Col lg={3}>
                        <Input
                            label={'Nome'}
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                                setPage(1);
                            }}
                        />
                    </Col>
                    <Col lg={3}>
                        <Input
                            label={'Telefone'}
                            value={phone}
                            onChange={e => {
                                setPhone(e.target.value);
                                setPage(1);
                            }}
                        />
                    </Col>
                </Row>

            </Filter>

            {
                advisors.length ? <Table columns={columns} data={advisors}/> :
                    <Message type={'info'}>Nenhum Assessor encontrado</Message>
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
                text={'Tem certeza que deseja excluir o assessor ?'}
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

export default Advisors;
