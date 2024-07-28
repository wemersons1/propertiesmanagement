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
import { firstLetterUppercase, formatMask, isObjectEmpty } from "../../../../Hook/util/help";
import { Col, Nav, Row } from 'react-bootstrap';
import Swal from "sweetalert2";

const Create = () => {

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
    const [configs, setConfigs] = useState([]);
    const [indexChanged, setIndexChanged] = useState(0);
    const [productSizeIdChanged, setProductSizeIdChanged] = useState(0);
    const [defaultActiveKey, setDefaultActiveKey] = useState('');
    const [image, seImage] = useState('');
    const [saveProduct, setSaveProduct] = useState(false);
    const [barCode, setBarCode] = useState('');
    const { token } = useContext(Context);
    const navigate = useNavigate();

    const onClose = e => {
        setSweetShow(false);
        if (success) {
            navigate(-1);
        }
    }

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

    useEffect(() => {

        axios.get('/api/v1/brands?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            setAllBrands(response.data.map(brand => {
                return {
                    value: brand.id,
                    label: firstLetterUppercase(brand.name),
                    sizes: brand.sizes
                };
            }));

        }).finally(() => setLoadingBrands(false));

    }, []);


    const handlerSubmit = e => {

        e.preventDefault();

        setSaveProduct(true);

        let configsTreated = [];

        configs.forEach(config => {

            if (config?.quantity) {
                configsTreated.push(config);
            }

        });

        let data = {};

        data["name"] = name;
        data["active"] = active ? '1' : '0';
        data["description"] = description;
        data["brand_id"] = brandChange.value;
        data["configs"] = configsTreated;
        data["bar_code"] = barCode;

        axios.post('/api/v1/products', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {

            const data = new FormData();

            if (image?.name?.length) {
                data.append("image", image);
                data.append("product_id", response.data.id);

                axios.post('/api/v1/products/image', data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            }

            setSweetText('Produto cadastrado com sucesso');
            setSweetTitle('Sucesso');
            setSweetType('success');
            setSuccess(true);

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
                <Nav.Item >
                    <Nav.Link
                        onClick={() => {

                            setIndexChanged(index);
                            setProductSizeIdChanged(size.id);

                        }}
                        eventKey={size.name} >{size.name}</Nav.Link>
                </Nav.Item>
            )
        })
    }


    const renderItemsOptionsSelect = () => {

        const setConfigsChange = (e) => {

            let copyConfigs = [...configs];

            copyConfigs[indexChanged] = { ...configs[indexChanged], [e.target.name]: e.target.value, size_id: productSizeIdChanged };

            setConfigs(copyConfigs);

        }

        return (
            <div>
                <Input
                    type={"number"}
                    min={0}
                    value={configs[indexChanged]?.quantity ?? 0}
                    onChange={setConfigsChange}
                    required
                    name={'quantity'}
                    label={'Quantidade'}
                    placeholder={'Quantidade, Ex: 50'}
                />

                <Row>
                    <Col>
                        <InputMoney
                            min={0}
                            value={configs[indexChanged]?.price_cost ?? 0}
                            onChange={(e, value) => {

                                let event = {
                                    target: {
                                        name: "price_cost",
                                        value: value
                                    }
                                };

                                setConfigsChange(event)
                            }}
                            required
                            name={'price'}
                            label={'Preço de custo'}
                        />
                    </Col>
                    <Col>
                        <InputMoney
                            min={0}
                            value={configs[indexChanged]?.price ?? 0}
                            onChange={(e, value) => {

                                let event = {
                                    target: {
                                        name: "price",
                                        value: value
                                    }
                                };

                                setConfigsChange(event)
                            }}
                            required
                            name={'price'}
                            label={'Preço de venda'}
                        />
                    </Col>
                </Row>

            </div>
        );
    }


    if (loadingBrands) return (<Spinner />);

    return (
        <div >
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de produto'}
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
                        label={'Descrição'}
                    />

                    <Select2
                        label={'Categoria'}
                        value={brandChange}
                        onChange={value => {

                            setLoadingBrands(true);

                            setTimeout(() => {
                                setDefaultActiveKey(value.sizes[0].name);
                                setProductSizeIdChanged(value.sizes[0].id);

                                setProductsSize(value.sizes);

                                let productsSizeTreated = [];

                                value.sizes.forEach(() => {
                                    productsSizeTreated.push({});
                                });

                                setConfigs(productsSizeTreated);

                                setBrandChange(value);

                                setLoadingBrands(false);

                            }, 0);

                        }}
                        options={allBrands}
                    />

                    {
                        !isObjectEmpty(brandChange) &&

                        <>
                            <Nav variant="tabs" defaultActiveKey={defaultActiveKey}>
                                {renderOptionsSize()}
                            </Nav>
                            <div style={{ margin: "1rem" }}></div>

                            {renderItemsOptionsSelect()}
                        </>

                    }

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

                    <Button disabled={saveProduct} styleIcon={'save'}>Cadastrar
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

export default Create;
