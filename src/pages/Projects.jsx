import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecommerce from "../assets/projects/ecommerce.png";
import project from "../assets/projects/project.jpeg";
import workmanagement from "../assets/projects/workManagement.jpg";
import uiBuilder from "../assets/projects/ui_builder.png";
import commonFloor from "../assets/projects/commonFloor.png";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uiBuilder}
              isBlog={false}
              isGit={false}
              title="UI Builder"
              description="Integ UI Builder is a cutting-edge solution that revolutionizes front-end application development with a no-code approach. The platform boasts powerful components, including customizable Grids and Tabs, tailored for enterprise applications."
              demoLink="https://configurator-fraindz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commonFloor}
              isBlog={false}
              isGit={false}
              title="Common Floor"
              description="Common Floor is innovative online marketplace connecting buyers, tenants, and sellers in the real estate domain. Spearheaded the platform's development, enhancing its efficiency for users in their property search, buying, and renting endeavors."
              demoLink="https://www.commonfloor.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workmanagement}
              isBlog={false}
              isGit={false}
              title="Industry Plant Management"
              description="Plant Management website is a digital platform designed to assist individuals or organizations in effectively managing and monitoring various aspects of plants, such as crops, gardens, landscaping, or even industrial plants. It typically offer a range of features and tools to facilitate plant care, maintenance, and optimization."
              demoLink="https://workmanagement.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              isGit={true}
              title="E‑Commerce Website"
              description="E-commerce Website is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses sqlite as the database."
              ghLink="https://github.com/TarunVavadiya/MedWeb---Online-Medical-Store/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              isGit={true}
              title="Word Bucket"
              description="It is an user friendly Social-Media Application which is used to make connections all over the world. It can provide Chat boxes to chat with each others. It provides safety with user account like no can see your profile without following."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects