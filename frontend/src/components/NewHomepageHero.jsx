import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, ChevronDown, ChevronUp, Target, Users, Shield } from "lucide-react";
import { BrandedSparkles, DNAIcon, WorkflowIcon, AnalyticsIcon } from "./BrandedIcons";
import { TrustedBrandLogo } from "./TrustedBrands";

const NewHomepageHero = () => {
  const { theme } = useTheme();
  const [selectedPath, setSelectedPath] = useState(null);

  // Updated customer companies (without Anthropic, matching new content)
  const customerCompanies = [
    "Cyabra", "VERSSAI", "SolarWine.ai", "Tuki.io", 
    "NVIDIA Inception", "Google for Startups", "Sweetwood"
  ];

  // KPI metrics from new content
  const kpiMetrics = [
    { label: "Content Cycles", value: "5.2 days → 0.3 days", improvement: "94% faster" },
    { label: "Content Output", value: "200%+ increase", improvement: "2x volume" },
    { label: "Brand Consistency", value: "67% → 94%", improvement: "40% better" },
    { label: "Publishing Accuracy", value: "99.2%", improvement: "Enterprise grade" }
  ];

  // User path options updated with new content
  const userPaths = [
    {
      id: "executives",
      icon: <AnalyticsIcon className="w-8 h-8 text-purple-500" />,
      title: "For Executives",
      subtitle: "Strategic impact + ROI analysis",
      focus: "ROI, competitive advantage, strategic impact",
      cta: "Executive Strategy Call"
    },
    {
      id: "marketing",
      icon: <DNAIcon className="w-8 h-8 text-blue-500" />,
      title: "For Marketing Teams", 
      subtitle: "Live demo + workflow integration",
      focus: "Workflow efficiency, quality control, daily operations",
      cta: "See Live Demo"
    },
    {
      id: "technical",
      icon: <WorkflowIcon className="w-8 h-8 text-green-500" />,
      title: "For Technical Leaders",
      subtitle: "Architecture review + security deep-dive",
      focus: "Architecture, security, integration capabilities", 
      cta: "Technical Demo"
    }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20' 
            : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
        }`} />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-300/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand tagline with sparkles */}
          <motion.div 
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <BrandedSparkles className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} color="currentColor" />
            <span className={`text-sm font-medium tracking-wider uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              AI Content Marketing Engine
            </span>
            <BrandedSparkles className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} color="currentColor" />
          </motion.div>

          {/* Main headline from new content */}
          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Built for marketers,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              approved by CEOs
            </span>
            {' '}and CMOs
          </motion.h1>

          {/* Problem statement from new content */}
          <motion.p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            You need enterprise-grade content at startup speed. Generic AI gives you generic results. 
            Your team burns out trying to do both fast <strong>AND</strong> good.
            <br />
            <span className="text-purple-600 font-semibold mt-4 block">
              What if you didn't have to choose?
            </span>
          </motion.p>

          {/* CTA buttons with our existing links */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="https://cal.com/nissimmenashe/versatil"
              target="_blank"
              rel="noopener noreferrer"
              className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <span>Book a Demo</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>

            <motion.a
              href="https://app.versatil.vc/auth"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 inline-flex items-center ${
                theme === 'dark'
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <BrandedSparkles className="w-5 h-5" color="currentColor" />
                <span>Try VERSATIL</span>
              </span>
            </motion.a>
          </motion.div>

          {/* KPI Metrics showcase */}
          <motion.div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border backdrop-blur-sm ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/80 border-gray-200'
            } shadow-xl mb-16`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {kpiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {metric.value}
                </div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {metric.label}
                </div>
                <div className="text-xs text-green-500 mt-1">
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted by section with our branded logos */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className={`text-sm mb-6 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-75">
              {customerCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  className={`transition-all duration-300 ${
                    theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <TrustedBrandLogo 
                    company={company} 
                    className={`h-8 w-20 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Choose your path section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Choose your path:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {userPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  className={`p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                    selectedPath === path.id
                      ? theme === 'dark' 
                        ? 'bg-gray-800/80 border-purple-500 shadow-2xl shadow-purple-500/20' 
                        : 'bg-white border-purple-300 shadow-2xl shadow-purple-500/20'
                      : theme === 'dark' 
                        ? 'bg-gray-800/30 border-gray-700/30 hover:border-purple-500/50' 
                        : 'bg-white/50 border-gray-200 hover:border-purple-300/50'
                  } hover:shadow-xl transform hover:scale-105`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4">{path.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {path.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {path.subtitle}
                  </p>
                  <motion.a
                    href="https://cal.com/nissimmenashe/versatil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    } shadow-lg hover:shadow-xl text-sm`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Book Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHomepageHero;