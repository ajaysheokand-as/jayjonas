import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Form,
} from "react-bootstrap";
import NavbarComponent from "../components/navbar.component";
import FooterComponent from "../components/footer.component";
import thrive from "../img/Jones/thrive.png";
import united from "../img/Jones/united.png";
import yahoo from "../img/Jones/yahoo.png";
import influencive from "../img/Jones/influencive.webp";
import Candice from "../img/Jones/previous/candice-king-campaign.png";
import Catgraham from "../img/Jones/previous/catgraham.png";
import Floyd from "../img/Jones/previous/floyd-mayweather-campaign.png";
import Georgina from "../img/Jones/previous/georgina-rodriquez.png";
import Iggy from "../img/Jones/previous/iggy-azalea-campaign.png";
import Loren from "../img/Jones/previous/loren.png";
import Noah from "../img/Jones/previous/noah-schnapp-campaign.png";
import Stassie from "../img/Jones/previous/stassie-campaign.png";
import Mobile from "../img/Jones/Mobile.png";
import Upcoming1 from "../img/Jones/image millions-f.png";
import Upcoming2 from "../img/Jones/image millions-m.png";

const Feature = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          {/* 1 section  */}
          <section className="bannerArea mt-5 ">
            <Container fluid>
              <Row>
                <Col>
                  <Container fluid className="pt-5 pb-5">
                    <Row>
                      <Col className="p-0">
                        <Container>
                          <Row className="justify-content-center align-items-center h-100">
                            <Col
                              sm={12}
                              md={8}
                              className="text-center h-100 d-flex"
                            >
                              <Container fluid className="pt-5 pb-5">
                                <Row>
                                  <Col className="pt-5 pb-5">
                                    <br />
                                    <h2 className="sectionMainHeading">
                                      Social Media Growth
                                    </h2>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                            <Container>
                              <Row className="align-items-center h-100">
                                <Col lg={6} className="text-start">
                                  <h2 className="text-primary">What we do ?</h2>
                                  <p>
                                    At Social Seed, we aim to help you
                                    unlock the incredible potential of social
                                    media by connecting you or your brand with
                                    huge celebrity giveaways to grow your
                                    Instagram following.
                                  </p>
                                  <p>
                                    By carefully aligning your business or
                                    personal goals with an upcoming celebrity
                                    promotion, we will make sure you gain
                                    thousands of new and targeted followers.
                                  </p>
                                  <h2 className="text-primary">
                                    How does our campaign work ?
                                  </h2>

                                  <p>
                                    We partner up with A-List celebrities to
                                    host giveaway promotions. The celebrity will
                                    announce on their Instagram via a main post
                                    to their millions of followers that they
                                    have teamed up with our giveaway page to
                                    give away specific prizes (such as Louis
                                    Vuitton bags, iPhone’s & more). All their
                                    followers have to do to enter our
                                    competition is follow everyone our giveaway
                                    page is following
                                  </p>
                                  <p>
                                    You would be on this following list, gaining
                                    you thousands of targeted followers specific
                                    to you niche, based on the celebrity you
                                    chose.
                                  </p>
                                </Col>
                                <Col lg={6}>
                                  <img
                                    src={Mobile}
                                    className="img-fluid"
                                    style={{ height: "50%", width: "50%" }}
                                  />
                                </Col>
                              </Row>
                            </Container>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </section>

          {/* 2 section  */}

          <section>
            <Container fluid className="pt-5 pb-5">
              <Row>
                <Col className="pt-5 pb-5">
                  <br />
                  <h2 className="sectionMainHeading">Upcoming Campaigns</h2>
                </Col>
              </Row>
            </Container>
            <Container fluid className=" featuresContantArea">
              <Row>
                <Col>
                  <Container fluid className="pt-5 pb-5 position-relative">
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col
                              lg={6}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Upcoming1}
                                style={{ height: "100%", width: "100%" }}
                                className="img-fluid"
                              />
                            </Col>

                            <Col
                              lg={6}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Upcoming2}
                                style={{ height: "100%", width: "100%" }}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </section>

          {/* 3 section  */}

          <section className="bannerArea mt-5 ">
            <Container fluid>
              <Row>
                <Col>
                  <Container fluid>
                    <Row>
                      <Col className="p-0">
                        <Container>
                          <Row className="justify-content-center align-items-center h-100 ">
                            <Col
                              sm={12}
                              md={8}
                              className="text-center h-100 d-flex"
                            >
                              <Container fluid className="pt-5 pb-5 ">
                                <Row>
                                  <Col className="pt-5 pb-5">
                                    <br />
                                    <h2 className="sectionMainHeading">
                                      Previous Campaigns
                                    </h2>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>

                  <Container
                    fluid
                    className="pt-5 position-relative "
                    style={{ marginTop: "1px", marginBottom: "20px" }}
                  >
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Candice}
                                style={{ height: "100%", width: "90%" }}
                              />
                            </Col>

                            <Col
                              lg={3}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Catgraham}
                                style={{ height: "100%", width: "90%" }}
                              />
                            </Col>

                            <Col
                              lg={3}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Floyd}
                                style={{ height: "100%", width: "90%" }}
                              />
                            </Col>

                            <Col
                              lg={3}
                              className="d-flex align-items-center pt-5 pb-5"
                            >
                              <img
                                src={Georgina}
                                style={{ height: "100%", width: "90%" }}
                              />
                            </Col>
                            <Row>
                              <Col
                                lg={3}
                                className="d-flex align-items-center pt-5 pb-5"
                              >
                                <img
                                  src={Iggy}
                                  style={{ height: "100%", width: "90%" }}
                                />
                              </Col>

                              <Col
                                lg={3}
                                className="d-flex align-items-center pt-5 pb-5"
                              >
                                <img
                                  src={Loren}
                                  style={{ height: "100%", width: "90%" }}
                                />
                              </Col>

                              <Col
                                lg={3}
                                className="d-flex align-items-center pt-5 pb-5"
                              >
                                <img
                                  src={Noah}
                                  style={{ height: "100%", width: "90%" }}
                                />
                              </Col>

                              <Col
                                lg={3}
                                className="d-flex align-items-center pt-5 pb-5"
                              >
                                <img
                                  src={Stassie}
                                  style={{ height: "100%", width: "90%" }}
                                />
                              </Col>
                            </Row>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </section>
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
};

export default Feature;
