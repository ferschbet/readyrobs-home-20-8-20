import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
/*import "./NavigationBar.css";*/
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #000;
  }
  .navbar-brand,
  .nav-link {
    min-height: 68px;
    display: flex;
    align-items: center;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fff;

    &:hover {
      color: #006996;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ready Robotics</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>Menu</span>
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
          <Nav.Link href="#customer-portal">
            <img
              src="https://img.icons8.com/small/32/000000/contacts.png"
              alt="user icon"
            />
            Customer Portal
          </Nav.Link>
          <Nav.Link eventKey={2} href="#contact-sales">
            Contact Sales
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
