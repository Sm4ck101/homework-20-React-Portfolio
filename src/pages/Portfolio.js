import React from "react";
import { projects } from "../projects";
import Project from "../components/Project";
import { Col, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <Row className="projects-container">
        {projects.map((item) => {
          return (
            <Col key={item.name} sm={12} lg={6} xl={4}>
              <Project project={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Portfolio;
