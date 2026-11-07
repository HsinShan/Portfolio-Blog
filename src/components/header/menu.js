import { Drawer } from "antd";
import React from "react";
import Navbar from "./navbar";
import useContent from "../../content";
import "../../assets/style/header/menu.scss";

// Phone / tablet menu (< 921px). On desktop the links sit in the header instead.
const Menu = ({ isVisible, onClose }) => {
  const { UI } = useContent();
  return (
    <Drawer
      className="nav-drawer"
      placement="right"
      title={UI.nav.title}
      closable
      onClose={onClose}
      visible={isVisible}
      width={280}
    >
      <Navbar mode="vertical" onClose={onClose} />
    </Drawer>
  );
};

export default Menu;
