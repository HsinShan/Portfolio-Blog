import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Logo from "../../assets/images/logo.png";
import "../../assets/style/header/index.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" className="logo-image" />
        <span className="logo-name">Shirley's Blog</span>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
