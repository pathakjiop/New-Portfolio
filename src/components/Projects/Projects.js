// Projects.js

import React from "react";
import "./Projects.css";
import projectsData from "./Projects.json";

const Project = ({ title, description, image, link, technologies }) => {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <h3>{title}</h3>
        <p>{description}</p>

        {technologies && (
          <p className='technologies'>
            <b>Technologies:</b> {technologies.join(", ")}
          </p>
        )}
        {link && (
          <button
            class='button'
            onClick={() => window.open(link, "_blank")}
          >
            <span class='bracket left'>❴</span>
            <span class='text'>Code</span>
            <span class='bracket right'>❵</span>
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='projects'>
      <h2>My Projects</h2>
      <p>
        Here are some of the projects I've worked on. Click on each project to
        learn more.
      </p>
      <div className='projects-container'>
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
