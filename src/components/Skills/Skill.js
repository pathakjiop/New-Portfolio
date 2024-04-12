import React from "react";
import "./Skill.css";

function Skills() {
  return (
    <div className='skill'>
      <div className='skills-container '>
        <h1>My Skills</h1>
        <p className='text-gray-500 text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400'>
          I'm proficient in a variety of programming languages, frameworks, and
          tools. Here are some of my top skills.
        </p>
        <div className='skill-sections'>
          <div className='skill-section'>
            <h2>Frontend Development</h2>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className='skill-section'>
            <h2>Backend Development</h2>
            <p>Python, Rust, MySQL</p>
          </div>
          <div className='skill-section'>
            <h2>Programming Languages</h2>
            <p>C, C++, Java</p>
          </div>
          <div className='skill-section'>
            <h2>Other Skills</h2>
            <p>Git, Github, Linux, Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
