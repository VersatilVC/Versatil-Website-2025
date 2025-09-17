import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, Zap, Target, Shield } from "lucide-react";
import { TrustedBrandLogo } from "./TrustedBrands";

const ShoreditchHero = () => {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState("");
  
  // Sniper-style messaging - direct, impactful, no fluff
  const taglines = [
    "GENERIC AI = GENERIC RESULTS",
    "YOUR TEAM BURNS OUT FAST",
    "ENTERPRISE SPEED × STARTUP QUALITY"
  ];

  // Ultra-precise KPI metrics
  const metrics = [
    { number: "0.3", unit: "DAYS", label: "CONTENT CYCLE", change: "-94%" },
    { number: "200", unit: "%", label: "OUTPUT BOOST", change: "+200%" },
    { number: "94", unit: "%", label: "BRAND LOCK", change: "+40%" },
    { number: "99.2", unit: "%", label: "ACCURACY", change: "ENTERPRISE" }
  ];

  // Power user paths - direct language with VERSATIL colors
  const paths = [
    {
      target: "C-SUITE",
      hook: "ROI. COMPETITIVE EDGE. DONE.",
      action: "GET EXECUTIVE BRIEF",
      icon: <Target className="w-6 h-6" />,
      color: "purple"
    },
    {
      target: "MARKETING",
      hook: "WORKFLOW. QUALITY. SCALE.",
      action: "SEE LIVE DEMO",
      icon: <Zap className="w-6 h-6" />,
      color: "pink"
    },
    {
      target: "TECHNICAL",
      hook: "ARCHITECTURE. SECURITY. INTEGRATION.",
      action: "TECHNICAL DEEP DIVE",
      icon: <Shield className="w-6 h-6" />,
      color: "indigo"
    }
  ];

  const trustedCompanies = [
    "Cyabra", "VERSSAI", "SolarWine.ai", "Tuki.io", 
    "NVIDIA Inception", "Google for Startups", "Sweetwood"
  ];

  // Typewriter effect for dynamic messaging
  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const currentTagline = taglines[Math.floor(Math.random() * taglines.length)];
    
    const typeWriter = () => {
      if (!isDeleting) {
        currentText = currentTagline.substring(0, currentIndex + 1);
        currentIndex++;
      } else {
        currentText = currentTagline.substring(0, currentIndex - 1);
        currentIndex--;
      }
      
      setTypedText(currentText);
      
      if (!isDeleting && currentIndex === currentTagline.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setTimeout(typeWriter, 500);
        return;
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 100);
    };
    
    typeWriter();
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-gray-900 to-red-900/20' 
        : 'bg-gradient-to-br from-white via-gray-50 to-orange-50'
    }`}>
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M50 0v100M0 50h100'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Shock & Awe Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Dynamic Warning Badge */}
          <motion.div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-none border-2 mb-8 ${
              theme === 'dark'
                ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                : 'border-purple-600 bg-purple-100 text-purple-800'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            }`} />
            <span className="font-mono text-sm font-bold tracking-wider">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Power Statement */}
          <motion.h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontFamily: 'Arial Black, sans-serif' }}
          >
            VERSATIL
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              KILLS SLOW
            </span>
          </motion.h1>

          {/* Direct Problem Statement */}
          <motion.p
            className={`text-xl md:text-2xl font-bold mb-12 max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Enterprise content at startup speed.
            <br />
            <span className={`${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>
              Zero compromises. Zero hallucinations.
            </span>
          </motion.p>

          {/* Action Buttons - Industrial Style */}
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
              className={`group px-8 py-4 font-black text-lg transition-all duration-200 inline-flex items-center border-2 ${
                theme === 'dark'
                  ? 'bg-purple-600 border-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-600 border-purple-600 hover:bg-purple-700 text-white'
              } transform hover:scale-105 hover:rotate-1`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)' }}
            >
              <span className="flex items-center space-x-2">
                <span>BOOK DEMO NOW</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>

            <motion.a
              href="https://app.versatil.vc/auth"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 font-black text-lg border-2 transition-all duration-200 inline-flex items-center ${
                theme === 'dark'
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              } transform hover:scale-105 hover:-rotate-1`}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
            >
              <span>TRY VERSATIL</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Brutal Metrics Display */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 border-2 ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 border-gray-700' 
                  : 'bg-white border-gray-300'
              } transform hover:scale-105 transition-all`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 1 : -1 }}
              style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}
            >
              <div className={`text-3xl font-black ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {metric.number}
                <span className="text-lg">{metric.unit}</span>
              </div>
              <div className={`text-xs font-bold mt-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {metric.label}
              </div>
              <div className="text-xs text-green-500 font-bold mt-1">
                {metric.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Target Audience Selector - Military Style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-black text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            PICK YOUR WEAPON
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <motion.div
                key={index}
                className={`p-8 border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-700 hover:border-' + path.color + '-500' 
                    : 'bg-white border-gray-300 hover:border-' + path.color + '-500'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, rotate: Math.random() > 0.5 ? 2 : -2 }}
                style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
              >
                <div className={`flex items-center justify-center w-12 h-12 mb-4 border-2 border-${path.color}-500`}>
                  <div className={`text-${path.color}-500`}>
                    {path.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-black mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {path.target}
                </h3>
                <p className={`text-sm mb-4 font-bold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {path.hook}
                </p>
                <motion.a
                  href="https://cal.com/nissimmenashe/versatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full px-4 py-3 font-bold text-sm transition-all duration-300 inline-flex items-center justify-center border-2 border-${path.color}-500 text-${path.color}-500 hover:bg-${path.color}-500 hover:text-white`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{path.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted By - Industrial Grid */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <p className={`text-sm mb-6 font-bold tracking-wider ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            BATTLE-TESTED BY
          </p>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 opacity-75">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                className={`p-2 border ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                } transition-all duration-300 hover:scale-105`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ clipPath: 'polygon(3px 0, 100% 0, calc(100% - 3px) 100%, 0 100%)' }}
              >
                <TrustedBrandLogo 
                  company={company} 
                  className={`h-6 w-16 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoreditchHero;