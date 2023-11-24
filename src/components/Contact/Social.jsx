import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Please don't hesitate to reach out to me and{" "}
            <span className="yellow">connect.</span>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/TarunVavadiya"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/tarun.vavadiya.9"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="twitter"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tarun-vavadiya-748b68243/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/t_d_patel_2002"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
