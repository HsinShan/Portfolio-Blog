import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../../assets/style/header/index.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Shirley's Blog
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
