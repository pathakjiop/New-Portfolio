import React from "react";
import "./Skills.css";
import skillsData from "./Skills.json"; // Assuming your JSON file is named "skills.json"

function Skills() {
  const { sections } = skillsData; // Destructure directly for cleaner access

  return (
    <div className='skill'
    id='skills'>
      <div className='skills-container'>
        <h1>My Skills</h1>
        <p className='custom-text'>
          I'm proficient in a variety of programming languages, frameworks, and
          tools. Here are some of my top skills.
        </p>
        <div className='skill-sections'>
          {sections.map((section, index) => (
            <div
              className='skill-section'
              key={index}
            >
              <h2>{section.title}</h2>
              <p>{section.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
