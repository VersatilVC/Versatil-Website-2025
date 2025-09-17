import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import { Menu, X, Sun, Moon } from "lucide-react";
import { DNAIcon, RAGIcon, GraphIcon, BrandedSparkles } from "./BrandedIcons";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = versatilData.navigation;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `${theme === 'dark' 
              ? 'bg-gray-950/95 border-gray-800/50' 
              : 'bg-white/95 border-gray-200/50'
            } backdrop-blur-xl border-b shadow-lg`
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src={theme === 'dark' 
                  ? 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/krl4sg5i_horizontal_gradient%2Bwhite.png'
                  : 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/1u82lu4a_horizontal_gradient%2Bblack.png'
                }
                alt="VERSATIL"
                className="h-8 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className={`absolute inset-0 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' 
                      : 'bg-gradient-to-r from-purple-100 to-pink-100'
                  } opacity-0`}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Technology Stack Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {[
              { icon: RAGIcon, label: "RAG", color: "blue" },
              { icon: GraphIcon, label: "Graph", color: "green" },
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className={`w-10 h-10 rounded-xl border ${
                    theme === 'dark' 
                      ? `border-${tech.color}-500/30 bg-${tech.color}-500/10 hover:bg-${tech.color}-500/20` 
                      : `border-${tech.color}-200 bg-${tech.color}-50 hover:bg-${tech.color}-100`
                  } flex items-center justify-center transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    y: [0, -2, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  title={tech.label}
                >
                  <IconComponent className={`w-5 h-5 text-${tech.color}-500`} color="currentColor" />
                </motion.div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`w-12 h-12 rounded-xl border-2 ${
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              } flex items-center justify-center transition-all duration-300`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button (Desktop) */}
            <motion.button
              className={`hidden lg:flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span>Try VERSATIL</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className={`lg:hidden w-12 h-12 rounded-xl border-2 ${
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-800'
                  : 'border-gray-300 bg-white'
              } flex items-center justify-center`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 ${
                theme === 'dark' 
                  ? 'bg-gray-950/95 border-gray-800/50' 
                  : 'bg-white/95 border-gray-200/50'
              } backdrop-blur-xl border-b shadow-lg`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 space-y-6">
                {/* Mobile Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`block text-lg font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    } hover:text-purple-500 transition-colors duration-300`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  } shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Try VERSATIL</span>
                </motion.button>

                {/* Technology Badges */}
                <motion.div
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: DNAIcon, label: "DNA AI", color: "purple" },
                    { icon: RAGIcon, label: "RAG", color: "blue" },
                    { icon: GraphIcon, label: "Graph", color: "green" },
                  ].map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                          theme === 'dark' 
                            ? `border-${tech.color}-500/30 bg-${tech.color}-500/10` 
                            : `border-${tech.color}-200 bg-${tech.color}-50`
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                      >
                        <IconComponent className={`w-4 h-4 text-${tech.color}-500`} color="currentColor" />
                        <span className={`text-sm font-medium text-${tech.color}-500`}>
                          {tech.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;