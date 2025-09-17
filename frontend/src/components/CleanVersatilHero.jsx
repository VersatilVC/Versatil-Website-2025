import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, Sparkles } from "lucide-react";

const CleanVersatilHero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10 text-center">
        {/* Tagline */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className={`w-6 h-6 ${
            theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
          }`} />
          <span className={`text-sm font-medium tracking-widest uppercase ${
            theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
          }`}>
            DISCOVER. AMPLIFY. CONVERT.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className={`${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Built for marketers,{" "}
          </span>
          <br />
          <motion.span 
            className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}
          >
            approved by CEOs
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-semibold mb-6"
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
            Human augmentation.
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          className={`text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Transform your company DNA into compelling marketing content. From ideas to briefs to published content - all automatically aligned with your brand essence.
        </motion.p>

        {/* Simple Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: "0.3 days", label: "Content Cycle", color: "purple" },
            { value: "3x", label: "Content Output", color: "blue" },
            { value: "94%", label: "Brand Consistency", color: "green" },
            { value: "99.2%", label: "Accuracy", color: "orange" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-3xl font-bold mb-2 text-${metric.color}-500`}>
                {metric.value}
              </div>
              <div className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            } shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center space-x-2">
              <span>See Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>

          <motion.button
            className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                : 'border-purple-600 text-purple-600 hover:bg-purple-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Strategy Call
          </motion.button>
        </motion.div>

        {/* Customer Logos - Simple */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p className={`text-sm mb-6 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
            {["Cyabra", "SolarWine.ai", "NVIDIA Inception", "Google for Startups", "Anthropic"].map((company, index) => (
              <motion.span
                key={index}
                className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                } hover:text-purple-500 transition-colors cursor-pointer`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanVersatilHero;