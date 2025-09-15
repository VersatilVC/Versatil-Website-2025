import React from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Process from "../components/Process";
import BrandEngine from "../components/BrandEngine";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { PageTransition } from "../components/MotionWrapper";

const HomePage = () => {
  const { theme } = useTheme();
  
  return (
    <PageTransition
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      <Hero />
      <TrustedBy />
      <Process />
      <BrandEngine />
      <Testimonials />
      <FAQ />
      <Footer />
    </PageTransition>
  );
};

export default HomePage;