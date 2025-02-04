import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecommerce from "../assets/projects/ecommerce.png";
import project from "../assets/projects/project.jpeg";
import workmanagement from "../assets/projects/workManagement.jpg";
import phosis from "../assets/projects/phosis.jpeg";
import TIMS from "../assets/projects/TIMS.png";
import des from "../assets/projects/des.png";
import financialAdvisor from "../assets/projects/financial_advisor.png";
import integ from "../assets/projects/integ.jpg";
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
              imgPath={TIMS}
              isBlog={false}
              isGit={false}
              title="TIMS (Training Information Management System)"
              description="Training Information Management System is a web application to manage the training and its documentation for new recruit, current employee and contractual employee at a centralized location for different branches and departments. It is completely made for pharma based companies employee management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phosis}
              isBlog={false}
              isGit={false}
              title="Phosis Fitness Camp"
              description="Developed an online platform for Phosis Fitness Camp, enabling users to explore various fitness programs, register for classes, track their progress, and interact with trainers. The platform features user authentication, personalized workout plans, and community forums for members to share experiences and tips."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialAdvisor}
              isBlog={false}
              isGit={false}
              title="Financial Advisor"
              description="Advisor Check is an innovative application that seamlessly integrates with company systems, providing financial advice anytime, anywhere. The app prioritizes security, ensuring client data remains confidential, and is designed for user-friendliness, simplifying financial planning for everyone."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={des}
              isBlog={false}
              isGit={false}
              title="Decarbonized Electricity System"
              description="Developed a sustainable electricity management system focusing on reducing carbon emissions through efficient energy distribution and monitoring. Implemented features for real-time data visualization, user-friendly interfaces, and integration with renewable energy sources, enhancing the overall efficiency and sustainability of the energy sector."
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
              imgPath={integ}
              isBlog={false}
              isGit={false}
              title="Integ"
              description="Managed Integ, a CRM project. Handled ongoing improvements, bug fixes, and updates to ensure the tool remained user-friendly for better client relationships and smoother business operations. Collaborated with cross-functional teams to ensure Integ met client needs and exceeded expectations."
              demoLink="https://www.commonfloor.com/"
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
  );
};

export default Projects;
