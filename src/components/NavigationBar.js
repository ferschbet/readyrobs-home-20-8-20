import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
/*import "./NavigationBar.css";*/
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #000;
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    font-weight: lighter;
    /*  letter-spacing: 0.2px;*/
  }
  @media only screen and (max-width: 1200px) {
    .navbar {
      font-size: 14px;
      /*  letter-spacing: 0.3px;*/
    }
  }
  @media only screen and (min-width: 1800px) {
    .navbar {
      font-size: 17px;
      letter-spacing: 0.2px;
    }
  }
  .toggle-text {
    color: #ffffff;
    &:hover {
      color: #007cb0;
    }
  }
  .navbar-brand,
  .nav-link {
    min-height: 70px;
    display: flex;
    align-items: center;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fff;

    &:hover {
      color: #007cb0;
    }
  }
  .contact-sales {
    color: white;
    background-color: #007cb0;

    &:hover {
      color: white !important;
      background-color: #006996;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ready Robotics</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="toggle-text">Menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Applications" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="customer-portal" href="#customer-portal">
            Customer Portal
          </Nav.Link>
          <Nav.Link
            className="contact-sales"
            eventKey={2}
            href="#contact-sales"
          >
            Contact Sales
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
