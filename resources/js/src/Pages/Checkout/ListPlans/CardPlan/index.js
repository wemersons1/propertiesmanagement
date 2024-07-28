import React, { useContext, useState } from 'react';
import styles from './CardPlan.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';
import { goToDataCompany } from '../../HeaderNavigator/util';
import Context from '../../../../Hook/Context';
import CreateAccount from '../CreateAccount';

const CardPlan = ({ plan }) => {

    const { user } = useContext(Context);
    plan.description = plan.description.split('<p>').join('');
    let descriptions = plan.description.split('</p>');
    let plan64 = goToDataCompany(plan.id, false, user);
    let plan64Free = goToDataCompany(plan.id, true);
    const [show, setShow] = useState(false);

    return (
        <div className={styles.CardPlan}>
            <img
                width={150}
                height={100}
                src={plan.path_image}
            />
            <h1>{plan.name}</h1>
            <ul>
                {
                    descriptions.map(description => {
                        if (description.length)
                            return (<li><BsCheckCircle className={'icon-left icon-success'} />{description}</li>);
                    })
                }
            </ul>
            <div style={{ marginTop: "auto" }}>
                <h3 className={'text-center bold mt-4'} style={{ color: "#4e4e4e", fontWeight: "bold" }}>{plan.quantity_users === 1 ? `1 usuário` : `Até ${plan.quantity_users} usuários`}</h3>
                <h1>{parseFloat(plan.value_total).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                })}</h1>

                {
                    user ?
                        <>
                            {
                                user?.company?.used_free_plan ? null :
                                    <Link to={`${plan64Free}`}>
                                        <Button type={'button'}>Experimente grátis</Button>
                                    </Link>
                            }

                            <Link to={`${plan64}`}>
                                <Button type={'button'}>Aderir</Button>
                            </Link>
                        </>
                        :
                        <>
                            <Button onClick={() => setShow(true)} type={'button'}>Experimente grátis</Button>
                            <Button onClick={() => setShow(true)} type={'button'}>Aderir</Button>
                        </>
                }

            </div>

            <CreateAccount
                show={show}
                setShow={setShow}
            />

        </div>
    );
}

export default CardPlan;
