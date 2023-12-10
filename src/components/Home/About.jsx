import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import tarunImg from "../../assets/Tarun_Vavadiya.jpg";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Greetings! My name is{" "}
              <span className="yellow">Tarun Vavadiya</span> and a{" "}
              <span className="yellow">versatile Full Stack Developer </span>{" "}
              with a passion for creating innovative and efficient web
              applications. My journey into the world of web development
              commenced in 2019, during my freshman year of college. It was
              during this time that I stumbled upon a series of captivating
              websites, revealing to me the profound depths that lay beyond the
              surface of HTML, CSS and javaScript alone.
              <br />
              <br />
              Skipping ahead to the present day, my heartfelt gratitude goes out
              to the countless mentors on platforms like YouTube, Udemy, Stack
              Overflow and newly ChatGPT. Their guidance has been a compass
              throughout my evolution into a proficient{" "}
              <span className="yellow">Software Developer</span>. Moreover, I've
              been fortunate to contribute my skills at a web development
              agency, an experience that has intricately refined my abilities
              within the realm of development.
              <br />
              <br />
              Beyond my professional role, I take pleasure in uncovering novel
              trends and emerging technologies. This pursuit not only imparts a
              wealth of new knowledge but also fuels my growth as a developer.
              During my leisure hours, you'll often spot me immersed in the
              pages of captivating books <span className="yellow">📚</span>, or
              dedicating time to my fitness regimen at the gym{" "}
              <span className="yellow">🏋️‍♂️</span>, or Hanging out with friends{" "}
              <span className="yellow">🕺</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={tarunImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  borderRadius: "200px",
                  paddingTop: window.innerWidth > 768 ? "50px" : "0",
                  filter:
                    window.innerWidth > 768
                      ? "drop-shadow(5px 5px 100px #9f5af2) invert(5%)"
                      : "none",
                  transition: window.innerWidth > 768 ? "filter 0.3s" : "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = "none";
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter =
                    window.innerWidth > 768
                      ? "drop-shadow(5px 5px 100px #9f5af2) invert(5%)"
                      : "none";
                }}
              />
            </Tilt>
          </Col>
        </Row>
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
    </Container>
  );
};

export default About;
