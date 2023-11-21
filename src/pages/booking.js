import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Nav,
  Form,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NavbarComponent from "../components/navbar.component";
import FooterComponent from "../components/footer.component";

import CeleImg01 from "../img/Jones/celebraties/amber-rose.png";
import CeleImg02 from "../img/Jones/celebraties/candice-king.png";
import CeleImg03 from "../img/Jones/celebraties/danielle-cohn.png";
import CeleImg04 from "../img/Jones/celebraties/floyd-mayweather.png";
import CeleImg05 from "../img/Jones/celebraties/georgina-rodriguez.png";
import CeleImg06 from "../img/Jones/celebraties/iggy-azalea.png";

import CeleImg07 from "../img/Jones/celebraties/kat-graham.png";
import CeleImg08 from "../img/Jones/celebraties/noah-app.png";
import CeleImg09 from "../img/Jones/celebraties/bhad-bhabie.png";
import CeleImg10 from "../img/Jones/celebraties/realbarbarapalvin.png";
import CeleImg11 from "../img/Jones/celebraties/nikitadragun.png";
import CeleImg12 from "../img/Jones/celebraties/kristenhanby.png";

const Booking = () => {
  return (
    <Container fluid>
      <section>
        <Row>
          <Col className="p-0">
            <Container fluid className="mt-5 pt-5 pb-5 bannerArea">
              <Row>
                <Col>
                  <Container className="starImg">
                    <Row className="justify-content-center align-items-center h-100">
                      <Col sm={12} md={8} className="text-center h-100 d-flex">
                        <Container fluid className="pt-5 pb-5">
                          <Row>
                            <Col className="pt-5 pb-5">
                              <br />
                              <h2 className="sectionMainHeading">
                                Talent Booking
                              </h2>
                              <p className="mt-5">
                                After 4 years in the digital space, we have
                                built up an impressive roster of over 2,000
                                celebrity & influencer connections. Whoever you
                                require, we have the contacts to make it happen.
                              </p>
                              <Button
                                className="mt-5"
                                variant="primary"
                                size="lg"
                              >
                                Enquire about a celebrity
                              </Button>{" "}
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </section>
      <section>
        <Container fluid className="mt-5 mb-5">
          <Row>
            <Col className="p-0">
              <Container
                fluid
                className="pt-5 pb-5 talentContantArea position-relative"
              >
                <Row>
                  <Col>
                    <Container className="h-100">
                      <h2 className="mb-5 text-start text-primary">
                        Celebrities Collaborated With
                      </h2>
                      <Row className="zigZagImg">
                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg01} className="img-fluid" />
                            <p className="mb-1 fs-20">Amber Rose</p>
                            <a
                              href="https://www.instagram.com/amberrose/"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @amberrose
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg02} className="img-fluid" />
                            <p className="mb-1 fs-20">Candice King</p>
                            <a
                              href="https://www.instagram.com/candiceking/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @candiceking
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg03} className="img-fluid" />
                            <p className="mb-1 fs-20">Danielle Cohn</p>
                            <a
                              href="https://www.instagram.com/daniellecohn/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @daniellecohn
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg04} className="img-fluid" />
                            <p className="mb-1 fs-20">Floyd Mayweather</p>
                            <a
                              href="https://www.instagram.com/floydmayweather/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @floydmayweather
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg05} className="img-fluid" />
                            <p className="mb-1 fs-20">Georgina Rodriguez</p>
                            <a
                              href="https://www.instagram.com/georginagio/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @georginagio
                            </a>
                          </figure>
                        </Col>

                        {/* <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg06} className="img-fluid" />
                            <p className="mb-1 fs-20">Iggy Azalea</p>
                            <a
                              href="https://www.instagram.com/thenewclassic/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @thenewclassic
                            </a>
                          </figure>
                        </Col> */}
                      </Row>
                      <Row className="zigZagImg">
                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg07} className="img-fluid" />
                            <p className="mb-1 fs-20">Kat Graham</p>
                            <a
                              href="https://www.instagram.com/katgraham/"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @katgraham
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg08} className="img-fluid" />
                            <p className="mb-1 fs-20">Noah Schnapp</p>
                            <a
                              href="https://www.instagram.com/noahschnapp/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @noahschnapp
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg09} className="img-fluid" />
                            <p className="mb-1 fs-20">Bhad Bhabie</p>
                            <a
                              href="https://www.instagram.com/bhadbhabie/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @bhadbhabie
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg10} className="img-fluid" />
                            <p className="mb-1 fs-20">Barbara Palvin</p>
                            <a
                              href="https://www.instagram.com/realbarbarapalvin/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @realbarbarapalvin
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2}>
                          <figure>
                            <img src={CeleImg11} className="img-fluid" />
                            <p className="mb-1 fs-20">Nikita</p>
                            <a
                              href="https://www.instagram.com/nikitadragun/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @nikitadragun
                            </a>
                          </figure>
                        </Col>

                        <Col sm={6} md={4} lg={2} className="align-self-end">
                          <figure className="align-self-end">
                            <img src={CeleImg12} className="img-fluid" />
                            <p className="mb-1 fs-20">Kristen Hanby</p>
                            <a
                              href="https://www.instagram.com/kristenhanby/?hl=en"
                              className="text-primary fs-16 text-decoration-none"
                              target="_blank"
                            >
                              @kristenhanby
                            </a>
                          </figure>
                        </Col>
                      </Row>

                      <Row>
                        {/* <Col className="text-center mb-5">
                                        <Button className="mt-5" variant="primary" size="lg">Contact Me</Button>{' '}
                                        </Col> */}
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Row className="">
            <Col className="section-5 pb-5 pt-5 align-itens-center d-flex">
              <Container>
                <Row className="align-items-center justify-content-center h-100">
                  <Col md={6}>
                    <h2 className="sectionMainHeading mb-5">Contact Us</h2>
                    <Form>
                      <Container>
                        <Row>
                          <Col md={6} className="mb-5">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                size="lg"
                                type="email"
                                placeholder="name@example.com"
                              />
                            </Form.Group>
                          </Col>

                          <Col md={6} className="mb-5">
                            <Form.Group
                              className="mb-3 rounded-pill border-primary"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                size="lg"
                                type="email"
                                placeholder="name@example.com"
                              />
                            </Form.Group>
                          </Col>

                          <Col sm={12} className="mb-5">
                            <Form.Group
                              className="mb-3 rounded-pill border-primary"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                          </Col>
                          <Col sm={12} className="mb-5">
                            <Button
                              variant="outline-primary"
                              className="w-50 rounded-pill bg-white text-dark"
                              size="lg"
                            >
                              Send Message
                            </Button>{" "}
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterComponent />
    </Container>
  );
};

export default Booking;
