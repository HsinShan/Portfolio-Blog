import Main from "../pages/main";
import DataPortfolio from "../pages/dataPortfolio";
import FrontendPortfolio from "../pages/frontendPortfolio";

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/portfolio-data",
    component: DataPortfolio,
    exact: true,
  },
  {
    path: "/portfolio-frontend",
    component: FrontendPortfolio,
    exact: true,
  },
];

export default routes;
