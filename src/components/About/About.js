import React from "react";
import "./About.css";
import aboutData from "./About.json";

const About = () => {
  const { name, description } = aboutData;

  return (
    <div className='about'>
      <h2>{name}</h2>
      <p className='text-gray-500 text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400'>
        {description}
      </p>
    </div>
  );
};

export default About;
