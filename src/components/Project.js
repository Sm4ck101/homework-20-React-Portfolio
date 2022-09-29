import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project-card" sm={12} md={6} lg={4}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${project.image}`}
        alt={project.name}
      />
      <h3>{project.name}</h3>
      <div className="project-buttons">
        <a href={project.github} target="_blank" rel="noreferrer">
          Github Link
        </a>
        <a href={project.deployed} target="_blank" rel="noreferrer">
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Project;
