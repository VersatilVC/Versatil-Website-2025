import React from "react";
import AnimatedProcess from "./AnimatedProcess";
import AgentOrchestrationCanvas from "./AgentOrchestrationCanvas";
import ContextualEngineeringWorkflow from "./ContextualEngineeringWorkflow";
import ContentMarketingEngine from "./ContentMarketingEngine";

const Process = () => {
  return (
    <>
      <AnimatedProcess />
      <AgentOrchestrationCanvas />
      <ContextualEngineeringWorkflow />
      <ContentMarketingEngine />
    </>
  );
};

export default Process;