import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import card3a from "./assets/card3a.png";
import card3b from "./assets/card3b.png";
import card3c from "./assets/card3c.png";
import card3d from "./assets/card3d.png";
import card3e from "./assets/card3e.png";
import card3f from "./assets/card3f.png";
import card3g from "./assets/card3g.png";
import card3h from "./assets/card3h.png";

const Styles = styled.div`
  .solutions-container {
    width: 1140px;
    margin-top: 5rem;
    width: auto;
    margin-bottom: 100px;
  }
  .sol-container1 {
    height: auto;
    width: auto;
    margin-top: 0;
  }
  .sol-container2 {
    max-height: 100px;
    height: auto;
    width: auto;
    /*    padding-bottom: 10rem;*/
  }
  .solutions {
    height: 30px;
    margin-bottom: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .sol-text {
    text-align: center;
    color: #282a2b;
    font-family: Roboto;
    font-size: 32px;
  }
  .sol-col {
    width: auto;
    margin: 0;
  }
  .card3 {
    text-align: center;
    height: 15rem;
    width: 16.5rem;
    border: none;
  }
  .cont-img {
    width: 75px;
    height: 75px;
    margin-bottom: 25px;
  }
  .card3-text {
    color: #282a2b;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.33px;
    line-height: 24px;
    text-align: center;
  }
  .card3-button {
    text-align: center;
    color: white;
    background-color: #007cb0;
    &:hover {
      color: white !important;
      background-color: #006996;
    }
  }
  @media only screen and (max-width: 800px) {
    .solutions-container {
      margin-bottom: 45rem;
    }
    .solutions {
      max-width: 250px;
      margin-left: auto;
      margin-right: auto;
    }
    .sol-row {
      align-items: center;
      vertical-align: center;
      margin-left: 4rem;
      margin-right: auto;
    }
    .sol-text {
      padding-bottom: 1rem;
    }
    .card3 {
      text-align: center;
      height: 12rem;
    }
  }
  @media only screen and (min-width: 801px) and (max-width: 1000px) {
    .solutions-container {
      margin-bottom: 25rem;
    }
    .solutions {
      margin-left: auto;
      margin-right: auto;
    }
    .sol-row {
      align-items: center;
      vertical-align: center;
      margin-left: 3rem;
      margin-right: auto;
    }
    .sol-text {
      padding-bottom: 2rem;
    }
    .card3 {
      text-align: center;
      height: 12rem;
      width: 15rem;
    }
  }
`;

export const Solutions = () => (
  <Styles>
    <Container className="solutions-container">
      <Container className="sol-container1" fluid>
        <div className="solutions">
          <h1 className="sol-text">All of our solutions include </h1>
        </div>
        <Row className="sol-row">
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3a}
                  alt="image card3a"
                />
                <Card.Text className="card3-text">
                  Forge/OS, enteprise grade operating system for industrial
                  automation
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3b}
                  alt="image card3b"
                />
                <Card.Text className="card3-text">
                  READY Canvas, our award winning, robot agnostic, visual
                  programming interface
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3c}
                  alt="image card3c"
                />
                <Card.Text className="card3-text">
                  Controller, an integration hub running Forge/OS, including 8
                  pneumatic ports, 24V I/O, EtherNet/IP, and Modbus
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3d}
                  alt="image card3d"
                />
                <Card.Text className="card3-text">
                  Tech Support via chat and email
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="sol-container2" fluid>
        <Row className="sol-row">
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3e}
                  alt="image card3e"
                />
                <Card.Text className="card3-text">
                  Free online, and in our Columbus, OH office, training
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3f}
                  alt="image card3f"
                />
                <Card.Text className="card3-text">
                  Safety Assessment template and support
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3g}
                  alt="image card3g"
                />
                <Card.Text className="card3-text">
                  One year warranty on parts
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="sol-col">
            <Card className="card3">
              <Card.Body>
                <Card.Img
                  className="cont-img"
                  variant="top"
                  src={card3h}
                  alt="image card3h"
                />
                <Card.Text className="card3-text">
                  Solution review prior to order finalization
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  </Styles>
);
