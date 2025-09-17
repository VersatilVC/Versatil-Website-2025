import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { BrandedSparkles, DNAIcon, WorkflowIcon, AnalyticsIcon } from "./BrandedIcons";

const ComprehensiveHero = () => {
  const { theme } = useTheme();
  const [selectedPath, setSelectedPath] = useState(null);
  const [showMetrics, setShowMetrics] = useState(false);

  const impactMetrics = [
    { metric: "Content Cycle Time", before: "5.2 days", after: "0.3 days" },
    { metric: "Content Output", before: "12/month", after: "36/month" },
    { metric: "Brand Consistency", before: "67%", after: "94%" },
    { metric: "Publishing Accuracy", before: "73%", after: "99.2%" }
  ];

  const userPaths = [
    {
      id: "executives",
      icon: "🎯",
      title: "For Executives",
      subtitle: "CEO • CMO • VP Marketing",
      focus: "ROI, competitive advantage, strategic impact",
      cta: "Executive Strategy Call"
    },
    {
      id: "marketing",
      icon: "⚡",
      title: "For Marketing Teams",
      subtitle: "Content Managers • Marketing Managers • Brand Teams",
      focus: "Workflow efficiency, quality control, daily operations",
      cta: "See Live Demo"
    },
    {
      id: "technical",
      icon: "🔧",
      title: "For Technical Leaders",
      subtitle: "CTO • Head of Growth • Technical Decision Makers",
      focus: "Architecture, security, integration capabilities",
      cta: "Technical Deep Dive"
    }
  ];

  const customerCompanies = [
    "Cyabra", "Hyro", "SolarWine.ai", "Tuki.io", "NVIDIA Inception", 
    "Sweetwood", "VERSSAI", "IATI", "Google for Startups"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Tagline */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrandedSparkles className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} color="currentColor" />
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              DISCOVER. AMPLIFY. CONVERT.
            </span>
          </motion.div>

          {/* Main Headlines */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Built for marketers,{" "}
            </span>
            <br />
            <motion.span 
              className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
              }`}
            >
              approved by CEOs and CMOs
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Enterprise-grade AI. Startup speed.{" "}
            </span>
            <span className={`${
              theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
            } font-bold`}>
              Human augmentation at scale.
            </span>
          </motion.p>

          {/* Expandable Metrics Table */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              } flex items-center space-x-2 mx-auto`}
              onClick={() => setShowMetrics(!showMetrics)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">📊 AVERAGE CUSTOMER IMPACT (90 DAYS)</span>
              {showMetrics ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </motion.button>

            <AnimatePresence>
              {showMetrics && (
                <motion.div
                  className={`mt-6 p-8 rounded-2xl border ${
                    theme === 'dark' 
                      ? 'bg-gray-900/60 border-purple-500/30' 
                      : 'bg-white/80 border-purple-200'
                  } backdrop-blur-xl shadow-2xl max-w-4xl mx-auto`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className={`border-b ${
                          theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                        }`}>
                          <th className={`text-left py-3 px-4 font-semibold ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Metric</th>
                          <th className={`text-center py-3 px-4 font-semibold ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Before</th>
                          <th className={`text-center py-3 px-4 font-semibold ${
                            theme === 'dark' ? 'text-green-400' : 'text-green-600'
                          }`}>After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {impactMetrics.map((metric, index) => (
                          <motion.tr
                            key={index}
                            className={`border-b ${
                              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <td className="py-4 px-4 font-medium">{metric.metric}</td>
                            <td className={`text-center py-4 px-4 ${
                              theme === 'dark' ? 'text-red-400' : 'text-red-500'
                            }`}>{metric.before}</td>
                            <td className={`text-center py-4 px-4 font-bold ${
                              theme === 'dark' ? 'text-green-400' : 'text-green-600'
                            }`}>{metric.after}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* User Path Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Choose Your Path:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {userPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  className={`relative p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                    selectedPath === path.id
                      ? `${theme === 'dark' 
                          ? 'bg-purple-900/30 border-purple-500/60' 
                          : 'bg-purple-50 border-purple-300'
                        } shadow-2xl shadow-purple-500/20`
                      : `${theme === 'dark' 
                          ? 'bg-gray-900/30 border-gray-700/30 hover:border-purple-500/30' 
                          : 'bg-white/50 border-gray-200 hover:border-purple-300'
                        } hover:shadow-xl`
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
                >
                  <div className="text-3xl mb-4">{path.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{path.title}</h3>
                  <p className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {path.subtitle}
                  </p>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <strong>Focus</strong>: {path.focus}
                  </p>
                  
                  <motion.button
                    className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    } shadow-lg hover:shadow-xl text-sm`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>{path.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customer Companies */}
          <motion.div
            className="border-t pt-8"
            style={{ borderColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className={`text-sm font-medium mb-4 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Used by marketing teams from
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
              {customerCompanies.map((company, index) => (
                <motion.span
                  key={index}
                  className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } hover:text-purple-500 transition-colors cursor-pointer`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveHero;