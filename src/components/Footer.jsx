// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-16">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg">Join us on social media to stay up-to-date with our latest news and events.</p>
          <div className="flex items-center mt-8">
            <a href="#" className="text-white mx-4 hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="#" className="text-white mx-4 hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="#" className="text-white mx-4 hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg">123 Street Name, City, Country</p>
          <p className="text-lg">Email: info@example.com</p>
          <p className="text-lg">Phone: +1234567890</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-12">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
