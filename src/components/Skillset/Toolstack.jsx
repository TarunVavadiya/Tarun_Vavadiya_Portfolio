import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiEclipseide,
  SiIntellijidea,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";
import { GiBeaver } from "react-icons/gi";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br />
        <span style={{ fontSize: "30px" }}>Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <br />
        <span style={{ fontSize: "30px" }}>Intellij Idea</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <br />
        <span style={{ fontSize: "30px" }}>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <br />
        <span style={{ fontSize: "30px" }}>Eclipse</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBeaver />
        <br />
        <span style={{ fontSize: "30px" }}>DBeaver</span>
      </Col>
    </Row>
  );
};

export default Toolstack;
