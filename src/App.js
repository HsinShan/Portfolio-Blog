import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Main from "./pages/main";
import Header from "./components/header";
import DataPortfolio from "./pages/dataPortfolio";
import FrontendPortfolio from "./pages/frontendPortfolio";
import Product from "./pages/product";
import Automation from "./pages/automation";
import StockTa from "./pages/stockTa";
import ChunkErrorBoundary from "./components/common/chunkErrorBoundary";

// own chunk: recharts only loads when the report page is opened
const JobMarket2026 = lazy(() => import("./pages/jobMarket2026"));

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
          <Route path="/product" element={<Product />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/automation/stock-ta" element={<StockTa />} />
          <Route
            path="/portfolio-data/job-market-2026"
            element={
              <ChunkErrorBoundary>
                <Suspense fallback={<div className="page-loading" />}>
                  <JobMarket2026 />
                </Suspense>
              </ChunkErrorBoundary>
            }
          />
        </Routes>
      </div>
    </div>
    </MotionConfig>
  );
}

export default App;
