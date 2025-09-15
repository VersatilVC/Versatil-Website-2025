import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";

const TrustedBy = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className={`text-sm font-medium tracking-widest uppercase mb-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TRUSTED BY AI LEADERS
          </motion.p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powering the{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              AI Revolution
            </span>
          </h2>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Leading AI companies trust VERSATIL to maintain brand consistency while scaling their content at unprecedented speed.
          </p>
        </motion.div>

        {/* Company Logos Carousel */}
        <div className="relative overflow-hidden">
          {/* Top Row - Moving Right */}
          <motion.div
            className="flex space-x-12 mb-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...versatilData.trustedCompanies, ...versatilData.trustedCompanies].map((company, index) => (
              <motion.div
                key={`top-${index}`}
                className={`flex-shrink-0 w-32 h-16 rounded-2xl border ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-700/30 hover:border-purple-500/30' 
                    : 'bg-white/80 border-gray-200 hover:border-purple-300'
                } backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group`}
                whileHover={{ 
                  y: -5,
                  boxShadow: theme === 'dark' 
                    ? "0 20px 40px rgba(147, 51, 234, 0.3)" 
                    : "0 20px 40px rgba(147, 51, 234, 0.15)"
                }}
              >
                <div className="relative">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-8 object-cover rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Row - Moving Left */}
          <motion.div
            className="flex space-x-12"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...versatilData.trustedCompanies.slice().reverse(), ...versatilData.trustedCompanies.slice().reverse()].map((company, index) => (
              <motion.div
                key={`bottom-${index}`}
                className={`flex-shrink-0 w-32 h-16 rounded-2xl border ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-700/30 hover:border-purple-500/30' 
                    : 'bg-white/80 border-gray-200 hover:border-purple-300'
                } backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group`}
                whileHover={{ 
                  y: -5,
                  boxShadow: theme === 'dark' 
                    ? "0 20px 40px rgba(147, 51, 234, 0.3)" 
                    : "0 20px 40px rgba(147, 51, 234, 0.15)"
                }}
              >
                <div className="relative">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-8 object-cover rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r ${
            theme === 'dark' ? 'from-gray-950 to-transparent' : 'from-white to-transparent'
          } z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l ${
            theme === 'dark' ? 'from-gray-950 to-transparent' : 'from-white to-transparent'
          } z-10 pointer-events-none`} />
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              stat: "50+",
              label: "AI Companies",
              description: "Trust VERSATIL for brand consistency",
              color: "purple"
            },
            {
              stat: "10M+",
              label: "Content Pieces",
              description: "Generated with perfect DNA alignment",
              color: "blue"
            },
            {
              stat: "98%",
              label: "Brand Consistency",
              description: "Maintained across all content types",
              color: "green"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`text-center p-8 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border-gray-700/30'
                  : 'bg-white/50 border-gray-200'
              } backdrop-blur-sm hover:border-purple-300/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: theme === 'dark' 
                  ? "0 20px 40px rgba(147, 51, 234, 0.2)" 
                  : "0 20px 40px rgba(147, 51, 234, 0.1)"
              }}
            >
              <motion.div
                className={`text-5xl font-bold mb-3 text-${item.color}-500`}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {item.stat}
              </motion.div>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {item.label}
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;