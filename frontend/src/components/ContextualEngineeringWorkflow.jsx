import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { 
  Database, 
  Cpu, 
  Network, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain,
  Workflow,
  Target,
  Layers
} from "lucide-react";

const ContextualEngineeringWorkflow = () => {
  const { theme } = useTheme();
  const [currentStage, setCurrentStage] = useState(0);
  const [activeProcesses, setActiveProcesses] = useState([]);
  const [engineeringMetrics, setEngineeringMetrics] = useState({
    throughput: 0,
    latency: 0,
    accuracy: 0,
    contextScore: 0
  });

  const engineeringStages = [
    {
      id: 'intake',
      title: 'Contextual Intake',
      description: 'AI analyzes project requirements and context',
      icon: Brain,
      color: 'blue',
      processes: ['NLP Analysis', 'Intent Recognition', 'Context Mapping'],
      metrics: { throughput: 95, latency: 0.3, accuracy: 98, contextScore: 92 }
    },
    {
      id: 'orchestration',
      title: 'Agentic Orchestration', 
      description: 'Multi-agent system coordinates specialized AI workers',
      icon: Network,
      color: 'purple',
      processes: ['Agent Routing', 'Load Balancing', 'Task Distribution'],
      metrics: { throughput: 87, latency: 1.2, accuracy: 96, contextScore: 89 }
    },
    {
      id: 'processing',
      title: 'Parallel Processing',
      description: 'Simultaneous execution across multiple AI engines',
      icon: Cpu,
      color: 'cyan',
      processes: ['GPU Computing', 'Distributed Processing', 'Real-time Sync'],
      metrics: { throughput: 93, latency: 2.1, accuracy: 97, contextScore: 94 }
    },
    {
      id: 'pixel-orchestration',
      title: 'Pixel Orchestration',
      description: 'Precision rendering and asset optimization',
      icon: Layers,
      color: 'green',
      processes: ['Pixel Perfect Rendering', 'Format Optimization', 'Quality Assurance'],
      metrics: { throughput: 91, latency: 1.8, accuracy: 99, contextScore: 96 }
    },
    {
      id: 'delivery',
      title: 'Smart Delivery',
      description: 'Context-aware deployment and optimization',
      icon: Target,
      color: 'orange',
      processes: ['Intelligent Packaging', 'CDN Distribution', 'Performance Monitoring'],
      metrics: { throughput: 98, latency: 0.5, accuracy: 99, contextScore: 98 }
    }
  ];

  // Engineering workflow automation
  useEffect(() => {
    const runEngineering = async () => {
      for (let i = 0; i < engineeringStages.length; i++) {
        setCurrentStage(i);
        const stage = engineeringStages[i];
        
        // Animate metrics
        const targetMetrics = stage.metrics;
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        
        for (let step = 0; step <= steps; step++) {
          const progress = step / steps;
          setEngineeringMetrics({
            throughput: Math.round(targetMetrics.throughput * progress),
            latency: (targetMetrics.latency * progress).toFixed(1),
            accuracy: Math.round(targetMetrics.accuracy * progress),
            contextScore: Math.round(targetMetrics.contextScore * progress)
          });
          await new Promise(resolve => setTimeout(resolve, stepDuration));
        }

        // Add processes
        for (let j = 0; j < stage.processes.length; j++) {
          setActiveProcesses(prev => [...prev, `${stage.id}-${j}`]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // Reset cycle
      setTimeout(() => {
        setCurrentStage(0);
        setActiveProcesses([]);
        setEngineeringMetrics({ throughput: 0, latency: 0, accuracy: 0, contextScore: 0 });
      }, 2000);
    };

    const interval = setInterval(runEngineering, 15000);
    runEngineering(); // Run immediately
    
    return () => clearInterval(interval);
  }, []);

  const getStageColor = (color, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'from-blue-500/20 to-blue-600/20' : 'from-gray-800/50 to-gray-900/50',
        border: isActive ? 'border-blue-500/60' : 'border-gray-700/50',
        icon: isActive ? 'bg-blue-500' : 'bg-gray-600',
        text: isActive ? 'text-blue-400' : 'text-gray-500',
        glow: 'shadow-blue-500/30'
      },
      purple: {
        bg: isActive ? 'from-purple-500/20 to-purple-600/20' : 'from-gray-800/50 to-gray-900/50',
        border: isActive ? 'border-purple-500/60' : 'border-gray-700/50',
        icon: isActive ? 'bg-purple-500' : 'bg-gray-600',
        text: isActive ? 'text-purple-400' : 'text-gray-500',
        glow: 'shadow-purple-500/30'
      },
      cyan: {
        bg: isActive ? 'from-cyan-500/20 to-cyan-600/20' : 'from-gray-800/50 to-gray-900/50',
        border: isActive ? 'border-cyan-500/60' : 'border-gray-700/50',
        icon: isActive ? 'bg-cyan-500' : 'bg-gray-600',
        text: isActive ? 'text-cyan-400' : 'text-gray-500',
        glow: 'shadow-cyan-500/30'
      },
      green: {
        bg: isActive ? 'from-green-500/20 to-green-600/20' : 'from-gray-800/50 to-gray-900/50',
        border: isActive ? 'border-green-500/60' : 'border-gray-700/50',
        icon: isActive ? 'bg-green-500' : 'bg-gray-600',
        text: isActive ? 'text-green-400' : 'text-gray-500',
        glow: 'shadow-green-500/30'
      },
      orange: {
        bg: isActive ? 'from-orange-500/20 to-orange-600/20' : 'from-gray-800/50 to-gray-900/50',
        border: isActive ? 'border-orange-500/60' : 'border-gray-700/50',
        icon: isActive ? 'bg-orange-500' : 'bg-gray-600',
        text: isActive ? 'text-orange-400' : 'text-gray-500',
        glow: 'shadow-orange-500/30'
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className={`text-sm font-medium tracking-widest uppercase mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CONTEXTUAL ENGINEERING WORKFLOW
          </motion.p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI-Powered{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Engineering Pipeline
            </span>
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience our advanced contextual intelligence system that transforms creative briefs into pixel-perfect deliverables.
          </p>
        </motion.div>

        {/* Engineering Pipeline Visualization */}
        <div className="relative">
          {/* Background Data Flow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <defs>
                <linearGradient id="pipelineFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    values="-100 0;100 0;-100 0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>
              
              <path
                d="M 10 25 Q 30 15, 50 25 T 90 25"
                stroke="url(#pipelineFlow)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {engineeringStages.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = currentStage === index;
              const isCompleted = currentStage > index;
              const colors = getStageColor(stage.color, isActive);
              
              return (
                <motion.div
                  key={stage.id}
                  className={`relative p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-700 ${
                    colors.bg
                  } ${colors.border} ${isActive ? `shadow-2xl ${colors.glow}` : ''}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                >
                  {/* Stage Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colors.icon} shadow-lg`}
                    animate={isActive ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Stage Title */}
                  <h3 className="text-lg font-bold mb-2">{stage.title}</h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stage.description}
                  </p>

                  {/* Process List */}
                  <div className="space-y-2">
                    {stage.processes.map((process, processIndex) => {
                      const processId = `${stage.id}-${processIndex}`;
                      const isProcessActive = activeProcesses.includes(processId);
                      
                      return (
                        <motion.div
                          key={processIndex}
                          className={`flex items-center space-x-2 text-xs p-2 rounded ${
                            isProcessActive 
                              ? `bg-${stage.color}-500/20 ${colors.text}` 
                              : `${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`
                          }`}
                          initial={{ opacity: 0.5 }}
                          animate={{ 
                            opacity: isProcessActive ? 1 : 0.5,
                            x: isProcessActive ? 5 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full ${
                              isProcessActive ? `bg-${stage.color}-500` : 'bg-gray-500'
                            }`}
                            animate={isProcessActive ? {
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span>{process}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stage Status */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: isActive ? 1 : (isCompleted ? 1 : 0)
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-blue-500 animate-pulse' : 'bg-green-500'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Real-time Engineering Metrics Dashboard */}
        <motion.div
          className={`mt-16 p-8 rounded-2xl ${
            theme === 'dark' 
              ? 'bg-gray-900/50 border border-gray-800' 
              : 'bg-gray-50 border border-gray-200'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Real-Time Engineering Metrics
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Throughput', value: `${engineeringMetrics.throughput}%`, color: 'blue' },
              { label: 'Latency', value: `${engineeringMetrics.latency}s`, color: 'green' },
              { label: 'Accuracy', value: `${engineeringMetrics.accuracy}%`, color: 'purple' },
              { label: 'Context Score', value: `${engineeringMetrics.contextScore}%`, color: 'cyan' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <motion.div 
                  className={`text-3xl font-bold text-${metric.color}-500 mb-2`}
                  animate={{ 
                    scale: engineeringMetrics[Object.keys(engineeringMetrics)[index]] > 0 ? [1, 1.05, 1] : 1
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {metric.value}
                </motion.div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {metric.label}
                </div>
                
                {/* Progress Bar */}
                <div className={`mt-2 h-2 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                } rounded-full overflow-hidden`}>
                  <motion.div
                    className={`h-full bg-${metric.color}-500 rounded-full`}
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: `${engineeringMetrics[Object.keys(engineeringMetrics)[index]] || 0}%` 
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContextualEngineeringWorkflow;