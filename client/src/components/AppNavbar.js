import React, { Component } from "react";
import PostModal from "./Post/PostModal";

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
      <div class="sticky-top">
        <div style={{ background: "#212529", margin: 0 }}>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />

          <Container>
            <Navbar color="dark" dark className="mb-0 mb-md-5">
              <NavbarBrand className="navbarBrand" href="/">
                Humati
              </NavbarBrand>
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
                    <PostModal />
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
      </div>
    );
  }
}

export default AppNavbar;
