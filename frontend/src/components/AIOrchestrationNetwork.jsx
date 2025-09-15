import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Cpu, Brain, Zap, Network, Workflow, Bot } from "lucide-react";

const AIOrchestrationNetwork = () => {
  const { theme } = useTheme();
  const [activeAgents, setActiveAgents] = useState([]);
  const [dataStreams, setDataStreams] = useState([]);
  const [workflowPhase, setWorkflowPhase] = useState('initializing');

  // AI Agent Definitions
  const aiAgents = [
    { 
      id: 'creative-ai', 
      name: 'Creative AI', 
      position: { x: 20, y: 25 }, 
      type: 'creative',
      icon: Brain,
      capabilities: ['Design Generation', 'Style Transfer', 'Creative Ideation']
    },
    { 
      id: 'context-ai', 
      name: 'Context Engine', 
      position: { x: 50, y: 40 }, 
      type: 'core',
      icon: Network,
      capabilities: ['Brand Analysis', 'Context Understanding', 'Intelligence Routing']
    },
    { 
      id: 'workflow-ai', 
      name: 'Workflow AI', 
      position: { x: 80, y: 25 }, 
      type: 'orchestration',
      icon: Workflow,
      capabilities: ['Process Optimization', 'Task Distribution', 'Quality Gates']
    },
    { 
      id: 'agentic-ai', 
      name: 'Agentic AI', 
      position: { x: 25, y: 70 }, 
      type: 'autonomous',
      icon: Bot,
      capabilities: ['Autonomous Decision', 'Multi-Agent Coordination', 'Dynamic Scaling']
    },
    { 
      id: 'pixel-ai', 
      name: 'Pixel Orchestrator', 
      position: { x: 75, y: 70 }, 
      type: 'execution',
      icon: Zap,
      capabilities: ['Pixel Perfect Rendering', 'Format Optimization', 'Asset Generation']
    },
    { 
      id: 'engineering-ai', 
      name: 'Engineering AI', 
      position: { x: 50, y: 15 }, 
      type: 'technical',
      icon: Cpu,
      capabilities: ['Code Generation', 'Infrastructure Management', 'Performance Optimization']
    }
  ];

  // Orchestrated AI Workflow Phases
  useEffect(() => {
    const runOrchestration = async () => {
      // Phase 1: Initialization
      setWorkflowPhase('initializing');
      setActiveAgents(['context-ai']);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Phase 2: Analysis & Planning
      setWorkflowPhase('analyzing');
      setActiveAgents(['context-ai', 'creative-ai', 'engineering-ai']);
      setDataStreams(['context-ai→creative-ai', 'context-ai→engineering-ai']);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 3: Multi-Agent Orchestration
      setWorkflowPhase('orchestrating');
      setActiveAgents(['context-ai', 'creative-ai', 'workflow-ai', 'agentic-ai']);
      setDataStreams(['creative-ai→workflow-ai', 'context-ai→agentic-ai', 'agentic-ai→workflow-ai']);
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Phase 4: Execution
      setWorkflowPhase('executing');
      setActiveAgents(['workflow-ai', 'pixel-ai', 'engineering-ai']);
      setDataStreams(['workflow-ai→pixel-ai', 'engineering-ai→pixel-ai']);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 5: Full Network Active
      setWorkflowPhase('optimizing');
      setActiveAgents(aiAgents.map(agent => agent.id));
      setDataStreams([
        'context-ai→creative-ai', 'creative-ai→workflow-ai', 'workflow-ai→pixel-ai',
        'agentic-ai→engineering-ai', 'engineering-ai→pixel-ai', 'context-ai→agentic-ai'
      ]);
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Reset cycle
      setActiveAgents([]);
      setDataStreams([]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const interval = setInterval(runOrchestration, 15000);
    runOrchestration(); // Run immediately
    
    return () => clearInterval(interval);
  }, []);

  const getAgentStyles = (agent) => {
    const isActive = activeAgents.includes(agent.id);
    const typeColors = {
      core: { 
        bg: theme === 'dark' ? 'from-blue-500/30 to-cyan-500/30' : 'from-blue-400/20 to-cyan-400/20',
        border: 'border-blue-500/60',
        glow: 'shadow-blue-500/40'
      },
      creative: { 
        bg: theme === 'dark' ? 'from-purple-500/30 to-pink-500/30' : 'from-purple-400/20 to-pink-400/20',
        border: 'border-purple-500/60',
        glow: 'shadow-purple-500/40'
      },
      orchestration: { 
        bg: theme === 'dark' ? 'from-green-500/30 to-emerald-500/30' : 'from-green-400/20 to-emerald-400/20',
        border: 'border-green-500/60',
        glow: 'shadow-green-500/40'
      },
      autonomous: { 
        bg: theme === 'dark' ? 'from-orange-500/30 to-yellow-500/30' : 'from-orange-400/20 to-yellow-400/20',
        border: 'border-orange-500/60',
        glow: 'shadow-orange-500/40'
      },
      execution: { 
        bg: theme === 'dark' ? 'from-red-500/30 to-rose-500/30' : 'from-red-400/20 to-rose-400/20',
        border: 'border-red-500/60',
        glow: 'shadow-red-500/40'
      },
      technical: { 
        bg: theme === 'dark' ? 'from-indigo-500/30 to-blue-500/30' : 'from-indigo-400/20 to-blue-400/20',
        border: 'border-indigo-500/60',
        glow: 'shadow-indigo-500/40'
      }
    };

    return typeColors[agent.type];
  };

  const getConnectionPath = (streamId) => {
    const [fromId, toId] = streamId.split('→');
    const fromAgent = aiAgents.find(a => a.id === fromId);
    const toAgent = aiAgents.find(a => a.id === toId);
    
    if (!fromAgent || !toAgent) return "";
    
    const startX = fromAgent.position.x;
    const startY = fromAgent.position.y;
    const endX = toAgent.position.x;
    const endY = toAgent.position.y;
    
    // Create curved path
    const controlX1 = startX + (endX - startX) * 0.3;
    const controlY1 = startY + (endY - startY) * 0.1;
    const controlX2 = endX - (endX - startX) * 0.3;
    const controlY2 = endY - (endY - startY) * 0.1;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Neural Mesh */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="aiMesh" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M 4 0 L 4 8 M 0 4 L 8 4" 
                stroke={theme === 'dark' ? '#3B82F6' : '#1E40AF'} 
                strokeWidth="0.15" 
                opacity="0.4"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.circle 
                cx="4" 
                cy="4" 
                r="0.8" 
                fill={theme === 'dark' ? '#3B82F6' : '#1E40AF'} 
                opacity="0.3"
                animate={{ r: [0.5, 1.2, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </pattern>
            
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          
          <rect width="100" height="100" fill="url(#aiMesh)" />
          
          {/* Data Connection Lines */}
          {dataStreams.map((streamId, index) => (
            <motion.path
              key={streamId}
              d={getConnectionPath(streamId)}
              stroke="url(#dataFlow)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* AI Agent Nodes */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          {aiAgents.map((agent) => {
            const IconComponent = agent.icon;
            const isActive = activeAgents.includes(agent.id);
            const styles = getAgentStyles(agent);
            
            return (
              <motion.div
                key={agent.id}
                className={`absolute cursor-pointer group ${agent.type === 'core' ? 'z-20' : 'z-10'}`}
                style={{
                  left: `${agent.position.x}%`,
                  top: `${agent.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isActive ? 1.1 : 0.8,
                  opacity: isActive ? 1 : 0.3
                }}
                whileHover={{ scale: 1.2, zIndex: 30 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.6
                }}
              >
                {/* Agent Node */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl border-2 backdrop-blur-sm ${
                    isActive ? `bg-gradient-to-br ${styles.bg} ${styles.border} shadow-2xl ${styles.glow}` 
                    : `bg-gray-800/30 border-gray-600`
                  } flex items-center justify-center transition-all duration-500`}
                  animate={isActive ? {
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconComponent className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  
                  {/* Processing Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Agent Info Tooltip */}
                <motion.div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 ${
                    theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'
                  } backdrop-blur-sm border border-gray-600 rounded-lg p-3 min-w-max opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-40`}
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                >
                  <h4 className="text-sm font-semibold mb-1">{agent.name}</h4>
                  <div className="space-y-1">
                    {agent.capabilities.map((capability, index) => (
                      <div key={index} className="text-xs text-gray-500 flex items-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Workflow Phase Indicator */}
      <motion.div
        className={`absolute bottom-6 left-6 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        } backdrop-blur-sm border border-gray-600 rounded-lg p-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <div>
            <div className="text-sm font-medium capitalize">AI {workflowPhase}</div>
            <div className="text-xs text-gray-500">{activeAgents.length} agents active</div>
          </div>
        </div>
      </motion.div>

      {/* Context Engineering Stats */}
      <motion.div
        className={`absolute top-6 right-6 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        } backdrop-blur-sm border border-gray-600 rounded-lg p-4`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-center">
          <div className="text-lg font-bold text-blue-500">{(activeAgents.length / aiAgents.length * 100).toFixed(0)}%</div>
          <div className="text-xs text-gray-500">Context Coverage</div>
        </div>
      </motion.div>

      {/* Floating Data Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`ai-particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-blue-400/40' : 'bg-blue-600/30'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AIOrchestrationNetwork;