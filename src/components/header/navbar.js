import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import _ from "lodash";
import usePathname from "../../hooks/usePathname";
import "../../assets/style/header/navbar.scss";

const LINKS = ["/", "/i"];
const NAVS = ["介紹", "作品集"];

const Navbar = () => {
  const menuItems = NAVS.map((item, i) => (
    <Menu.Item key={i}>
      <Link to={LINKS[i]} className="link">
        {item}
      </Link>
    </Menu.Item>
  ));
  const pathname = usePathname();
  let activeIndex = _.findIndex(LINKS, (link) => pathname === link);
  let selectedKeys = [activeIndex.toString()];
  if (!pathname) activeIndex = 0;
  if (pathname && activeIndex === -1) selectedKeys = [];

  return (
    <Menu mode="horizontal" selectedKeys={selectedKeys}>
      {menuItems}
    </Menu>
  );
};

export default Navbar;
