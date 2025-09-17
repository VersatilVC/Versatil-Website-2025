import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import NewHomepageHero from "../components/NewHomepageHero";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import WorkflowPlanArchitecture from "../components/WorkflowPlanArchitecture";
import CaseStudiesSection from "../components/CaseStudiesSection";
import SimpleCTA from "../components/SimpleCTA";
import Footer from "../components/Footer";

const UpdatedHomePage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <NewHomepageHero />
        <ProblemSolutionSection />
        <WorkflowPlanArchitecture />
        <CaseStudiesSection />
        <SimpleCTA />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default UpdatedHomePage;