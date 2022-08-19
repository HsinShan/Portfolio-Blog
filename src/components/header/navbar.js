import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  FolderOpenOutlined,
  CaretDownOutlined,
  LineChartOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import usePathname from "../../hooks/usePathname";
import "../../assets/style/header/navbar.scss";

const LINKS = ["/", "/portfolio-data", "/portfolio-frontend"];
const NAVS = [
  {
    num: 1,
    items: [
      {
        link: "/",
        nav: "介紹",
        icon: <UserOutlined />,
        key: 0,
      },
    ],
  },
  {
    num: 2,
    title: "作品集",
    icon: <FolderOpenOutlined />,
    icon2: <CaretDownOutlined />,
    items: [
      {
        link: "/portfolio-data",
        nav: "資料科學",
        icon: <LineChartOutlined />,
        key: 1,
      },
      {
        link: "/portfolio-frontend",
        nav: "前端開發",
        icon: <LaptopOutlined />,
        key: 2,
      },
    ],
  },
];

const Navbar = ({ onClose }) => {
  const navItems = (items) => {
    return items.map((item) => (
      <Menu.Item key={item.key} onClick={onClose}>
        <Link to={item.link} className="link">
          {item.icon}
          {item.nav}
        </Link>
      </Menu.Item>
    ));
  };

  const menuItems = NAVS.map((nav) => {
    if (nav.num > 1) {
      return (
        <Menu.ItemGroup
          mode="vertical"
          title={
            <>
              {nav.icon}
              {nav.title}
              {nav.icon2}
            </>
          }
        >
          {navItems(nav.items)}
        </Menu.ItemGroup>
      );
    }
    return navItems(nav.items);
  });
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
