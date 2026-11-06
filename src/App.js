import React from "react";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Main from "./pages/main";
import Header from "./components/header";
import DataPortfolio from "./pages/dataPortfolio";
import FrontendPortfolio from "./pages/frontendPortfolio";

function App() {
  return (
    // reducedMotion="user": skip transform animations when the OS asks for less motion
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  );
}

export default App;
