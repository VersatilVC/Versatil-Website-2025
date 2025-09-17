import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ChevronLeft, ChevronRight, Target, TrendingUp, Shield, Zap } from "lucide-react";
import { TrustedBrandLogo } from "./TrustedBrands";

const EnhancedCaseStudies = () => {
  const { theme } = useTheme();
  const [activeCase, setActiveCase] = useState(0);

  // Enhanced case studies with detailed workflow and KPIs
  const caseStudies = [
    {
      company: "Cyabra",
      title: "IPO-Ready Communication Engine",
      industry: "Cybersecurity & Social Intelligence",
      challenge: "Rapid content creation for IPO roadshow while maintaining regulatory compliance",
      
      // Work Process Blueprint
      workflow: {
        phase1: { title: "Company DNA Extraction", duration: "2 days", tasks: ["Brand voice analysis", "Competitive landscape", "Regulatory requirements"] },
        phase2: { title: "Content Architecture", duration: "3 days", tasks: ["Message hierarchy", "Audience segmentation", "Compliance framework"] },
        phase3: { title: "Production Pipeline", duration: "ongoing", tasks: ["Automated generation", "Review workflows", "Multi-format output"] },
        phase4: { title: "Quality Assurance", duration: "real-time", tasks: ["Compliance checking", "Brand consistency", "Stakeholder approval"] }
      },

      // Spider Chart Data (0-100 scale)
      okrs: {
        "Content Velocity": { before: 15, after: 95, target: 85 },
        "Brand Consistency": { before: 67, after: 96, target: 90 },
        "Compliance Accuracy": { before: 78, after: 98, target: 95 },
        "Stakeholder Approval": { before: 45, after: 94, target: 85 },
        "Market Readiness": { before: 32, after: 89, target: 80 },
        "Cost Efficiency": { before: 40, after: 87, target: 75 }
      },

      // Detailed KPIs
      kpis: [
        { metric: "Content Cycle Time", before: "3 weeks", after: "3 days", improvement: "-86%" },
        { metric: "Regulatory Compliance", before: "78%", after: "98.7%", improvement: "+26%" },
        { metric: "Executive Approval Rate", before: "45%", after: "94%", improvement: "+109%" },
        { metric: "Content Output Volume", before: "12/month", after: "67/month", improvement: "+458%" }
      ],

      // Business Impact
      impact: {
        financial: "$2.3M saved in external agency costs",
        operational: "85% reduction in content production time",
        strategic: "IPO roadshow completed 6 weeks ahead of schedule"
      }
    },

    {
      company: "VERSSAI",
      title: "VC Fund Operations Automation",
      industry: "Venture Capital & Investment",
      challenge: "Scale LP reporting and investment analysis without increasing headcount",
      
      workflow: {
        phase1: { title: "Investment Data Integration", duration: "1 week", tasks: ["Portfolio analysis", "Performance metrics", "Market intelligence"] },
        phase2: { title: "LP Communication Framework", duration: "4 days", tasks: ["Report templates", "Narrative generation", "Visual automation"] },
        phase3: { title: "Deal Flow Optimization", duration: "ongoing", tasks: ["Due diligence automation", "Investment memos", "Decision support"] },
        phase4: { title: "Performance Monitoring", duration: "real-time", tasks: ["Portfolio tracking", "Risk assessment", "Strategic insights"] }
      },

      okrs: {
        "Report Generation Speed": { before: 25, after: 92, target: 85 },
        "Data Accuracy": { before: 85, after: 99, target: 95 },
        "LP Satisfaction": { before: 72, after: 94, target: 90 },
        "Deal Flow Efficiency": { before: 35, after: 88, target: 80 },
        "Investment Insights": { before: 45, after: 91, target: 85 },
        "Operational Cost": { before: 20, after: 85, target: 75 }
      },

      kpis: [
        { metric: "LP Report Turnaround", before: "21 days", after: "5 days", improvement: "-76%" },
        { metric: "Data Processing Accuracy", before: "85%", after: "99.3%", improvement: "+17%" },
        { metric: "Investment Analysis Speed", before: "2 weeks", after: "2 days", improvement: "-86%" },
        { metric: "Fund Operations Cost", before: "$180k/year", after: "$45k/year", improvement: "-75%" }
      ],

      impact: {
        financial: "$1.8M annual operational savings",
        operational: "76% faster LP reporting cycles",
        strategic: "300% increase in deal analysis capacity"
      }
    },

    {
      company: "SolarWine.ai",
      title: "Market Intelligence Acceleration",
      industry: "AI & Market Research",
      challenge: "Rapid market analysis and competitive intelligence for strategic decisions",
      
      workflow: {
        phase1: { title: "Market Data Aggregation", duration: "3 days", tasks: ["Industry analysis", "Competitor mapping", "Trend identification"] },
        phase2: { title: "Intelligence Processing", duration: "2 days", tasks: ["TAM calculation", "Strategic insights", "Risk assessment"] },
        phase3: { title: "Report Generation", duration: "1 day", tasks: ["Executive summaries", "Strategic recommendations", "Action plans"] },
        phase4: { title: "Decision Support", duration: "ongoing", tasks: ["Real-time updates", "Strategy optimization", "Performance tracking"] }
      },

      okrs: {
        "Research Speed": { before: 20, after: 94, target: 85 },
        "Market Coverage": { before: 45, after: 89, target: 80 },
        "Insight Accuracy": { before: 75, after: 96, target: 90 },
        "Strategic Impact": { before: 40, after: 92, target: 85 },
        "Cost Efficiency": { before: 30, after: 88, target: 75 },
        "Competitive Advantage": { before: 35, after: 90, target: 80 }
      },

      kpis: [
        { metric: "Market Research Cycles", before: "28 days", after: "4 days", improvement: "-86%" },
        { metric: "TAM Analysis Accuracy", before: "75%", after: "96%", improvement: "+28%" },
        { metric: "Competitive Intelligence", before: "Monthly", after: "Real-time", improvement: "Continuous" },
        { metric: "Strategic Decision Speed", before: "6 weeks", after: "1 week", improvement: "-83%" }
      ],

      impact: {
        financial: "$2.3B TAM opportunity identified",
        operational: "86% faster market analysis",
        strategic: "Real-time competitive intelligence system"
      }
    }
  ];

  // Spider Chart Component
  const SpiderChart = ({ data, size = 200 }) => {
    const center = size / 2;
    const radius = (size / 2) - 40;
    const angles = Object.keys(data).map((_, i) => (i * 2 * Math.PI) / Object.keys(data).length - Math.PI / 2);
    
    // Generate points for before/after/target
    const getPoints = (values) => 
      angles.map((angle, i) => {
        const value = values[i] / 100; // Normalize to 0-1
        const x = center + radius * value * Math.cos(angle);
        const y = center + radius * value * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');

    const beforeValues = Object.values(data).map(item => item.before);
    const afterValues = Object.values(data).map(item => item.after);
    const targetValues = Object.values(data).map(item => item.target);

    return (
      <div className="relative">
        <svg width={size} height={size} className="overflow-visible">
          {/* Grid circles */}
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius * scale}
              fill="none"
              stroke={theme === 'dark' ? '#6B7280' : '#D1D5DB'}
              strokeWidth="1"
              opacity={theme === 'dark' ? '0.6' : '0.3'}
            />
          ))}
          
          {/* Grid lines */}
          {angles.map((angle, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke={theme === 'dark' ? '#6B7280' : '#D1D5DB'}
              strokeWidth="1"
              opacity={theme === 'dark' ? '0.6' : '0.3'}
            />
          ))}

          {/* Target area (dotted) */}
          <polygon
            points={getPoints(targetValues)}
            fill="rgba(168, 85, 247, 0.1)"
            stroke="#A855F7"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Before area (red) */}
          <polygon
            points={getPoints(beforeValues)}
            fill="rgba(239, 68, 68, 0.1)"
            stroke="#EF4444"
            strokeWidth="2"
          />

          {/* After area (green) */}
          <polygon
            points={getPoints(afterValues)}
            fill="rgba(34, 197, 94, 0.2)"
            stroke="#22C55E"
            strokeWidth="3"
          />

          {/* Data points */}
          {afterValues.map((value, i) => {
            const angle = angles[i];
            const normalizedValue = value / 100;
            const x = center + radius * normalizedValue * Math.cos(angle);
            const y = center + radius * normalizedValue * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#22C55E"
                stroke="#fff"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Labels */}
        <div className="absolute inset-0">
          {Object.keys(data).map((key, i) => {
            const angle = angles[i];
            const labelRadius = radius + 25;
            const x = center + labelRadius * Math.cos(angle);
            const y = center + labelRadius * Math.sin(angle);
            
            return (
              <div
                key={key}
                className={`absolute text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-700'
                }`}
                style={{
                  left: x - 30,
                  top: y - 8,
                  width: 60,
                  textAlign: 'center'
                }}
              >
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="cases" className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='1'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cpath d='M25 0v50M0 25h50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center space-x-2 px-4 py-2 border-2 mb-8 ${
              theme === 'dark'
                ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                : 'border-purple-600 bg-purple-100 text-purple-800'
            }`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
          >
            <Target className="w-5 h-5" />
            <span className="font-mono text-sm font-bold tracking-wider">
              BATTLE-TESTED RESULTS
            </span>
          </motion.div>

          <h2 className={`text-4xl md:text-6xl font-black mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
            CUSTOMER
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SUCCESS STORIES
            </span>
          </h2>
        </motion.div>

        {/* Case Study Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            {caseStudies.map((study, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-6 py-2 md:py-3 border-2 transition-all duration-300 ${
                  activeCase === index
                    ? theme === 'dark'
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-purple-600 bg-purple-100 text-purple-800'
                    : theme === 'dark'
                      ? 'border-gray-700 text-gray-400 hover:border-purple-500/50'
                      : 'border-gray-300 text-gray-600 hover:border-purple-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}
              >
                <TrustedBrandLogo company={study.company} className="h-4 w-12 md:h-6 md:w-16" />
                <span className="font-bold text-xs md:text-sm">{study.company}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex space-x-2">
            <motion.button
              onClick={() => setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
              className={`p-3 border-2 ${
                theme === 'dark'
                  ? 'border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-300'
                  : 'border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => setActiveCase((prev) => (prev + 1) % caseStudies.length)}
              className={`p-3 border-2 ${
                theme === 'dark'
                  ? 'border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-300'
                  : 'border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Active Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            className={`p-4 md:p-6 lg:p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
          >
            
            {/* Full Width Header Card */}
            <div className={`p-6 mb-6 border-2 ${
              theme === 'dark' ? 'border-purple-500/30 bg-purple-500/5' : 'border-purple-200 bg-purple-50'
            }`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <TrustedBrandLogo 
                  company={caseStudies[activeCase].company} 
                  className="h-16 w-32 md:h-20 md:w-40" 
                />
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {caseStudies[activeCase].title}
                  </h3>
                  <p className={`text-base font-bold mb-4 ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                  }`}>
                    {caseStudies[activeCase].industry}
                  </p>
                  <p className={`text-base md:text-lg ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  } font-medium leading-relaxed max-w-4xl`}>
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              
              {/* Left Column - Cards 1 & 2 */}
              <div className="space-y-6">
                
                {/* Card 1: Workflow Blueprint */}
                <div className={`p-6 border-2 ${
                  theme === 'dark' ? 'border-blue-500/30 bg-blue-500/5' : 'border-blue-200 bg-blue-50'
                }`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                      theme === 'dark' ? 'border-blue-400 bg-blue-400/20' : 'border-blue-600 bg-blue-100'
                    }`}>
                      <span className={`text-sm font-black ${
                        theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
                      }`}>1</span>
                    </div>
                    <h4 className={`text-base md:text-lg font-black ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      WORKFLOW BLUEPRINT
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(caseStudies[activeCase].workflow).map(([phase, details], index) => (
                      <div
                        key={phase}
                        className={`p-4 border-2 transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' ? 'border-gray-600 bg-gray-800/50 hover:border-blue-500/50' : 'border-gray-300 bg-white hover:border-blue-300'
                        }`}
                        style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}
                      >
                        <div className={`text-xs md:text-sm font-bold mb-2 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {details.title}
                        </div>
                        <div className={`text-xs mb-3 px-2 py-1 rounded ${
                          theme === 'dark' ? 'text-gray-300 bg-gray-700' : 'text-gray-600 bg-gray-100'
                        }`}>
                          Duration: {details.duration}
                        </div>
                        <ul className="text-xs space-y-2">
                          {details.tasks.map((task, i) => (
                            <li key={i} className={`flex items-start space-x-2 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                              }`}></span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: KPIs */}
                <div className={`p-6 border-2 ${
                  theme === 'dark' ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50'
                }`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                      theme === 'dark' ? 'border-green-400 bg-green-400/20' : 'border-green-600 bg-green-100'
                    }`}>
                      <span className={`text-sm font-black ${
                        theme === 'dark' ? 'text-green-300' : 'text-green-600'
                      }`}>2</span>
                    </div>
                    <h4 className={`text-base md:text-lg font-black ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      KEY PERFORMANCE INDICATORS
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {caseStudies[activeCase].kpis.map((kpi, index) => (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 border-2 transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' ? 'border-gray-600 bg-gray-800/50 hover:border-green-500/50' : 'border-gray-300 bg-white hover:border-green-300'
                        }`}
                        style={{ clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)' }}
                      >
                        <div className={`text-sm font-bold mb-2 md:mb-0 flex-1 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                          {kpi.metric}
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className={`text-sm px-3 py-1 rounded ${
                            theme === 'dark' ? 'text-gray-200 bg-gray-700' : 'text-gray-600 bg-gray-100'
                          }`}>
                            {kpi.before} → {kpi.after}
                          </div>
                          <div className={`text-sm font-bold px-3 py-1 rounded ${
                            theme === 'dark' ? 'text-green-300 bg-green-500/20' : 'text-green-700 bg-green-100'
                          }`}>
                            {kpi.improvement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Cards 3 & 4 */}
              <div className="space-y-6">
                
                {/* Card 3: Business Impact */}
                <div className={`p-6 border-2 ${
                  theme === 'dark' ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'
                }`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                      theme === 'dark' ? 'border-orange-400 bg-orange-400/20' : 'border-orange-600 bg-orange-100'
                    }`}>
                      <span className={`text-sm font-black ${
                        theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
                      }`}>3</span>
                    </div>
                    <h4 className={`text-base md:text-lg font-black ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      BUSINESS IMPACT
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(caseStudies[activeCase].impact).map(([type, value], index) => (
                      <div
                        key={type}
                        className={`p-4 border-l-4 transition-all duration-300 hover:scale-105 ${
                          type === 'financial' 
                            ? theme === 'dark' ? 'border-green-400 bg-green-500/10' : 'border-green-500 bg-green-50'
                            : type === 'operational'
                            ? theme === 'dark' ? 'border-blue-400 bg-blue-500/10' : 'border-blue-500 bg-blue-50'
                            : theme === 'dark' ? 'border-purple-400 bg-purple-500/10' : 'border-purple-500 bg-purple-50'
                        }`}
                        style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 100%, 5px 100%)' }}
                      >
                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center space-x-2 ${
                          type === 'financial' 
                            ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                            : type === 'operational'
                            ? theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                            : theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            type === 'financial' 
                              ? theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                              : type === 'operational'
                              ? theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                              : theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                          }`}></span>
                          <span>{type}</span>
                        </div>
                        <div className={`text-sm font-semibold leading-relaxed ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 4: Performance Radar */}
                <div className={`p-6 border-2 ${
                  theme === 'dark' ? 'border-purple-500/30 bg-purple-500/5' : 'border-purple-200 bg-purple-50'
                }`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                  
                  <div className="flex items-center space-x-3 mb-8">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                      theme === 'dark' ? 'border-purple-400 bg-purple-400/20' : 'border-purple-600 bg-purple-100'
                    }`}>
                      <span className={`text-sm font-black ${
                        theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                      }`}>4</span>
                    </div>
                    <h4 className={`text-base md:text-lg font-black ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      OKRs & PERFORMANCE RADAR
                    </h4>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-full flex justify-center mb-6">
                      <div className="w-80 h-80 flex items-center justify-center">
                        <SpiderChart data={caseStudies[activeCase].okrs} size={280} />
                      </div>
                    </div>
                    
                    {/* Enhanced Legend */}
                    <div className={`w-full p-4 border-2 ${
                      theme === 'dark' ? 'border-gray-600 bg-gray-800/30' : 'border-gray-300 bg-white'
                    }`} style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}>
                      <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-2 bg-red-500 rounded"></div>
                          <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            Before
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-2 bg-green-500 rounded"></div>
                          <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            After
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-2 bg-purple-500 rounded border-2 border-dashed border-purple-400"></div>
                          <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            Target
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Stats Summary */}
                    <div className="mt-6 w-full">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className={`p-3 rounded ${
                          theme === 'dark' ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                        }`}>
                          <div className="text-lg font-black">
                            {Math.round(Object.values(caseStudies[activeCase].okrs).reduce((avg, item) => avg + item.after, 0) / Object.keys(caseStudies[activeCase].okrs).length)}%
                          </div>
                          <div className="text-xs font-bold">AVG AFTER</div>
                        </div>
                        <div className={`p-3 rounded ${
                          theme === 'dark' ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}>
                          <div className="text-lg font-black">
                            +{Math.round(Object.values(caseStudies[activeCase].okrs).reduce((avg, item) => avg + (item.after - item.before), 0) / Object.keys(caseStudies[activeCase].okrs).length)}%
                          </div>
                          <div className="text-xs font-bold">AVG IMPROVEMENT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedCaseStudies;