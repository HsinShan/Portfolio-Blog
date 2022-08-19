import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Menu from "./menu";
import Logo from "../../assets/images/logo.png";
import { BarsOutlined } from "@ant-design/icons";
import "../../assets/style/header/index.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" className="logo-image" />
        <span className="logo-name">Shirley's Blog</span>
      </Link>
      <Button onClick={showDrawer} className="menu-btn">
        <BarsOutlined />
      </Button>
      <Menu isVisible={visible} onClose={onClose} />
    </div>
  );
};

export default Header;
