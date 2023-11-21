import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import FeaturesImg1 from "../img/Jones/features_img1.jpg";
import BlogImg from "../img/Jones/Blog1.jpg";
import BlogImg2 from "../img/Jones/blog2.jpg";
import BlogImg3 from "../img/Jones/Blog3.png";
import BlogImg4 from "../img/Jones/blog4.jpg";
import Blog4 from "../img/Jones/Blog4.png";
import Blog5 from "../img/Jones/Blog5.png";
// import { useNavigate } from "react-router-dom";

import FooterComponent from "../components/footer.component";
import { PostCard } from "../components/PostCard";

const Blog = () => {
  const [isBack, setIsBack] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleBackButton = (selectedPost) => {
    selectedPost && setIsBack(true);
  };

  const removeSelectedPost = () => {
    setIsBack(false);
  };

  // const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
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
                                      Our Blog
                                    </h2>
                                    <p className="mt-5"></p>
                                    {isBack && (
                                      <Button
                                        className="mt-5"
                                        variant="primary"
                                        size="lg"
                                        onClick={removeSelectedPost}
                                      >
                                        Back
                                      </Button>
                                    )}
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
            </Container>
          </section>
          <PostCard data={handleBackButton} isBack={isBack} />

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
                                    placeholder="Enter your name"
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
                                    placeholder="Enter you email"
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
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
};

export default Blog;
