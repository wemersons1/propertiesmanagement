import React, { useState, useEffect, useContext } from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Message from "../../../components/Message";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import { Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import Button from "../../../components/Button";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import Select2 from "../../../components/Select2";
import styles from './Products.module.css';
import { isObjectEmpty } from "../../../Hook/util/help";
import Swal from "sweetalert2";
import { FaRegEdit } from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import HeaderMobile from "../../../components/Layout/Header/HeaderMobile";
import RegisterAdvisor from "./RegisterAdvisor";
import Card from "../../../components/Card";
import { useParams, useNavigate } from 'react-router-dom';
import { GiCancel } from 'react-icons/gi';

const Orders = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const showIconCart = () => {

        let products = JSON.parse(localStorage.getItem('@QuickSale:products'));
        let verify = false;
        let element = document.getElementById('show-item-cart');

        if (products) {

            for (let i = 0; i < products.length; i++) {

                if (products[i].add_cart) {

                    element.style.visibility = "visible";
                    verify = true;
                    break;
                }

            }

            if (!verify) {
                element.style.visibility = "hidden";
            }

        }

        return verify;

    }

    const [loading, setLoading] = useState(true);
    const [showModalAccessor, setShowModalAccessor] = useState(true);
    const [haveAccessor, setHaveAccessor] = useState(true);
    const [allAdvisors, setAllAdvisors] = useState([]);
    const [loadingAdvisors, setLoadingAdvisors] = useState(true);
    const [showItemCart, setShowItemCart] = useState(showIconCart);

    const [name, setName] = useState('');
    const [showRegisterClient, setShowRegisterClient] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const [products, setProducts] = useState([]);

    const { token, user } = useContext(Context);

    const [advisor, setAdvisor] = useState(() => {

        if ((!id && JSON.parse(localStorage.getItem('@QuickSale:cart_id')))) {

            return {};
        }

        let cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        if (cart?.advisor && !isObjectEmpty(cart.advisor)) {

            return cart.advisor;
        }

        return {}
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const setValuesConfigsDefault = () => {

        let copyProducts = [...products];

        for (let i = 0; i < copyProducts.length; i++) {

            for (let j = 0; j < copyProducts[i].configs.length; j++) {

                copyProducts[i].configs[j] = { ...copyProducts[i].configs[j], price_final: copyProducts[i].configs[j].price, quantity_selected: 0 };

            }

            copyProducts[i] = { ...copyProducts[i], add_cart: false };

        }

        setProducts(copyProducts);

        let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

        if (productsStorage) {

            for (let i = 0; i < productsStorage.length; i++) {

                for (let j = 0; j < productsStorage[i].configs.length; j++) {

                    productsStorage[i].configs[j] = { ...productsStorage[i].configs[j], price_final: productsStorage[i].configs[j].price, quantity_selected: 0 };
                }

                productsStorage[i] = { ...productsStorage[i], add_cart: false };

            }

            localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorage));

        }

        let cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        if (cart && cart.advisor) {
            cart.advisor = {};
        }

        localStorage.setItem('@QuickSale:cart', JSON.stringify(cart))

    }

    useEffect(() => {

        if (id) {

            axios.get('/api/v1/orders/' + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                if (response.data.advisor) {

                    let advisor = { value: response.data.advisor.id, label: response.data.advisor.name };

                    setAdvisor(advisor);

                    const initialStateCart = {
                        discount: 0,
                        client_id: null,
                        advisor: advisor
                    }

                    localStorage.setItem('@QuickSale:cart', JSON.stringify(initialStateCart));

                }

                let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));
                let verify = false;

                response.data.products.forEach((product, index) => {

                    verify = false;

                    for (let i = index; i < productsStorage.length; i++) {

                        for (let j = 0; j < productsStorage[i].configs.length; j++) {

                            if (+productsStorage[i].configs[j].id === +product.pivot.product_config_id) {

                                productsStorage[i].add_cart = true;
                                productsStorage[i].name = product.pivot.name,
                                    productsStorage[i].configs[j].price = product.price;
                                productsStorage[i].configs[j].price_final = product.pivot.price_final;
                                productsStorage[i].configs[j].quantity_selected = product.pivot.quantity;

                                verify = true;

                                break;

                            } else {

                                productsStorage[i].add_cart = false;
                                productsStorage[i].configs[j].price = product.price;
                                productsStorage[i].configs[j].price_final = product.pivot.price_final;
                                productsStorage[i].configs[j].quantity_selected = 0;

                            }


                        }

                        if (verify) break;
                    }

                });

                localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorage));

            });

        } else {

            if (!id && JSON.parse(localStorage.getItem('@QuickSale:cart_id'))) {

                localStorage.removeItem('@QuickSale:cart_id');
                setValuesConfigsDefault()

            }

        }

    }, []);

    useEffect(() => {

        axios.get('/api/v1/advisors?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllAdvisors(response.data.map(advisors => {
                return {
                    value: advisors.id,
                    label: advisors.name
                }
            }));
        }).finally(() => setLoadingAdvisors(false));

    }, [registerSuccess]);


    useEffect(() => {

        let params = {};
        name.length ? params['name'] = name : null;

        axios.get('/api/v1/products?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params
        }).then(response => {

            let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));
            let productsTreated = [];
            let productsInMemory = [];

            if (!productsStorage) {

                //REGISTRANDO TODOS OS PRODUTOS NO LOCALSTORAGE

                productsTreated = response.data.map(product => {

                    let configsTreated = [];

                    product.configs.forEach(config => {

                        configsTreated.push({
                            id: config.id,
                            price: config.price,
                            price_final: config.price,
                            quantity: config.quantity,
                            quantity_selected: 0,
                            size_name: config.size.name
                        });

                    });

                    productsInMemory.push({
                        id: product.id,
                        configs: configsTreated,
                        add_cart: false,
                        image: product.image,
                        name: product.name
                    });

                    return {
                        id: product.id,
                        configs: configsTreated,
                        add_cart: false,
                        image: product.image,
                    }
                });

                localStorage.setItem('@QuickSale:products', JSON.stringify(productsTreated));

            } else {

                //REGISTRANDO PRODUTOS QUE NÃO ESTÃO NO LOCALSTORAGE

                let productNotRegistered = [];

                for (let i = 0; i < response.data.length; i++) {

                    let count = 0;

                    for (let j = 0; j < productsStorage.length; j++) {

                        if (+productsStorage[j].id !== +response.data[i].id) {

                            count = count + 1;

                        }
                    }

                    //SE O PRODUTO NÃO ESTÁ NA LISTA ADICIONA NO FINAL

                    if (+count === +productsStorage.length) {

                        let configsTreated = [];

                        response.data[i].configs.forEach(config => {

                            configsTreated.push({
                                id: config.id,
                                price: config.price,
                                price_final: config.price,
                                quantity: config.quantity,
                                quantity_selected: 0,
                                size_name: config.size.name
                            });

                        });

                        productNotRegistered.push({
                            id: response.data[i].id,
                            configs: configsTreated,
                            add_cart: false,
                            image: response.data[i].image,
                        });

                    } else {

                        response.data[i].configs.forEach(config => {

                            for (let m = 0; m < productsStorage.length; m++) {

                                for (let n = 0; n < productsStorage[m].configs.length; n++) {

                                    if (+productsStorage[m].configs[n].id === +config.id) {

                                        productsStorage[m].configs[n] = {
                                            ...productsStorage[m].configs[n],
                                            price: config.price,
                                            quantity: config.quantity,

                                        }

                                    }

                                }

                            }

                        });

                    }
                }

                let allProducts = productsStorage.concat(productNotRegistered);

                localStorage.setItem('@QuickSale:products', JSON.stringify(allProducts));

                for (let i = 0; i < response.data.length; i++) {

                    for (let j = 0; j < allProducts.length; j++) {

                        if (+response.data[i].id === +allProducts[j].id) {

                            let configsTreated = [];

                            allProducts[j].configs.forEach(config => {

                                configsTreated.push({
                                    id: config.id,
                                    price: config.price,
                                    price_final: config.price_final,
                                    quantity: config.quantity,
                                    quantity_selected: config.quantity_selected,
                                    size_name: config.size_name
                                });

                            });

                            productsInMemory.push({
                                id: allProducts[j].id,
                                configs: configsTreated,
                                add_cart: allProducts[j].add_cart,
                                name: response.data[i].name,
                                image: response.data[i].image
                            });

                            break;

                        }

                    }

                }

            }

            setProducts(productsInMemory);


        }).finally(() => {
            setLoading(false);

        });


    }, [name]);


    const renderProducts = () => {
        return products.map((product, index) => {

            return (
                <Col key={product.id} lg={3}>

                    <Card
                        type={'model-product'}
                        product={product}
                        index={index}
                        setProducts={setProducts}
                        products={products}
                        showIconCart={showIconCart}
                        setShowItemCart={setShowItemCart}
                    />

                </Col>

            );
        });

    }

    const verifyModalAccessor = () => {

        if ((haveAccessor && !isObjectEmpty(advisor))) {

            setShowModalAccessor(false);

        } else if (!haveAccessor) {

            setShowModalAccessor(false);

        }
        else {

            Toast.fire({
                icon: 'error',
                title: 'Selecione um Assessor para continuar'
            });
        }
    }

    const renderText = () => {

        if (advisor?.label) {

            return (
                <span>
                    {advisor?.label}
                    <button
                        className={styles.ChangeAssessor}
                        onClick={() => setShowModalAccessor(true)}
                    >
                        <FaRegEdit className={styles.Icon} size={25} />

                    </button>
                </span>
            );

        } else {

            return (
                <span>
                    {advisor?.label}
                    <button
                        className={styles.ChangeAssessor}
                        onClick={() => setShowModalAccessor(true)}
                    >
                        Adicionar assessor
                        <RiUserAddLine className={styles.Icon} size={25} />

                    </button>
                </span>
            );

        }
    }


    if ((loading || loadingAdvisors)) return (<Spinner />);

    return (
        <>

            {
                !id ? null :
                    <Row className={'d-flex justify-content-end'}>
                        <Col xs={6}>
                            <Button style={'canceled'}
                                onClick={() => {
                                    setValuesConfigsDefault();

                                    let element = document.getElementById('show-item-cart');
                                    element.style.visibility = "hidden";
                                    navigate('/dashboard');

                                }}
                            >
                                <GiCancel style={{ fill: "white" }} size={15} />  Cancelar alteração
                            </Button>
                        </Col>
                    </Row>
            }
            {
                !!user?.company?.config_system[0]?.have_advisor ?
                    <HeaderButtonPage
                        type={'back'}
                        to={'/products/create'}
                        h2={renderText()}
                    /> : null
            }

            <HeaderMobile
                showItemCart={showItemCart}
                input={<input value={name} style={{ textIndent: '.8rem' }} placeholder={'Pesquisar'} onChange={e => setName(e.target.value)} />}
            />

            {
                products.length ?
                    <div>
                        <Row>
                            {renderProducts()}
                        </Row>
                    </div>
                    :
                    <Message type={'info'}>Nenhum produto encontrado</Message>
            }

            <Modal
                show={!id && !!user?.company?.config_system[0]?.have_advisor && (showModalAccessor && !(!showModalAccessor && JSON.parse(localStorage.getItem('@QuickSale:cart'))?.products?.length))}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={verifyModalAccessor} animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: "100%" }} id="contained-modal-title-vcenter">
                        <div>
                            <span className={'h4'}>Possui assessor ? </span>
                            <span>
                                <button
                                    className={`${styles.ButtonChecked} ${haveAccessor ? styles.Success : null} `}
                                    onClick={() => setHaveAccessor(true)}
                                >
                                    Sim
                                </button>

                            </span>

                            <span>
                                <button
                                    className={`${styles.ButtonChecked}  ${!haveAccessor ? styles.Danger : null}`}
                                    onClick={() => {
                                        setHaveAccessor(false);
                                        setAdvisor({});

                                        const initialStateCart = {
                                            discount: 0,
                                            client_id: null,
                                            advisor: {}
                                        }

                                        localStorage.setItem('@QuickSale:cart', JSON.stringify(initialStateCart));
                                        setValuesConfigsDefault()

                                    }}
                                >
                                    Não
                                </button>
                            </span>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        !haveAccessor ? null :
                            <div>
                                <div className={'d-flex justify-content-end'}>
                                    <button onClick={() => {

                                        setShowRegisterClient(!showRegisterClient);
                                        setRegisterSuccess(false);

                                    }} className={styles.RegisterClient}>{showRegisterClient && !registerSuccess ? "Cancelar registro" : "Novo Assessor"}</button>
                                </div>
                                <Select2
                                    label={'Selecione o assessor'}
                                    options={allAdvisors}
                                    value={advisor}
                                    onChange={value => {

                                        setAdvisor(value ?? {});

                                        let productsVerify = JSON.parse(localStorage.getItem('@QuickSale:cart'));

                                        if (productsVerify?.advisor && isObjectEmpty(productsVerify.advisor)) {

                                            localStorage.setItem('@QuickSale:cart', JSON.stringify({ ...productsVerify, advisor: value ?? {} }));

                                        } else {

                                            const initialStateCart = {
                                                discount: 0,
                                                client_id: null,
                                                advisor: value ?? {}
                                            }

                                            localStorage.setItem('@QuickSale:cart', JSON.stringify(initialStateCart));

                                        }

                                    }}
                                    isClearable
                                />

                                {
                                    registerSuccess ?
                                        <Message type={'info'}>Assessor cadastrado com sucesso</Message> : null
                                }

                                {
                                    showRegisterClient && !registerSuccess ?
                                        <RegisterAdvisor registerSuccess={registerSuccess} setRegisterSuccess={setRegisterSuccess} /> : null
                                }

                            </div>

                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button style={'success'} onClick={verifyModalAccessor}>Continuar <AiOutlineDoubleRight size={20} className={'icon'} /></Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Orders;
