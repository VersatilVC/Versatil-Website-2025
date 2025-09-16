import React from "react";
import Navigation from "../components/Navigation";
import CleanVersatilHero from "../components/CleanVersatilHero";
import SimpleFeatures from "../components/SimpleFeatures";
import SimpleTestimonials from "../components/SimpleTestimonials";
import SimpleCTA from "../components/SimpleCTA";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

const CleanHomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <CleanVersatilHero />
        <SimpleFeatures />
        <SimpleTestimonials />
        <SimpleCTA />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default CleanHomePage;