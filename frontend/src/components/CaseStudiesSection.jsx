import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { newVersatilContent } from "../data/new-versatil-content";
import { 
  Building2, 
  TrendingUp, 
  CheckCircle, 
  BarChart3, 
  Target,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CaseStudiesSection = () => {
  const { theme } = useTheme();
  const [activeCase, setActiveCase] = useState(0);
  const { caseStudies } = newVersatilContent;

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const getCompanyIcon = (company) => {
    const icons = {
      'Cyabra': Building2,
      'SolarWine.ai': Target
    };
    return icons[company] || Building2;
  };

  const getCompanyColor = (company) => {
    const colors = {
      'Cyabra': 'blue',
      'SolarWine.ai': 'green'
    };
    return colors[company] || 'blue';
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M40 40c11.046 0 20-8.954 20-20S51.046 0 40 0 20 8.954 20 20s8.954 20 20 20zm0 20c11.046 0 20-8.954 20-20S51.046 40 40 40 20 48.954 20 60s8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Award className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              REAL CUSTOMER IMPACT
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Enterprise{" "}
            </span>
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              Success Stories
            </span>
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            See how industry leaders transformed their content operations with VERSATIL's enterprise-grade AI platform.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {caseStudies.map((study, index) => {
            const IconComponent = getCompanyIcon(study.company);
            const color = getCompanyColor(study.company);
            
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCase === index
                    ? `bg-${color}-500 text-white shadow-lg`
                    : theme === 'dark'
                      ? `border border-gray-600 text-gray-300 hover:border-${color}-500`
                      : `border border-gray-300 text-gray-700 hover:border-${color}-400`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <IconComponent className="w-4 h-4" />
                  <span>{study.company}</span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Main Case Study Display */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              className={`p-8 md:p-12 rounded-3xl border-2 backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gray-900/60 border-purple-500/30'
                  : 'bg-white/80 border-purple-200'
              } shadow-2xl`}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -30 }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const study = caseStudies[activeCase];
                const IconComponent = getCompanyIcon(study.company);
                const color = getCompanyColor(study.company);
                
                return (
                  <>
                    {/* Company Header */}
                    <div className="flex items-center justify-center mb-8">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-${color}-500 flex items-center justify-center shadow-lg mr-4`}
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold">{study.company}</h3>
                        <p className={`text-lg ${
                          theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                        }`}>
                          {study.title}
                        </p>
                      </div>
                    </div>

                    {/* Objectives Grid */}
                    <div className="mb-12">
                      <h4 className={`text-xl font-bold mb-6 text-center ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        🎯 Project Objectives & Results
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {study.objectives.map((obj, index) => (
                          <motion.div
                            key={index}
                            className={`p-6 rounded-xl border ${
                              theme === 'dark'
                                ? `bg-${color}-500/10 border-${color}-500/30`
                                : `bg-${color}-50 border-${color}-200`
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start space-x-3">
                              <CheckCircle className={`w-6 h-6 text-${color}-500 flex-shrink-0 mt-1`} />
                              <div>
                                <p className="font-semibold mb-2">{obj.task}</p>
                                <p className={`text-sm ${
                                  theme === 'dark' ? `text-${color}-300` : `text-${color}-700`
                                }`}>
                                  ✅ {obj.result}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h4 className={`text-xl font-bold mb-6 text-center ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        📊 Performance Impact Metrics
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {study.metrics.map((metric, index) => (
                          <motion.div
                            key={index}
                            className={`p-6 rounded-xl text-center ${
                              theme === 'dark'
                                ? 'bg-gray-800/50'
                                : 'bg-gray-50'
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <TrendingUp className={`w-8 h-8 text-${color}-500 mx-auto mb-3`} />
                            <h5 className="font-semibold mb-2">{metric.metric}</h5>
                            <p className={`text-2xl font-bold text-${color}-500 mb-1`}>
                              {metric.improvement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-300 hover:border-purple-500'
            } backdrop-blur-sm transition-all duration-300 flex items-center justify-center group`}
            onClick={prevCase}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className={`w-6 h-6 ${
              theme === 'dark' ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'
            }`} />
          </motion.button>

          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-300 hover:border-purple-500'
            } backdrop-blur-sm transition-all duration-300 flex items-center justify-center group`}
            onClick={nextCase}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className={`w-6 h-6 ${
              theme === 'dark' ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'
            }`} />
          </motion.button>
        </div>

        {/* Case Study Indicators */}
        <motion.div
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {caseStudies.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCase
                  ? 'bg-purple-500 scale-125'
                  : theme === 'dark' 
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveCase(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={index === activeCase ? {
                boxShadow: [
                  "0 0 0 0 rgba(147, 51, 234, 0.7)",
                  "0 0 0 10px rgba(147, 51, 234, 0)",
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;