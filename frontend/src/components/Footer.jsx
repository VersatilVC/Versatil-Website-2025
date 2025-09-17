import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { versatilData } from "../data/versatil-mock";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  ChevronUp
} from "lucide-react";
import { DNAIcon, RAGIcon, GraphIcon, BrandedSparkles } from "./BrandedIcons";

// Smart popup descriptions for footer menu items
const menuDescriptions = {
  "Company DNA Analysis": "AI-powered analysis that extracts your company's unique DNA, values, and positioning to create authentic marketing content.",
  "RAG Content Engine": "Retrieval Augmented Generation technology that combines your company data with AI to produce contextually accurate content.",
  "Graph Neural Networks": "Advanced AI that maps relationships between your company elements to ensure consistent brand messaging across all content.",
  "Performance Analytics": "Real-time insights and metrics that track content performance and optimize your marketing ROI continuously.",
  "Brand Consistency AI": "Intelligent system that maintains your brand voice and messaging consistency across all marketing channels and content types.",
  "About VERSATIL": "VERSATIL is a smart content platform that helps marketing and sales teams churn out awesome, on-brand content super fast, and at scale. It does this with a personalized AI brain and specialized agents, plus human in the loop to make sure everything's just right. Let's discuss how it helps you move faster, smarter, and earlier in this new era of Human augmentation. #RAG #Graph #ContextualGTM #AIOrchestration",
  "Success Cases": "Discover how leading companies achieved 3x content velocity and 98% brand consistency with VERSATIL's AI platform.",
  "DNA Technology": "Deep dive into our proprietary Company DNA extraction and content generation technology stack.",
  "Contact": "Get in touch with our team for a personalized demo or to discuss your content marketing challenges.",
  "Careers": "Join our team of AI researchers, engineers, and marketing technologists building the future of content creation."
};

const Footer = () => {
  const { theme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smart Menu Item Component with Popup
  const SmartMenuItem = ({ item, index }) => (
    <motion.li
      key={index}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="relative"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <a
        href={item.href}
        className={`transition-colors duration-300 ${
          theme === 'dark' 
            ? 'text-gray-400 hover:text-purple-300' 
            : 'text-gray-600 hover:text-purple-600'
        } flex items-center space-x-2 group relative`}
      >
        <motion.div
          className={`w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
          } opacity-0 group-hover:opacity-100 transition-opacity`}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span>{item.name}</span>
      </a>
      
      {/* Smart Popup */}
      <AnimatePresence>
        {hoveredItem === item.name && (
          <motion.div
            className={`absolute left-0 bottom-full mb-2 p-3 rounded-lg shadow-lg z-50 max-w-xs ${
              theme === 'dark' 
                ? 'bg-gray-800 border border-gray-700 text-gray-200' 
                : 'bg-white border border-gray-200 text-gray-700'
            }`}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs leading-relaxed">
              {menuDescriptions[item.name]}
            </div>
            {/* Arrow pointer */}
            <div className={`absolute top-full left-4 w-2 h-2 transform rotate-45 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );

  return (
    <footer className={`relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gray-950 border-t border-gray-800' 
        : 'bg-gray-50 border-t border-gray-200'
    }`}>
      {/* DNA Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50 25 61.193 25 75s11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
            
            <motion.p
              className={`mb-8 max-w-md text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {versatilData.company.description}
            </motion.p>

            {/* Technology Stack section removed per user request */}

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/versatilvc/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:info@versatil.vc", label: "Email" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700 hover:border-purple-500 hover:bg-gray-800'
                        : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, delay: index * 0.5 }
                    }}
                    title={social.label}
                  >
                    <IconComponent className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                    }`} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className={`font-bold mb-6 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Technology
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Company DNA Analysis", href: "#technology" },
                { name: "RAG Content Engine", href: "#technology" },
                { name: "Graph Neural Networks", href: "#technology" },
                { name: "Performance Analytics", href: "#technology" },
                { name: "Brand Consistency AI", href: "#technology" },
              ].map((item, index) => (
                <SmartMenuItem key={index} item={item} index={index} />
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className={`font-bold mb-6 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About VERSATIL", href: "#about" },
                { name: "Success Cases", href: "#cases" },
                { name: "DNA Technology", href: "#technology" },
                { name: "Contact", href: "#contact" },
                { name: "Careers", href: "#careers" },
              ].map((item, index) => (
                <SmartMenuItem key={index} item={item} index={index} />
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <motion.div
                className={`flex items-center space-x-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@versatil.vc</span>
              </motion.div>
              <motion.div
                className={`flex items-center space-x-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tel-Aviv, Israel</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className={`border-t mt-12 pt-8 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                © {versatilData.company.name} All rights reserved.
              </p>
              {/* Powered by section removed per user request */}
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-500 hover:text-white' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-500 hover:text-white' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                Terms of Service
              </a>
              
              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className={`p-2 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-900 border-gray-700 hover:border-purple-500 hover:bg-gray-800'
                    : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
              >
                <ChevronUp className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;