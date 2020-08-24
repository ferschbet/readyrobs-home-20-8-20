import React from "react";
import { Jumbotron as Jumbo, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import grey from "./assets/grey.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${grey}) no-repeat fixed center bottom;
    background-size: cover;
    color: #efefef;
    /*color: black;*/
    height: 900px;
    position: relative;
  }
  .jumbo-container {
    width: 100vw;
    position: absolute;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 30vh;
  }
  .text {
    font-size: 3.9vw;
    letter-spacing: -2px;
  }
  .other-text {
    font-size: 1.5vw;
  }
  @media only screen and (max-width: 1000px) {
    .text {
      font-size: 32px;
    }
    .other-text {
      font-size: 16px;
    }
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container className="jumbo-container">
        <h1 className="text">Implement Robotic Automation on Your Own</h1>
        <p className="other-text">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </p>
        <p>
          <Button variant="primary">Our Products</Button>
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
