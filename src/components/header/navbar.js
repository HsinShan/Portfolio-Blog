import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined, FolderOpenOutlined } from "@ant-design/icons";
import _ from "lodash";
import usePathname from "../../hooks/usePathname";
import "../../assets/style/header/navbar.scss";

const LINKS = ["/", "/Portfolio"];
const NAVS = [
  {
    link: "/",
    nav: "介紹",
    icon: <UserOutlined />,
  },
  {
    link: "/Portfolio",
    nav: "作品集",
    icon: <FolderOpenOutlined />,
  },
];
const Navbar = () => {
  const menuItems = NAVS.map((item, i) => (
    <Menu.Item key={i}>
      <Link to={item.link} className="link">
        {item.icon}
        {item.nav}
      </Link>
    </Menu.Item>
  ));
  const pathname = usePathname();
  let activeIndex = _.findIndex(LINKS, (link) => pathname === link);
  let selectedKeys = [activeIndex.toString()];
  if (!pathname) activeIndex = 0;
  if (pathname && activeIndex === -1) selectedKeys = [];

  return (
    <Menu mode="vertical" selectedKeys={selectedKeys}>
      {menuItems}
    </Menu>
  );
};

export default Navbar;
