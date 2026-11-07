import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Navbar from "./navbar";
import Logo from "../../assets/images/logo.png";
import { BarsOutlined } from "@ant-design/icons";
import useContent from "../../content";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { useLanguage } from "../../i18n/LanguageContext";
import "../../assets/style/header/index.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { UI } = useContent();
  const { toggleLanguage } = useLanguage();
  const device = useDeviceDetect();

  // Desktop hides the drawer with CSS; also close it in state so antd
  // releases the body scroll lock if the window is widened while it's open
  useEffect(() => {
    if (device === "laptop") setVisible(false);
  }, [device]);

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
      <nav className="header-nav" aria-label={UI.nav.title}>
        <Navbar mode="horizontal" />
      </nav>
      <div className="header-actions">
        <Button
          onClick={toggleLanguage}
          className="lang-btn"
          aria-label={UI.langSwitch.ariaLabel}
        >
          {UI.langSwitch.label}
        </Button>
        <Button
          onClick={showDrawer}
          className="menu-btn"
          aria-label={UI.nav.openMenu}
          aria-expanded={visible}
        >
          <BarsOutlined />
        </Button>
      </div>
      <Menu isVisible={visible} onClose={onClose} />
    </div>
  );
};

export default Header;
