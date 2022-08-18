import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
