import React, {useContext} from 'react';
import styles from './HeaderButtonPage.module.css';
import {Link, useNavigate} from "react-router-dom";
import Button from "../Button";
import {RiAddCircleLine, RiArrowGoBackLine} from 'react-icons/ri';
import Context from "../../Hook/Context";
import {Col, Row} from "react-bootstrap";
import {checkUser} from "../../Hook/util/help";
import {BsArrowLeft} from 'react-icons/bs';

const HeaderButtonPage = ({type, to, h1, h2, showStore}) => {

    const {user, role} = useContext(Context);

    const navigate = useNavigate();

    if(type === 'store') {
        return (
            <div className={styles.SpaceManu}>

                    <Row>
                        <Col lg={10}>
                            <h1>{h1}</h1>
                        </Col>
                        {
                            (checkUser(user, 'admin') || checkUser(user, 'master') || showStore) &&
                            <Col lg={2}>
                                <Link to={to}>
                                    <Button type={'button'}>Cadastrar<RiAddCircleLine className={styles.Icon}/></Button>
                                </Link>

                            </Col>
                        }
                    </Row>

            </div>
        );
    }

    return (
        <div className={`${styles.SpaceManu} ${styles.Back}`}>
            <div>
                {
                    role === 'seller' ? null :
                        <Button back={true} onClick={() => navigate(-1)}>
                            <BsArrowLeft className={styles.Icon}/>
                        </Button>
                }

            </div>
            <h2 className={'mt-4'}>{h2}</h2>
            <div></div>
        </div>
    );
}

export default HeaderButtonPage;
