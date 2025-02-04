import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDatabase, DiJava, DiJavascript1, DiReact } from "react-icons/di";
import { FaDocker, FaGithub } from "react-icons/fa";
import {
  SiAmazons3,
  SiApachemaven,
  SiGitlab,
  SiGradle,
  SiHibernate,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiSpringboot,
  SiSpringsecurity,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <br />
        <span style={{ fontSize: "30px" }}>Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <br />
        <span style={{ fontSize: "30px" }}>Spring Boot</span>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiSpringsecurity />
        <br />
        <span style={{ fontSize: "30px" }}>Spring Security</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <br />
        <span style={{ fontSize: "30px" }}>Maven</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGradle />
        <br />
        <span style={{ fontSize: "30px" }}>Gradle</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
        <br />
        <span style={{ fontSize: "30px" }}>Hibernate</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <br />
        <span style={{ fontSize: "30px" }}>JDBC</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <br />
        <span style={{ fontSize: "30px" }}>Jenkins</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br />
        <span style={{ fontSize: "30px" }}>React Js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <br />
        <span style={{ fontSize: "30px" }}>Redux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br />
        <span style={{ fontSize: "30px" }}>javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <br />
        <span style={{ fontSize: "30px" }}>Amazon s3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <br />
        <span style={{ fontSize: "30px" }}>Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <br />
        <span style={{ fontSize: "30px" }}>PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <br />
        <span style={{ fontSize: "30px" }}>MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <br />
        <span style={{ fontSize: "30px" }}>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <br />
        <span style={{ fontSize: "30px" }}>Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <br />
        <span style={{ fontSize: "30px" }}>Gitlab</span>
      </Col>
    </Row>
  );
};

export default Techstack;
