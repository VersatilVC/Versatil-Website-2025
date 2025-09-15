import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { newVersatilContent } from "../data/new-versatil-content";
import {
  ArrowRight,
  Sparkles,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Shield
} from "lucide-react";

const NewVersatilHero = () => {
  const { theme } = useTheme();
  const [selectedPath, setSelectedPath] = useState(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='20'/%3E%3Ccircle cx='75' cy='75' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className={`w-6 h-6 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <span className={`text-sm font-medium tracking-widest uppercase ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {newVersatilContent.hero.subtitle}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className={`${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Built for marketers,{" "}
              </span>
              <br />
              <motion.span 
                className={`${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'
                }`}
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                approved by CEOs and CMOs
              </motion.span>
            </h1>

            <motion.p
              className="text-2xl md:text-3xl font-semibold mb-8"
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

            <motion.p
              className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {newVersatilContent.hero.description}
            </motion.p>
          </motion.div>

          {/* Impact Metrics Table */}
          <motion.div
            className={`max-w-4xl mx-auto mb-16 p-8 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-gray-900/60 border-purple-500/30' 
                : 'bg-white/80 border-purple-200'
            } backdrop-blur-xl shadow-2xl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className={`text-lg font-bold mb-6 text-center ${
              theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
            }`}>
              📊 {newVersatilContent.impactMetrics.title}
            </h3>
            
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
                  {newVersatilContent.impactMetrics.metrics.map((metric, index) => (
                    <motion.tr
                      key={index}
                      className={`border-b ${
                        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
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

          {/* User Path Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Choose Your Path:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {newVersatilContent.userPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  className={`relative p-8 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
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
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {path.subtitle}
                  </p>
                  <p className={`text-sm mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <strong>Focus</strong>: {path.focus}
                  </p>
                  
                  <motion.button
                    className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    } shadow-lg hover:shadow-xl`}
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
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p className={`text-lg font-medium mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Used by marketing teams from
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-semibold">
              {newVersatilContent.customerCompanies.map((company, index) => (
                <motion.span
                  key={index}
                  className={`${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
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

export default NewVersatilHero;