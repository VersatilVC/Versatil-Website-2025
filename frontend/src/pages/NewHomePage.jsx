import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import NewVersatilHero from "../components/NewVersatilHero";
import ScalingGapSection from "../components/ScalingGapSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

const NewHomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <NewVersatilHero />
        <ScalingGapSection />
        <CaseStudiesSection />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default NewHomePage;