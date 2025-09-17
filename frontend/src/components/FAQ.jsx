import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { DNAIcon, RAGIcon, GraphIcon } from "./BrandedIcons";

const FAQ = () => {
  const { theme } = useTheme();
  const [openItems, setOpenItems] = useState([0]); // First item open by default
  
  const faqItems = versatilData.faq;

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getFAQIcon = (index) => {
    const icons = [DNAIcon, RAGIcon, GraphIcon, HelpCircle];
    return icons[index % icons.length];
  };

  const getFAQColor = (index) => {
    const colors = ['purple', 'blue', 'green', 'orange'];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M40 40c8.837 0 16-7.163 16-16S48.837 8 40 8s-16 7.163-16 16 7.163 16 16 16zm0 8c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
              <HelpCircle className={`w-6 h-6 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} />
            </motion.div>
            <span className={`text-sm font-medium tracking-widest uppercase ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions?{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              Answers.
            </span>
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to know about VERSATIL's Company DNA technology and content marketing engine.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            const IconComponent = getFAQIcon(index);
            const color = getFAQColor(index);
            
            return (
              <motion.div
                key={index}
                className={`rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 ${
                  isOpen
                    ? `${theme === 'dark' 
                        ? 'bg-gray-900/60 border-purple-500/60' 
                        : 'bg-white/80 border-purple-300'
                      } shadow-2xl shadow-purple-500/20`
                    : `${theme === 'dark' 
                        ? 'bg-gray-900/30 border-gray-700/30' 
                        : 'bg-white/50 border-gray-200'
                      } hover:border-purple-300/50`
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: theme === 'dark' 
                    ? "0 10px 30px rgba(147, 51, 234, 0.2)" 
                    : "0 10px 30px rgba(147, 51, 234, 0.1)"
                }}
              >
                {/* Question Header */}
                <motion.button
                  className="w-full p-8 text-left flex items-center justify-between"
                  onClick={() => toggleItem(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* FAQ Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${
                        isOpen 
                          ? `bg-${color}-500` 
                          : theme === 'dark' 
                            ? 'bg-gray-800' 
                            : 'bg-gray-100'
                      } flex items-center justify-center transition-all duration-300`}
                      animate={isOpen ? {
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className={`w-6 h-6 ${
                        isOpen 
                          ? 'text-white' 
                          : theme === 'dark' 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                      } transition-colors duration-300`} />
                    </motion.div>

                    {/* Question Text */}
                    <h3 className={`text-lg lg:text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    } pr-4`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    className={`w-8 h-8 rounded-full ${
                      isOpen 
                        ? `bg-${color}-500` 
                        : theme === 'dark' 
                          ? 'bg-gray-700' 
                          : 'bg-gray-200'
                    } flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`} />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-8 pb-8"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {/* DNA Separator */}
                        <motion.div
                          className={`w-full h-px bg-gradient-to-r from-transparent via-${color}-500/50 to-transparent mb-6`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <div className="flex items-start space-x-4">
                          {/* Answer Icon */}
                          <motion.div
                            className={`w-8 h-8 rounded-lg bg-${color}-500/20 flex items-center justify-center flex-shrink-0 mt-1`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-${color}-500`} />
                          </motion.div>

                          {/* Answer Text */}
                          <motion.p
                            className={`text-lg leading-relaxed ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>

                        {/* Technology Tags (for first few FAQs) */}
                        {index < 3 && (
                          <motion.div
                            className="flex flex-wrap gap-2 mt-6 ml-12"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            {[
                              index === 0 ? ['Neural Networks', 'NLP', 'Brand Analysis'] :
                              index === 1 ? ['RAG Technology', 'Vector Search', 'Context AI'] :
                              ['Graph ML', 'Relationship Mapping', 'Performance Optimization']
                            ][0].map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className={`px-3 py-1 text-sm rounded-full border ${
                                  theme === 'dark'
                                    ? `bg-${color}-500/10 border-${color}-500/30 text-${color}-400`
                                    : `bg-${color}-50 border-${color}-200 text-${color}-600`
                                }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + tagIndex * 0.1, type: "spring" }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className={`mt-16 p-8 rounded-2xl border ${
            theme === 'dark'
              ? 'bg-gray-900/60 border-purple-500/30'
              : 'bg-white/80 border-purple-200'
          } text-center backdrop-blur-sm`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Brain className={`w-12 h-12 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-4">
            Still have questions about VERSATIL?
          </h3>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our team of AI specialists is ready to discuss your company's unique DNA and content marketing needs.
          </p>
          
          <motion.button
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            } shadow-lg hover:shadow-xl transform hover:scale-105`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a DNA Analysis Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;