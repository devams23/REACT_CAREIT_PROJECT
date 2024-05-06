// Header.js
import React, { useState } from "react";
import { Link  , NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Import your logo image here

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400  text-white py-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <img src={"./careitlogo.svg"} alt="Logo" className="w-14 md:w-1/12" /> 
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <ul className={`font-medium text-xl md:flex space-x-8 justify-center text-black ${isOpen ? 'block' : 'hidden'}`}>
        
          <li>          
          <NavLink to="/" className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                 Home
            </NavLink>
          </li>
          <li>          
          <NavLink to="/membership" className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                 Memberships
            </NavLink>
          </li>
          <li>          
          <NavLink to="/bookclass" className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                 Book Class
            </NavLink>
          </li>
          <li>          
          <NavLink to="/ourclasses" className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                Our Classes
            </NavLink>
          </li>
        </ul>
      </div>
      
    </header>
  );
};

export default Header;
