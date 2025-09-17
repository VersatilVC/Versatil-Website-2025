import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import {
  Edit3,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  BarChart3
} from "lucide-react";
import { DNAIcon, RAGIcon, GraphIcon, BrandedSparkles, WorkflowIcon, AnalyticsIcon, ContentIcon } from "./BrandedIcons";

const VersatilHero = () => {
  const { theme } = useTheme();
  const [currentShowcase, setCurrentShowcase] = useState(0);
  const [dnaParticles, setDnaParticles] = useState([]);

  // Generate DNA particles animation
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setDnaParticles(particles);
  }, []);

  // Rotate technology showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowcase((prev) => 
        (prev + 1) % versatilData.technologyShowcase.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const technologyIcons = {
    "Neural Analysis": DNAIcon,
    "Retrieval AI": RAGIcon,
    "Relationship Modeling": GraphIcon,
    "Brand-Aligned AI": Edit3,
    "Optimization Engine": TrendingUp,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated DNA Background */}
      <div className="absolute inset-0">
        {/* DNA Helix Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full"
            style={{ 
              background: `${theme === 'dark' 
                ? 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 70%)'
              }` 
            }}
          >
            {/* DNA Double Helix */}
            <motion.path
              d="M50,0 Q100,50 50,100 Q0,150 50,200 Q100,250 50,300 Q0,350 50,400"
              stroke={theme === 'dark' ? '#9333EA' : '#7C3AED'}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
              d="M150,0 Q100,50 150,100 Q200,150 150,200 Q100,250 150,300 Q200,350 150,400"
              stroke={theme === 'dark' ? '#EC4899' : '#DB2777'}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        </motion.div>

        {/* Floating DNA Particles */}
        {dnaParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-${particle.size} h-${particle.size} rounded-full ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <BrandedSparkles className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`} color="currentColor" />
              </motion.div>
              <span className={`text-sm font-medium tracking-widest uppercase ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {versatilData.hero.subtitle}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'
                  : 'text-gray-900'
              }`}>
                Company DNA-powered{" "}
              </span>
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
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                content that converts
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className={`text-xl leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {versatilData.hero.description}
            </motion.p>

            {/* Technology Stack Indicators */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { 
                  icon: "https://customer-assets.emergentagent.com/job_scene-capture/artifacts/goqdgm6n_Screenshot%202025-09-15%20at%2013.50.53.png", 
                  label: "DNA AI", 
                  color: "purple" 
                },
                { 
                  icon: "https://customer-assets.emergentagent.com/job_scene-capture/artifacts/ab9b24du_Screenshot%202025-09-15%20at%2013.51.05.png", 
                  label: "RAG", 
                  color: "blue" 
                },
                { 
                  icon: "https://customer-assets.emergentagent.com/job_scene-capture/artifacts/ybtsz8ur_Screenshot%202025-09-15%20at%2013.51.30.png", 
                  label: "Graph", 
                  color: "green" 
                },
              ].map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
                      theme === 'dark' 
                        ? `border-${tech.color}-500/30 bg-${tech.color}-500/10` 
                        : `border-${tech.color}-200 bg-${tech.color}-50`
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    animate={{ 
                      boxShadow: [
                        `0 0 0 0 rgba(147, 51, 234, 0)`,
                        `0 0 20px 0 rgba(147, 51, 234, 0.3)`,
                        `0 0 0 0 rgba(147, 51, 234, 0)`
                      ] 
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.7 }
                    }}
                  >
                    <div className={`w-6 h-6 rounded bg-${tech.color}-500/20 flex items-center justify-center`}>
                      <div className={`w-3 h-3 rounded bg-${tech.color}-500`} />
                    </div>
                    <span className={`text-sm font-medium text-${tech.color}-500`}>
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://app.versatil.vc/auth"
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
                  <span>{versatilData.hero.primaryCTA}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>

              <motion.button
                className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {versatilData.hero.secondaryCTA}
              </motion.button>
            </motion.div>

            {/* Performance Metrics Preview */}
            <motion.div
              className={`grid grid-cols-3 gap-6 p-6 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 border-gray-700/50' 
                  : 'bg-gray-50/80 border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { label: "Brand Consistency", value: "98%", icon: ShieldCheck, color: "purple" },
                { label: "Content Velocity", value: "247/week", icon: WorkflowIcon, color: "blue" },
                { label: "Engagement Lift", value: "+340%", icon: TrendingUp, color: "green" },
              ].map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2 bg-${metric.color}-500/20`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <IconComponent className={`w-6 h-6 text-${metric.color}-500`} />
                    </motion.div>
                    <div className={`text-2xl font-bold text-${metric.color}-500 mb-1`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Technology Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Technology Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentShowcase}
                  className={`relative p-8 rounded-3xl border-2 backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-gray-900/60 border-purple-500/30'
                      : 'bg-white/80 border-purple-200'
                  } shadow-2xl`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Technology Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg`}
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {React.createElement(
                      technologyIcons[versatilData.technologyShowcase[currentShowcase].tech],
                      { className: "w-8 h-8 text-white" }
                    )}
                  </motion.div>

                  {/* Technology Info */}
                  <h3 className="text-2xl font-bold mb-2">
                    {versatilData.technologyShowcase[currentShowcase].title}
                  </h3>
                  <p className={`text-lg mb-6 ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                  }`}>
                    {versatilData.technologyShowcase[currentShowcase].tech}
                  </p>

                  {/* Technology Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.img
                      src={versatilData.technologyShowcase[currentShowcase].image}
                      alt={versatilData.technologyShowcase[currentShowcase].title}
                      className="w-full h-64 object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      theme === 'dark'
                        ? 'from-purple-900/60 to-transparent'
                        : 'from-purple-500/20 to-transparent'
                    }`} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Technology Cards */}
              {versatilData.technologyShowcase.slice(0, 3).map((tech, index) => {
                const IconComponent = technologyIcons[tech.tech];
                return (
                  <motion.div
                    key={tech.id}
                    className={`absolute w-20 h-20 rounded-2xl border ${
                      theme === 'dark'
                        ? 'bg-gray-800/80 border-gray-700/50'
                        : 'bg-white/80 border-gray-200'
                    } backdrop-blur-lg shadow-xl flex items-center justify-center`}
                    style={{
                      top: `${20 + index * 25}%`,
                      right: `${-10 + index * 5}%`,
                      zIndex: -index,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    <IconComponent className={`w-8 h-8 text-purple-500`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Technology Progress Indicators */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {versatilData.technologyShowcase.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentShowcase
                      ? 'bg-purple-500 scale-125'
                      : theme === 'dark' 
                        ? 'bg-gray-600 hover:bg-gray-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentShowcase(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VersatilHero;