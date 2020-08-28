import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .sales-container {
    background-color: #f5f5f8;
    background-size: cover;
    width: 100vw;
    color: black;
    margin-top: 10rem;
    height: 350px;
    text-align: center;
  }
  .other-div {
    padding-top: 80px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .sales-text {
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.33px;
    line-height: 32px;
    font-size: 20px;
    text-align: center;
    padding-bottom: 18px;
  }
  .sales-button {
    background-color: #007cb0;
    color: #efefef;
    width: 160px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    &:hover {
      color: white !important;
      background-color: #006996;
    }
  }
  @media only screen and (max-width: 800px) {
    .sales-container {
      height: 400px;
    }
    .other-div {
      font-size: 20px;
      letter-spacing: 0.3px;
      max-width: 300px;
    }
  }
`;

export const Sales = () => (
  <Styles>
    <Container className="sales-container" fluid>
      <Row>
        <Col xs={12} lg={12}>
          <div className="other-div">
            <p className="sales-text">
              <strong>Request a Sales Person</strong>
              <br />
              Schedule a meeting with our enterprise sales team or a solutions
              engineer to discuss your application.
            </p>
          </div>
          <p>
            <a href="#contact-sales" className="hero-button">
              <Button className="sales-button" size="lg">
                Contact Sales
              </Button>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </Styles>
);
