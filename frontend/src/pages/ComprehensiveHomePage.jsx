import React from "react";
import Navigation from "../components/Navigation";
import ComprehensiveHero from "../components/ComprehensiveHero";
import PathContentSections from "../components/PathContentSections";
import ScalingGapProblem from "../components/ScalingGapProblem";
import CaseStudiesSection from "../components/CaseStudiesSection";
import SimpleCTA from "../components/SimpleCTA";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

const ComprehensiveHomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <ComprehensiveHero />
        <PathContentSections />
        <ScalingGapProblem />
        <CaseStudiesSection />
        <SimpleCTA />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default ComprehensiveHomePage;