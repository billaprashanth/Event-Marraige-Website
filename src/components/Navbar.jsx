// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css'; 
const Navbar = () => { 
  // const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo - Only on large screens */}
        <Link
          to="/" 
          className="hidden sm:block text-xl font-bold text-blue-600"
        >
          Marriage Events
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="text-gray-800 hover:text-blue-600 font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
