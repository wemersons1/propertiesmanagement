import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Row, Col, Spinner } from 'react-bootstrap';
import Context from '../../../Hook/Context';
import CardPlan from './CardPlan';
import Header from './Header';
import HeaderLogged from '../../../components/Layout/Header';
import styles from './ListPlans.module.css';

const ListPlans = () => {

    const [plans, setPlans] = useState({});
    const [loading, setLoading] = useState(true);
    const [categoryChange, setCategoryChange] = useState('');
    const [categories, setCategories] = useState([]);
    const { user } = useContext(Context);

    useEffect(async () => {

        const allCategories = await axios.get('/api/v1/categories/plans?all=1');

        let params = {};

        if (allCategories) {

            let plansTreated = {};

            let verify = false;

            for (let i = 0; i < allCategories.data.length; i++) {

                params['category_id'] = allCategories.data[i].id;
                const response = await axios.get('/api/v1/all-plans?all=1', {
                    params
                });

                response.data.length ? plansTreated[allCategories.data[i].name] = response.data : null;
                if ((i + 1) === allCategories.data.length) verify = true;
            }

            setPlans(plansTreated);

            if (verify) {
                setLoading(false);

                setCategories(Object.keys(plansTreated));
                setCategoryChange(Object.keys(plansTreated)[0]);
            }
        }

    }, []);

    const renderPlans = () => {

        let url = location.href.split('/');
        url = `${url[0]}//${url[2]}/plans`;

        return plans[categoryChange].map(plan => {

            plan = {
                ...plan,
                path_image: `${url}?image=${plan.path_image}`
            }

            return (
                <CardPlan
                    plan={plan}
                />
            );
        });
    }

    if (loading || !categories.length || !categoryChange) return (<Spinner />);

    return (
        <div className={styles.ListPlans}>
            {
                user ? <HeaderLogged /> : <Header />
            }

            <div className={styles.Container}>

                {
                    user ? <h1>Escolha o melhor plano para seu perfil</h1>
                        :
                        <>
                            <h1>Concentre-se no que só você pode cuidar, o restante o Birds dá conta! ;)</h1>
                            <p>
                                Na Birds, você tem total autonomia para escolher qual plano usar e por quanto tempo,
                                sem limite de cadastro de produtos ou clientes, inclusive no plano Grátis!
                            </p>

                        </>
                }
                <div className={styles.ContainerPlans}>
                    {
                        <Nav variant="pills" defaultActiveKey={categories[0]}>
                            {
                                categories.map((category, index) => {

                                    return (
                                        <Nav.Item key={index}>
                                            <Nav.Link
                                                onClick={() => {
                                                    setCategoryChange(category);
                                                }}
                                                eventKey={category} ><b className={categoryChange === category ? 'text-light h4  ' : 'text-dark h4'}>{category}</b>
                                            </Nav.Link>
                                        </Nav.Item>
                                    );
                                })
                            }

                        </Nav>
                    }

                    <div className={styles.RenderPlansList}>
                        {renderPlans()}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ListPlans;
