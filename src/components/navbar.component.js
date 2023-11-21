import React from "react";
import {
  Navbar,
  Nav,
  // ListGroup,
  // Form,
  // FormControl,
  // Offcanvas,
  // Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Logo from "./../img/Jones/socialseed.jpg";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="transparent" expand="lg" className="pt-0">
            <Container fluid className="w-100">
              <Row className="w-100">
                <Col sm="6" md="2">
                  <Navbar.Brand as={Link} to="/">
                    <img
                      style={{ height: "60px", width: "100px" }}
                      src={Logo}
                    />
                  </Navbar.Brand>
                </Col>
                <Col sm="6" md="10">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      <Link
                        className={
                          splitLocation[1] === ""
                            ? "menuLink active text-nowrap "
                            : "menuLink text-nowrap "
                        }
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className={
                          splitLocation[1] === "services"
                            ? "menuLink active text-nowrap "
                            : "menuLink text-nowrap"
                        }
                        to="/services"
                      >
                        Press Releases
                      </Link>
                      <Link
                        className={
                          splitLocation[1] === "talent-booking"
                            ? "menuLink active text-nowrap"
                            : "menuLink text-nowrap"
                        }
                        to="/talent-booking"
                      >
                        Talent Booking
                      </Link>
                      {/* <Nav.Link
                        className={
                          splitLocation[1] === "features"
                            ? "menuLink active text-nowrap"
                            : "menuLink text-nowrap"
                        }
                        as={Link}
                        to="/features"
                      >
                        Social Media Growth
                      </Nav.Link> */}
                      {/* <Nav.Link
                        className={
                          splitLocation[1] === "about-me"
                            ? "menuLink active text-nowrap"
                            : "menuLink text-nowrap"
                        }
                        as={Link}
                        to="/about-me"
                      >
                        Brand Consulting
                      </Nav.Link> */}
                      <Link
                        className={
                          splitLocation[1] === "blog"
                            ? "menuLink active text-nowrap "
                            : "menuLink text-nowrap "
                        }
                        to="/blog"
                      >
                        Blog
                      </Link>
                      <Nav.Link
                        className="bg-primary mt-4 btn-link"
                        as={Link}
                        to="/contact-me"
                      >
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarComponent;
