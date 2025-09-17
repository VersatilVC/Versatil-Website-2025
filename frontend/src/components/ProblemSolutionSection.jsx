import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { BrandedSparkles, DNAIcon } from "./BrandedIcons";

const ProblemSolutionSection = () => {
  const { theme } = useTheme();

  const problems = [
    "Generic AI gives you generic results",
    "Teams burn out doing both fast AND good",
    "Enterprise-grade quality vs startup speed",
    "Brand consistency at scale is impossible"
  ];

  const solutions = [
    "Company DNA context learns your voice",
    "Pixel agents work like your best creative team", 
    "Human checkpoints keep you in control",
    "Zero hallucinations, enterprise quality"
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <BrandedSparkles className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} color="currentColor" />
            <span className={`text-sm font-medium tracking-wider uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              The startup scaling reality
            </span>
            <BrandedSparkles className={`w-6 h-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} color="currentColor" />
          </motion.div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Meet VERSATIL: AI that{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              gets your business
            </span>
          </h2>
        </motion.div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`p-8 rounded-2xl border-2 ${
              theme === 'dark' 
                ? 'bg-red-900/10 border-red-500/30' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center mb-6">
                <AlertTriangle className={`w-8 h-8 mr-3 ${
                  theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`} />
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-red-300' : 'text-red-800'
                }`}>
                  The Problem
                </h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-red-400' : 'bg-red-500'
                    }`} />
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {problem}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`p-8 rounded-2xl border-2 ${
              theme === 'dark' 
                ? 'bg-green-900/10 border-green-500/30' 
                : 'bg-green-50 border-green-200'
            }`}>
              <div className="flex items-center mb-6">
                <CheckCircle className={`w-8 h-8 mr-3 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`} />
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-green-300' : 'text-green-800'
                }`}>
                  The VERSATIL Solution
                </h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className={`w-5 h-5 mt-0.5 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-500'
                    }`} />
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={`inline-flex items-center space-x-4 px-8 py-4 rounded-2xl border-2 ${
            theme === 'dark' 
              ? 'bg-purple-900/20 border-purple-500/30' 
              : 'bg-purple-100 border-purple-300'
          }`}>
            <DNAIcon className="w-8 h-8 text-purple-500" />
            <div className={`text-xl font-bold ${
              theme === 'dark' ? 'text-purple-200' : 'text-purple-800'
            }`}>
              Zero hallucinations. Enterprise quality. Startup velocity.
            </div>
          </div>
          
          <motion.a
            href="#technology"
            className={`inline-flex items-center space-x-2 mt-8 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'text-purple-400 hover:text-purple-300 border border-purple-500/30 hover:border-purple-400'
                : 'text-purple-600 hover:text-purple-700 border border-purple-300 hover:border-purple-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See How It Works</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;