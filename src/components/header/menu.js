import { Drawer } from "antd";
import React from "react";
import Navbar from "./navbar";
import "../../assets/style/header/menu.scss";

const Menu = ({ isVisible, onClose }) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={isVisible}
      width={120}
    >
      <div className="nav-title">導覽列</div>
      <Navbar onClose={onClose} />
    </Drawer>
  );
};

export default Menu;
