import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/style/index.scss";
import "antd/dist/antd.css";
import App from "./App";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-TD5WTK6F", // 將其替換為你的 GTM ID
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
