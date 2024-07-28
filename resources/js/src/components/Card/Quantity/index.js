import React from 'react';
import styles from './Quantity.module.css';
import {Col, Row} from "react-bootstrap";
import {IoMdAddCircleOutline} from 'react-icons/io';
import {MdOutlineRemoveCircleOutline} from 'react-icons/md';
import InputMoney from "../../InputMoney";

const  Quantity = ({quantity, quantitySelected, setConfigsChange}) => {

    const addQuantity = () => {

        let quantityTreated = null;

        if(quantitySelected + 1 > quantity) {

            quantityTreated = quantity;

        } else {

            quantityTreated = quantitySelected + 1;

        }

        let e = {
            target: {
                name: "quantity_selected",
                value: quantityTreated
            }
        };

        setConfigsChange(e);

    }

    const removeQuantity = () => {

        let quantityTreated = null;

        if(quantitySelected - 1 < 0) {

            quantityTreated = 0;

        } else {

            quantityTreated = quantitySelected - 1;

        }

        let e = {
            target: {
                name: "quantity_selected",
                value: quantityTreated
            }
        };

        setConfigsChange(e);

    }

    return (
        <div>

            <Row  className={'d-flex align-items-end'}>
                <Col>
                    <button onClick={removeQuantity} className={styles.Remove}><MdOutlineRemoveCircleOutline style={{fill: "white"}} size={25}/></button>
                </Col>
                <Col xs={4}>
                    <div className={styles.Quantity}>
                        <input
                            type={'mask'}
                            max={quantity}
                            value={quantitySelected}
                            onChange={setConfigsChange}
                            name={'quantity_selected'}
                        />
                    </div>
                </Col>
                <Col>
                    <button onClick={addQuantity} className={styles.Add}><IoMdAddCircleOutline style={{fill: "white"}} size={25}/></button>
                </Col>
            </Row>
        </div>
    );
}

export default Quantity;
