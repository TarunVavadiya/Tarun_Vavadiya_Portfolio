import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiEclipseide,
  SiIntellijidea,
  SiPostman,
  SiPycharm,
  SiVisualstudiocode
} from "react-icons/si";
import { GiBeaver } from "react-icons/gi";


const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBeaver />
      </Col>
    </Row>
  );
};

export default Toolstack;
