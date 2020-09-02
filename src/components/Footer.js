import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    background-color: #282a2b;
  }
  .footer-container {
    color: #ffffff !important;
    font-family: Roboto;
    height: 200px;
    width: 1140px;
  }
  .copyright {
    padding-top: 40px;
    text-align: left;
  }
  .footer-logo {
    text-decoration: none !important;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  .copyright-text {
    font-size: 12px;
    text-align: left;
  }
  .privacy-text {
    text-decoration: none;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  .footer-contact {
    font-size: 16px;
    text-align: center;
    /*    padding-left: 2rem;
    padding-right: 2rem;*/
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .info-link {
    text-decoration: none;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  .partnership {
    font-size: 16px;
    text-align: center;
    padding-top: 80px;
  }
  .email-link {
    text-decoration: none;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  .footer-social {
    font-size: 32px;
    text-align: center;
    padding-top: 80px;
    /*    padding-right: 2rem;
    padding-left: 2rem;*/
  }
  .facebook-link {
    text-decoration: none;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  .twitter-link {
    text-decoration: none;
    color: white;
    &:hover {
      color: #006996;
    }
  }
  @media only screen and (max-width: 800px) {
    .footer-container {
      width: 400px;
      height: 200px;
      padding-left: 5rem;
    }
  }
  @media only screen and (max-width: 1200px) {
    .footer-container {
      height: 200px;
      padding-left: 5rem;
    }
    .copyright {
      text-align: center;
    }
    .copyright-text {
      text-align: center;
    }
  }
  @media only screen and (max-width: 1000px) {
    .footer-container {
      height: 350px;
      padding-left: 5rem;
    }
    .copyright {
      padding-top: 60px;
      text-align: center;
    }
    .copyright-text {
      text-align: center;
    }
    .footer-contact {
      padding-top: 90px;
    }
    .partnership {
      padding-top: 20px;
    }
    .footer-social {
      padding-top: 20px;
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
    .copyright-text {
      text-align: center;
    }
    .footer-contact {
      padding-top: 50px;
    }
    .partnership {
      padding-top: 20px;
    }
    .footer-social {
      padding-top: 50px;
    }
  }
`;

export const Footer = () => (
  <Styles>
    <Container className="footer" fluid>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col lg={3} md={6} className="copyright">
            <p>
              <a className="footer-logo" href="#home">
                <span>READY ROBOTICS LOGO</span>
              </a>
            </p>
            <p className="copyright-text">
              © 2020 COPYRIGHT Ready-Robotics<br></br>ALL RIGHTS RESERVED
            </p>
            <p>
              <a className="privacy-text" href="#privacy">
                <span>privacy & terms of use</span>
              </a>
            </p>
          </Col>
          <Col lg={3} md={6} className="footer-contact">
            <p>
              Contact Us<br></br>
              <a href="#info@ready-robotics" className="info-link">
                <span>info@ready-robotics</span>
              </a>
            </p>
          </Col>
          <Col lg={3} md={6} className="partnership">
            <p>
              Interested in Partnering?<br></br>
              <a href="#partnerships@ready-robotics.com" className="email-link">
                <span>partnerships@ready-robotics.com</span>
              </a>
            </p>
          </Col>
          <Col lg={3} md={6} className="footer-social">
            <p>
              <a href="#facebook" className="facebook-link">
                <span>
                  <i className="fab fa-facebook-square"></i>{" "}
                </span>
              </a>
              <a href="#twitter" className="twitter-link">
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  </Styles>
);
