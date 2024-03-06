import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Ellipse from "../../../assets/Ellipse1.png";
import { IoMdArrowDropdown } from "react-icons/io";

function DropdownContent({ onLogout }) {
  return (
    <div className="absolute bg-white shadow-md mt-2 p-2 rounded w-28">
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setDropdownOpen(false);
  };

  return (
    <div className="border-b-2">
      <div className="max-w-7xl m-auto py-3 flex justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button onClick={handleDropdownToggle} className="flex items-center gap-1">
            <img src={Ellipse} alt="" />
            <IoMdArrowDropdown size={20} />
          </button>
          {isDropdownOpen && <DropdownContent onLogout={handleLogout} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
