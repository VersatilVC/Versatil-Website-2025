import React from "react";
import { motion } from "framer-motion";

// Enhanced brand logo components with more professional styling
const BrandLogos = {
  "NVIDIA Inception": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 140 40" className="w-full h-full">
        <defs>
          <linearGradient id="nvidiaGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#76B900", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#4A7C0B", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="2" y="8" width="20" height="24" rx="2" fill="url(#nvidiaGreen)" />
        <text
          x="28"
          y="16"
          className="fill-current text-sm font-bold"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          NVIDIA
        </text>
        <text
          x="28"
          y="28"
          className="fill-current text-xs opacity-80"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          INCEPTION
        </text>
      </svg>
    </div>
  ),
  
  "Google for Startups": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 150 40" className="w-full h-full">
        <defs>
          <linearGradient id="googleBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#4285F4", stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: "#EA4335", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#FBBC04", stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: "#34A853", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#4285F4", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="12" cy="20" r="8" fill="url(#googleBlue)" />
        <circle cx="12" cy="20" r="5" fill="white" />
        <circle cx="12" cy="20" r="2" fill="url(#googleBlue)" />
        <text
          x="25"
          y="16"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Google
        </text>
        <text
          x="25"
          y="26"
          className="fill-current text-xs opacity-75"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          for Startups
        </text>
      </svg>
    </div>
  ),
  
  "Cyabra": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <defs>
          <linearGradient id="cyabraBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#1E3A8A", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M8 10 C 8 10, 16 6, 16 20 C 16 34, 8 30, 8 30"
          stroke="url(#cyabraBlue)"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="8" cy="20" r="3" fill="url(#cyabraBlue)" />
        <text
          x="22"
          y="24"
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

  "VERSSAI": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <defs>
          <linearGradient id="verssaiPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <polygon points="8,12 12,8 16,12 16,28 8,28" fill="url(#verssaiPurple)" />
        <text
          x="22"
          y="24"
          className="fill-current text-sm font-bold"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          VERSSAI
        </text>
      </svg>
    </div>
  ),

  "Tuki.io": ({ className }) => (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 80 40" className="w-full h-full">
        <defs>
          <linearGradient id="tukiTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0891B2", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="6" y="10" width="6" height="20" rx="3" fill="url(#tukiTeal)" />
        <circle cx="18" cy="20" r="6" fill="url(#tukiTeal)" />
        <text
          x="28"
          y="18"
          className="fill-current text-sm font-medium"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Tuki
        </text>
        <text
          x="28"
          y="28"
          className="fill-current text-xs opacity-75"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          .io
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