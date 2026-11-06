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
import usePathname from "../../hooks/usePathname";
import UI from "../../content/ui";
import "../../assets/style/header/navbar.scss";

// Menu key = index in LINKS, used to highlight the current page.
const LINKS = ["/", "/portfolio-data", "/portfolio-frontend"];

const linkItem = (index, label, icon) => ({
  key: String(index),
  label: (
    <Link to={LINKS[index]} className="link">
      {icon}
      {label}
    </Link>
  ),
});

// antd v4.20+ `items` API (the JSX children API is deprecated)
const MENU_ITEMS = [
  linkItem(0, UI.nav.about, <UserOutlined />),
  {
    type: "group",
    key: "portfolio",
    label: (
      <>
        <FolderOpenOutlined />
        {UI.nav.portfolio}
        <CaretDownOutlined />
      </>
    ),
    children: [
      linkItem(1, UI.nav.dataScience, <LineChartOutlined />),
      linkItem(2, UI.nav.frontend, <LaptopOutlined />),
    ],
  },
];

const Navbar = ({ onClose }) => {
  const pathname = usePathname();
  const activeIndex = LINKS.indexOf(pathname);
  const selectedKeys = activeIndex === -1 ? [] : [String(activeIndex)];

  return (
    <Menu
      mode="vertical"
      selectedKeys={selectedKeys}
      items={MENU_ITEMS}
      onClick={onClose}
    />
  );
};

export default Navbar;
