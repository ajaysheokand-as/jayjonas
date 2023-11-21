import React from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import Logo from "./../img/Jones/socialseed.jpg";
import Linked from "../img/Jones/icons/linkedin_icon.svg";
import Facebook from "../img/Jones/icons/facebook_icon.svg";
import Insta from "../img/Jones/icons/insta_icon.svg";
import { Link, useLocation } from "react-router-dom";

const FooterComponent = () => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <Container className="footerBody pt-5 pb-5">
      <Row>
        <Col className="text-start">
          <Navbar bg="transparent" expand="lg" className="pt-0">
            <Container fluid className="w-100">
              <Row className="w-100">
                <Col sm="6" md="2">
                  <Navbar.Brand as={Link} to="/">
                    <img
                      className="mt-3"
                      style={{
                        height: "50px",
                        width: "100px",
                      }}
                      src={Logo}
                    />
                  </Navbar.Brand>
                </Col>
                <Col sm="6" md="10" style={{ marginTop: "20px" }}>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="footerNavBar">
                      <Nav.Link
                        className={
                          splitLocation[1] === ""
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/"
                      >
                        Home
                      </Nav.Link>
                      {/* <Nav.Link
                        className={
                          splitLocation[1] === "services"
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/services"
                      >
                        Services
                      </Nav.Link> */}
                      <Nav.Link
                        className={
                          splitLocation[1] === "talent-booking"
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/talent-booking"
                      >
                        Talent Booking
                      </Nav.Link>
                      {/* <Nav.Link
                        className={
                          splitLocation[1] === "features"
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/features"
                      >
                        Features
                      </Nav.Link> */}
                      {/* <Nav.Link
                        className={
                          splitLocation[1] === "about-me"
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/about-me"
                      >
                        About Me
                      </Nav.Link> */}
                      <Nav.Link
                        className={
                          splitLocation[1] === "blog"
                            ? "active text-nowrap text-center"
                            : "text-nowrap text-center"
                        }
                        as={Link}
                        to="/blog"
                      >
                        Blog
                      </Nav.Link>
                      {/* <a
                        href="https://uk.linkedin.com/in/jay-jones-3083711bb"
                        className="text-nowrap text-center"
                        target="_blank"
                      >
                        <img src={Linked} className="me-4" height="22" />
                      </a> */}
                      {/* <a
                        href="https://m.facebook.com/entrepreneurjayjones/photos/?ref=page_internal"
                        className="text-nowrap text-center"
                        target="_blank"
                      >
                        <img src={Facebook} className="me-4" height="22" />
                      </a> */}
                      <a
                        href="https://www.instagram.com/socialseed/"
                        target="_blank"
                        className="text-nowrap text-center"
                      >
                        <img src={Insta} height="22" />
                      </a>
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

export default FooterComponent;
