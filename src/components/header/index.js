import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Logo from "../../assets/images/logo.png";
import { BarsOutlined } from "@ant-design/icons";
import useContent from "../../content";
import { useLanguage } from "../../i18n/LanguageContext";
import "../../assets/style/header/index.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { UI } = useContent();
  const { toggleLanguage } = useLanguage();

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
        <span className="logo-name">{UI.siteName}</span>
      </Link>
      <div className="header-actions">
        <Button
          onClick={toggleLanguage}
          className="lang-btn"
          aria-label={UI.langSwitch.ariaLabel}
        >
          {UI.langSwitch.label}
        </Button>
        <Button onClick={showDrawer} className="menu-btn">
          <BarsOutlined />
        </Button>
      </div>
      <Menu isVisible={visible} onClose={onClose} />
    </div>
  );
};

export default Header;
