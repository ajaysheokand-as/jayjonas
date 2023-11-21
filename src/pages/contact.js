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
import EmailIcon from "../img/Jones/icons/email_icon.svg";
import Linked from "../img/Jones/icons/linkedin_icon.svg";
import Facebook from "../img/Jones/icons/facebook_icon.svg";
import Insta from "../img/Jones/icons/insta_icon.svg";
//import Axios from 'axios';

const Contact = () => {
  //    const[name,setName]=usestate("");
  //    const[lname,setlname]=usestate("");
  //    const[msg,setMsg]=usestate("");
  //    const[message,setMessage]=useState("");

  //   let res = await fetch("",{
  //     method:"POST",
  //     body:JSON.stringigy({
  //         name:name,
  //         lname:lname,
  //         msg:msg,
  //     }),
  //   });
  //   let handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let res = await fetch("https://httpbin.org/post", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: name,
  //           lname: lname,
  //           msg: msg,
  //         }),
  //       });
  //       let resJson = await res.json();
  //       if (res.status === 200) {
  //         setName("");
  //         setlname("");
  //         setMsg("Successfull");
  //       } else {
  //         setMessage("Some error occured");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    // <Container fluid>
    //   <Row>
    //     <Col className="p-0">
    //       <section className="mt-3">
    //         <Container fluid>
    //           <Row className="">
    //             <Col className="section-5 pb-5 pt-5">
    //               <Container>
    //                 <Row>
    //                   <Col sm={12}>
    //                     <h2 className="sectionMainHeading mb-5">Contact Us</h2>
    //                   </Col>
    //                   <Col sm={12} md={4} className="text-start">
    //                     <p>
    //                       Lorem ipsum dolor sit amet, consectetur adipiscing
    //                       elit. Sociis maecenas adipiscing accumsan pretium
    //                       ultrices scelerisque. Sed sit nunc lacus, odio rhoncus
    //                       diam, non urna{" "}
    //                     </p>
    //                     <p>
    //                       <img src={EmailIcon} />{" "}
    //                       <small className="fs-16 ms-4">
    //                         email12321@gmail.com
    //                       </small>
    //                     </p>
    //                     <p>
    //                       <a href="#" className="me-5 d-inline-block">
    //                         <img src={Linked} height="32" />{" "}
    //                       </a>
    //                       <a href="#" className="me-5 d-inline-block">
    //                         <img src={Facebook} height="32" />{" "}
    //                       </a>
    //                       <a href="#" className="d-inline-block">
    //                         <img src={Insta} height="32" />{" "}
    //                       </a>
    //                     </p>
    //                   </Col>
    //                   <Col sm={12} md={8}>
    //                     <Form>
    //                       <Container>
    //                         <Row>
    //                           ''{" "}
    //                           <Col md={6} className="mb-5">
    //                             <Form.Group
    //                               className="mb-3"
    //                               controlId="exampleForm.ControlInput1"
    //                             >
    //                               <Form.Control
    //                                 size="lg"
    //                                 type="email"
    //                                 placeholder="name@example.com"
    //                               />
    //                             </Form.Group>
    //                           </Col>
    //                           <Col md={6} className="mb-5">
    //                             <Form.Group
    //                               className="mb-3 rounded-pill border-primary"
    //                               controlId="exampleForm.ControlInput1"
    //                             >
    //                               <Form.Control
    //                                 size="lg"
    //                                 type="email"
    //                                 placeholder="name@example.com"
    //                               />
    //                             </Form.Group>
    //                           </Col>
    //                           <Col sm={12} className="mb-5">
    //                             <Form.Group
    //                               className="mb-3 rounded-pill border-primary"
    //                               controlId="exampleForm.ControlTextarea1"
    //                             >
    //                               <Form.Control as="textarea" rows={3} />
    //                             </Form.Group>
    //                           </Col>
    //                           <Col sm={12} className="mb-5">
    //                             <Button
    //                               variant="outline-primary"
    //                               className="w-50 rounded-pill bg-white text-dark"
    //                               size="lg"
    //                             >
    //                               Send Message
    //                             </Button>{" "}
    //                           </Col>
    //                         </Row>
    //                       </Container>
    //                     </Form>
    //                   </Col>
    //                 </Row>
    //               </Container>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </section>
    //     </Col>
    //   </Row>
    //   <FooterComponent />
    // </Container>
    <>
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
    </>
  );
};

export default Contact;
