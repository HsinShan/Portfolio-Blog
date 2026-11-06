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
import useContent from "../../content";
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

// antd v4.20+ `items` API (the JSX children API is deprecated).
// Built per render so labels follow the current language.
const buildMenuItems = (UI) => [
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
  const { UI } = useContent();
  const pathname = usePathname();
  const activeIndex = LINKS.indexOf(pathname);
  const selectedKeys = activeIndex === -1 ? [] : [String(activeIndex)];

  return (
    <Menu
      mode="vertical"
      selectedKeys={selectedKeys}
      items={buildMenuItems(UI)}
      onClick={onClose}
    />
  );
};

export default Navbar;
