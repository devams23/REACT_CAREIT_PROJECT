// Header.js
import React, { useState } from "react";
import { Link  , NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Container from "./Container";
import Logoutbtn from "./Logoutbtn";
// Import your logo image here

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authStatus = useSelector(state => state.auth.status);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Memberships",
      slug: "/memberships",
      active: authStatus,
  },
  {
      name: "Book Class",
      slug: "/bookclass",
      active: authStatus,
  },
  {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},

  {
      name: "Our Classes",
      slug: "/ourclasses",
      active: authStatus,
  },
  ]
  console.log("heyyy")
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400  text-white py-4 shadow-xl">
    <Container>


      <div className="container mx-auto flex items-center justify-between px-4 ">
        <img src={"./careitlogo.svg"} alt="Logo" className="w-14 md:w-1/12" /> 
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <ul className={`font-medium text-xl md:flex space-x-8 justify-center text-black ${isOpen ? 'block' : 'hidden'}`}>
        
          {navItems.map((item)=> item.active ? (
              <li key={item.name}>          
              <NavLink to={`${item.slug}`} className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                      {item.name}
                </NavLink>
              </li>
          ) : null)}
                    {authStatus && (
            <li>
              <Logoutbtn />
            </li>
          )}
        </ul>
      </div>
      
    </Container>
    </header>
  );
};

export default Header;
