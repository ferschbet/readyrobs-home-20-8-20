import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import schema from "./assets/schema.png";
import styled from "styled-components";

const Styles = styled.div`
  .work-container {
    background-color: #f5f5f8;
    padding: 10rem 0 5rem;
  }
  .img1 {
    width: auto;
  }
  .description {
    vertical-align: middle;
  }
  .work-title {
    color: #000000;
    font-family: Roboto;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0;
    padding-top: 2rem;
  }
  .work-text {
    color: #000000;
    font-family: Roboto;
    font-size: 22px;
    letter-spacing: 0.33px;
    line-height: 3vh;
    padding: 2rem 5rem 0 0;
  }
  @media only screen and (max-width: 1200px) {
    .work-container {
      padding: 5rem 0 5rem;
    }
    .work-title {
      font-size: 48px;
      font-weight: bold;
    }
    .work-text {
      font-size: 20px;
      letter-spacing: 0.3px;
      line-height: 2.5vh;
    }
  }
  @media only screen and (min-width: 1800px) {
    .work-title {
      font-size: 3.8vw;
      font-weight: bold;
    }
    .work-text {
      font-size: 1.15vw;
      letter-spacing: 0.4px;
      line-height: 3.7vh;
    }
  }
`;

export const Work = () => (
  <Styles>
    <Container className="work-container " fluid>
      <Row className="mr-5 mb-5 ml-5">
        <Col lg={6} md={12}>
          <Image
            className="img1"
            variant="top"
            src={schema}
            alt="Schematic-6@2x"
            fluid
          />
        </Col>
        <Col lg={6} md={12}>
          <div className="description">
            <h1 className="work-title">
              How Does <br></br>it Work
            </h1>
            <p className="work-text">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>
);
