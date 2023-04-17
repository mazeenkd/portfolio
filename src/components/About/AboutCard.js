import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mazene CADI </span>
            from <span className="purple"> Guelma, Algeria.</span>
            <br />I am a 4th year student at Estin Bejaia
            <br />
            <br />
          Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Limitations are simply the starting point for innovation"{" "}
          </p>
          <footer className="blockquote-footer">Mazene</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;