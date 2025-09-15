import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Repeat, Send, CheckCircle, Clock, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { StaggerContainer, StaggerItem, ScrollReveal } from "./MotionWrapper";

const AnimatedProcess = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Request",
      subtitle: "AI-Powered Intake",
      description: "Buy a Pack or select a Plan that fits your needs. Get onboarded via our Assistant and kick off your request.",
      icon: Send,
      color: "blue",
      metrics: { time: "< 5min", accuracy: "98%" },
    },
    {
      number: "02", 
      title: "Revise",
      subtitle: "Smart Collaboration",
      description: "Collaborate with our expert team through our intelligent platform. Request changes and provide feedback seamlessly.",
      icon: Repeat,
      color: "purple",
      metrics: { iterations: "3-5", satisfaction: "99%" },
    },
    {
      number: "03",
      title: "Receive",
      subtitle: "Premium Delivery",
      description: "Get your premium deliverables in days, not weeks. Ready to launch, scale, and win in the market.",
      icon: CheckCircle,
      color: "green",
      metrics: { delivery: "2-5 days", quality: "A++" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-500/20' : (theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'),
        border: isActive ? 'border-blue-500/50' : (theme === 'dark' ? 'border-gray-700' : 'border-gray-200'),
        text: isActive ? 'text-blue-400' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600'),
        icon: isActive ? 'bg-blue-500' : 'bg-gray-600',
        glow: 'shadow-blue-500/20',
      },
      purple: {
        bg: isActive ? 'bg-purple-500/20' : (theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'),
        border: isActive ? 'border-purple-500/50' : (theme === 'dark' ? 'border-gray-700' : 'border-gray-200'),
        text: isActive ? 'text-purple-400' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600'),
        icon: isActive ? 'bg-purple-500' : 'bg-gray-600',
        glow: 'shadow-purple-500/20',
      },
      green: {
        bg: isActive ? 'bg-green-500/20' : (theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'),
        border: isActive ? 'border-green-500/50' : (theme === 'dark' ? 'border-gray-700' : 'border-gray-200'),
        text: isActive ? 'text-green-400' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600'),
        icon: isActive ? 'bg-green-500' : 'bg-gray-600',
        glow: 'shadow-green-500/20',
      },
    };
    return colors[color];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
              : 'bg-gradient-to-br from-blue-200/30 to-purple-200/30'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ left: '10%', top: '20%' }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                You move fast.{" "}
                <span className={`${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                }`}>
                  So do we.
                </span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Experience the difference. Our system, your success. 3 steps to brand design that converts, wins investors and accelerates growth.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Interactive Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connecting Animation */}
          <motion.svg
            className="hidden md:block absolute top-16 left-0 w-full h-2 pointer-events-none z-0"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 15 1 L 85 1"
              stroke={theme === 'dark' ? '#374151' : '#9CA3AF'}
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            />
          </motion.svg>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;
            const colorClasses = getColorClasses(step.color, isActive);
            
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative group z-10"
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(0)}
              >
                <motion.div
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-500 ${
                    colorClasses.bg
                  } ${colorClasses.border} ${isActive ? `shadow-2xl ${colorClasses.glow}` : ''}`}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    className="absolute -top-4 left-8"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    <div className={`w-8 h-8 rounded-full ${colorClasses.icon} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${colorClasses.icon} shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="mb-6">
                    <motion.p 
                      className={`text-xs font-medium tracking-wider uppercase mb-2 ${colorClasses.text}`}
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.subtitle}
                    </motion.p>
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className={`leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Metrics */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-600/20 pt-4"
                      >
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {Object.entries(step.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <motion.div 
                                className={`font-bold ${colorClasses.text}`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1, type: "spring" }}
                              >
                                {value}
                              </motion.div>
                              <div className={`text-xs capitalize ${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                              }`}>
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                    }}
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Content */}
        <ScrollReveal direction="up" className="text-center mt-20">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}>
                Brilliant Storytelling
              </span>
            </h3>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Outcome-based premium deliverables for ambitious teams.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnimatedProcess;