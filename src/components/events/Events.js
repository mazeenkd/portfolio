import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventsCards from "./EventsCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/haick.jpg";
import emotion from "../../Assets/Projects/iwd.jpg";
import editor from "../../Assets/Projects/projet.jpg";
import chatify from "../../Assets/Projects/devfest.jpg";
import suicide from "../../Assets/Projects/googleio.jpg";
import bitsOfCode from "../../Assets/Projects/tunisia.jpg";

function Events() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few events I had participated in recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EventsCards
              imgPath={chatify}
              isBlog={false}
              title="DevFest21"
            />
          </Col>

          <Col md={4} className="project-card">
            <EventsCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Hack Tunisia"
              description=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <EventsCards
              imgPath={editor}
              isBlog={false}
              title="Academic project"
              description=""
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <EventsCards
          
              imgPath={leaf}
              isBlog={false}
              title="Haick23"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <EventsCards
              imgPath={suicide}
              isBlog={false}
              title="Google I/O"
              description=""
             
            />
          </Col>

          <Col md={4} className="project-card">
            <EventsCards
              imgPath={emotion}
              isBlog={false}
              title="IWD22"
              description=""
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Events;