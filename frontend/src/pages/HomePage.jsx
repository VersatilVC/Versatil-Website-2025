import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import VersatilDNAProcess from "../components/VersatilDNAProcess";
import VersatilContentEngine from "../components/VersatilContentEngine";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

const HomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <TrustedBy />
        <VersatilDNAProcess />
        <VersatilContentEngine />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default HomePage;