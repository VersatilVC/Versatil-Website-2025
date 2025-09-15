import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import PlatformPage from "./pages/PlatformPage";
import CasesPage from "./pages/CasesPage";
import PricingPage from "./pages/PricingPage";
import ShopPage from "./pages/ShopPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;