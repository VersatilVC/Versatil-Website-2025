import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import {
  Brain,
  FileText,
  Edit3,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Target,
  BarChart3,
  Code,
  Lightbulb,
  Cpu
} from "lucide-react";

const VersatilDNAProcess = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [processActive, setProcessActive] = useState(false);

  const processIcons = {
    brain: Brain,
    document: FileText, 
    edit: Edit3,
  };

  // Animate through process steps
  useEffect(() => {
    const interval = setInterval(() => {
      if (processActive) {
        setActiveStep((prev) => {
          const next = (prev + 1) % versatilData.dnaProcess.stages.length;
          if (next === 0) {
            setProcessActive(false);
            setTimeout(() => setProcessActive(true), 2000);
          }
          return next;
        });
      }
    }, 4000);

    // Start the process
    setTimeout(() => setProcessActive(true), 1000);

    return () => clearInterval(interval);
  }, [processActive]);

  const getDNAElementColor = (index) => {
    const colors = ['purple', 'blue', 'green', 'orange'];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background DNA Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className={`w-6 h-6 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} />
            </motion.div>
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              IDEAS → BRIEFS → CONTENT
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {versatilData.dnaProcess.title}
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {versatilData.dnaProcess.description}
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -mt-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
            
            {/* Animated Data Flow */}
            <motion.div
              className="absolute top-0 w-6 h-1 bg-white rounded-full shadow-lg"
              animate={{ 
                x: processActive ? ["0%", "100%"] : "0%",
                opacity: processActive ? [1, 0.5, 1] : 1
              }}
              transition={{ 
                duration: processActive ? 3 : 0,
                repeat: processActive ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {versatilData.dnaProcess.stages.map((stage, index) => {
              const IconComponent = processIcons[stage.icon];
              const isActive = activeStep === index && processActive;
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 ${
                      isActive
                        ? 'border-purple-500 bg-purple-500 shadow-lg shadow-purple-500/50'
                        : theme === 'dark'
                        ? 'border-gray-700 bg-gray-800'
                        : 'border-gray-200 bg-white'
                    } flex items-center justify-center z-10 transition-all duration-500`}
                    animate={isActive ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    } : {}}
                    transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                  >
                    <span className={`font-bold ${
                      isActive ? 'text-white' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stage.number}
                    </span>
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 ${
                      isActive
                        ? `${theme === 'dark' 
                            ? 'bg-purple-900/30 border-purple-500/60' 
                            : 'bg-purple-50 border-purple-300'
                          } shadow-2xl shadow-purple-500/20`
                        : `${theme === 'dark' 
                            ? 'bg-gray-900/50 border-gray-700/30' 
                            : 'bg-white/80 border-gray-200'
                          } hover:border-purple-300/50`
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: theme === 'dark' 
                        ? "0 20px 40px rgba(147, 51, 234, 0.3)" 
                        : "0 20px 40px rgba(147, 51, 234, 0.15)"
                    }}
                  >
                    {/* Stage Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                        isActive
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                          : theme === 'dark'
                          ? 'bg-gradient-to-br from-gray-700 to-gray-600'
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      } shadow-lg`}
                      animate={isActive ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        isActive ? 'text-white' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`} />
                    </motion.div>

                    {/* Stage Title */}
                    <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                    
                    {/* Stage Description */}
                    <p className={`text-lg mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stage.description}
                    </p>

                    {/* DNA Elements */}
                    <div className="space-y-3">
                      <h4 className={`text-sm font-semibold uppercase tracking-wider ${
                        theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                      }`}>
                        DNA Elements
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {stage.dnaElements.map((element, elementIndex) => {
                          const color = getDNAElementColor(elementIndex);
                          return (
                            <motion.div
                              key={elementIndex}
                              className={`flex items-center space-x-2 p-3 rounded-xl ${
                                isActive 
                                  ? `bg-${color}-500/20 border border-${color}-500/30` 
                                  : `${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`
                              } transition-all duration-300`}
                              initial={{ opacity: 0.7, x: -10 }}
                              animate={{ 
                                opacity: isActive ? 1 : 0.7,
                                x: isActive ? 0 : -10,
                                scale: isActive ? [1, 1.02, 1] : 1
                              }}
                              transition={{ 
                                duration: 0.3, 
                                delay: elementIndex * 0.1,
                                scale: { duration: 2, repeat: isActive ? Infinity : 0 }
                              }}
                            >
                              <motion.div
                                className={`w-2 h-2 rounded-full ${
                                  isActive ? `bg-${color}-500` : 'bg-gray-400'
                                }`}
                                animate={isActive ? {
                                  scale: [1, 1.3, 1],
                                  opacity: [0.7, 1, 0.7]
                                } : {}}
                                transition={{ 
                                  duration: 1, 
                                  repeat: Infinity, 
                                  delay: elementIndex * 0.2 
                                }}
                              />
                              <span className={`text-sm font-medium ${
                                isActive ? `text-${color}-500` : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {element}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Processing Indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className={`mt-6 flex items-center space-x-3 p-3 rounded-xl ${
                            theme === 'dark' ? 'bg-purple-900/50' : 'bg-purple-100'
                          }`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="flex space-x-1"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </motion.div>
                          <span className={`text-sm font-medium ${
                            theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                          }`}>
                            Processing DNA patterns...
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Arrow to Next Step */}
                  {index < versatilData.dnaProcess.stages.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-8 -mt-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.2 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-full ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                        } border-2 border-purple-500/30 flex items-center justify-center`}
                        animate={processActive && activeStep === index ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 360]
                        } : {}}
                        transition={{ duration: 1 }}
                      >
                        <ArrowRight className="w-6 h-6 text-purple-500" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Controls */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
              processActive
                ? theme === 'dark'
                  ? 'border-red-500 text-red-400 hover:bg-red-500/10'
                  : 'border-red-600 text-red-600 hover:bg-red-50'
                : theme === 'dark'
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
            }`}
            onClick={() => setProcessActive(!processActive)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {processActive ? 'Pause DNA Process' : 'Start DNA Process'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VersatilDNAProcess;