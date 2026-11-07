import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
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
// Desktop (horizontal): three flat links, no icons, so the header stays light.
// Drawer (vertical): portfolio pages sit under a plain group heading
// (no caret: the group can't collapse, so an arrow would look broken).
const buildMenuItems = (UI, horizontal) =>
  horizontal
    ? [
        linkItem(0, UI.nav.about),
        linkItem(1, UI.nav.dataScience),
        linkItem(2, UI.nav.frontend),
      ]
    : [
        linkItem(0, UI.nav.about, <UserOutlined />),
        {
          type: "group",
          key: "portfolio",
          label: UI.nav.portfolio,
          children: [
            linkItem(1, UI.nav.dataScience, <LineChartOutlined />),
            linkItem(2, UI.nav.frontend, <LaptopOutlined />),
          ],
        },
      ];

const Navbar = ({ mode = "vertical", onClose }) => {
  const { UI } = useContent();
  const pathname = usePathname();
  const activeIndex = LINKS.indexOf(pathname);
  const selectedKeys = activeIndex === -1 ? [] : [String(activeIndex)];
  const horizontal = mode === "horizontal";

  return (
    <Menu
      mode={mode}
      className={horizontal ? "nav-horizontal" : "nav-vertical"}
      selectedKeys={selectedKeys}
      items={buildMenuItems(UI, horizontal)}
      onClick={onClose}
      // only 3 items: never collapse them into antd's "…" overflow menu
      disabledOverflow={horizontal}
    />
  );
};

export default Navbar;
