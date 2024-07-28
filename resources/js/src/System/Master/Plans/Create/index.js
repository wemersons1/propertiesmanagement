import React, { useState, useContext, useEffect } from 'react';
import HeaderButtonPage from "../../../../components/HeaderButtonPage";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Context from "../../../../Hook/Context";
import SweetAlert from "../../../../components/SweetAlert";
import { useNavigate } from "react-router-dom";
import CardForm from "../../../../components/CardForm";
import axios from 'axios';
import InputMoney from '../../../../components/InputMoney';
import TextArea from '../../../../components/TextArea';
import Select2 from '../../../../components/Select2';
import { Row, Col, Modal } from 'react-bootstrap';
import Message from '../../../../components/Message';
import Swal from "sweetalert2";
import Editor2 from '../../../../components/Editor2';

const Create = () => {

    const [sweetShow, setSweetShow] = useState(false);
    const [sweetType, setSweetType] = useState('success');
    const [sweetText, setSweetText] = useState('');
    const [sweetTitle, setSweetTitle] = useState('');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive] = useState(true);
    const [type, setType] = useState(1);
    const [valueByMonth, setValueByMonth] = useState(0);
    const [valueByYear, setValueByYear] = useState(0);
    const [success, setSuccess] = useState(false);
    const [quantityUsers, setQuantityUsers] = useState(1);
    const [quantityDays, setQuantityDays] = useState(1);
    const [isFree, setIsFree] = useState(false);
    const [quantityMonths, setQuantityMonths] = useState(1);
    const [allCategories, setAllCategories] = useState([]);
    const [categoryChange, setCategoryChange] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [showMessageCategorySuccess, setShowMessageCategorySuccess] = useState(false);
    const [image, seImage] = useState('');
    const { token } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/v1/plans/categories?all=1', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setAllCategories(response.data.map(category => {
                return {
                    value: category.id,
                    label: `${category.name} - ${+category.quantity_months === 1 ? '1 mês' : `${category.quantity_months} Meses`} `
                }
            }));
        });

    }, []);

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
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const handlerSubmit = e => {
        e.preventDefault();

        if (!image?.name?.length) {

            Toast.fire({
                icon: 'error',
                title: 'Por favor selecione uma imagem para continuar'
            });

        } else {
            const data = new FormData();

            data.append("image", image);
            data.append("name", name);
            data.append("quantity_users", quantityUsers);
            data.append("value_by_month", valueByMonth);
            data.append("value_total", valueByYear);
            data.append("description", description);
            data.append("active", active ? 1 : 0);
            data.append("is_free", isFree ? 1 : 0);
            isFree ? data.append("quantity_days", quantityDays) : null;
            data.append("category_id", categoryChange.value);

            data['category_id'] = categoryChange.value;

            axios.post('/api/v1/plans', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSweetText('Plano cadastrado com sucesso');
                setSweetTitle('Sucesso');
                setSweetType('success');
                setSuccess(true);
            }).catch(err => {
                setSweetText(err.response.data.message);
                setSweetTitle('Erro');
                setSweetType('error');
                setSuccess(false);
            }).finally(() => {

                setSweetShow(true);
            });
        }

    }

    const registerCategory = e => {
        e.preventDefault();
        let data = {};

        data['name'] = categoryName;
        data['quantity_months'] = quantityMonths;

        axios.post('/api/v1/plans/categories', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setShowMessageCategorySuccess(true);
            setTimeout(() => {
                setModalShow(false);
                setCategoryName('');
                setShowMessageCategorySuccess(false);
            }, 2000);
            const copyCategories = [...allCategories];
            copyCategories.unshift({
                value: response.data.id,

                label: `${response.data.name} - ${+response.data.quantity_months === 1 ? '1 mês' : `${response.data.quantity_months} Mêses`} `
            });
            setAllCategories(copyCategories);
        });

    }

    return (
        <div>
            <HeaderButtonPage
                type={'back'}
                h2={'Cadastro de plano'}
            />

            <CardForm type={'biggest'}>
                <form onSubmit={handlerSubmit}>
                    <Row>
                        <Col>
                            <div className={'d-flex align-items-center'}>
                                <input
                                    type={'checkbox'}
                                    id={'active'}
                                    checked={active}
                                    onChange={() => setActive(!active)}
                                />
                                <label htmlFor={'active'}>Ativo</label>
                            </div>
                        </Col>

                        <Col>
                            <div className={'d-flex align-items-center'}>
                                <input
                                    type={'checkbox'}
                                    id={'isFree'}
                                    checked={isFree}
                                    onChange={() => setIsFree(!isFree)}
                                />
                                <label htmlFor={'isFree'}>Plano grátis</label>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'d-flex align-items-center justify-content-center'}>
                        <Col>
                            <Input
                                label={'Imagem'}
                                id={'logo'}
                                type={'file'}
                                onChange={e => seImage(e.target.files[0])}
                                placeholder={image?.name ?? 'Imagem do do plano'}
                            />
                        </Col>
                        <Col className={'d-flex align-items-center'}>
                            <Select2
                                options={allCategories}
                                onChange={setCategoryChange}
                                value={categoryChange}
                                label={'Categoria'}
                            />
                            <Button
                                type={'add'}
                                onClick={() => setModalShow(true)}
                            >
                            </Button>
                        </Col>
                    </Row>
                    {
                        isFree ?
                            <Input
                                required
                                label={'Qtd. dias'}
                                name={'qtd_days'}
                                type={'number'}
                                placeholder={'Qtd. de dias'}
                                value={quantityDays}
                                onChange={e => setQuantityDays(e.target.value)}
                            />
                            :
                            null

                    }

                    <Row>
                        <Col>
                            <Input
                                type={"text"}
                                required
                                label={'Nome'}
                                name={'name'}
                                placeholder={'name example'}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Input
                                required
                                type={"number"}
                                min={0}
                                label={'N° de usuários'}
                                value={quantityUsers}
                                onChange={e => setQuantityUsers(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputMoney
                                label={'Valor mensal'}
                                value={valueByMonth}
                                onChange={(e, value) => setValueByMonth(value)}
                            />
                        </Col>
                        <Col>
                            <InputMoney
                                label={'Valor total'}
                                value={valueByYear}
                                onChange={(e, value) => setValueByYear(value)}
                            />
                        </Col>
                    </Row>
                    <Editor2
                        label={'Descrição'}
                        value={description}
                        onChange={setDescription}
                    />

                    <Button styleIcon={'save'}>Salvar alterações</Button>
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

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShow(false)} animation={true}
                style={{ textAlign: "center" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: "100%" }} id="contained-modal-title-vcenter">
                        <Row>
                            <Col><p>Cadastro de categoria</p></Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={registerCategory} style={{ backgroundColor: "lightgrey" }}>
                        <Row className={'d-flex align-items-center'}>
                            <Col lg={6}>
                                <Input
                                    label={'Nome'}
                                    value={categoryName}
                                    onChange={e => setCategoryName(e.target.value)}
                                    required
                                    className={'border'}
                                />
                            </Col>
                            <Col lg={3}>
                                <Input
                                    label={'Qtd. de meses'}
                                    value={quantityMonths}
                                    onChange={e => setQuantityMonths(e.target.value)}
                                />
                            </Col>
                            {
                                showMessageCategorySuccess ? <Message type={'info'}>Sapida registrada com sucesso</Message> : null
                            }
                            <Col>
                                <Button>Registrar</Button>
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Create;
