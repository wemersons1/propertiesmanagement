import React, {useState, useEffect, useContext} from 'react';
import HeaderButtonPage from "../../../components/HeaderButtonPage";
import Message from "../../../components/Message";
import Spinner from "../../../components/Spinner";
import Context from "../../../Hook/Context";
import {Row, Col, Modal, Nav} from 'react-bootstrap';
import axios from 'axios';
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import {AiOutlineDoubleRight} from 'react-icons/ai';
import SweetAlert from "../../../components/SweetAlert";
import {useNavigate, useParams} from "react-router-dom";
import Select2 from "../../../components/Select2";
import styles from './Orders.module.css';
import RegisterClient from "./RegisterClient";
import InputMoney from "../../../components/InputMoney";
import {isObjectEmpty, calculateTotalValue} from "../../../Hook/util/help";
import Swal from "sweetalert2";
import {GiCancel} from 'react-icons/gi';

const Orders = () => {

    const [allPaymentForms, setAllPaymentForms] = useState([]);
    const [taxes, setTaxes] = useState([]);
    const [typePaymentFormId, setTypePaymentFormId] = useState(1);
    const [installments, setInstallments] = useState(1);
    const [products, setProducts] = useState([]);
    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [success, setSuccess] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [clientChange, setClientChange] = useState({});
    const [allClients, setAllClients] = useState([]);
    const [showRegisterClient, setShowRegisterClient] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [discount, setDiscount] = useState('');
    const [sendingOrder, setSendingOrder] = useState(false);
    const [typePaymentFormChange, setTypePaymentFormChange] = useState({});
    const [instalmentsChange, setInstallmentChange] = useState({});
    const [showMessageError, setShowMessageError] = useState(false);


    const setValuesConfigsDefault = () => {

        let copyProducts = [...products];

        for(let i = 0; i < copyProducts.length; i ++) {

            for(let j = 0; j < copyProducts[i].configs.length; j ++) {

                copyProducts[i].configs[j] = {...copyProducts[i].configs[j], price_final: copyProducts[i].configs[j].price, quantity_selected: 0};

            }

            copyProducts[i] = {...copyProducts[i], add_cart: false};

        }

        setProducts(copyProducts);

        let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

        if(productsStorage) {

            for(let i = 0; i < productsStorage.length; i ++) {

                for(let j = 0; j < productsStorage[i].configs.length; j ++) {

                    productsStorage[i].configs[j] = {...productsStorage[i].configs[j], price_final: productsStorage[i].configs[j].price, quantity_selected: 0};
                }

                productsStorage[i] = {...productsStorage[i], add_cart: false};

            }

            localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorage));

        }

        let cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        if(cart && cart.advisor) {
            cart.advisor = {};
        }

        localStorage.setItem('@QuickSale:cart', JSON.stringify(cart))

    }

    const {id} = useParams();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const {token, user} = useContext(Context);
    const navigate = useNavigate();


    const onClose = e => {
        setSweetShow(false);
        if(success){
            setModalShow(false);
            navigate('/dashboard');
        }
    }

    useEffect(() => {

        axios.get('/api/v1/payment-forms', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllPaymentForms(response.data.map(item => {
                return {...item, value: item.id, label: item.name}
            }));

            setTypePaymentFormChange({
                value: response.data[0].id,
                label: response.data[0].name
            });
        });

        axios.get('/api/v1/payment-forms/taxes', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setTaxes(response.data);
        });
    }, []);

    useEffect(() => {

        let productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

        if(productsStorage) {

            let productsTreated = [];

            productsStorage.forEach(product => {

                if(product.add_cart) {
                    productsTreated.push(product);
                }

            });

            setProducts(productsTreated);

        }


    }, []);

    useEffect(() => {
        axios.get(`/api/v1/clients?all=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllClients(response.data.map(client => {
                return{
                    value: client.id,
                    label: client.name
                }
            }))

        });

    }, [registerSuccess]);


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
                    />

                </Col>

            );
        });

    }

    const registerOrder = e => {

        e.preventDefault();

        setSendingOrder(true);

        let data = {};

        const cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        const allProductsSelects = [];
        let exit = false;

        for(let i = 0; i < products.length; i ++) {

            for(let j = 0; j < products[i].configs.length; j ++) {

                if(products[i].add_cart && +products[i].configs[j].quantity_selected) {

                    if(parseFloat(products[i].configs[j].price_final) < parseFloat(products[i].configs[j].price)) {
                        exit = true;
                        break;
                    }

                    allProductsSelects.push({
                        id: products[i].configs[j].id,
                        quantity: products[i].configs[j].quantity_selected,
                        price_final: products[i].configs[j].price_final
                    });
                }

            }

            if(exit) break;
        }

        //ENCERRA EXECUÇAO A PARTIR DESTA LINHA
        if(exit) {

            setModalShow(false);
            setSendingOrder(false);
            Toast.fire({
                icon: 'error',
                title: 'Existe produto com preço menor que o permitido'
            });

            setShowMessageError(true);
            return;
        }

        data['installments'] = installments;
        data['payment_form_id'] = typePaymentFormId;
        data['discount'] = discount;
        data['client_id'] = clientChange.value;
        if(!isObjectEmpty(cart?.advisor ?? {})) data['advisor_id'] = cart.advisor.value;
        data['products'] = allProductsSelects;


        if(id) {

            axios.put(`/api/v1/orders/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                setSweetText('Alterações realizadas com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);

                setValuesConfigsDefault();
                let element = document.getElementById('show-item-cart');
                element.style.visibility = "hidden";

            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setSweetShow(true);
                setSendingOrder(false);
            });

        } else {

            axios.post(`/api/v1/orders`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                setSweetText('Pedido registrado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);
                setValuesConfigsDefault();
                let element = document.getElementById('show-item-cart');
                element.style.visibility = "hidden";
            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setSweetShow(true);
                setSendingOrder(false);
            });

        }


    }

    const renderOptionsPayments = () => {


        return allPaymentForms.map(payment => {

            return (<option key={payment.id} value={payment.id}>{payment.name}</option>);
        });

    }

    const renderOptionInstallments = () => {

        let installmentss = [];
        let value = calculateTotalValue(discount, products);

        for (let i = 1; i <= 12; i++) {

            installmentss.push({
                value: i,
                label: `${i}x ${((parseFloat(value) + (parseFloat(value) * parseFloat(taxes[`credit${i}x`])) / 100) / i).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'})}`
            });
        }

        return (
            <div>

                <Select2
                    options={installmentss}
                    label={'Parcelas'}
                    value={instalmentsChange}
                    onChange={value => {
                        setInstallments(value.value)
                        setInstallmentChange(value)
                    }}
                />
            </div>

        );
    }


    return (
        <>

            {
                id ?
                <Row className={'d-flex justify-content-end'}>
                    <Col xs={6}>
                        <Button  style={'canceled'}
                            onClick={() => {
                                setValuesConfigsDefault();

                                let element = document.getElementById('show-item-cart');
                                element.style.visibility = "hidden";
                                navigate('/dashboard');

                            }}
                        >
                                <GiCancel style={{fill: "white"}} size={15}/>
                            Cancelar alteração

                        </Button>
                    </Col>
                </Row> : null
            }


            <HeaderButtonPage
                type={'back'}
                to={'/products/create'}
                h2={'Finalizar pedido'}
            />

            {
                products.length?
                    <div>
                        <Row>
                            {renderProducts()}
                        </Row>

                        <Row>
                            <Col>
                                <h1 className={'text-end'}>
                                    Valor total: {calculateTotalValue(discount, products).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}
                                </h1></Col>
                        </Row>

                        {
                             !id ?
                             <Row className={'d-flex justify-content-end'}>
                                <Col lg={3}>
                                    <Button onClick={() => setModalShow(true)}>Encerrar pedido<span style={{marginRight: "1rem"}}></span> <AiOutlineDoubleRight className={'icon icon-right'} size={20} /></Button>
                                </Col>
                            </Row> :

                            <Row className={'d-flex justify-content-end'}>
                                <Col lg={3}>
                                    <Button onClick={() => setModalShow(true)}>Salvar alterações<span style={{marginRight: "1rem"}}></span> <AiOutlineDoubleRight className={'icon icon-right'} size={20} /></Button>
                                </Col>
                            </Row>

                        }


                    </div>
                   :
                    <Message type={'info'}>Nenhum carrinho encontrado</Message>
            }

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShow(false)} animation={true}
                style={{textAlign: "center"}}
            >
                <Modal.Header closeButton>
                    <Modal.Title  style={{width: "100%"}} id="contained-modal-title-vcenter">
                        <Row>
                            <Col><p>Concluir pedido</p></Col>
                            <Col><h2 className={'text-end'}>{calculateTotalValue(discount, products).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h2></Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={'d-flex justify-content-end'}>
                        <button onClick={() => {

                            setShowRegisterClient(!showRegisterClient);
                            setRegisterSuccess(false);

                        }} className={styles.RegisterClient}>{showRegisterClient && !registerSuccess? "Cancelar registro" : "Novo cliente"}</button>
                    </div>

                    <Select2
                        label={'Selecione o cliente'}
                        options={allClients}
                        value={clientChange}
                        onChange={value => {
                            setClientChange(value);
                            setRegisterSuccess(false);
                            setShowRegisterClient(false);
                        }}
                    />

                    {
                        !isObjectEmpty(clientChange) && user.company.config_system[0].seller_apply_discount ? <InputMoney label={'Desconto'} value={discount} onChange={(e, value) => setDiscount(value)}/> : null
                    }

                    {
                        isObjectEmpty(clientChange) ? null :
                      <>
                          <Select2
                                options={allPaymentForms}
                                label={'Tipo de pagamento'}
                                value={typePaymentFormChange}
                                onChange={value => {
                                    setTypePaymentFormChange(value);
                                    setTypePaymentFormId(value.value);

                                    if(+value.value === 3) {
                                        setInstallmentChange({
                                            value: 1,
                                            label: `1x ${((parseFloat(calculateTotalValue(discount, products)) + (parseFloat(calculateTotalValue(discount, products)) * parseFloat(taxes[`credit1x`])) / 100) / 1).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'})}`
                                        })
                                    }

                                }}
                          />

                          {
                              +typePaymentFormId !== 3 ?
                                  <InputMoney
                                      label={'Valor'}
                                      value={+typePaymentFormId === 4 ? calculateTotalValue(discount, products) + (((calculateTotalValue(discount, products) * taxes.debit))/100) :
                                          calculateTotalValue(discount, products)
                                  }
                                      disabled
                                  /> : renderOptionInstallments()
                          }



                      </>
                    }

                    {
                        showRegisterClient && !registerSuccess?
                            <RegisterClient registerSuccess={registerSuccess} setRegisterSuccess={setRegisterSuccess}/> : null
                    }

                    {
                        !registerSuccess  ? null :
                          <Message type={'info'}>Cliente cadastrado com sucesso</Message>
                    }


                </Modal.Body>
                <Modal.Footer>

                    {
                        sendingOrder ? <Spinner size={'small'}/> :
                            <Button style={'success'} onClick={registerOrder}>Finalizar pedido <AiOutlineDoubleRight size={20} className={'icon'}/></Button>
                    }

                </Modal.Footer>
            </Modal>

            <SweetAlert
                onConfirm={onClose}
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

export default Orders;
