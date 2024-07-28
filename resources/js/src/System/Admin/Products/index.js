import React, {useState, useEffect, useContext} from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Filter from "../../../components/Filter";
import Input from "../../../components/Input";
import Message from "../../../components/Message";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import {Row, Col, Nav} from 'react-bootstrap';
import axios from 'axios';
import Card from "../../../components/Card";
import InputMoney from "../../../components/InputMoney";
import Button from "../../../components/Button";
import styles from './Products.module.css';
import {AiOutlineDelete} from 'react-icons/ai';
import SweetAlert from "../../../components/SweetAlert";
import Select2 from "../../../components/Select2";
import {isObjectEmpty} from "../../../Hook/util/help";

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [productsSize, setProductsSize] = useState([]);
    const [indexChanged, setIndexChanged] = useState([]);
    const [configs, setConfigs] = useState([]);

    const [show, setShow] = useState(false);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [idDelete, setIdDelete] = useState(0);
    const [success, setSuccess] = useState(true);
    const [allCategories, setAllCategories] = useState([]);
    const [categoryChange, setCategoryChange] = useState({});

    const [name, setName] = useState('');

    const {token, role} = useContext(Context);

    useEffect(() => {

        axios.get('/api/v1/brands?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllCategories(response.data.map(category => {
                return {
                    value: category.id,
                    label: category.name
                }
            }));

        });

    }, []);

    useEffect(() => {
        let params = {};
        name.length ? params['name'] = name : null;
        !isObjectEmpty(categoryChange) ? params['category_id'] = categoryChange.value : null;

        axios.get(`/api/v1/products?page=${page}&size=16`,{

            headers: {
                Authorization: `Bearer ${token}`
            }, params

        }).then(response => {

            setProducts(response.data.data);
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);

            let productsSizeTreated = new Array(response.data.data.length);
            let configTreated = new Array(response.data.data.length);

            const newArrayIndexes = []

            response.data.data.forEach((product, index) => {

                newArrayIndexes.push(0);
                productsSizeTreated[index] = [];
                configTreated[index] = [];

                product.configs.forEach(config => {

                    productsSizeTreated[index].push(config.size);

                    if(products) {

                        let verify = false;

                        for(let i = 0; i < products.length; i ++) {

                            for(let j = 0; j < products[i].length; j ++) {

                                if(products[i][j].id === config.id) {

                                    verify = true;
                                    configTreated[index].push({...config, quantityChanged: products[i][j].quantityChanged, price_final: config.price});
                                    break;
                                }

                            }

                        }


                        if(!verify)  configTreated[index].push({...config, quantityChanged: 0, price_final: config.price});

                    } else {

                        configTreated[index].push({...config, quantityChanged: 0, price_final: config.price});

                    }

                })
            });

            setIndexChanged(newArrayIndexes);

            setConfigs(configTreated);

            setProductsSize(productsSizeTreated);

        }).finally(() => {
            setLoading(false);
        });
    }, [page, name, success, categoryChange]);

    const renderOptionsSize = (index) => {

        const setIndex = (i) => {

            const copyIndex = [...indexChanged];
            copyIndex[index] = i;
            setIndexChanged(copyIndex);

        }

        if(productsSize && productsSize[index]) {
            return productsSize[index].map((size, i) => {
                return (
                    <Nav.Item key={i}>
                        <Nav.Link onClick={() => setIndex(i)} eventKey={size.name} >{size.name}</Nav.Link>
                    </Nav.Item>
                )
            })
        }

    }

    const setConfigsChange = (e, index) => {

        let copyConfigs = [...configs];

        copyConfigs[index][indexChanged[index]] = {...configs[index][indexChanged[index]], [e.target.name]: e.target.value};

        setConfigs(copyConfigs);

    }

    const renderItemsOptionsSelect = (index) => {

        if(configs && configs[index] && configs[index][indexChanged[index]]) {

            return (
                <div>
                    <Input
                        className={'text-center'}
                        type={"number"}
                        min={0}
                        value={configs[index][indexChanged[index]]?.quantity ?? 0}
                        name={'quantity'}
                        disabled
                        label={'Quantidade'}
                        placeholder={'Quantidade, Ex: 50'}
                    />

                    <InputMoney
                        min={0}
                        disabled
                        value={configs[index][indexChanged[index]]?.price ?? 0}
                        onChange={(e, value) => {

                            let event = {
                                target: {
                                    name: "price",
                                    value: value
                                }
                            };

                            setConfigsChange(event, index)

                            setPage(1);
                        }}
                        required
                        name={'price'}
                        label={'Preço'}
                    />

                </div>
            );

        }
    }

    const renderProducts = () => {


        return products.map((product, index) => {

            const renderDelete = () => {

                return (
                    <Button key={index}
                        className={styles.Bigger}
                        onClick={() => {
                            setShow(true);
                            setIdDelete(product.id)
                        }}
                    >
                        <AiOutlineDelete className={'icon-left'} size={20} style={{fill: "white"}}/>
                        Apagar
                    </Button>
                )
            }

            if(productsSize && productsSize[index] && productsSize[index][indexChanged[index]]) {

                return (
                    <Col key={product.id} lg={3}>
                        <Card
                            type={'model-4'}
                            info={product}
                            render={ <Nav variant="pills" defaultActiveKey={(productsSize && productsSize[index] && productsSize[index][0]) ? productsSize[index][0]?.name : ''}> {renderOptionsSize(index)} </Nav>}
                            renderInput={renderItemsOptionsSelect(index)}
                            size={(productsSize && productsSize[index][indexChanged[index]] && productsSize[index][indexChanged[index]]) ? productsSize[index][indexChanged[index]] : null}
                            setConfigsChange={setConfigsChange}
                            index={index}
                            indexChanged={(indexChanged && indexChanged[index]) ? indexChanged[index] : null}
                            configs={configs}
                            renderDelete={renderDelete}
                        />

                    </Col>

                );

            }

        });
    }

    const deleteItem = () => {

        setShow(false);

        axios.delete(`/api/v1/products/${idDelete}`, {
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
                role === 'admin' ?
                    <HeaderButtonPage
                        h1={'Produtos'}
                        type={'store'}
                        to={'/products/create'}
                        title={'Cadastrar'}
                        showStore={false}
                    /> : null
            }

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
                    <Col lg={4}>
                        <Select2
                            label={'Categoria'}
                            options={allCategories}
                            value={categoryChange}
                            onChange={value => {
                                setCategoryChange(value ?? {})
                                setPage(1);
                            }}
                            isClearable
                        />
                    </Col>
                </Row>

            </Filter>

            {
                products.length ?
                    <Row>
                        {renderProducts()}
                    </Row> :
                    <Message type={'info'}>Nenhum produto encontrado</Message>
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
                text={'Tem certeza que deseja excluir o produto ?'}
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

export default Products;
