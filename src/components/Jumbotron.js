import React from "react";
import { Jumbotron as Jumbo, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import homeRectangle from "./assets/homeRectangle.png";

const Styles = styled.div`
  .hero-button {
    height: 48px;
    width: 175px;
    border-radius: 3px;
    background-color: #007cb0;
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 16px;
    text-align: center;
    &:hover {
      color: #efefef !important;
      background-color: #006996;
    }
  }
  .jumbo {
    background: url(${homeRectangle}) no-repeat fixed center bottom;
    background-size: cover;
    color: #efefef;
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
    font-family: "Roboto", sans-serif;
    font-size: 56px;
    font-weight: bold;
  }
  .other-text {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 22px;
    letter-spacing: 0.33px;
    line-height: 3.5vh;
    margin-top: 13px;
    max-width: 750px;
  }
  @media only screen and (max-width: 1200px) {
    .text {
      font-size: 48px;
      font-weight: bold;
    }
    .other-text {
      font-size: 20px;
      letter-spacing: 0.3px;
      line-height: 3vh;
    }
  }
  @media only screen and (min-width: 1800px) {
    .text {
      font-size: 3.8vw;
      font-weight: bold;
    }
    .other-text {
      font-size: 1.15vw;
      letter-spacing: 0.4px;
      line-height: 3.7vh;
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
          <Button className="hero-button" variant="primary" size="lg">
            Our Products
          </Button>
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
