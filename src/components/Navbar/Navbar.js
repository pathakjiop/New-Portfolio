import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming your CSS file is named style.css

const Navbar = () => {
  const handleDownloadResume = () => {
    const resumePath = "/pdf/Atharv Pathak's Resume.pdf";

    // Initiate the download
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Atharv_Pathaks_Resume.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link
            onClick={() => scrollToSection("about")}
            to='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => scrollToSection("skills")}
            to='/skills'
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => scrollToSection("projects")}
            to='/projects'
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            onClick={() => scrollToSection("experience")}
            to='/experience'
          >
            Experience
          </Link>
        </li> */}
        <li>
          <Link
            onClick={() => scrollToSection("education")}
            to='/education'
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            onClick={() => scrollToSection("contact")}
            to='/contact'
          >
            Contact
          </Link>
        </li>
        <li>
          <Link onClick={handleDownloadResume}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
