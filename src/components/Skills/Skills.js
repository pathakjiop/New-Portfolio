import React from "react";
import "./Skills.css";
import skillsData from "./Skills.json"; // Assuming your JSON file is named "skills.json"

function Skills() {
  const { sections } = skillsData; // Destructure directly for cleaner access

  return (
    <div className="skill">
      <div className="skills-container">
        <h1>My Skills</h1>
        <p className="text-gray-500 text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          I'm proficient in a variety of programming languages, frameworks, and tools. Here are some of my top skills.
        </p>
        <div className="skill-sections">
          {sections.map((section, index) => (
            <div className="skill-section" key={index}>
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
