import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import "./Contact.css";

const Contact = () => {
  const sendEmail = () => {
    const userEmail = "tarunvavadiya121@gmail.com";
    const subject = encodeURIComponent("Regarding your inquiry");
    const body = encodeURIComponent("Hello,\n\nI have a question...");

    const mailtoLink = `mailto:${userEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col className="c-left" style={{ textAlign: "center" }}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: window.innerWidth > 768 ? "24px" : "20px",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              margin: window.innerWidth > 768 && "2% 5%",
            }}
          >
            My mailbox is always open for fresh opportunities to discuss! You
            are always welcome to contact me at any time if you have any
            concerns. I'll do my best to respond to you, whether you have a
            query or simply want to say hello!
          </p>
          <Button
            className="button"
            style={{
              color: "#7300ff",
              border: "1px solid #7300ff",
              marginTop: window.innerWidth > 768 ? "20px" : "10px",
            }}
            onClick={sendEmail}
          >
            Say Hello
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
