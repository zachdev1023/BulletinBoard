import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

export class AppNavbar extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div style={{ background: "#212529", margin: 0 }}>
        <Container>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <NavbarBrand href="/">Posts</NavbarBrand>
            <NavbarToggler style={{ float: "right" }} onClick={this.toggle} />
            <Collapse style={{ flexGrow: 0 }} isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Chats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Explore</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Interactions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/zachdev1023">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default AppNavbar;
