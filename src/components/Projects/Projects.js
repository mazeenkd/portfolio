import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/LG.png";
import emotion from "../../Assets/Projects/sonatrach.jpg";
import editor from "../../Assets/Projects/enigma.png";
import chatify from "../../Assets/Projects/suivi.png";
import suicide from "../../Assets/Projects/brains.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Suivi de marchés"
              description="a web application for ESI that would allow users to
              users to follow the progress of a case by each structure in coordination with coordination with the others in real time, which would also allow the creation of a new database for each financial year, notify users of changes in files and thus
              notifying users of file changes and thus filtering multiple files according to different search criteria."
              ghLink="https://github.com/chamsou-Br/Projet-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gestin"
              description="G-ESTIN is a web-based application that allows the Head of Department, through a friendly, intuitive and easy-to-manage graphical interface, to manage ESTIN departments by easily generating timetables, exam schedules, managing Pedagogical Councils (CPs) which conclude with printable minutes and deliberations. ."
              ghLink="https://github.com/mazeenkd/gestin/tree/mazene"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="enigma"
              description="The aim is to produce a simplified electronic version of the enigma machine (a single reflector)."
              ghLink="https://github.com/mazeenkd/enigma"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
              imgPath={leaf}
              isBlog={false}
              title="LG"
              description="it is a mobile app connected to LG smart fridges with the next features :
              Ability to automatically order missing ingredients for a recipe using Alexa.
              Provide a family space to add a shopping list.
              Make statistics by calories consumption."
              ghLink="https://github.com/chamsou-Br/IWD_2022_TEAM_S400"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="BrEYEn - devfest21"
              description="BrEYEne is a mobile app under the theme of Accessibility and inclusion which gives more accessibility to the disabled people."
              ghLink="https://github.com/chechna9/Devfest-Hackathon2021"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sonatrach ROP Prediction - Haick23 datathon"
              description="training a machine learning model that can accurately predict the Rate of Penetration (ROP) in drilling operations using real-world data from the Algerian energy company, Sonatrach."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;