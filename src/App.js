import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/header";
import DataPortfolio from "./pages/dataPortflio";
import FrontendPortfolio from "./pages/frontendPortfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio-data" element={<DataPortfolio />} />
          <Route path="/portfolio-frontend" element={<FrontendPortfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
