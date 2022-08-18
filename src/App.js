import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/header";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
