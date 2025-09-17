import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Shield, Lock, Eye, FileText, Users, Globe, AlertTriangle, CheckCircle } from "lucide-react";

const PrivacySecurityPage = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("privacy");

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "AES-256 Encryption",
      description: "Military-grade encryption at rest and in transit",
      color: "purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOC 2 Type II Compliant",
      description: "Regular security audits and penetration testing",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Required for all users with role-based access",
      color: "green"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with global privacy regulations",
      color: "indigo"
    }
  ];

  const dataTypes = [
    {
      category: "ACCOUNT INFORMATION",
      items: ["Name, email address, company details", "Contact information and job title", "Billing and payment information", "Communication preferences"]
    },
    {
      category: "CONTENT DATA", 
      items: ["Brand guidelines and marketing materials", "Content briefs and creation requests", "Feedback and approval decisions", "Performance and usage analytics"]
    },
    {
      category: "TECHNICAL INFORMATION",
      items: ["IP address and location data", "Browser type and version", "Device and operating system information", "Log files and usage patterns"]
    }
  ];

  const yourRights = [
    { right: "Data Access", description: "Request a copy of your personal data" },
    { right: "Data Correction", description: "Update or correct inaccurate information" },
    { right: "Data Deletion", description: "Request deletion of your personal data" },
    { right: "Data Portability", description: "Export your data in a standard format" },
    { right: "Processing Restrictions", description: "Limit how we process your data" }
  ];

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='1'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cpath d='M25 0v50M0 25h50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center space-x-2 px-4 py-2 border-2 mb-8 ${
              theme === 'dark'
                ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                : 'border-purple-600 bg-purple-100 text-purple-800'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
          >
            <Shield className="w-5 h-5" />
            <span className="font-mono text-sm font-bold tracking-wider">
              ENTERPRISE SECURITY
            </span>
          </motion.div>

          <h1 className={`text-4xl md:text-6xl font-black mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
            PRIVACY &
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SECURITY
            </span>
          </h1>
          
          <p className={`text-xl font-bold ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Your privacy matters. Here's how we protect it.
          </p>
          
          <p className={`text-sm mt-4 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Last updated: September 17, 2025
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 border-2 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
              } transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' 
                  ? `bg-${feature.color}-500/20` 
                  : `bg-${feature.color}-100`
              }`}>
                <div className={`text-${feature.color}-500`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className={`text-lg font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className={`flex border-2 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
          }`} style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}>
            {[
              { id: "privacy", label: "PRIVACY POLICY", icon: <Eye className="w-5 h-5" /> },
              { id: "terms", label: "TERMS OF SERVICE", icon: <FileText className="w-5 h-5" /> }
            ].map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-8 py-4 font-black transition-all duration-300 ${
                  activeSection === section.id
                    ? theme === 'dark'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-600 text-white'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {section.icon}
                <span>{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Privacy Policy Section */}
        {activeSection === "privacy" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            
            {/* Information We Collect */}
            <div className={`p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-gray-800/30 border-gray-700' 
                : 'bg-white border-gray-200'
            }`} style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              
              <h2 className={`text-3xl font-black mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                INFORMATION WE COLLECT
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className={`p-6 border ${
                    theme === 'dark' ? 'border-gray-600 bg-gray-700/30' : 'border-gray-300 bg-gray-50'
                  }`} style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}>
                    <h3 className={`text-lg font-black mb-4 ${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {type.category}
                    </h3>
                    <ul className="space-y-2">
                      {type.items.map((item, i) => (
                        <li key={i} className={`text-sm flex items-start space-x-2 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                            theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div className={`p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-gray-800/30 border-gray-700' 
                : 'bg-white border-gray-200'
            }`} style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              
              <h2 className={`text-3xl font-black mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                YOUR PRIVACY RIGHTS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yourRights.map((right, index) => (
                  <div key={index} className={`p-4 border-l-4 border-green-500 ${
                    theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className={`text-lg font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                          {right.right}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Protection Promise */}
            <div className={`p-8 border-2 text-center ${
              theme === 'dark' 
                ? 'bg-purple-900/20 border-purple-500' 
                : 'bg-purple-100 border-purple-600'
            }`} style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}>
              
              <div className={`inline-flex items-center space-x-4 p-6 ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-800'
              }`}>
                <Shield className="w-12 h-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-black mb-2">
                    WE DO NOT SELL YOUR DATA
                  </h3>
                  <p className="text-lg font-semibold">
                    VERSATIL never sells, rents, or trades your personal or business data to third parties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Terms of Service Section */}
        {activeSection === "terms" && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            
            {/* Service Agreement */}
            <div className={`p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-gray-800/30 border-gray-700' 
                : 'bg-white border-gray-200'
            }`} style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              
              <h2 className={`text-3xl font-black mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                SERVICE AGREEMENT
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-black mb-4 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    VERSATIL PROVIDES
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Company DNA Creation: Custom AI training on your brand",
                      "Content Generation: Automated marketing materials",  
                      "Workflow Integration: Connect with existing tools",
                      "Performance Analytics: Content effectiveness insights"
                    ].map((service, i) => (
                      <li key={i} className={`text-sm flex items-start space-x-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className={`text-xl font-black mb-4 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    ACCOUNT REQUIREMENTS
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Must be 18+ years old and authorized to bind organization",
                      "Maintain secure access credentials",
                      "Provide truthful and current account information",
                      "Use service in accordance with applicable laws"
                    ].map((req, i) => (
                      <li key={i} className={`text-sm flex items-start space-x-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                        }`} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SLA Promise */}
            <div className={`p-8 border-2 text-center ${
              theme === 'dark' 
                ? 'bg-blue-900/20 border-blue-500' 
                : 'bg-blue-100 border-blue-600'
            }`} style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                  <div className="text-4xl font-black mb-2">99.9%</div>
                  <div className="text-sm font-bold">MONTHLY UPTIME</div>
                </div>
                <div className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                  <div className="text-4xl font-black mb-2">24/7</div>
                  <div className="text-sm font-bold">SYSTEM MONITORING</div>
                </div>
                <div className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                  <div className="text-4xl font-black mb-2">4HR</div>
                  <div className="text-sm font-bold">CRITICAL ISSUE RESPONSE</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className={`inline-flex items-center space-x-6 p-8 border-2 ${
            theme === 'dark' 
              ? 'bg-gray-800/30 border-gray-700' 
              : 'bg-white border-gray-200'
          }`} style={{ clipPath: 'polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)' }}>
            
            <div className="text-center">
              <h3 className={`text-lg font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                PRIVACY QUESTIONS
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                privacy@versatil.vc
              </p>
            </div>
            
            <div className="text-center">
              <h3 className={`text-lg font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                GENERAL SUPPORT
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                support@versatil.vc
              </p>
            </div>
            
            <div className="text-center">
              <h3 className={`text-lg font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                LEGAL INQUIRIES
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                legal@versatil.vc
              </p>
            </div>
          </div>
          
          <p className={`text-sm mt-6 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            We respond to privacy requests within 30 days.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacySecurityPage;