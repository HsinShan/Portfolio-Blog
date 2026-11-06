import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/style/index.scss";
import "antd/dist/antd.css";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ConfigProvider } from "antd";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-TD5WTK6F", // 將其替換為你的 GTM ID
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* antd adds a space inside 2-character CJK button labels ("中 文", "關 閉") */}
    <ConfigProvider autoInsertSpaceInButton={false}>
      <LanguageProvider>
        <Router>
          <App />
        </Router>
      </LanguageProvider>
    </ConfigProvider>
  </React.StrictMode>
);
