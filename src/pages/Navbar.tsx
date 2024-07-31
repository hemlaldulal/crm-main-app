// src/components/Navbar.tsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AiOutlineUser } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-yellow-400 text-3xl font-bold">Zetalabs CRM</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`flex-col md:flex md:flex-row md:items-center md:justify-center flex-grow ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="text-white px-4 py-2 text-[1.5rem] hover:text-[#e93b3a]"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-white text-[1.5rem] px-4 py-2 hover:text-[#e93b3a]"
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="text-white text-[1.5rem] px-4 py-2 hover:text-[#e93b3a]"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <Link to="/login">
          <button className="bg-blue-500 text-[1.2rem] text-white px-4 py-2 rounded-md m-2">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-[1.2rem] text-white px-4 py-2 rounded-md m-2">
            Register
          </button>
        </Link>
        <button className="text-white m-2">
          <FaBell size={24} />
        </button>
        <button className="text-white m-2">
          <FaUserCircle size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
