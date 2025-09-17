import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { DNAIcon, RAGIcon, GraphIcon, AnalyticsIcon } from "./BrandedIcons";

const VersatilBrainArchitecture = () => {
  const { theme } = useTheme();
  const [hoveredAgent, setHoveredAgent] = useState(null);

  // Agent definitions with pixel-perfect styling
  const agents = [
    {
      id: "research",
      name: "Research Agent",
      icon: <AnalyticsIcon className="w-6 h-6" />,
      color: "blue",
      position: { x: "15%", y: "25%" },
      description: "Market intelligence, competitor analysis, trend identification"
    },
    {
      id: "brand", 
      name: "Brand Agent",
      icon: <DNAIcon className="w-6 h-6" />,
      color: "purple", 
      position: { x: "85%", y: "25%" },
      description: "Voice consistency, brand guidelines enforcement, tone optimization"
    },
    {
      id: "content",
      name: "Content Agent", 
      icon: <RAGIcon className="w-6 h-6" />,
      color: "green",
      position: { x: "15%", y: "75%" },
      description: "Content generation, format optimization, audience targeting"
    },
    {
      id: "compliance",
      name: "Compliance Agent",
      icon: <AnalyticsIcon className="w-6 h-6" />,
      color: "orange",
      position: { x: "85%", y: "75%" },
      description: "Regulatory compliance, fact-checking, accuracy validation"
    }
  ];

  // Core brain components
  const brainCore = {
    brandDNA: { x: "30%", y: "40%", label: "Brand DNA" },
    contextEngine: { x: "50%", y: "30%", label: "Context Engine" },
    knowledgeGraph: { x: "70%", y: "40%", label: "Knowledge Graph" }
  };

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            VERSATIL Brain Architecture
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A visual representation of the VERSATIL Brain Architecture, showing the Company DNA Core 
            and Pixel Agents Orchestration working together.
          </p>
        </motion.div>

        {/* Architecture Diagram Container */}
        <motion.div
          className={`relative w-full max-w-5xl mx-auto aspect-video rounded-3xl border-2 ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
              : 'bg-white/80 border-gray-200 backdrop-blur-sm'
          } shadow-2xl overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Central Brain Core */}
          <motion.div
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-2xl border-2 ${
              theme === 'dark' 
                ? 'bg-purple-900/30 border-purple-500/50' 
                : 'bg-purple-100/80 border-purple-300'
            } flex flex-col items-center justify-center`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className={`text-lg font-bold mb-2 ${
              theme === 'dark' ? 'text-purple-200' : 'text-purple-800'
            }`}>
              Company DNA Core
            </h3>
            <div className="flex space-x-4">
              <DNAIcon className="w-6 h-6 text-purple-500" />
              <RAGIcon className="w-6 h-6 text-purple-500" />
              <GraphIcon className="w-6 h-6 text-purple-500" />
            </div>
          </motion.div>

          {/* Brain Core Components */}
          {Object.entries(brainCore).map(([key, component], index) => (
            <motion.div
              key={key}
              className={`absolute w-20 h-12 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-700/80 border-gray-600 text-gray-200' 
                  : 'bg-gray-100/80 border-gray-300 text-gray-700'
              } flex items-center justify-center text-xs font-medium`}
              style={{ left: component.x, top: component.y }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            >
              {component.label}
            </motion.div>
          ))}

          {/* Pixel Agents */}
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              className={`absolute w-24 h-24 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                hoveredAgent === agent.id
                  ? `bg-${agent.color}-500/20 border-${agent.color}-400 shadow-lg`
                  : theme === 'dark' 
                    ? `bg-${agent.color}-900/20 border-${agent.color}-500/30 hover:border-${agent.color}-400`
                    : `bg-${agent.color}-100/60 border-${agent.color}-300 hover:border-${agent.color}-400`
              } flex flex-col items-center justify-center group`}
              style={{ left: agent.position.x, top: agent.position.y }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1 + index * 0.15, duration: 0.6, type: "spring" }}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className={`p-2 rounded-lg mb-1 text-${agent.color}-500`}>
                {agent.icon}
              </div>
              <span className={`text-xs font-semibold text-center ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {agent.name.split(' ')[0]}
              </span>

              {/* Agent description tooltip */}
              <AnimatePresence>
                {hoveredAgent === agent.id && (
                  <motion.div
                    className={`absolute bottom-full mb-2 p-3 rounded-lg shadow-lg z-20 w-48 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border border-gray-700 text-gray-200' 
                        : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sm font-semibold mb-1">{agent.name}</div>
                    <div className="text-xs">{agent.description}</div>
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Connection lines between agents and core */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <motion.path
                id="connectionPath"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
              />
            </defs>
            
            {/* Animated connection lines */}
            {agents.map((agent, index) => (
              <motion.line
                key={`line-${agent.id}`}
                x1={agent.position.x}
                y1={agent.position.y}
                x2="50%"
                y2="50%"
                stroke={theme === 'dark' ? '#8B5CF6' : '#7C3AED'}
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
              />
            ))}
          </svg>

          {/* Floating data particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                theme === 'dark' ? 'bg-purple-400/40' : 'bg-purple-500/40'
              }`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Architecture Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={`p-6 rounded-2xl ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'
          } backdrop-blur-sm border ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
          }`}>
            <DNAIcon className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Company DNA Context
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A living brain that learns your voice, industry, and competitive landscape.
            </p>
          </div>

          <div className={`p-6 rounded-2xl ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'
          } backdrop-blur-sm border ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
          }`}>
            <AnalyticsIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Pixel Agents
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Work like your best creative team with specialized research, brand, content, and compliance agents.
            </p>
          </div>

          <div className={`p-6 rounded-2xl ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'
          } backdrop-blur-sm border ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
          }`}>
            <GraphIcon className="w-12 h-12 text-green-500 mb-4" />
            <h3 className={`text-xl font-bold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Human Checkpoints
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Keep you in control with enterprise quality and startup velocity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VersatilBrainArchitecture;