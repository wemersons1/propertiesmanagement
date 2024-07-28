import React from 'react';
import Input from "../../../components/Input";
import {Row, Col} from 'react-bootstrap';
import Card from "../../../components/Card";
import { Chart } from "react-google-charts";
import {GiTwoCoins} from 'react-icons/gi';
import MainInformation from "../../../components/Card/MainInformation";

const Dashboard = () => {

    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];

     const options = {
        chart: {
            title: "Usuários",
        },

    };

    return (
      <div>
        <Row>
            <Col lg={3}>
               <Input type={"date"} form={"search"} placeholder={"Período"} />
            </Col>

            <Col lg={3}>
               <Input form={"search"} placeholder={"Projeto"} />
            </Col>

            <Col lg={3}>
               <Input form={"search"} placeholder={"Usuários"} />
            </Col>

            <Col lg={3}>
               <Input form={"search"} placeholder={"IDOS"} />
            </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card
                type={'model-1'}
                title={'Total de Tokens Pré Sale'}
                value={"9.000,000"}
                footer={ <MainInformation value={"25.5 %"}/> }
            />
          </Col>
          <Col md={4}>
            <Card
                type={'model-1'}
                title={'Total de Users'}
                value={"1.854"}
                footer={ <MainInformation value={"91 %"}/> }
            />
          </Col>
          <Col md={4}>
            <Card
                type={'model-1'}
                title={'Amount Collected em USDT'}
                value={"1.854,00"}
                footer={ <MainInformation value={"USDT"} type={'info'}/> }
            />
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Card>
              <Chart
                chartType="Bar"
                width="100%"
                height="250"
                data={data}
                options={options}
              />
            </Card>
          </Col>
          <Col lg={4}>
            <Row>
              <Col>
                  <Card
                      type={'model-2'}
                      title={'Total'}
                      icon={
                          <GiTwoCoins
                              className={"icon-left icon-right"}
                              style={{ fill: "#2596be" }}
                              size={20}
                          />
                      }
                      value={"1000"}
                  />
              </Col>
              <Col>
                  <Card
                      type={'model-2'}
                      title={'Ativo'}
                      icon={
                          <GiTwoCoins
                              className={"icon-left"}
                              style={{ fill: "#00c383" }}
                              size={20}
                          />
                      }
                      value={"10"}
                  />
              </Col>
            </Row>
            <Row>
              <Col>
                  <Card
                      type={'model-2'}
                      title={'Pendente'}
                      icon={
                          <GiTwoCoins
                              className={"icon-left"}
                              style={{ fill: "#fca51e" }}
                              size={20}
                          />
                      }
                      value={"5"}
                  />
              </Col>
              <Col>
                  <Card
                      type={'model-2'}
                      title={'Cancelado'}
                      icon={
                          <GiTwoCoins
                              className={"icon-left"}
                              style={{ fill: "#fc045c" }}
                              size={20}
                          />
                      }
                      value={"1"}
                  />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
}

export default Dashboard;