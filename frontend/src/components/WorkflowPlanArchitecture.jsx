import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, ArrowDown, CheckCircle } from "lucide-react";
import { DNAIcon, RAGIcon, GraphIcon, AnalyticsIcon } from "./BrandedIcons";

const WorkflowPlanArchitecture = () => {
  const { theme } = useTheme();
  const [hoveredStep, setHoveredStep] = useState(null);

  // Workflow steps in sequential order
  const workflowSteps = [
    {
      id: "input",
      step: "Step 1",
      title: "Company DNA Analysis",
      description: "Extract brand voice, terminology, industry patterns, competitive intelligence",
      icon: <DNAIcon className="w-8 h-8" />,
      color: "purple",
      status: "active"
    },
    {
      id: "research",
      step: "Step 2", 
      title: "Market Research Agent",
      description: "Market intelligence, competitor analysis, trend identification",
      icon: <AnalyticsIcon className="w-8 h-8" />,
      color: "blue",
      status: "active"
    },
    {
      id: "brand",
      step: "Step 3",
      title: "Brand Context Engine",
      description: "Voice consistency, brand guidelines enforcement, tone optimization",
      icon: <GraphIcon className="w-8 h-8" />,
      color: "green",
      status: "active"
    },
    {
      id: "content",
      step: "Step 4",
      title: "Content Generation",
      description: "RAG-powered content creation, format optimization, audience targeting",
      icon: <RAGIcon className="w-8 h-8" />,
      color: "orange",
      status: "active"
    },
    {
      id: "validation",
      step: "Step 5",
      title: "Human Checkpoint",
      description: "Quality control, compliance validation, final approval",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "red",
      status: "active"
    }
  ];

  // Parallel processes that run alongside main workflow
  const parallelProcesses = [
    {
      title: "Knowledge Graph",
      description: "Continuous learning and relationship mapping",
      icon: <GraphIcon className="w-6 h-6" />,
      color: "cyan"
    },
    {
      title: "Brand Monitoring",
      description: "Real-time consistency checking",
      icon: <DNAIcon className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "Quality Assurance",
      description: "Zero hallucination validation",
      icon: <AnalyticsIcon className="w-6 h-6" />,
      color: "pink"
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
            VERSATIL Workflow Plan Architecture
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Step-by-step workflow showing how VERSATIL processes your company DNA 
            through specialized agents to produce enterprise-grade content.
          </p>
        </motion.div>

        {/* Main Workflow Steps */}
        <div className="relative mb-16">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between space-x-4">
              {workflowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Workflow Step */}
                  <motion.div
                    className={`relative flex-1 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      hoveredStep === step.id
                        ? `bg-${step.color}-500/10 border-${step.color}-400 shadow-lg`
                        : theme === 'dark' 
                          ? `bg-gray-800/50 border-gray-700/50 hover:border-${step.color}-400/50`
                          : `bg-white/80 border-gray-200 hover:border-${step.color}-300/50`
                    }`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-3 ${
                      theme === 'dark' 
                        ? `bg-${step.color}-500/20 text-${step.color}-300` 
                        : `bg-${step.color}-100 text-${step.color}-700`
                    }`}>
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                      theme === 'dark' 
                        ? `bg-${step.color}-500/20` 
                        : `bg-${step.color}-100`
                    }`}>
                      <div className={`text-${step.color}-500`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>

                    {/* Status Indicator */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                      step.status === 'active' 
                        ? `bg-${step.color}-500` 
                        : 'bg-gray-400'
                    }`} />

                    {/* Hover Details */}
                    <AnimatePresence>
                      {hoveredStep === step.id && (
                        <motion.div
                          className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg shadow-lg z-20 ${
                            theme === 'dark' 
                              ? 'bg-gray-800 border border-gray-700 text-gray-200' 
                              : 'bg-white border border-gray-200 text-gray-700'
                          }`}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-xs font-semibold">{step.step}</div>
                          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                          }`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className={`flex items-center justify-center w-8 h-8 ${
                        theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.2 + 0.1, duration: 0.3 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  className={`p-6 rounded-2xl border-2 ${
                    theme === 'dark' 
                      ? `bg-gray-800/50 border-gray-700/50` 
                      : `bg-white/80 border-gray-200`
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      theme === 'dark' 
                        ? `bg-${step.color}-500/20` 
                        : `bg-${step.color}-100`
                    }`}>
                      <div className={`text-${step.color}-500`}>
                        {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          theme === 'dark' 
                            ? `bg-${step.color}-500/20 text-${step.color}-300` 
                            : `bg-${step.color}-100 text-${step.color}-700`
                        }`}>
                          {step.step}
                        </span>
                        <h3 className={`text-lg font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Vertical Arrow */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className={`flex justify-center ${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Parallel Processes Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Continuous Background Processes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {parallelProcesses.map((process, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-white/60 border-gray-200'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  theme === 'dark' 
                    ? `bg-${process.color}-500/20` 
                    : `bg-${process.color}-100`
                }`}>
                  <div className={`text-${process.color}-500`}>
                    {process.icon}
                  </div>
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {process.title}
                </h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowPlanArchitecture;