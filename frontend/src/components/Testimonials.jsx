import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";

const Testimonials = () => {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = versatilData.testimonials;

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating DNA Strands */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-32 ${
              theme === 'dark' ? 'bg-gradient-to-b from-purple-500/20 to-transparent' : 'bg-gradient-to-b from-purple-300/30 to-transparent'
            } rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-50, 50, -50],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
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
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className={`w-6 h-6 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} />
            </motion.div>
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              CLIENT SUCCESS STORIES
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              AI Leaders
            </span>{" "}
            Say
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            See how VERSATIL's Company DNA technology has transformed content marketing for innovative AI companies.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className={`relative p-12 rounded-3xl border-2 backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gray-900/60 border-purple-500/30'
                  : 'bg-white/80 border-purple-200'
              } shadow-2xl`}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Quote Icon */}
              <motion.div
                className={`absolute -top-6 -left-6 w-12 h-12 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-br from-purple-600 to-pink-600'
                } shadow-lg flex items-center justify-center`}
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Star Rating */}
              <motion.div
                className="flex justify-center space-x-1 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  >
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Quote */}
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed text-center mb-10">
                <motion.span
                  className={`${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.span>
              </blockquote>

              {/* Author Info */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-bold mb-1">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                }`}>
                  {testimonials[currentTestimonial].title}
                </p>
              </motion.div>

              {/* DNA Pattern Decoration */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <motion.path
                    d="M10,10 Q30,5 50,10 Q45,30 50,50 Q30,45 10,50 Q15,30 10,10"
                    fill="none"
                    stroke={theme === 'dark' ? '#9333EA' : '#7C3AED'}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-300 hover:border-purple-500'
            } backdrop-blur-sm transition-all duration-300 flex items-center justify-center group`}
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className={`w-6 h-6 ${
              theme === 'dark' ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'
            }`} />
          </motion.button>

          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:border-purple-500'
                : 'bg-white border-gray-300 hover:border-purple-500'
            } backdrop-blur-sm transition-all duration-300 flex items-center justify-center group`}
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className={`w-6 h-6 ${
              theme === 'dark' ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'
            }`} />
          </motion.button>
        </div>

        {/* Testimonial Indicators */}
        <motion.div
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-purple-500 scale-125'
                  : theme === 'dark' 
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentTestimonial ? {
                boxShadow: [
                  "0 0 0 0 rgba(147, 51, 234, 0.7)",
                  "0 0 0 10px rgba(147, 51, 234, 0)",
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* Additional Testimonial Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border-gray-700/30 hover:border-purple-500/30'
                  : 'bg-white/50 border-gray-200 hover:border-purple-300'
              } backdrop-blur-sm transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: theme === 'dark' 
                  ? "0 20px 40px rgba(147, 51, 234, 0.2)" 
                  : "0 20px 40px rgba(147, 51, 234, 0.1)"
              }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className={`text-sm leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{testimonial.quote.substring(0, 120)}..."
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-br from-purple-400 to-pink-400'
                } flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                  }`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;