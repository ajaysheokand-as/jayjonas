import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Form,
} from "react-bootstrap";
import FooterComponent from "../components/footer.component";
import Banner from "../img/Jones/socialjayjones.jpg";
import BannerHome from "../img/Jones/bannersmall2.jpg";
import Socialseed from "../img/Jones/socialseed.jpg";
import BannerSection from "../img/Jones/banner_2.jpg";
import NewLogo from "../img/Jones/instgram-profile.jpg";
import Icon1 from "../img/Jones/icons/icon.svg";
import Icon2 from "../img/Jones/icons/icon_1.svg";
import Icon3 from "../img/Jones/icons/icon_2.svg";
import Icon4 from "../img/Jones/icons/icon_3.svg";
import Icon5 from "../img/Jones/icons/icon_4.svg";
import Icon6 from "../img/Jones/icons/icon_5.svg";
import CountUp from "react-countup";

import client1 from "../img/Jones/clientsection-1.png";
import client2 from "../img/Jones/clientsection-2.png";
import client3 from "../img/Jones/clientsection-3.png";
import client4 from "../img/Jones/clientsection-4.png";
import LogoIbm from "../img/Jones/company/nft-islands.png";
import LogoTimes from "../img/Jones/logo_times.svg";

import LogoYahoo from "../img/Jones/yahoo.png";
import LogoThrive from "../img/Jones/thrive.png";
import LogoLiverpool from "../img/Jones/liverpool1.png";
import LogoInfluencive from "../img/Jones/influencive.png";

import LogoBbc from "../img/Jones/logo_bbc.svg";
import LogoForbs from "../img/Jones/logo_forbs.svg";
import LogoUs from "../img/Jones/logo_ustoday.svg";
import LogoEnter from "../img/Jones/logo_enter.svg";
import LogoCnn from "../img/Jones/logo_cnn.svg";
import ImgBlog1 from "../img/Jones/Blog1.jpg";
import ImgBlog2 from "../img/Jones/blog2.jpg";
import ImgBlog3 from "../img/Jones/Blog3.png";
import ImgBlog4 from "../img/Jones/Blog4.png";
import { PostCard } from "../components/PostCard";
import { FeaturedIn } from "../components/FeaturedIn";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <Col>
          <Container className="bannerContainer">
            <Row style={{ marginTop: "40px" }}>
              <Col lg={4}>
                <Container fluid>
                  <Row>
                    <Col className="text-start">
                      <h2
                        className="sectionMainHeading"
                        style={{
                          textTransform: "uppercase",
                        }}
                      >
                        ARE YOU READY TO RAPIDLY GROW YOUR BRAND ?
                      </h2>

                      {/* <p> Internet Entrepreneur</p>
                      <p>
                        Specialising in Social Media marketing, SEO and Web3
                        P2E gaming development.
                      </p> */}
                      {/* <Button variant="primary" size="lg">Contact Me</Button>{' '} */}
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={8}>
                <p
                  className="countNumber"
                  style={{
                    color: "white",
                    fontSize: "49px !important",
                    fontWeight: 800,
                  }}
                >
                  {" "}
                  <CountUp
                    style={{
                      fontSize: "49px !important",
                      marginTop: "100px",
                    }}
                    start={0}
                    end={1200}
                    duration={5}
                    suffix="+Clients Served"
                  />
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="mt-5 pt-5">
        <Col className="section-2">
          <Container fluid className="">
            <Row>
              <Col md={6} className="p-0">
                <img
                  src={Socialseed}
                  className="img-fluid"
                  style={{ marginTop: "30px", height: "80%", width: "50%" }}
                />
              </Col>

              <Col md={6} className="abc">
                <Container fluid className="h-100">
                  <Row className="align-items-center h-100">
                    <Col className="text-start">
                      {/* <h2 className="sectionHeading">About the Company</h2> */}
                      <br />
                      <p style={{ fontSize: "17px" }}>
                        Social Seed is a forward-thinking social media marketing
                        agency, specialising in online press distribution to
                        assist both businesses and individuals in gaining the
                        additional exposure, brand awareness, credibility, and
                        SEO boost. We provide the platform that you need to
                        reach your next level.
                      </p>
                      <br />
                      <p style={{ fontSize: "17px" }}>
                        We look forward to seeing how we can assist you on your
                        journey to success!
                      </p>
                      {/* <br />
                      <p style={{ fontSize: "17px" }}>
                        Please change the big logo to a collage of multiple
                        press releases we have done.
                      </p> */}
                      {/* <Button
                        onClick={() => navigate("about-me")}
                        variant="primary"
                        size="lg"
                      >
                        Read More
                      </Button>{" "} */}
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col className="section-3 pb-5 pt-5">
          <Container>
            <Row>
              <Col>
                <h1 className="sectionMainHeading mt-5">Our Services</h1>
              </Col>
            </Row>
            <Row className="pb-5 mt-4">
              <Col md={3} className="mb-4">
                <div class="d-flex align-items-center h-100 mb-5">
                  <span className="w-25 text-start">
                    <img src={Icon1} className="img-fluid" />
                  </span>
                  <span className="w-75 fs-20 ms-3 text-start">
                    Social Media Growth
                  </span>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div class="d-flex align-items-center h-100 mb-5">
                  <span className="w-25 text-start">
                    <img src={Icon2} className="img-fluid" />
                  </span>
                  <span className="w-75 fs-20 ms-3 text-start">
                    Press Release
                  </span>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div class="d-flex align-items-center h-100 mb-5">
                  <span className="w-25 text-start">
                    <img src={Icon3} className="img-fluid" />
                  </span>
                  <span className="w-75 fs-20 ms-3 text-start">
                    Brand Strategy Consulting
                  </span>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div class="d-flex align-items-center h-100 mb-5">
                  <span className="w-25 text-start">
                    <img src={Icon4} className="img-fluid" />
                  </span>
                  <span className="w-75 fs-20 ms-3 text-start">
                    Talent Booking
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="pt-5 pb-5">
            <Row>
              <Col sm={12} lg={12}>
                <Container className="h-100">
                  <Row className="align-items-center justify-content-center h-100">
                    <Col className="">
                      <h2 className="sectionMainHeading">Our Clients</h2>
                    </Col>
                  </Row>
                  <br />
                  <br />
                </Container>
              </Col>
              <Col sm={12} lg={12}>
                <Container>
                  <Row>
                    <Col sm={12} md={3}>
                      <img
                        src={client1}
                        className="mb-5 img-fluid client-section "
                      />
                    </Col>
                    <Col sm={12} md={3}>
                      <img
                        src={client2}
                        className="mb-5 img-fluid client-section "
                      />
                    </Col>

                    <Col sm={12} md={3}>
                      <img
                        src={client3}
                        className="mb-5 img-fluid client-section"
                      />
                    </Col>
                    <Col sm={12} md={3}>
                      <img
                        src={client4}
                        className="mb-5 img-fluid client-section"
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className="">
        <Col className="section-4 pb-5 pt-5 align-itens-center d-flex">
          <Container>
            <Row className="align-items-center justify-content-center h-100">
              <Col md={12}>
                <h2 className="sectionMainHeading mt-5 mb-5  ">Featured In</h2>
                <Container fluid>
                  <FeaturedIn />
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <Container className="pt-5 pb-5">
            <Row>
              <Row>
                <Col md={12}>
                  <h1 className="sectionMainHeading mb-5"> Blog</h1>
                  <Link to="/blog">
                    <Button variant="primary" size="lg">
                      Show More
                    </Button>
                  </Link>{" "}
                </Col>
              </Row>
              <Col md={12}>
                <Container fluid className="mt-5">
                  <Row>
                    <Col md={6} className="d-flex align-items-center mb-5">
                      <Link to="/blog" style={{ color: "black" }}>
                        <div className="bgThemeColor rounded-3 lh-0">
                          <img
                            src={ImgBlog1}
                            className="img-fluid"
                            style={{ width: "90px", height: "100px" }}
                          />
                          <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                            3 Issues Businesses Are Facing With Podcast
                            <br /> Marketing & How to Deal With Them
                          </span>
                        </div>
                      </Link>
                    </Col>

                    <Col md={6} className="d-flex align-items-center mb-5 ">
                      <Link to="/blog" style={{ color: "black" }}>
                        <div className="bgThemeColor rounded-3 lh-0">
                          <img
                            src={ImgBlog2}
                            className="img-fluid"
                            style={{ width: "90px", height: "100px" }}
                          />
                          <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                            Here Is How You Can Create an
                            <br /> Outstanding Marketing Plan?
                          </span>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={12}>
                <Container fluid className="mt-5">
                  <Row>
                    <Col md={6} className="d-flex align-items-center mb-5">
                      <Link to="/blog" style={{ color: "black" }}>
                        <div className="bgThemeColor rounded-3 lh-0">
                          <img
                            src={ImgBlog3}
                            className="img-fluid"
                            style={{ width: "90px", height: "100px" }}
                          />
                          <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                            5 VR Marketing Examples to Inspire You
                          </span>
                        </div>
                      </Link>
                    </Col>

                    <Col md={6} className="d-flex align-items-center mb-5 ">
                      <Link to="/blog" style={{ color: "black" }}>
                        <div className="bgThemeColor rounded-3 lh-0">
                          <img
                            src={ImgBlog4}
                            className="img-fluid"
                            style={{ width: "90px", height: "100px" }}
                          />
                          <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                            4 Tips for Consistently Generating High
                            <br />
                            Quality Social Media Content
                          </span>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Container className="pt-5 pb-5">
            <Row>
              <Row>
                <Col md={12}>
                  <h1 className="sectionMainHeading mb-5"> Blog</h1>
                  <Link to="/blog">
                    <Button variant="primary" size="lg">
                      Show More
                    </Button>
                  </Link>{" "}
                </Col>
              </Row>
              <Col md={12}>
                <Container fluid className="mt-5">
                  <Row className="blog-row">
                    <Col md={6} className="mb-3">
                      <Link
                        to="/blog"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card
                          style={{
                            background: "#977BDF",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          <Card.Body>
                            <Row>
                              <Col lg={2}>
                                <Card.Img
                                  variant="top"
                                  src={ImgBlog1}
                                  style={{ width: "100%" }}
                                />
                              </Col>
                              <Col lg={10}>
                                <Card.Text className="text-start">
                                  3 Issues Businesses Are Facing With Podcast
                                  Marketing & How to Deal With Them
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                          <Link to="/blog">
                            <button className="button btn-float-right m-3">
                              Read More
                            </button>
                          </Link>
                        </Card>
                      </Link>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Link
                        to="/blog"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card
                          style={{
                            background: "#9579df",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          <Card.Body>
                            <Row>
                              <Col lg={2}>
                                <Card.Img variant="top" src={ImgBlog2} />
                              </Col>
                              <Col lg={10}>
                                <Card.Text className="text-start">
                                  Here Is How You Can Create an Outstanding
                                  Marketing Plan?
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                          <Link to="/blog">
                            <button className="button btn-float-right m-3">
                              Read More
                            </button>
                          </Link>
                        </Card>
                      </Link>
                    </Col>
                    <Col md={6} className="mb-3 ">
                      <Link
                        to="/blog"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card
                          style={{
                            background: "#9579df",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          <Card.Body>
                            <Row>
                              <Col lg={2}>
                                <Card.Img
                                  variant="top"
                                  src={ImgBlog3}
                                  className="vr-mobile"
                                />
                              </Col>
                              <Col lg={10}>
                                <Card.Text className="text-start">
                                  5 VR Marketing Examples to Inspire You
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                          <Link to="/blog">
                            <button className="button btn-float-right m-3">
                              Read More
                            </button>
                          </Link>
                        </Card>
                      </Link>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Link
                        to="/blog"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card
                          style={{
                            background: "#9579df",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          <Card.Body>
                            <Row>
                              <Col lg={2}>
                                <Card.Img variant="top" src={ImgBlog4} />
                              </Col>
                              <Col lg={10}>
                                <Card.Text className="   text-start ">
                                  4 Tips for Consistently Generating High
                                  Quality Social Media Content
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                          <Link to="/blog">
                            <button className="button btn-float-right m-3">
                              Read More
                            </button>
                          </Link>
                        </Card>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

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

      <FooterComponent />
    </Container>
  );
};

export default Home;
