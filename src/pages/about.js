import React, { useState } from "react";
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
import Package1 from "../img/Jones/Bronze.png";
import Package2 from "../img/Jones/Gold.png";
import Package3 from "../img/Jones/Silver.png";
import { Modal } from "react-bootstrap";

const About = () => {
  const [show, setShow] = useState(false);
  const [modaldata, setModalData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    console.log(data);
    setShow(true);
    setModalData(data);
  };

  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modaldata.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="mb-5">{modaldata.price}</h3>
          <p>{modaldata.description1}</p>
          <p>{modaldata.description2}</p>
          <p>{modaldata.description3}</p>
          <p>{modaldata.description4}</p>
          <p>{modaldata.description5}</p>
          <p>{modaldata.description6}</p>

          <p>{modaldata.description7}</p>

          <p>{modaldata.description8}</p>
        </Modal.Body>
      </Modal>
      <Row>
        <Col className="p-0">
          <section className="mt-5">
            <Container>
              <h2 className="sectionMainHeading mt-5 mb-5">Brand consulting</h2>
              <h4 className="package">Why Choose us ?</h4>
              <p className="brand">
                Here at Social Seed, we have over 20+ years of social
                media marketing experience within our team. Starting out with $0
                investment just 2 years ago we have worked tirelessly to grow
                our reputation within the social media marketing industry,
                always putting our client’s needs at the forefront of what we
                do.
              </p>

              <p className="brand">
                During the last 2 years, we have gained an impressive roster of
                clients from the Saint Lucia Tourist Board to one of the worlds
                most expensive whiskey brands. Through the correct marketing,
                branding and personal relationships we have built with our loyal
                customers Social Seed have generated $1m sales revenue in
                2022 alone.
              </p>
              <p className="brand">
                Choosing that correct company for brand consulting can be make
                or break for a brand, especially in the first few years of
                business. We believe it is critical to do you research on each
                company before giving them the honour of assisting you in your
                growth and development. Growing our marketing agency from $0
                investment to 6 figures in sales revenue in year one alone and 7
                figures sales revenue within year two alone, we know exactly
                what it takes and will strive to assist you every step of the
                way.
              </p>
            </Container>
          </section>

          <section>
            <Container fluid>
              <Row className="">
                <Col className="section-5 pb-5 pt-5 align-itens-center d-flex">
                  <Container>
                    <Row className="align-items-center justify-content-center h-100">
                      <h2 className="package">
                        Social Seed welcomes businesses of all sizes, our
                        brand consulting packages can be found below:
                      </h2>
                      <Col lg={4}>
                        <img
                          src={Package1}
                          alt="package1"
                          className="img-fluid package-image"
                          onClick={() => {
                            handleShow({
                              name: "Bronze Package",
                              price: "$2,500 (One off payment)",
                              description1:
                                "1:1 Private video conference to understand your buiness/brand,your current position(company age,sales,soical media channels,marketing strategies,clientele,niche). ",
                              description2:
                                "Tailored made 12 month marketing plan.",
                            });
                          }}
                        />
                        <h4 className="package">Bronze Package</h4>
                      </Col>
                      <Col lg={4}>
                        <img
                          src={Package3}
                          alt="package1"
                          className="img-fluid package-image"
                          onClick={() => {
                            handleShow({
                              name: "Silver Package",
                              price: "$2,500 per month",
                              description1:
                                "1:1 Private video conference to understand your buiness/brand,your current position(company age,sales,soical media channels,marketing strategies,clientele,niche)-Quarterly. ",
                              description2:
                                "Tailored made marketing plan reviewed every quarter.",
                              description3:
                                "SEO(Releasing 2 press articles per month on your brand).",
                            });
                          }}
                        />
                        <h4 className="package">Silver Package</h4>
                      </Col>
                      <Col lg={4}>
                        <img
                          src={Package2}
                          alt="package1"
                          className="img-fluid package-image"
                          onClick={() => {
                            handleShow({
                              name: "Gold Package",
                              price: "$5,000 per month",
                              description1:
                                "1:1 Private video conference to understand your buiness/brand,your current position(company age,sales,soical media channels,marketing strategies,clientele,niche)-Monthly.",
                              description2:
                                "Tailored made marketing plan reviewed every month.",
                              description3:
                                "SEO(Releasing 3 press articles per month on your brand).",
                              description4:
                                "Weekly meeting  to review ROAS, Social media stats and much more.",

                              description5:
                                "Our marketing expertise to continuously grow all your social media platforms week in week out, guaranteed ! .",
                              description6:
                                "Social media content creation for your brand.",
                              description7:
                                "On demand SMS and email support fromour team at any given time.",
                              description8:
                                "Virtual social media assistant, we can handle all your social media enquiries and direct them to the correct destination(customer care, HR and more).",
                            });
                          }}
                        />
                        <h4 className="package">Gold Package</h4>
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

export default About;
