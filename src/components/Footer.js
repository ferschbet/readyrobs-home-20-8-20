import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .footer-container {
    background-color: #282a2b;
    color: #ffffff;
    font-family: Roboto;
    height: 200px;
    padding-left: 10rem;
  }
  .copyright {
    padding-top: 30px;
    text-align: left;
  }
  .footer-copyright-text {
    font-size: 12px;
    text-align: left;
  }
  .footer-contact {
    font-size: 16px;
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .partnership {
    font-size: 16px;
    text-align: center;
    padding-top: 40px;
  }
  .footer-social {
    font-size: 32px;
    text-align: center;
    padding-top: 60px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media only screen and (max-width: 1200px) {
    .footer-container {
      height: 200px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .footer-container {
      height: 350px;
    }
    .copyright {
      text-align: center;
    }
    .footer-copyright-text {
      text-align: center;
    }
  }
  @media only screen and (max-width: 800px) {
    .footer-container {
      height: 600px;
      padding-left: 0;
    }
    .copyright {
      text-align: center;
    }
  }
  .footer-contact {
  }
`;

export const Footer = () => (
  <Styles>
    <Container className="footer-container" fluid>
      <Row className="footer-row">
        <Col lg={3} md={6} className="copyright">
          <p className="footer-copyright-logo">READY ROBOTICS LOGO</p>
          <p className="footer-copyright-text">
            © 2020 COPYRIGHT Ready-Robotics<br></br>ALL RIGHTS RESERVED
          </p>
          <p className="footer-copyright-text">privacy % terms of use</p>
        </Col>
        <Col lg={3} md={6} className="footer-contact">
          <p>Contact Us</p>
          <p>info@ready-robotics</p>
        </Col>
        <Col lg={3} md={6} className="partnership">
          <p>Interested in Partnering?</p>
          <p>partnerships@ready-robotics.com</p>
        </Col>
        <Col lg={3} md={6} className="footer-social">
          <p>
            <i class="fab fa-facebook-square"></i>
            <span> </span>
            <i class="fab fa-twitter"></i>
          </p>
        </Col>
      </Row>
    </Container>
  </Styles>
);
