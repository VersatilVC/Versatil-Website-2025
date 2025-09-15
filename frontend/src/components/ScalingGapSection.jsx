import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { newVersatilContent } from "../data/new-versatil-content";
import { AlertTriangle, TrendingUp, Users, Award } from "lucide-react";

const ScalingGapSection = () => {
  const { theme } = useTheme();
  const { scalingGap } = newVersatilContent;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              THE REALITY CHECK
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {scalingGap.title}
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
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-red-300' : 'text-red-600'
          }`}>
            📈 {scalingGap.subtitle}
          </h3>

          <div className="space-y-6">
            {scalingGap.problems.map((problem, index) => (
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
                  <span className={`font-bold ${
                    problem.label === 'Quality Bar' 
                      ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      : theme === 'dark' ? 'text-red-400' : 'text-red-500'
                  }`}>
                    {problem.value}
                  </span>
                </div>
                
                <div className={`w-full bg-gray-200 rounded-full h-3 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    className={`h-3 rounded-full ${
                      problem.label === 'Quality Bar'
                        ? 'bg-gradient-to-r from-green-400 to-green-600'
                        : problem.label === 'Content Demand'
                        ? 'bg-gradient-to-r from-red-400 to-red-600'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    }`}
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
            <p className="text-2xl font-bold mb-2">{scalingGap.result}</p>
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

          <h3 className="text-3xl font-bold mb-4">
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              The VERSATIL Solution
            </span>
          </h3>
          
          <p className="text-2xl font-semibold mb-6">
            {scalingGap.solution}
          </p>
          
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your scaling challenges into competitive advantages with enterprise-grade AI that amplifies your team's strategic capabilities while handling the execution at unprecedented speed and quality.
          </p>

          <motion.button
            className={`mt-8 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            } shadow-lg hover:shadow-xl transform hover:scale-105`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See How It Works
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalingGapSection;