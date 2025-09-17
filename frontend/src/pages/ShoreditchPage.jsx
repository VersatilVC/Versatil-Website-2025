import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import ShoreditchHero from "../components/ShoreditchHero";
import ShoreditchProblemSolution from "../components/ShoreditchProblemSolution";
import WorkflowPlanArchitecture from "../components/WorkflowPlanArchitecture";
import EnhancedCaseStudies from "../components/EnhancedCaseStudies";
import SimpleCTA from "../components/SimpleCTA";
import Footer from "../components/Footer";

const ShoreditchPage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <ShoreditchHero />
        <ShoreditchProblemSolution />
        <WorkflowPlanArchitecture />
        <EnhancedCaseStudies />
        <SimpleCTA />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default ShoreditchPage;