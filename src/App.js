import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
