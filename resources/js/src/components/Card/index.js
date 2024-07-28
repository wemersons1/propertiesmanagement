import React, { useContext, useEffect, useState } from 'react';
import styles from './Card.module.css';
import { Col, Row, Nav } from "react-bootstrap";
import Quantity from "./Quantity";
import { BsCart4 } from 'react-icons/bs';
import Context from "../../Hook/Context";
import { firstLetterUppercase, isObjectEmpty } from "../../Hook/util/help";
import { AiTwotoneEdit } from 'react-icons/ai';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { updateProductsApi } from "./util";
import Message from '../Message';
import InputMoney from "../InputMoney";
import { BsEye } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';


const Card = ({ showBigger, setShowBigger, product, setProducts, index, products, title, footer, type, value, children, icon, color, render, renderDelete, renderInput, size, setConfigs, allProducts, setIndexChanged, setProductsSize, info, id, ...props }) => {

    const { addItemCart, removeItemCart, role, token } = useContext(Context);

    if (children && !type) {

        const renderModal = () => {

            setShowBigger(true)

        }

        const renderContent = () => {

            return (
                <div>

                    <div className={'d-flex justify-content-center'}>
                        <h4>{title}</h4>
                    </div>

                    {children}
                </div>


            );
        }


        return (
            <>
                <div className={styles.Card} id={id}>
                    {
                        title ?
                            <div className={'d-flex justify-content-between'}><h4>{title}</h4><button onClick={() => renderModal()}><BsEye className={styles.IconEyes} /></button></div> : null
                    }

                    {children}
                </div>

                <Modal
                    show={showBigger}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={() => setShowBigger(false)} animation={true}
                    style={{ textAlign: "center" }}
                >
                    <Modal.Header closeButton={() => setShowBigger(false)}>
                        <Modal.Title style={{ width: "100%" }} id="contained-modal-title-vcenter">

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {renderContent()}

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </>

        );
    }

    if (type === 'model-1') {

        return (
            <div className={styles.Card}>
                <Row>
                    <Col>
                        <h2 className={"text-start fw-bold"}>
                            {firstLetterUppercase(title)}
                        </h2>
                    </Col>
                </Row>
                <Row className={"m-4"}>
                    <Col>
                        <h1 className={"text-center fw-bold"}>{value}</h1>
                    </Col>
                </Row>
                <Row>
                    <Row className={"d-flex justify-content-center"}>
                        <Col sm={5} className={'text-center'}>
                            {footer}
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
    else if (type === 'model-2') {

        return (
            <div className={styles.Card}>

                <div className={"d-flex align-items-center"}>
                    <div>{icon}</div>
                    <div className={"h2 mt-2"}>
                        <h4 className={'text-center'} style={{ textTransform: "uppercase" }}>{title}</h4>
                        <p className={'text-center'}>{value}</p>
                    </div>
                </div>
            </div>
        );

    }
    else if (type === 'model-3') {

        return (
            <div className={styles.Card3}>

                <div className={styles.Card3Container}>
                    <div>{icon}</div>
                    <div className={"h2 mt-2"}>
                        <h5 className={'text-center'} style={{ textTransform: "uppercase" }}>{title}</h5>
                        <p className={'text-center'}>{value}</p>
                    </div>
                </div>
            </div>
        );
    }

    else if (type === 'model-4') {

        const [addItem, setAddItem] = useState(false);
        const [subTotal, setSubTotal] = useState(0);

        useEffect(() => {

            let totalCard = 0;

            for (let i = 0; i < props.configs.length; i++) {

                for (let j = 0; j < props.configs[i].length; j++) {

                    if (props.configs[i][j].product_id === info.id) {

                        for (let k = 0; k < props.configs[i].length; k++) {

                            totalCard = totalCard + (parseFloat(props.configs[i][k].price_final) * +props.configs[i][k].quantityChanged);
                        }

                        break;
                    }
                }
            }


            if (products) {
                for (let i = 0; i < products.length; i++) {

                    for (let j = 0; j < products[i].length; j++) {

                        if (products[i][j].product_id === info.id) {

                            setAddItem(true);
                            break;
                        }
                    }
                }

                setSubTotal(totalCard);
            }

        }, [size, props.configs]);


        return (
            <div className={`${styles.Card4}`}>

                <div style={{ width: "80%", margin: "0 auto" }}>

                    <h1>{firstLetterUppercase(info.name)}</h1>
                </div>

                <div style={{ display: 'flex', justifyContent: "center", height: '250px' }}>

                    {info.image && <img className={styles.Image} src={window.location.pathname.split('/')[0] + '/product/image' + `?image=${info.image}`} />}

                </div>

                {
                    render ? render : null
                }

                {
                    renderInput
                }

                <Row>
                    <Col>
                        <Link to={"/products/" + info.id}>
                            <Button>
                                <AiTwotoneEdit className={'icon icon-left'} type={'button'} />Editar
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        {renderDelete()}
                    </Col>
                </Row>

            </div>
        );


    }
    else if (type === 'model-5') {

        const [addItem, setAddItem] = useState(false);
        const [quantity, setQuantity] = useState(1);

        useEffect(() => {

            let products = JSON.parse(localStorage.getItem('@QuickSale:cart'))?.products;

            if (products) {
                for (let i = 0; i < products.length; i++) {

                    for (let j = 0; j < products[i].length; j++) {

                        if (products[i][j].product_id === info.id) {
                            setAddItem(true);
                            break;
                        }
                    }
                }
            }

        }, [size]);

        const addItemChange = async () => {


            if (!addItem) {

                setAddItem(true);

                addItemCart(props.configs[props.index]);


            } else {

                removeItemCart(JSON.stringify(props.configs[props.index]));

                const copyProducts = [];

                allProducts.forEach(item => {
                    if (+item.id !== +props.configs[props.index][0].product_id) {
                        copyProducts.push(item);
                    }
                });

                setProducts(copyProducts);

                setAddItem(false);

                const response = await updateProductsApi(token);

                setIndexChanged(response.new_array_indexes)
                setProductsSize(response.products_size_treated);
                setProducts(response.products);
                setConfigsChange(response.products_size_treated);

            }

            let copyCart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

            setConfigs(copyCart.products);

        }


        return (
            <div className={`${styles.Card5}`}>

                <div style={{ width: "80%", margin: "0 auto" }}>
                    {
                        role !== 'seller' ?
                            <h1>{firstLetterUppercase(info.brand.name)}</h1> : null
                    }
                    <h1>{firstLetterUppercase(info.name)}</h1>
                </div>

                <div className={'d-flex'}>

                    <div>
                        <div style={{ display: 'flex', justifyContent: "center", height: '180px' }}>

                            <img className={styles.Image} src={info.imageProductCode} />

                        </div>

                    </div>

                    <div style={{ margin: "auto 0" }}>

                        <Quantity quantity={quantity} setConfigsChange={setConfigsChange} index={props.index} indexChanged={props.indexChanged} configs={props.configs} />

                        {
                            role === 'seller' ?

                                <Row>
                                    <Col>
                                        <button
                                            className={!addItem ? styles.ButtonCart : styles.ButtonRemove}
                                            onClick={addItemChange}
                                        >
                                            <BsCart4 style={{ fill: "white" }} size={25} />{!addItem ? "Adicionar" : "Remover"}
                                        </button>
                                    </Col>
                                </Row>

                                : null
                        }

                    </div>

                </div>

                {
                    render ? render : null
                }

                {
                    renderInput ? renderInput : null
                }



            </div>
        );
    }
    else if (type === 'model-product') {

        const [indexSize, setIndexSize] = useState(0);

        const setConfigsChange = (e, type = 'config') => {

            let productsStorageTreated = [];
            let copyProducts = [...products];

            if (type === 'config') {

                let configsTreated = [...copyProducts[index].configs];
                configsTreated[indexSize] = { ...configsTreated[indexSize], [e.target.name]: e.target.value };

                copyProducts[index] = { ...copyProducts[index], configs: configsTreated }

                setProducts(copyProducts);

                let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

                let verify = false;

                for (let i = 0; i < productsStorage.length; i++) {

                    let productChanged = {};

                    if (+productsStorage[i].id === +copyProducts[index].id && !verify) {

                        if (!verify) {
                            for (let j = 0; j < productsStorage[i].configs.length; j++) {

                                if (+copyProducts[index].configs[indexSize].id === +productsStorage[i].configs[j].id) {

                                    productChanged = copyProducts[index].configs[indexSize];
                                    verify = true;
                                    break;
                                }

                            }
                        }

                    }

                    if (!isObjectEmpty(productChanged)) {

                        let configsTreated = [];

                        productsStorage[i].configs.forEach(config => {

                            if (+config.id === +productChanged.id) {
                                configsTreated.push(productChanged);
                            } else {
                                configsTreated.push(config);
                            }

                        });

                        productsStorageTreated.push({ ...productsStorage[i], configs: configsTreated });

                    } else {

                        productsStorageTreated.push(productsStorage[i]);

                    }

                }

                localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorageTreated));

            }

            else {

                copyProducts[index] = { ...copyProducts[index], [e.target.name]: e.target.value };

                let oldValue = [...copyProducts];

                copyProducts[index] = {
                    [e.target.name]: e.target.value,
                    configs: copyProducts[index].configs,
                    id: copyProducts[index].id,
                    name: copyProducts[index].name,
                    image: copyProducts[index].image,
                }

                setProducts(oldValue);

                let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

                productsStorage.forEach(item => {

                    if (+item.id === +copyProducts[index].id) {

                        productsStorageTreated.push(copyProducts[index]);

                    } else {

                        productsStorageTreated.push(item);

                    }

                });

                localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorageTreated));

            }

        }

        const calculateSubtotal = (configs) => {

            let total = 0;

            configs.forEach(config => {

                total = total + (config.quantity_selected * config.price_final);

            });

            return total;

        }

        return (
            <div className={`${styles.Card4}`}>

                <div style={{ width: "80%", margin: "0 auto" }}>
                    {
                        role !== 'seller' ?
                            <h1>{firstLetterUppercase(product.brand.name)}</h1> : null
                    }

                    <h1>{firstLetterUppercase(product.name)}</h1>
                </div>

                <div style={{ display: 'flex', justifyContent: "center", height: '250px', flexDirection: "column" }}>

                    <img className={styles.Image} src={window.location.pathname.split('/')[0] + '/product/image' + `?image=${product.image}`} />

                    {

                        <div className={'d-flex justify-content-center'}>
                            <Nav variant="pills" defaultActiveKey={product.configs[0].size_name}>

                                {
                                    product.configs.map((item, index) => {

                                        return (
                                            <Nav.Item key={item.id} onClick={() => setIndexSize(index)}>
                                                <Nav.Link eventKey={item.size_name}>{item.size_name}</Nav.Link>
                                            </Nav.Item>
                                        );
                                    })
                                }

                            </Nav>
                        </div>

                    }

                </div>

                <Row>
                    <Col>
                        <InputMoney
                            className={'border'}
                            label={'Preço de venda'}
                            value={product.configs[indexSize].price_final}
                            onChange={(e, value) => {

                                let eTreated = {
                                    target: {
                                        name: "price_final",
                                        value: value
                                    }
                                }

                                setConfigsChange(eTreated)

                            }}
                        />
                        {
                            parseFloat(product.configs[indexSize].price_final) < parseFloat(product.configs[indexSize].price) ? <Message type='error'>Valor inferior à {parseFloat(product.configs[indexSize].price).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Message> : null
                        }
                    </Col>
                    <Col>
                        <InputMoney
                            label={'Subtotal'}
                            disabled
                            value={calculateSubtotal(product.configs)}
                        />

                    </Col>
                </Row>

                <Quantity
                    quantity={+product.configs[indexSize].quantity}
                    quantitySelected={+product.configs[indexSize].quantity_selected}
                    setConfigsChange={setConfigsChange}
                />

                <button
                    onClick={() => {

                        let copyProducts = [...products];

                        copyProducts[index] = { ...copyProducts[index], add_cart: !copyProducts[index].add_cart }
                        setProducts(copyProducts);

                        let e = {
                            target: {
                                name: "add_cart",
                                value: copyProducts[index].add_cart
                            }
                        };

                        setConfigsChange(e, type = 'cart');
                        props.setShowItemCart(props.showIconCart());

                    }}
                    className={!product.add_cart ? styles.ButtonCart : styles.ButtonRemove}
                >
                    <BsCart4 style={{ fill: "white" }} size={25} />{!product.add_cart ? "Adicionar ao carrinho" : "Remover do carrinho"}
                </button>

            </div>
        );


    }
    else if (type === 'model-chart') {

        return (
            <div className={styles.ModelChart}>
                {children}
            </div>
        );

    }
}

export default Card;
