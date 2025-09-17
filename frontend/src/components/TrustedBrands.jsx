import React from "react";
import { motion } from "framer-motion";

// Brand logo components
const BrandLogos = {
  "NVIDIA Inception": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <text
          x="50"
          y="15"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-current text-sm font-bold"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          NVIDIA
        </text>
        <text
          x="50"
          y="25"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-current text-xs"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          INCEPTION
        </text>
      </svg>
    </div>
  ),
  
  "Google for Startups": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 120 30" className="w-full h-full">
        <circle cx="8" cy="15" r="6" className="fill-blue-500" />
        <circle cx="8" cy="15" r="4" className="fill-red-500" />
        <circle cx="8" cy="15" r="2" className="fill-yellow-500" />
        <text
          x="18"
          y="12"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Google
        </text>
        <text
          x="18"
          y="22"
          className="fill-current text-xs"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          for Startups
        </text>
      </svg>
    </div>
  ),
  
  "Anthropic": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <path
          d="M10 5 L20 25 L15 25 L12.5 20 L7.5 20 L5 25 L0 25 L10 5 Z M8.5 16 L11.5 16 L10 12 Z"
          className="fill-current"
        />
        <text
          x="25"
          y="18"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Anthropic
        </text>
      </svg>
    </div>
  ),
  
  "Cyabra": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 80 30" className="w-full h-full">
        <circle cx="8" cy="15" r="6" className="fill-blue-600" />
        <text
          x="18"
          y="18"
          className="fill-current text-sm font-bold"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Cyabra
        </text>
      </svg>
    </div>
  ),
  
  "SolarWine.ai": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <circle cx="8" cy="15" r="6" className="fill-yellow-500" />
        <text
          x="18"
          y="18"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          SolarWine.ai
        </text>
      </svg>
    </div>
  )
};

// Default fallback for companies without custom logos
const DefaultBrandLogo = ({ company, className }) => (
  <div className={`${className} flex items-center justify-center border rounded-lg px-3 py-2`}>
    <span className="text-sm font-medium text-center">
      {company}
    </span>
  </div>
);

// Main component
export const TrustedBrandLogo = ({ company, className = "h-12 w-24" }) => {
  const LogoComponent = BrandLogos[company];
  
  return LogoComponent ? (
    <LogoComponent className={className} />
  ) : (
    <DefaultBrandLogo company={company} className={className} />
  );
};

export default TrustedBrandLogo;