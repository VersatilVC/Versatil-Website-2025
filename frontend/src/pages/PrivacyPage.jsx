import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import PrivacySecurityPage from "../components/PrivacySecurityPage";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <PrivacySecurityPage />
        <Footer />
      </div>
    </MotionWrapper>
  );
};

export default PrivacyPage;