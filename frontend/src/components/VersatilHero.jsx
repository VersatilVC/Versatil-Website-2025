import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import VersatilContentEngine from "./VersatilContentEngine";
import { useTheme } from "../contexts/ThemeContext";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import { Brain, Database, Zap, Target, BarChart3 } from "lucide-react";

const VersatilHero = () => {
  const { theme } = useTheme();
  
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* VERSATIL Brand Gradient Overlays */}
        <motion.div 
          className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent' 
              : 'bg-gradient-to-br from-purple-100/40 via-pink-100/20 to-transparent'
          }`}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Company DNA Visualization Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 3, delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="versatilDNA" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <motion.path 
                  d="M 6 0 L 6 12 M 0 6 L 12 6" 
                  stroke={theme === 'dark' ? '#A855F7' : '#7C3AED'} 
                  strokeWidth="0.2" 
                  opacity="0.4"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle 
                  cx="6" 
                  cy="6" 
                  r="1.2" 
                  fill={theme === 'dark' ? '#EC4899' : '#BE185D'} 
                  opacity="0.3"
                  animate={{ r: [0.8, 1.6, 0.8] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#versatilDNA)" />
          </svg>
        </motion.div>
        
        {/* RAG Data Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`dna-particle-${i}`}
              className={`absolute w-1 h-1 rounded-full ${
                theme === 'dark' ? 'bg-purple-400/40' : 'bg-purple-600/40'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Flowing Gradients */}
        <motion.div 
          className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-radial from-purple-500/8 to-transparent' 
              : 'bg-gradient-radial from-purple-300/15 to-transparent'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-radial from-pink-500/8 to-transparent'
              : 'bg-gradient-radial from-pink-300/15 to-transparent'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>
          <div className="space-y-8">
            <div className="space-y-4">
              <StaggerItem>
                <motion.p 
                  className={`tracking-widest text-sm font-medium ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}
                  whileHover={{ letterSpacing: '0.2em' }}
                  transition={{ duration: 0.3 }}
                >
                  COMPANY DNA-POWERED CONTENT
                </motion.p>
              </StaggerItem>
              
              <StaggerItem>
                <motion.h1 
                  className={`text-5xl lg:text-7xl font-bold leading-tight ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Build your{" "}
                  <motion.span 
                    className={`block ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                    }`}
                    whileHover={{
                      backgroundImage: theme === 'dark' 
                        ? 'linear-gradient(45deg, #C084FC, #F472B6, #A855F7)' 
                        : 'linear-gradient(45deg, #7C3AED, #BE185D, #9333EA)',
                    }}
                  >
                    content engine
                  </motion.span>
                  <span className="block">from startup DNA</span>
                </motion.h1>
              </StaggerItem>
            </div>
            
            <StaggerItem>
              <motion.p 
                className={`text-xl leading-relaxed max-w-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
                whileHover={{ color: theme === 'dark' ? '#F3F4F6' : '#374151' }}
                transition={{ duration: 0.3 }}
              >
                Transform your startup's unique DNA into a{" "}
                <span className={`font-semibold ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  zero-hallucination
                </span>{" "}
                marketing content engine powered by{" "}
                <span className={`font-semibold ${
                  theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  RAG + Graph
                </span>{" "}
                technology. Generate ideas, briefs, and content that's authentically yours.
              </motion.p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 relative overflow-hidden group">
                    <motion.span 
                      className="relative z-10 flex items-center space-x-2"
                      whileHover={{ x: 2 }}
                    >
                      <span>Build Your Engine</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className={`px-8 py-6 text-lg font-semibold rounded-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative group ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-white hover:bg-gray-800 hover:border-purple-500' 
                        : 'border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-purple-500'
                    }`}
                  >
                    <span className="relative z-10">Watch Demo</span>
                    <motion.div
                      className={`absolute inset-0 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20' 
                          : 'bg-gradient-to-r from-purple-50 to-pink-50'
                      } rounded-lg`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </StaggerItem>

            {/* VERSATIL DNA Metrics */}
            <StaggerItem>
              <motion.div 
                className="flex items-center space-x-6 text-sm"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity 
                    }}
                  />
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    Zero Hallucinations
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: 0.3
                    }}
                  />
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    Company DNA RAG
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className={`w-16 h-1 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '98%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </motion.div>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    Brand Consistency
                  </span>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Key Features Pills */}
            <StaggerItem>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Brain, label: "Ideas Generation", color: "purple" },
                  { icon: Database, label: "Content Briefs", color: "pink" },
                  { icon: Zap, label: "Auto Content", color: "purple" },
                  { icon: Target, label: "Brand Alignment", color: "pink" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
                        feature.color === 'purple'
                          ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
                          : 'bg-pink-500/10 text-pink-600 border border-pink-500/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{feature.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Right Content - VERSATIL Content Engine Visualization */}
        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <VersatilContentEngine />
        </motion.div>
      </div>
      
      {/* Enhanced Bottom Fade */}
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 h-32 ${
          theme === 'dark' 
            ? 'bg-gradient-to-t from-black to-transparent' 
            : 'bg-gradient-to-t from-white to-transparent'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
};

export default VersatilHero;