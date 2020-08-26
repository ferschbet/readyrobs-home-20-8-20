import React from "react";
import { Button, Card, CardColumns, Container } from "react-bootstrap";
import card1a from "./assets/card1a.png";
import card1b from "./assets/card1b.png";
import card1c from "./assets/card1c.png";
import styled from "styled-components";

const Styles = styled.div`
  .quick-container {
    height: auto;
    max-width: 1440px;
  }
  .quick-shop {
    height: 30px;
    margin-bottom: 7%;
    margin-left: 11%;
    margin-top: 5%;
  }
  .card-col1 {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
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
  }
`;

export const Quickshop = () => (
  <Styles>
    <Container className="quick-container" fluid>
      <div className="quick-shop">
        <h1>Quick Shop</h1>
        <br />
      </div>
      <CardColumns className="card-col1">
        <Card className="card1  align-items-end">
          <Card.Img variant="top" src={card1a} alt="image card1a" />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="card1-title mt-auto">
              Automation Packages
            </Card.Title>
            <Card.Text className="card1-text mt-auto">
              Lorem Ipsum is simply dummy text of the printing a and industry.
            </Card.Text>
            <Button className="card1-button mt-auto" variant="primary">
              Learn More
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img variant="top" src={card1b} alt="image card1b" />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="card1-title mt-auto">
              Forge Bundles
            </Card.Title>
            <Card.Text className="card1-text mt-auto">
              Lorem Ipsum is simply dummy text of the printing a and industry.
            </Card.Text>
            <Button className="card1-button mt-auto" variant="primary">
              Learn More
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img variant="top" src={card1c} alt="image card1c" />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="card1-title mt-auto">
              Forge Station
            </Card.Title>
            <Card.Text className="card1-text mt-auto">
              Lorem Ipsum is simply dummy text of the printing a and industry.
            </Card.Text>
            <Button className="card1-button mt-auto" variant="primary">
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  </Styles>
);
