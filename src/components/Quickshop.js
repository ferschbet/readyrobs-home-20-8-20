import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card1a from "./assets/card1a.png";
import card1b from "./assets/card1b.png";
import card1c from "./assets/card1c.png";
import styled from "styled-components";

const Styles = styled.div`
  .quick {
    background-color: #f5f5f8;
  }
  .quick-container {
    height: auto;
    width: 1140px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    align-items: center;
  }
  .quick-shop {
    width: 1140px;
    height: 30px;
    margin-bottom: 3rem;
    text-align: left;
  }
  .quick-row {
    justify-content: center;
    vertical-align: center;
    /*    margin: 5rem;*/
  }
  .quick-col {
    justify-content: center;
  }
  .card1 {
    text-align: center;
    align-items: center;
    /*    height: 29.7rem;*/
    height: 35rem;
    max-width: 362px;
    min-width: 18rem;
    width: auto;
    margin-bottom: 20px;
  }
  .imgc1a {
    height: 235px;
    max-width: 278.4px;
    width: auto;
    margin-bottom: 100px;
  }
  .imgc1b {
    height: 235px;
    width: 225px;
    margin-bottom: 100px;
  }
  .imgc1c {
    height: 279px;
    width: 192px;
    margin-bottom: 57px;
  }
  .card1-body {
    align-items: left;
  }
  .card1-title {
    text-align: left;
    vertical-align: text-bottom;
  }
  .card1-text {
    text-align: left;
  }
  .card1-button {
    text-align: center;
    color: white;
    background-color: #007cb0;
    &:hover {
      color: white !important;
      background-color: #006996;
    }
  }
  @media only screen and (max-width: 800px) {
    .quick-container {
      justify-content: center;
      width: 400px;
    }
    .quick-shop {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .quick-row {
      justify-content: center;
      align-items: center;
      vertical-align: center;
    }
    .quick-text {
      text-align: left;
      font-size: 36px;
    }
    .card1 {
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 1800px) {
    .card1 {
      max-width: 32rem;
    }
  }
`;

export const Quickshop = () => (
  <Styles>
    <Container className="quick" fluid>
      <Container className="quick-container">
        <div className="quick-shop">
          <h1 className="quick-text">Quick Shop</h1>
        </div>
        <Row className="quick-row">
          <Col
            lg={4}
            md={6}
            xs={12}
            className="quick-col justify-content-center"
          >
            <Card className="card1">
              <Card.Img
                className="imgc1a"
                variant="top"
                src={card1a}
                alt="image card1a"
              />
              <Card.Body className="card1-body">
                <Card.Title className="card1-title">
                  Automation Packages
                </Card.Title>
                <Card.Text className="card1-text">
                  Lorem Ipsum is simply dummy text of the printing a and
                  industry.
                </Card.Text>
                <a href="#products">
                  <Button className="card1-button" size="lg" block>
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="quick-col">
            <Card className="card1">
              <Card.Body>
                <Card.Img
                  className="imgc1b"
                  variant="top"
                  src={card1b}
                  alt="image card1b"
                />
                <Card.Title className="card1-title">Forge Bundles</Card.Title>
                <Card.Text className="card1-text">
                  Lorem Ipsum is simply dummy text of the printing a and
                  industry.
                </Card.Text>
                <a href="#products">
                  <Button className="card1-button" size="lg" block>
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="quick-col">
            <Card className="card1">
              <Card.Body>
                <Card.Img
                  className="imgc1c"
                  variant="top"
                  src={card1c}
                  alt="image card1c"
                />
                <Card.Title className="card1-title">Forge Station</Card.Title>
                <Card.Text className="card1-text">
                  Lorem Ipsum is simply dummy text of the printing a and
                  industry.
                </Card.Text>
                <a href="#products">
                  <Button className="card1-button" size="lg" block>
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  </Styles>
);
