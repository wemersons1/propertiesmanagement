import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Spinner } from 'react-bootstrap';
import HeaderButtonPage from '../../../components/HeaderButtonPage';
import Filter from '../../../components/Filter';
import Input from '../../../components/Input';
import Pagination from '../../../components/Pagination';
import SweetAlert from '../../../components/SweetAlert';
import Message from '../../../components/Message';
import Context from '../../../Hook/Context';
import Table from '../../../components/Table';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';

const Plans = () => {

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(true);
    const [page, setPage] = useState(1);
    const [plans, setPlans] = useState([]);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [idDelete, setIdDelete] = useState(0);
    const [type, setType] = useState(0);
    const [name, setName] = useState('');
    const [loadingPlans, setLoadingPlans] = useState(true);

    const { token } = useContext(Context);

    useEffect(() => {

        let params = {};
        name.length ? params['name'] = name : null;
        +type ? params['type_id'] = type : null;

        axios.get('/api/v1/plans', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            setPlans(response.data.data.map(plan => {

                return {
                    ...plan,
                    category: plan?.category?.name ?? 'SEM CATEGORIA CADASTRADA',
                    name: plan.name,
                    url: `/plans/${plan.id}`,
                    value_total: parseFloat(plan.value_total).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }),
                    value_by_month: parseFloat(plan.value_by_month).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }),
                    active: plan.active ? <BsCheckCircle className={"icon-success"} /> : <VscError className={"icon-danger"} />
                }
            }))

            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);

        }).finally(() => {
            setLoadingPlans(false);

        });

    }, [page, type, name]);

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Nome',
            accessor: 'name'
        },
        {
            Header: 'Categoria',
            accessor: 'category'
        },
        {
            Header: 'Valor mensal',
            accessor: 'value_by_month'
        },
        {
            Header: 'Valor total',
            accessor: 'value_total'
        },
        {
            Header: 'Qtd. usuários',
            accessor: 'quantity_users'
        },
        {
            Header: "Ativo",
            accessor: 'active'
        },
        {
            Header: 'Ação',
            Cell: (row) => (
                <>
                    <Link to={row.row.original.url} >
                        <IoMdSearch size={20} color="#2F4F4F" />
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

        }).finally(() => setSweetShow(true));

    }


    if (loadingPlans) return (<Spinner />);

    return (
        <div>
            <HeaderButtonPage
                h1={'Planos'}
                type={'store'}
                to={'/plans/create'}
                showStore={true}
            />

            <Filter>
                <Row>

                    <Col lg={3}>
                        <Input
                            onChange={e => setName(e.target.value)}
                            value={name}
                            label={'Nome'}
                        />

                    </Col>
                </Row>
            </Filter>



            {
                loadingPlans ? <Spinner /> :
                    <>
                        {
                            plans.length ? <Table columns={columns} data={plans} /> :
                                <Message type={'info'}>Nenhum plano registrado</Message>
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

export default Plans;
