import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base = "py-1 px-10 rounded-md font-medium flex items-center text-white ";
  const styles = {
    purpleButton: base + " bg-primary ",
    grayButton: base + " bg-gray ",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const className = styles[type];

  if (to)
    return (
      <Link to={to} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button onClick={handleClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
