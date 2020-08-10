import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    const navDropDownTitle = (
      <i
        class="fa fa-user-o"
        aria-hidden="true"
        style={{ fontSize: "30px" }}
      ></i>
    );

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          background: "#424242",
          color: "white",
          paddingLeft: "18%",
          paddingRight: "18%",
          fontSize: "20px",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}
      >
        <Navbar.Brand
          href="/"
          style={{ fontSize: "35px", fontFamily: "Anton, sans-serif" }}
        >
          Learning-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sentences">Sentences</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={navDropDownTitle} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
