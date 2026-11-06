import { Drawer } from "antd";
import React from "react";
import Navbar from "./navbar";
import useContent from "../../content";
import "../../assets/style/header/menu.scss";

const Menu = ({ isVisible, onClose }) => {
  const { UI } = useContent();
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={isVisible}
      width={150}
    >
      <div className="nav-title">{UI.nav.title}</div>
      <Navbar onClose={onClose} />
    </Drawer>
  );
};

export default Menu;
