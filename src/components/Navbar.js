import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming your CSS file is named style.css

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
