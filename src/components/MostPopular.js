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
  .card2 {
    text-align: center;
    height: auto;
    width: auto;
  }
  .cont-img {
    width: 75%;
    height: auto;
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
`;

export const MostPopular = () => (
  <Styles>
    <Container className="pop-container" fluid>
      <div className="most-popular">
        <h1>Most Popular</h1>
      </div>
      <Row className="mr-5 mb-5 ml-5">
        <Col lg={3} md={6}>
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
              <Button className="card2-button">View Product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6}>
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
              <Button className="card2-button">View Product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6}>
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
              <Button className="card2-button">View Product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6}>
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
              <Button className="card2-button">View Product</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Styles>
);
