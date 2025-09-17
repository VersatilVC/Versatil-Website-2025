import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { AlertTriangle, TrendingUp } from "lucide-react";

const ScalingGapProblem = () => {
  const { theme } = useTheme();

  const scalingProblems = [
    { label: "Content Demand", value: "300%+ YoY", progress: 100, color: "red" },
    { label: "Team Capacity", value: "50% growth", progress: 25, color: "orange" },
    { label: "Quality Bar", value: "No compromise", progress: 95, color: "green" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
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
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AlertTriangle className={`w-6 h-6 ${
              theme === 'dark' ? 'text-red-400' : 'text-red-500'
            }`} />
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-red-400' : 'text-red-500'
            }`}>
              THE STARTUP SCALING GAP
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              The startup scaling gap
            </span>
          </h2>
        </motion.div>

        {/* Problem Visualization */}
        <motion.div
          className={`p-8 rounded-2xl border ${
            theme === 'dark' 
              ? 'bg-gray-900/60 border-red-500/30' 
              : 'bg-white/80 border-red-200'
          } backdrop-blur-xl shadow-2xl mb-12`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={`text-xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-red-300' : 'text-red-600'
          }`}>
            📈 GROWTH STAGE REALITY CHECK
          </h3>

          <div className="space-y-6">
            {scalingProblems.map((problem, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {problem.label}:
                  </span>
                  <span className={`font-bold text-${problem.color}-500`}>
                    {problem.value}
                  </span>
                </div>
                
                <div className={`w-full bg-gray-200 rounded-full h-4 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    className={`h-4 rounded-full bg-gradient-to-r from-${problem.color}-400 to-${problem.color}-600`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${problem.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Result */}
          <motion.div
            className={`mt-8 p-6 rounded-xl border-2 border-dashed text-center ${
              theme === 'dark' 
                ? 'border-red-500/50 bg-red-900/20' 
                : 'border-red-300/50 bg-red-50'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-2xl font-bold mb-2">🔥 BURNOUT + BOTTLENECKS 🔥</p>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-red-300' : 'text-red-600'
            }`}>
              The inevitable result of scaling without the right tools
            </p>
          </motion.div>
        </motion.div>

        {/* Solution */}
        <motion.div
          className={`p-8 rounded-2xl border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30' 
              : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
          } backdrop-blur-xl shadow-2xl text-center`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className={`w-16 h-16 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                : 'bg-gradient-to-br from-purple-600 to-pink-600'
            } flex items-center justify-center shadow-lg`}>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-4">
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              The VERSATIL Solution
            </span>
          </h3>
          
          <p className="text-xl font-semibold mb-6">
            Fill the gap with human-augmented AI
          </p>
          
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <strong>Custom company DNA</strong> learns your voice, industry patterns, and competitive landscape. <strong>Pixel agents orchestrate</strong> like your best creative team with <strong>human augmentation</strong> at every checkpoint. <strong>Context engineering</strong> tuned to your ICP and market positioning. <strong>Zero hallucinations</strong> with source-mapped verification.
          </p>

          <motion.p
            className="text-lg font-semibold mt-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Your team stays in control. AI handles execution. Quality never compromises.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalingGapProblem;