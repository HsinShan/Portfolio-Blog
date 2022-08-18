import React from "react";
import Navbar from "./navbar";
import "../../assets/style/header/index.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Shirley's Blog</h1>
      <Navbar />
    </div>
  );
};

export default Header;
