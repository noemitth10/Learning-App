import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../landingpage.css";
import "../../App.css";

class NavBar extends Component {
  render() {
    const navDropDownTitle = (
      <i
        className="fa fa-user-o"
        aria-hidden="true"
        style={{ fontSize: "30px" }}
      ></i>
    );

    return (
      <Navbar
        collapseOnSelect
        className="main-navbar"
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <div className="app-title">Learning-App</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sentences">Sentences</Nav.Link>
            <Nav.Link href="/lesson">Demo</Nav.Link>
            <Nav.Link href="/test">TestIt</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={navDropDownTitle} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
