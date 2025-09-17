import React from "react";

// Custom branded icons to replace Lucide icons

export const DNAIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" 
      stroke={color} 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M8 8l8 8M16 8l-8 8" 
      stroke={color} 
      strokeWidth="2"
    />
    <circle cx="8" cy="8" r="1.5" fill={color} />
    <circle cx="16" cy="8" r="1.5" fill={color} />
    <circle cx="8" cy="16" r="1.5" fill={color} />
    <circle cx="16" cy="16" r="1.5" fill={color} />
  </svg>
);

export const RAGIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M7 8h10M7 12h8" stroke={color} strokeWidth="2"/>
    <circle cx="19" cy="19" r="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M17.5 17.5L21 21" stroke={color} strokeWidth="2"/>
  </svg>
);

export const GraphIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="16" cy="8" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M11 8h2M13.5 11l-3 3M11 11l2-2" stroke={color} strokeWidth="2"/>
  </svg>
);

export const ContentIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={color} strokeWidth="2" fill="none"/>
    <polyline points="14,2 14,8 20,8" stroke={color} strokeWidth="2"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke={color} strokeWidth="2"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke={color} strokeWidth="2"/>
    <polyline points="10,9 9,9 8,9" stroke={color} strokeWidth="2"/>
  </svg>
);

export const IdeaIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21h6M12 3c4.97 0 9 4.03 9 9 0 2.5-1.02 4.77-2.67 6.41-.83.82-1.33 1.96-1.33 3.09V21" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M3 12c0-4.97 4.03-9 9-9" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 7v5l3 3" stroke={color} strokeWidth="2"/>
  </svg>
);

export const WorkflowIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="15" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="9" y="15" width="6" height="6" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9 6h6M18 9v6M15 18H9" stroke={color} strokeWidth="2"/>
    <polyline points="14,17 12,15 10,17" stroke={color} strokeWidth="2"/>
  </svg>
);

export const AnalyticsIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke={color} strokeWidth="2"/>
    <path d="M7 12l4-4 4 4 4-4" stroke={color} strokeWidth="2"/>
    <circle cx="7" cy="12" r="1" fill={color}/>
    <circle cx="11" cy="8" r="1" fill={color}/>
    <circle cx="15" cy="12" r="1" fill={color}/>
    <circle cx="19" cy="8" r="1" fill={color}/>
  </svg>
);

export const VersatilLogo = ({ className = "h-8 w-auto", theme = "dark" }) => (
  <img
    src={theme === 'dark' 
      ? 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/krl4sg5i_horizontal_gradient%2Bwhite.png'
      : 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/1u82lu4a_horizontal_gradient%2Bblack.png'
    }
    alt="VERSATIL"
    className={className}
    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
  />
);

export const BrandedSparkles = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" fill={color}/>
    <path d="M20 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill={color}/>
    <path d="M4 20l0.5 1.5L6 22l-1.5 0.5L4 24l-0.5-1.5L2 22l1.5-0.5L4 20z" fill={color}/>
  </svg>
);

// Export all as named exports for easier selective importing
export default {
  DNAIcon,
  RAGIcon,
  GraphIcon,
  ContentIcon,
  IdeaIcon,
  WorkflowIcon,
  AnalyticsIcon,
  VersatilLogo,
  BrandedSparkles
};