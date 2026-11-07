import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import usePathname from "../../hooks/usePathname";
import useContent from "../../content";
import "../../assets/style/header/navbar.scss";

// One list for both menus. Menu key = path, used to highlight the current page.
// `group: "portfolio"` items sit under the "作品集 / Portfolio" heading in the drawer.
const LINKS = [
  { path: "/", label: "about", icon: <UserOutlined /> },
  { path: "/product", label: "product", icon: <AppstoreOutlined />, group: "portfolio" },
  { path: "/portfolio-data", label: "dataScience", icon: <LineChartOutlined />, group: "portfolio" },
  { path: "/portfolio-frontend", label: "frontend", icon: <LaptopOutlined />, group: "portfolio" },
];

const linkItem = (link, UI, withIcon) => ({
  key: link.path,
  label: (
    <Link to={link.path} className="link">
      {withIcon && link.icon}
      {UI.nav[link.label]}
    </Link>
  ),
});

// antd v4.20+ `items` API (the JSX children API is deprecated).
// Built per render so labels follow the current language.
// Desktop (horizontal): flat links, no icons, so the header stays light.
// Drawer (vertical): portfolio pages sit under a plain group heading
// (no caret: the group can't collapse, so an arrow would look broken).
const buildMenuItems = (UI, horizontal) => {
  if (horizontal) return LINKS.map((link) => linkItem(link, UI, false));
  const top = LINKS.filter((link) => !link.group);
  const grouped = LINKS.filter((link) => link.group === "portfolio");
  return [
    ...top.map((link) => linkItem(link, UI, true)),
    {
      type: "group",
      key: "portfolio",
      label: UI.nav.portfolio,
      children: grouped.map((link) => linkItem(link, UI, true)),
    },
  ];
};

const Navbar = ({ mode = "vertical", onClose }) => {
  const { UI } = useContent();
  const pathname = usePathname();
  const selectedKeys = LINKS.some((link) => link.path === pathname) ? [pathname] : [];
  const horizontal = mode === "horizontal";

  return (
    <Menu
      mode={mode}
      className={horizontal ? "nav-horizontal" : "nav-vertical"}
      selectedKeys={selectedKeys}
      items={buildMenuItems(UI, horizontal)}
      onClick={onClose}
      // few items: never collapse them into antd's "…" overflow menu
      disabledOverflow={horizontal}
    />
  );
};

export default Navbar;
