import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import NewLogo from "../img/Jones/instgram-profile.jpg";
// import { Link } from "react-router-dom";

// import NavbarComponent from "../components/navbar.component";
import FooterComponent from "../components/footer.component";
// import ServiceBanner from "../img/Jones/service_banner.svg";
// import Icon1 from "../img/Jones/icons/icon.svg";
// import Icon2 from "../img/Jones/icons/icon_1.svg";
// import Icon3 from "../img/Jones/icons/icon_2.svg";
// import Icon4 from "../img/Jones/icons/icon_3.svg";
// import Icon5 from "../img/Jones/icons/icon_4.svg";
// import Icon6 from "../img/Jones/icons/icon_5.svg";
import Step1 from "../img/Jones/steps1.png";
import Step2 from "../img/Jones/steps2.png";
import Step3 from "../img/Jones/steps3.png";
import Step4 from "../img/Jones/steps4.png";
import { useNavigate } from "react-router-dom";
import Jayjones from "../img/Jones/socialjayjones.jpg";
import Linked from "../img/Jones/linkdinc.png";
// import Banner from "../img/Jones/star_banner11.png";
import Facebook from "../img/Jones/facebookv.png";
import Insta from "../img/Jones/instagramv.png";
// import Grazia from "../img/companyLogos/Grazia.png";
// import USAToday from "../img/companyLogos/USAToday.png";
// import IBT from "../img/companyLogos/IBT.png";
// import okMagazine from "../img/companyLogos/okMagazine.png";
// import WWD from "../img/companyLogos/WWD.png";
// import forbes from "../img/Jones/logo_forbs.svg";
// import thrive from "../img/Jones/thrive.png";
// import dailymail from "../img/Jones/dailymail.png";
// import star from "../img/Jones/Star_5.png";
// import starLeft from "../img/Jones/Star-left.svg";
// import rectangle from "../img/Jones/rectangle.png";
import Process1 from "../img/Jones/process item1.png";
import Process2 from "../img/Jones/process item2.png";
import Process3 from "../img/Jones/process item3.png";
import Process4 from "../img/Jones/process item4.png";
import Process5 from "../img/Jones/process item5.png";
// import Reputable from "../img/Jones/reputable.png";
// import ArrowLeft from "../img/Jones/arrow-left.png";
// import ArrowRight from "../img/Jones/vector-right.png";
// import Quote from "../img/Jones/quote.svg";
import { FeaturedIn } from "../components/FeaturedIn";

const Service = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      {/* <Row>
        <Col>
          <Container fluid>
            <Row>
              <Col md={12} className="pt-5 pb-5 order-md-2">
                <br />
                <h2 className="sectionMainHeading">
                  Meet The CEO Of Social Seed
                </h2>
              </Col>

              <Col lg={6} className="text-start">
                <img src={Jayjones} className="img-fluid" />
                <h2
                  style={{ marginLeft: "160px", color: "#9579df" }}
                  className="press-release"
                >
                  Jay Jones
                </h2>
                <p className="text-start" style={{ marginLeft: "180px" }}>
                  <img src={Linked} className="me-4" height="22" />
                  <img src={Facebook} className="me-4" height="22" />
                  <img src={Insta} height="22" />
                </p>
              </Col>
              <Col md={6} className="text-start">
                <p style={{ fontSize: "17px" }}>
                  At Social Seed, we aim to help you unlock the incredible
                  potential of
                  <br /> social media by connecting you or your brand with huge
                  celebrity
                  <br /> giveaways to grow your Instagram following.
                </p>
                <p style={{ fontSize: "17px" }}>
                  By carefully aligning your businees or personal goals with an
                  <br /> upcoming celebrity promotion, we will make sure you
                  gain thousands
                  <br /> of new and targeted followers.
                </p>
                <p style={{ fontSize: "17px" }}>
                  Social Seed have over{" "}
                  <span style={{ color: "#9579df" }}>200+</span> online
                  publications which we can get
                  <br /> YOU featured on
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row> */}
      <Container fluid className="pressrelease-section">
        <Row>
          <Col>
            <Container>
              <Row className="justify-content-center align-items-center h-100 ">
                <Col sm={12} md={12}>
                  <h2 className="sectionMainHeading d-none d-md-block">
                    Meet The CEO Of Social Seed
                  </h2>
                </Col>
                <Container style={{ marginTop: "54px" }}>
                  <Row className="align-items-center h-100">
                    <Col className="d-block d-md-none">
                      <h2 className="sectionMainHeading text-center d-block d-md-none">
                        Meet The CEO Of Social Seed
                      </h2>
                    </Col>
                    <Col lg={4} className="text-center">
                      <img src={Jayjones} className="img-fluid" />
                      <h2 className="press-release d-block d-md-none">
                        Jay Jones
                      </h2>
                      <p
                        className="text-center d-block d-md-none"
                        style={{ marginTop: "12px" }}
                      >
                        <img src={Linked} className="me-4" height="22" />
                        <img src={Facebook} className="me-4" height="22" />
                        <img src={Insta} height="22" />
                      </p>
                    </Col>
                    <Col md={8} className="text-start">
                      <Container>
                        <Row className="justify-content-center">
                          <Col className="d-none d-md-block">
                            <h2 className="sectionMainHeading text-center d-block d-md-none">
                              Meet The CEO Of Social Seed
                            </h2>
                          </Col>
                          <Col lg={9}>
                            <p
                              style={{
                                fontSize: "16px",
                                lineHeight: "25px",
                                color: "#212529",
                                maxWidth: "510px",
                              }}
                            >
                              At Social Seed, we aim to help you unlock the
                              incredible potential of your brand by
                              strategically placing you on some of the world’s
                              biggest online publications.
                              {/* At Social Seed, we aim to help you unlock the
                              incredible potential of
                              <br /> social media by connecting you or your
                              brand with huge celebrity
                              <br /> giveaways to grow your Instagram following. */}
                            </p>
                            <p
                              style={{
                                fontSize: "16px",
                                lineHeight: "25px",
                                color: "#212529",
                                maxWidth: "510px",
                              }}
                            >
                              By carefully aligning your business with the
                              appropriate press, we can gain you huge exposure
                              to millions of monthly readers.
                            </p>
                            <p
                              style={{
                                fontSize: "16px",
                                lineHeight: "25px",
                                color: "#212529",
                              }}
                            >
                              Social Seed have over{" "}
                              <span
                                style={{ color: "#9579df", fontSize: "26px" }}
                              >
                                300+
                              </span>{" "}
                              online publications which we can get
                              <br /> YOU featured on
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                  <Row className="d-none d-md-flex">
                    <Col lg={4} className="text-center">
                      <h2 className="press-release">Jay Jones</h2>
                      <p className="text-center" style={{ marginTop: "12px" }}>
                        <img src={Linked} className="me-4" height="22" />
                        <img src={Facebook} className="me-4" height="22" />
                        <img src={Insta} height="22" />
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="p-0">
          <Container className="mt-5">
            <Row>
              <Col>
                <h2 className="sectionParaHeading">
                  Press & Publication Packages
                </h2>
                <Container fluid style={{ marginTop: "60px" }}>
                  <Row>
                    <Col md={3}>
                      <img src={Step1} alt="step-1" className="img-fluid" />
                    </Col>
                    <Col md={3}>
                      <img src={Step2} alt="step-2" className="img-fluid" />
                    </Col>
                    <Col md={3}>
                      <img src={Step3} alt="step-3" className="img-fluid" />
                    </Col>
                    <Col md={3}>
                      <img src={Step4} alt="step-4" className="img-fluid" />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* <Row style={{ marginTop: "80px" }}>
        <Col className="bannerArea" style={{ padding: "70px 0" }}>
          <h2 className="sectionParaHeading">Social Seed Press Packages</h2>
          <Container>
            <Row>
              <Col
                lg={4}
                className="d-flex justify-content-center align-items-center pt-5 pb-5"
              >
                <Card
                  style={{
                    width: "330px",
                    height: "fit-content",
                    minHeight: "249px",
                    borderRadius: "10px",
                    boxShadow: "0px 8px 15px rgba(66, 85, 99, 0.08)",
                    border: "1px solid #FAF8FF",
                  }}
                >
                  <Card.Body
                    style={{
                      padding: "20px",
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Card.Title className="packageCardPrice">
                      <Container fluid className="p-0">
                        <Row>
                          <Col className="d-flex justify-content-between">
                            <span style={{ marginTop: "20px" }}></span>
                            <img src={starLeft} height={48} />
                          </Col>
                        </Row>
                      </Container>
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        textAlign: "left",
                        marginTop: "22px",
                      }}
                    >
                      Google Authority Package
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "17px",
                        textAlign: "left",
                        marginTop: "12px",
                      }}
                    >
                      5 Press Articles
                    </Card.Text>
                    <button variant="primary" className="card-button">
                      Select Package
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                lg={4}
                className="d-flex justify-content-center align-items-center pt-5 pb-5"
              >
                <Card
                  style={{
                    width: "330px",
                    height: "fit-content",
                    minHeight: "249px",
                    borderRadius: "10px",
                    boxShadow: "0px 8px 15px rgba(66, 85, 99, 0.08)",
                    border: "1px solid #9579DF",
                  }}
                >
                  <Card.Body
                    style={{
                      padding: "20px",
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Card.Title className="packageCardPrice">
                      <Container fluid className="p-0">
                        <Row>
                          <Col className="d-flex justify-content-between">
                            <span style={{ marginTop: "30px" }}></span>
                            <img src={star} height={72} />
                          </Col>
                        </Row>
                      </Container>
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        textAlign: "left",
                        marginTop: "22px",
                      }}
                    >
                      Google Authority Package
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "17px",
                        textAlign: "left",
                        marginTop: "12px",
                      }}
                    >
                      10 Press Articles
                    </Card.Text>
                    <button variant="primary" className="card-button">
                      Select Package
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                lg={4}
                className="d-flex justify-content-center align-items-center pt-5 pb-5"
              >
                <Card
                  style={{
                    width: "330px",
                    height: "fit-content",
                    minHeight: "249px",
                    borderRadius: "10px",
                    boxShadow: "0px 8px 15px rgba(66, 85, 99, 0.08)",
                    border: "1px solid #FAF8FF",
                  }}
                >
                  <Card.Body
                    style={{
                      padding: "20px",
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Card.Title className="packageCardPrice">
                      <Container fluid className="p-0">
                        <Row>
                          <Col className="d-flex justify-content-between">
                            <span style={{ marginTop: "20px" }}></span>
                            <img src={starLeft} height={48} />
                          </Col>
                        </Row>
                      </Container>
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        textAlign: "left",
                        marginTop: "22px",
                      }}
                    >
                      High Tier Press Feature
                    </Card.Text>
                    <button variant="primary" className="card-button">
                      Select Package
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row> */}

      <Row>
        <Col>
          <Container>
            <Row>
              <Col className="pt-5 pb-5">
                <h2 className="sectionParaHeading pt-5 pb-3">
                  Why is Press So Valuable
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="valuable mb-5 mb-md-0">
                <p>The key to strengthening your SEO.</p>
              </Col>
              <Col md={4} className="valuable mb-5 mb-md-0">
                <p style={{ margin: "0" }}>Brand Awareness</p>
              </Col>
              <Col md={4} className="valuable mb-5 mb-md-0">
                <p style={{ margin: "0" }}>Brand Credibility</p>
              </Col>
            </Row>
            <Row style={{ marginTop: "31px" }}>
              <Col md={4} className="valuable mb-5 mb-md-0">
                <p style={{ margin: "0" }}>
                  Increased traffic To Your
                  <br /> E-Commerce Website
                </p>
              </Col>
              <Col md={4} className="valuable mb-5 mb-md-0">
                <p style={{ margin: "0" }}>Targeted Reach To A Specific Nice</p>
              </Col>
              <Col md={4} className="valuable">
                <p style={{ margin: "0" }}>
                  Increased Chances Of Verification
                  <br />
                  Across Social Media Platforms
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col className="section-4">
          <Container>
            <Row>
              <Col md={12}>
                <h2
                  className="sectionParaHeading"
                  style={{ marginTop: "100px" }}
                >
                  What's The Process of Creating Press & <br /> Securing
                  publications
                </h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "52px" }}>
              <Col md={4} className="mb-5 mb-md-0">
                <img src={Process1} style={{ height: "200px" }} />
              </Col>
              <Col md={4} className="mb-5 mb-md-0">
                <img src={Process2} style={{ height: "200px" }} />
              </Col>
              <Col md={4} className="mb-5 mb-md-0">
                <img src={Process3} style={{ height: "200px" }} />
              </Col>
            </Row>

            <Row style={{ marginBottom: "100px" }}>
              <Col md={4} className="mb-5 mb-md-0">
                <img
                  src={Process4}
                  style={{ height: "200px", width: "340px" }}
                />
              </Col>
              <Col md={4} className="mb-5 mb-md-0">
                <img src={Process5} style={{ height: "200px" }} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* <Row style={{ marginTop: "50px" }}>
        <Col>
          <Container>
            <h2 className="sectionParaHeading">
              Testimonials from Reputable public figures
            </h2>
            <Row style={{ marginTop: "100px", backgroundColor: "#FAF8FF" }}>
              <Col md={5} className="p-0">
                <img className="testimonial-avatar" src={Reputable} />
              </Col>
              <Col md={7} className="mobile-testimonial">
                <p className="text-start testimonial-mobile m-0">
                  <img className="testimonial-quote" src={Quote} height={45} />
                  Lorem ipsum dolor sit amet consectetur. Elit elementum sed
                  lorem non pulvinar sit. Leo in at vivamus adipiscing augue
                  auctor vitae maecenas egestas. Tempus gravida condimentum
                  tempor sagittis curabitur. Tellus aliquam eu cursus malesuada.
                  <br />
                  <br />
                  <span style={{ color: "#425563", marginBottom: "7px" }}>
                    Name Surname
                  </span>
                  <br />
                  <span style={{ fontWeight: 600 }}>Profession</span>
                </p>
              </Col>
            </Row>
            <Row className="arrow" style={{ marginTop: "15px" }}>
              <img
                src={ArrowLeft}
                style={{
                  width: "42px",
                  height: "25px",
                  padding: 0,
                  marginRight: "14.5px",
                }}
              />
              <img
                src={ArrowRight}
                style={{ width: "42px", height: "25px", padding: 0 }}
              />
            </Row>
          </Container>
        </Col>
      </Row> */}

      {/* <Row style={{ marginTop: "100px" }}>
        <Col>
          <Container>
            <h2 className="sectionParaHeading">Social Seed's Article</h2>
            <Row style={{ marginTop: "60px" }}>
              <Col md={6} className="mb-5 mb-md-0">
                <h3 className="article-heading">
                  3 Issues Businesses Are Facing With Podcast Marketing & How to
                  Deal Witn Them
                </h3>
                <p className="article-body">
                  Social Seed's Article 3 Issues Businesses Are Facing With
                  Podcast Marketing & How to Deal With Them Here Is How You Can
                  Create an Outstanding Marketing Plan? Lorem ipsum dolor sit
                  amet consectetur. Elit elementum sed lorem non pulvinar sit.
                  Leo in at vivamus adipiscing augue auctor vitae maecenas
                  egestas. Tempus gravida condimentum tempor sagittis curabitur.
                  Tellus aliquam eu cursus malesuada. Nullam et maecenas mi
                  tristique pretium tellus quisque eu penatibus. Scelerisque
                  condimentum vehicula justo suspendisse tempor at feugiat.
                  Lorem ipsum dolor sit amet consectetur. Elit elementum sed
                  lorem non pulvinar sit. Leo in at vivamus adipiscing augue
                  auctor vitae maecenas egestas. Tempus gravida condimentum
                  tempor sagittis curabitur.
                </p>
                <Link to={"/blog"} className="article-more">
                  Read More
                </Link>
              </Col>
              <Col md={6} className="mb-5 mb-md-0">
                <h3 className="article-heading">
                  Here is How You Can Create an Outstanding Marketing Plan?
                </h3>
                <p className="article-body">
                  Social Seed's Article 3 Issues Businesses Are Facing With
                  Podcast Marketing & How to Deal With Them Here Is How You Can
                  Create an Outstanding Marketing Plan? Lorem ipsum dolor sit
                  amet consectetur. Elit elementum sed lorem non pulvinar sit.
                  Leo in at vivamus adipiscing augue auctor vitae maecenas
                  egestas. Tempus gravida condimentum tempor sagittis curabitur.
                  Tellus aliquam eu cursus malesuada. Nullam et maecenas mi
                  tristique pretium tellus quisque eu penatibus. Scelerisque
                  condimentum vehicula justo suspendisse tempor at feugiat.
                  Lorem ipsum dolor sit amet consectetur. Elit elementum sed
                  lorem non pulvinar sit. Leo in at vivamus adipiscing augue
                  auctor vitae maecenas egestas. Tempus gravida condimentum
                  tempor sagittis curabitur.
                </p>
                <Link to={"/blog"} className="article-more">
                  Read More
                </Link>
              </Col>
              <Row style={{ marginTop: "40px" }}>
                <Col md={6} className="mb-5 mb-md-0">
                  <h3 className="article-heading">
                    5 VR Marketing Examples to Inspire You
                  </h3>
                  <p className="article-body">
                    Social Seed's Article 3 Issues Businesses Are Facing With
                    Podcast Marketing & How to Deal With Them Here Is How You
                    Can Create an Outstanding Marketing Plan? Lorem ipsum dolor
                    sit amet consectetur. Elit elementum sed lorem non pulvinar
                    sit. Leo in at vivamus adipiscing augue auctor vitae
                    maecenas egestas. Tempus gravida condimentum tempor sagittis
                    curabitur. Tellus aliquam eu cursus malesuada. Nullam et
                    maecenas mi tristique pretium tellus quisque eu penatibus.
                    Scelerisque condimentum vehicula justo suspendisse tempor at
                    feugiat. Lorem ipsum dolor sit amet consectetur. Elit
                    elementum sed lorem non pulvinar sit. Leo in at vivamus
                    adipiscing augue auctor vitae maecenas egestas. Tempus
                    gravida condimentum tempor sagittis curabitur.
                  </p>
                  <Link to={"/blog"} className="article-more">
                    Read More
                  </Link>
                </Col>
                <Col md={6} className="mb-5 mb-md-0">
                  <h3 className="article-heading">
                    4 Tips for Consistently Genrating High-Quality Social Media
                    Content
                  </h3>
                  <p className="article-body">
                    Social Seed's Article 3 Issues Businesses Are Facing With
                    Podcast Marketing & How to Deal With Them Here Is How You
                    Can Create an Outstanding Marketing Plan? Lorem ipsum dolor
                    sit amet consectetur. Elit elementum sed lorem non pulvinar
                    sit. Leo in at vivamus adipiscing augue auctor vitae
                    maecenas egestas. Tempus gravida condimentum tempor sagittis
                    curabitur. Tellus aliquam eu cursus malesuada. Nullam et
                    maecenas mi tristique pretium tellus quisque eu penatibus.
                    Scelerisque condimentum vehicula justo suspendisse tempor at
                    feugiat. Lorem ipsum dolor sit amet consectetur. Elit
                    elementum sed lorem non pulvinar sit. Leo in at vivamus
                    adipiscing augue auctor vitae maecenas egestas. Tempus
                    gravida condimentum tempor sagittis curabitur.
                  </p>
                  <Link to={"/blog"} className="article-more">
                    Read More
                  </Link>
                </Col>
              </Row>
            </Row>
          </Container>
        </Col>
      </Row> */}

      <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Col>
          <Container>
            <h2 className="sectionParaHeading">Featured In</h2>
            <FeaturedIn />
          </Container>
        </Col>
      </Row>
      <Row className="">
        <Col className="bannerArea pb-5 pt-5 align-itens-center d-flex">
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

export default Service;
