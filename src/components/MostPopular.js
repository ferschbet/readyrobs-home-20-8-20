import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card2a from "./assets/card2a.png";
import card2b from "./assets/card2b.png";
import card2c from "./assets/card2c.png";
import card2d from "./assets/card2d.png";
import styled from "styled-components";

const Styles = styled.div`
  .pop-container {
    height: auto;
    width: auto;
    padding-bottom: 10rem;
  }
  .most-popular {
    height: 30px;
    margin-bottom: 3rem;
    margin-left: 5rem;
    margin-top: 5rem;
  }
  .pop-col {
    max-width: 30rem;
    margin: auto;
  }
  .card2 {
    text-align: center;
    height: 24.9rem;
    width: 16.5rem;
    border: 1px solid #979797;
  }
  .cont-img {
    /*    width: 75%;*/
    height: auto;
    /*margin-top: 20px;*/
    margin-bottom: 80px;
  }
  .card2-text {
    color: #282a2b;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.33px;
    line-height: 19px;
    text-align: left;
  }
  .card2-button {
    text-align: center;
    color: white;
    background-color: #007cb0;
    &:hover {
      color: white !important;
      background-color: #006996;
    }
  }
  @media only screen and (max-width: 800px) {
    .pop-container {
      margin-left: 2.7rem;
      margin-right: auto;
    }
    .most-popular {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .pop-row {
      align-items: center;
      vertical-align: center;
      /*margin-left: auto;
      margin-right: auto;*/
    }
    .pop-col {
      margin-left: auto;
      margin-right: auto;
    }
    .pop-text {
      font-size: 36px;
    }
  }
`;

export const MostPopular = () => (
  <Styles>
    <Container className="pop-container" fluid>
      <div className="most-popular">
        <h1 className="pop-text">Most Popular</h1>
      </div>
      <Row className="pop-row mr-5 mb-5 ml-5">
        <Col lg={3} md={6} className="pop-col">
          <Card className="card2 mb-3">
            <Card.Body>
              <Card.Img
                className="cont-img"
                variant="top"
                src={card2a}
                alt="image card2a"
              />
              <Card.Text className="card2-text">
                READY Made Turn Key Lathe - Fanuc LR Mate
              </Card.Text>
              <a href="#products">
                <Button className="card2-button" size="lg" block>
                  View Product
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="pop-col">
          <Card className="card2 mb-3">
            <Card.Body>
              <Card.Img
                className="cont-img"
                variant="top"
                src={card2b}
                alt="image card2a"
              />
              <Card.Text className="card2-text">
                READY Made Turn Key Lathe - Fanuc LR Mate
              </Card.Text>
              <a href="#products">
                <Button className="card2-button" size="lg" block>
                  View Product
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="pop-col">
          <Card className="card2 mb-3">
            <Card.Body>
              <Card.Img
                className="cont-img"
                variant="top"
                src={card2c}
                alt="image card2a"
              />
              <Card.Text className="card2-text">
                READY Made Turn Key Lathe - Fanuc LR Mate
              </Card.Text>
              <a href="#products">
                <Button className="card2-button" size="lg" block>
                  View Product
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="pop-col">
          <Card className="card2 mb-3">
            <Card.Body>
              <Card.Img
                className="cont-img"
                variant="top"
                src={card2d}
                alt="image card2a"
              />
              <Card.Text className="card2-text">
                READY Made Turn Key Lathe - Fanuc LR Mate
              </Card.Text>
              <a href="#products">
                <Button className="card2-button" size="lg" block>
                  View Product
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Styles>
);
