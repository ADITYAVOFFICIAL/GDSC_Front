import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faChrome, faReact } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav>
        <ul className="nav-menu">
          <li><a className='listy' rel="noreferrer" target='_blank' href="https://adityaver.netlify.app/"><FontAwesomeIcon icon={faChrome} /> Portfolio</a></li>
          <li><a className='listy' rel="noreferrer" target='_blank' href="https://github.com/ADITYAVOFFICIAL/GDSC_Front"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
          <li><a className='listy' rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/aditya-verma-real/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></li>
          <li className="droppy">
            <button style={{color:"white",fontWeight:"bold"}} onClick={toggleDropdown}><FontAwesomeIcon icon={faReact} /> Other REACTJS Projects</button>
            <ul className={`droppy-menu ${dropdownOpen ? 'show' : ''}`}>
              <li><a className='listy' rel="noreferrer" target='_blank' href="https://autocompsearch.vercel.app/">Auto-complete Searchbar</a></li>
              <li><a className='listy' rel="noreferrer" target='_blank' href="https://srmsigkdd.vercel.app/home">SIGKDD Website</a></li>
              <li><a className='listy' rel="noreferrer" target='_blank' href="https://fortuna-mavericks.vercel.app/">Fortuna</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <hr className="navbar-separator" />
    </div>
  );
}

export default Navbar;
