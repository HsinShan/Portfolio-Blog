import Main from "../pages/main";
import Portfolio from "../pages/portfolio";

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/Portfolio",
    component: Portfolio,
    exact: true,
  },
];

export default routes;
