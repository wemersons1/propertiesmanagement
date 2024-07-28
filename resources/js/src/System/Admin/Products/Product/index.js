import React, { useState, useContext, useEffect } from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import Spinner from "../../../../components/Spinner";
import Select2 from "../../../../components/Select2";
import InputMoney from "../../../../components/InputMoney";
import { firstLetterUppercase } from "../../../../Hook/util/help";
import { Col, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Product = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive] = useState(true);

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');
    const [loadingBrands, setLoadingBrands] = useState(true);
    const [brandChange, setBrandChange] = useState({});
    const [allBrands, setAllBrands] = useState([]);
    const [success, setSuccess] = useState(false);
    const [productsSize, setProductsSize] = useState([]);
    const [configs, setConfigs] = useState({});
    const [loadingSizes, setLoadingSizes] = useState(true);
    const [loadingProduct, setLoadingProduct] = useState(true);
    const [image, seImage] = useState('');
    const [saveProduct, setSaveProduct] = useState(false);
    const [sizeChange, setSizeChange] = useState('');
    const [barCode, setBarCode] = useState('');

    const { token } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

    useEffect(async () => {

        const product = await axios.get(`/api/v1/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setName(product.data.name);
        setBarCode(product.data.bar_code);
        setBrandChange({ value: product.data.brand.id, label: product.data.brand.name });

        const sizes = await axios.get('/api/v1/brands/sizes', {
            headers: {
                Authorization: `Bearer ${token}`
            }, params: {
                brand_id: product.data.brand.id
            }
        });



        let sizesTreated = [];
        let configsTreated = [];

        if (sizes) {
            sizes.data.forEach(size => {
                sizesTreated.push(size);
            });
        }

        product.data.configs.forEach(config => {

            configsTreated[config.size.name] = {
                quantity: config.quantity,
                price: config.price,
                size_id: config.size_id,
                price_cost: config.price_cost
            };
        });

        setSizeChange(sizesTreated[0]);
        setProductsSize(sizesTreated);
        setConfigs(configsTreated);

        setLoadingSizes(false);

        if (product && sizes) setLoadingProduct(false);


    }, []);

    useEffect(() => {

        axios.get('/api/v1/brands?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllBrands(response.data.map(brand => {
                return { value: brand.id, label: firstLetterUppercase(brand.name) };
            }));

        }).finally(() => setLoadingBrands(false));

    }, []);


    const handlerSubmit = e => {

        setSaveProduct(true);

        e.preventDefault();
        let configsTreated = [];

        Object.keys(configs).forEach((item) => {
            configsTreated.push(configs[item]);
        });

        let data = {};

        data["name"] = name;
        data["active"] = active ? '1' : '0';
        data["description"] = description;
        data["brand_id"] = brandChange.value;
        data["configs"] = configsTreated;
        data["bar_code"] = barCode;

        axios.put(`/api/v1/products/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            const data = new FormData();

            data.append("image", image);
            data.append("product_id", response.data.id);

            axios.post('/api/v1/products/image', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Produto atualizado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);

            });


        }).catch(err => {
            setSweetText(err.response.data.message);
            setSweetTitle('Erro');
            setSweetType('error');
            setSuccess(false);

        }).finally(() => {
            setSaveProduct(false);
            setSweetShow(true);
        });

    }

    const renderOptionsSize = () => {

        return productsSize.map((size, index) => {
            return (
                <Nav.Item key={index}>
                    <Nav.Link onClick={() => {
                        setSizeChange(size);
                    }} eventKey={size.name}>{size.name}</Nav.Link>
                </Nav.Item>
            )
        })
    }


    const renderItemsOptionsSelect = () => {

        const setConfigsChange = (e) => {

            let copyConfigs = { ...configs };

            copyConfigs[sizeChange.name] = {
                ...configs[sizeChange.name],
                [e.target.name]: e.target.value,
                size_id: sizeChange.id
            };

            setConfigs(copyConfigs);

        }

        return (
            <div>
                <Input
                    type={"number"}
                    min={0}
                    onChange={setConfigsChange}
                    required
                    value={configs[sizeChange.name]?.quantity ?? 0}
                    name={'quantity'}
                    label={'Quantidade'}
                    placeholder={'Quantidade, Ex: 50'}
                />

                <Row>
                    <Col>
                        <InputMoney
                            min={0}
                            onChange={(e, value) => {

                                let event = {
                                    target: {
                                        name: "price_cost",
                                        value: value
                                    }
                                };

                                setConfigsChange(event)
                            }}
                            value={configs[sizeChange.name]?.price_cost ?? 0}
                            required
                            name={'price'}
                            label={'Preço de custo'}
                        />
                    </Col>
                    <Col>
                        <InputMoney
                            min={0}
                            onChange={(e, value) => {

                                let event = {
                                    target: {
                                        name: "price",
                                        value: value
                                    }
                                };

                                setConfigsChange(event)
                            }}
                            value={configs[sizeChange.name]?.price ?? 0}
                            required
                            name={'price'}
                            label={'Preço de venda'}
                        />
                    </Col>

                </Row>

            </div>
        );
    }


    if (loadingBrands || loadingProduct) return (<Spinner />);

    return (
        <div >
            <HeaderButtonPage
                type={'back'}
                h2={'Detalhes do produto'}
            />

            <CardForm type={'smaller'}>

                <form onSubmit={handlerSubmit}>
                    <h4>Dados do produto</h4>

                    <input
                        id={'active'}
                        type={'checkbox'}
                        checked={active}
                        onChange={() => setActive(!active)}
                    />
                    <label htmlFor={'active'}>Ativo</label>

                    <Input
                        type={"text"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        label={'Nome'}
                        placeholder={'Nome do produto'}
                    />

                    <Select2
                        label={'Categoria'}
                        value={brandChange}
                        onChange={async (value) => {

                            setBrandChange(value);
                            setLoadingSizes(true);

                            const sizes = await axios.get('/api/v1/brands/sizes', {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }, params: {
                                    brand_id: value.value
                                }
                            });

                            if (sizes) {

                                setProductsSize(sizes.data);

                                let configsTreated = [];

                                sizes.data.forEach(config => {

                                    configsTreated[config.name] = {
                                        quantity: 0,
                                        price: 0,
                                        size_id: config.id,
                                        price_cost: 0
                                    };

                                });

                                setSizeChange(sizes.data[0]);
                                setConfigs(configsTreated);

                                setTimeout(() => {
                                    setLoadingSizes(false)
                                }, 10);

                            }

                        }}
                        options={allBrands}
                    />

                    {
                        loadingSizes ? <Spinner size={'small'} /> :
                            <Nav variant="tabs" defaultActiveKey={productsSize[0].name}>
                                {renderOptionsSize()}
                            </Nav>
                    }

                    <div style={{ margin: "1rem" }}></div>

                    {renderItemsOptionsSelect()}

                    <Row>
                        <Col>
                            <Input
                                label={'Imagem'}
                                id={'logo'}
                                type={'file'}
                                onChange={e => seImage(e.target.files[0])}
                                placeholder={image?.name ?? 'Imagem do produto'}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Input
                                label={'Código de barras'}
                                type={'text'}
                                onChange={e => setBarCode(e.target.value)}
                                value={barCode}
                            />
                        </Col>
                    </Row>

                    <Button
                        disabled={saveProduct}
                        styleIcon={'save'}
                    >
                        Salvar alterações
                        {saveProduct ? <Spinner size={'small'} /> : null}
                    </Button>

                </form>

            </CardForm>

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
        </div>
    );
}

export default Product;
