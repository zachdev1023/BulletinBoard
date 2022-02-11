import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import {
  FaHome,
  FaRegComments,
  FaCompass,
  FaHeart,
  FaUser,
  FaGithub,
} from "react-icons/fa";

export class AppNavbar extends Component {
  state = { isOpen: false };

  render() {
    return (
      <div style={{ background: "#212529", margin: 0 }}>
        <Container>
          <Navbar color="dark" dark className="mb-0 mb-md-5">
            <NavbarBrand href="/">Posts</NavbarBrand>
            <Nav className="ml-auto d-inline-flex ">
              <NavItem>
                <NavLink className="text-light" href="#">
                  <FaHome className="faIcon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#">
                  <FaRegComments className="faIcon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#">
                  <FaCompass className="faIcon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#">
                  <FaHeart className="faIcon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#">
                  <FaUser className="faIcon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-light"
                  href="https://github.com/zachdev1023"
                >
                  <FaGithub className="faIcon" />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default AppNavbar;
