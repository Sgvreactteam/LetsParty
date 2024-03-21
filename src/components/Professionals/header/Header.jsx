import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import profileImg from "../../../assets/Ellipse1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function DropdownContent({ onLogout }) {
  return (
    <div className="absolute bg-white shadow-md mt-2 p-2 rounded w-28">
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function Header({ onToggleSidebar }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setDropdownOpen(false);
  };

  return (
    <div className="shadow-md fixed w-full z-50 bg-white">
      <div className=" xl:max-w-5xl 2xl:max-w-full lg:max-w-4xl mx-auto py-2 2xl:px-56 xl:px-18 lg:px-0 sm:px-5 px-4 flex justify-between items-center">
        <div>
          <Link to="/">
          <img
            src={logo}
            alt="logoImage"
            className="lg:w-[165px] lg:h-[63px] sm:w-[100px] sm:h-[50px] w-[80px] h-[30px]"
          /></Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="me-3 lg:hidden">
            <RxHamburgerMenu onClick={onToggleSidebar} />
          </div>
          <button
            onClick={handleDropdownToggle}
            className="flex items-center justify-center"
          >
            <img
              src={profileImg}
              alt="Profile Image"
              className=" lg:h-14 lg:w-14 sm:h-12 sm:w-12 w-8 h-8 rounded-full  "
            />
            <IoMdArrowDropdown size={20} />
          </button>
          {isDropdownOpen && <DropdownContent onLogout={handleLogout} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
