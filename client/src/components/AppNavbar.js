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
      <div className="sticky-top">
        <div style={{ background: "#056674", margin: 0 }}>
          <Container>
            <Navbar className="mb-0 mb-md-5">
              <NavbarBrand
                style={{ color: "#fff" }}
                className="pacificoFont"
                href="/"
              >
                <img
                  src="https://res.cloudinary.com/hangad-it-solutions/image/upload/v1644559415/android-chrome-512x512_bls5pj.png"
                  alt="icon"
                  height={"20em"}
                  style={{ verticalAlign: "top", marginRight: "5%" }}
                />
                Humati
              </NavbarBrand>
              <Nav className="ml-auto d-inline-flex ">
                <NavItem>
                  <NavLink className="text-light" href="#">
                    <FaHome className="faIcon" />
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className="text-light" href="#">
                    <FaRegComments className="faIcon" />
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink className="text-light" href="#">
                    <PostModal />
                  </NavLink>
                </NavItem>
                {/* <NavItem>
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
                </NavItem> */}
                <NavItem>
                  <NavLink
                    className="text-light"
                    href="https://github.com/zachdev1023"
                    target={"_blank"}
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
