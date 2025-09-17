import React from "react";
import { motion } from "framer-motion";

// Enhanced brand logo components with real brand assets
const BrandLogos = {
  "NVIDIA Inception": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://customer-assets.emergentagent.com/job_versatil-engine/artifacts/y036c4wu_20181218-Nvidia-Inception.png"
        alt="NVIDIA Inception"
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(0.8)' }}
      />
    </div>
  ),
  
  "Google for Startups": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://customer-assets.emergentagent.com/job_versatil-engine/artifacts/jhrtw755_Logo_for_Google_for_Startups_page.png"
        alt="Google for Startups"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  
  "Cyabra": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://customer-assets.emergentagent.com/job_versatil-engine/artifacts/utdqns0q_Cyabra-Logo.svg"
        alt="Cyabra"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  
  "Tuki.io": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://customer-assets.emergentagent.com/job_versatil-engine/artifacts/npw1vk7c_tuki_correnet.svg"
        alt="Tuki.io"
        className="w-full h-full object-contain"
      />
    </div>
  ),

  "VERSSAI": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://customer-assets.emergentagent.com/job_versatil-engine/artifacts/aav9nua8_VERSSAI_Logo_HORColor.png"
        alt="VERSSAI"
        className="w-full h-full object-contain"
      />
    </div>
  ),

  "SolarWine.ai": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <defs>
          <radialGradient id="solarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <circle cx="12" cy="20" r="8" fill="url(#solarGradient)" />
        <path d="M12 14 L14 18 L18 18 L15 21 L16 25 L12 23 L8 25 L9 21 L6 18 L10 18 Z" fill="white" />
        <text
          x="24"
          y="18"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          SolarWine
        </text>
        <text
          x="24"
          y="28"
          className="fill-current text-xs opacity-75"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          .ai
        </text>
      </svg>
    </div>
  ),

  "Sweetwood": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 110 40" className="w-full h-full">
        <defs>
          <linearGradient id="sweetwoodBrown" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#92400E", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#D97706", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M8 28 Q12 8 16 28" stroke="url(#sweetwoodBrown)" strokeWidth="4" fill="none" />
        <circle cx="12" cy="12" r="3" fill="url(#sweetwoodBrown)" />
        <text
          x="22"
          y="24"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Sweetwood
        </text>
      </svg>
    </div>
  ),

  "IATI": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 70 40" className="w-full h-full">
        <defs>
          <linearGradient id="iatiRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#DC2626", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#EF4444", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="6" y="8" width="4" height="24" fill="url(#iatiRed)" />
        <rect x="12" y="12" width="4" height="20" fill="url(#iatiRed)" />
        <rect x="18" y="8" width="4" height="24" fill="url(#iatiRed)" />
        <rect x="24" y="8" width="4" height="24" fill="url(#iatiRed)" />
        <text
          x="32"
          y="24"
          className="fill-current text-sm font-bold"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          IATI
        </text>
      </svg>
    </div>
  )
};

// Default fallback for companies without custom logos
const DefaultBrandLogo = ({ company, className }) => (
  <div className={`${className} flex items-center justify-center border rounded-lg px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200`}>
    <span className="text-sm font-medium text-center text-gray-700">
      {company}
    </span>
  </div>
);

// Main component with enhanced styling
export const TrustedBrandLogo = ({ company, className = "h-12 w-28" }) => {
  const LogoComponent = BrandLogos[company];
  
  return LogoComponent ? (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <LogoComponent className={className} />
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <DefaultBrandLogo company={company} className={className} />
    </motion.div>
  );
};

export default TrustedBrandLogo;