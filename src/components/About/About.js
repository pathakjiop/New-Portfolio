import React from "react";
import "./About.css";
import aboutData from "./About.json";
import LinkedInIcon from "./social-icons/linkedin.svg";
import TwitterIcon from "./social-icons/twitter.svg";
import GitHubIcon from "./social-icons/github.svg";
import InstagramIcon from "./social-icons/instagram.svg";

const About = () => {
  const { name, description } = aboutData;

  return (
    <div className='about'>
      <h2>{name}</h2>
      <p className='text-gray-500 text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400'>
        {description}
      </p>
      <div className=''>
        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/pathak-ji-op'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={LinkedInIcon}
              alt='LinkedIn'
              className='social-icon'
            />
          </a>
          <a
            href='https://twitter.com/atharvpathak248'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={TwitterIcon}
              alt='Twitter'
              className='social-icon'
            />
          </a>
          <a
            href='https://github.com/pathakjiop'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={GitHubIcon}
              alt='GitHub'
              className='social-icon'
            />
          </a>
          <a
            href='https://www.instagram.com/pathak_ji_op'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={InstagramIcon}
              alt='Instagram'
              className='social-icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
