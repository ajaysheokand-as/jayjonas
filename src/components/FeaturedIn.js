import React from "react";
import { Row, Col } from "react-bootstrap";
import Grazia from "../img/companyLogos/Grazia.png";
import forbes from "../img/Jones/logo_forbs.svg";
import USAToday from "../img/companyLogos/USAToday.png";
import WWD from "../img/companyLogos/WWD.png";
import INC from "../img/companyLogos/INC.webp";
// import IBT from "../img/companyLogos/IBT.png";
import okMagazine from "../img/companyLogos/okMagazine.png";
import dailymail from "../img/Jones/dailymail.png";
export const FeaturedIn = () => {
  return (
    <div>
      {/* <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Col>
          <Container>
            <h2 className="sectionParaHeading">Featured In</h2> */}
      <Row style={{ marginTop: "60px" }}>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          <img src={Grazia} style={{ height: "40px" }} />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          <img src={INC} style={{ height: "100px" }} />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          <img src={USAToday} style={{ height: "40px" }} />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          <img src={WWD} style={{ height: "40px" }} />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          {/* <img src={IBT} style={{ height: "40px" }} /> */}
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-5 lg-md-0"
        >
          <img src={okMagazine} style={{ height: "40px" }} />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={dailymail} style={{ height: "40px" }} />
        </Col>
      </Row>
      {/* </Container>
        </Col>
      </Row> */}
    </div>
  );
};
