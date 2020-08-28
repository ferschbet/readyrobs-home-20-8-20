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
    color: #efefef;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 16px;
    text-align: center;
    vertical-align: center;

    &:hover {
      color: white !important;
      background-color: #006996 !important;
    }
  }
  .jumbo-container {
    width: 100vw;
    color: #efefef;
    position: absolute;
    z-index: 3;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 20vh;
  }
  .jumbo {
    background: url(${homeRectangle}) no-repeat scroll center bottom;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin-bottom: 0;
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
          <a href="#products" className="hero-button">
            <Button className="hero-button" size="lg">
              Our Products
            </Button>
          </a>
        </p>
      </Container>
    </Jumbo>
  </Styles>
);
