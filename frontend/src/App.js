import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import UpdatedHomePage from "./pages/UpdatedHomePage";
import ShoreditchPage from "./pages/ShoreditchPage";
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
        <Route path="/" element={<UpdatedHomePage />} />
        <Route path="/shoreditch" element={<ShoreditchPage />} />
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
          <Header />
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;