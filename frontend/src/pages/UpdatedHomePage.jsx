import React from "react";
import { MotionWrapper } from "../components/MotionWrapper";
import NewHomepageHero from "../components/NewHomepageHero";
import VersatilBrainArchitecture from "../components/VersatilBrainArchitecture";
import CaseStudiesSection from "../components/CaseStudiesSection";
import SimpleCTA from "../components/SimpleCTA";
import Footer from "../components/Footer";

const UpdatedHomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <NewHomepageHero />
        <VersatilBrainArchitecture />
        <CaseStudiesSection />
        <SimpleCTA />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default UpdatedHomePage;