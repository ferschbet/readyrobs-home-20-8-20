import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card1a from "./assets/card1a.png";
import card1b from "./assets/card1b.png";
import card1c from "./assets/card1c.png";
import styled from "styled-components";

const Styles = styled.div`
  .quick-container {
    background-color: #f5f5f8;
    height: auto;
    /*    max-width: 1440px;*/
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
  .quick-shop {
    height: 30px;
    margin-bottom: 3rem;
    margin-left: 5rem;
    /*    margin-top: 5rem;*/
  }

  .card1 {
    text-align: center;
  }
  .card1-title {
    text-align: left;
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
`;

export const Quickshop = () => (
  <Styles>
    <Container className="quick-container" fluid>
      <div className="quick-shop">
        <h1>Quick Shop</h1>
      </div>
      <Row className="mr-5 mb-3 ml-5">
        <Col md={4}>
          <Card className="card1 mb-3">
            <Card.Body>
              <Card.Img
                className="imgc1"
                variant="top"
                src={card1a}
                alt="image card1a"
              />
              <Card.Title className="card1-title">
                Automation Packages
              </Card.Title>
              <Card.Text className="card1-text">
                Lorem Ipsum is simply dummy text of the printing a and industry.
              </Card.Text>
              <Button className="card1-button mt-auto">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card1 mb-3">
            <Card.Body>
              <Card.Img variant="top" src={card1b} alt="image card1b" />
              <Card.Title className="card1-title">Forge Bundles</Card.Title>
              <Card.Text className="card1-text">
                Lorem Ipsum is simply dummy text of the printing a and industry.
              </Card.Text>
              <Button className="card1-button mt-auto">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card1 mb-3">
            <Card.Body>
              <Card.Img variant="top" src={card1c} alt="image card1c" />
              <Card.Title className="card1-title">Forge Station</Card.Title>
              <Card.Text className="card1-text">
                Lorem Ipsum is simply dummy text of the printing a and industry.
              </Card.Text>
              <Button className="card1-button mt-auto">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Styles>
);
