import { Drawer } from "antd";
import React from "react";
import Navbar from "./navbar";

const Menu = ({ isVisible, onClose }) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={isVisible}
      width={150}
    >
      <Navbar />
    </Drawer>
  );
};

export default Menu;
