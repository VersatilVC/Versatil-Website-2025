import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  Bot,
  FileText,
  Share2,
  Mail,
  Search,
  BarChart3,
  Camera,
  Settings,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

const AgentOrchestrationCanvas = () => {
  const { theme } = useTheme();
  const [isRunning, setIsRunning] = useState(false);
  const [activeConnections, setActiveConnections] = useState([]);
  const [nodeStates, setNodeStates] = useState({});
  const [dataFlows, setDataFlows] = useState([]);
  const canvasRef = useRef(null);

  // Agent Node Definitions (n8n style)
  const agentNodes = [
    {
      id: 'input-trigger',
      type: 'trigger',
      title: 'Project Trigger',
      subtitle: 'Client Request',
      icon: Play,
      position: { x: 50, y: 300 },
      color: 'emerald',
      outputs: ['creative-ai', 'context-engine'],
      status: 'ready'
    },
    {
      id: 'context-engine',
      type: 'processor',
      title: 'Context Engine',
      subtitle: 'Brand Analysis',
      icon: Brain,
      position: { x: 250, y: 200 },
      color: 'blue',
      inputs: ['input-trigger'],
      outputs: ['creative-ai', 'workflow-orchestrator', 'content-ai'],
      status: 'idle'
    },
    {
      id: 'creative-ai',
      type: 'processor',
      title: 'Creative AI',
      subtitle: 'Design Generation',
      icon: Cpu,
      position: { x: 250, y: 400 },
      color: 'purple',
      inputs: ['input-trigger', 'context-engine'],
      outputs: ['pixel-orchestrator', 'content-ai'],
      status: 'idle'
    },
    {
      id: 'content-ai',
      type: 'processor',
      title: 'Content AI',
      subtitle: 'Copy & Content',
      icon: FileText,
      position: { x: 450, y: 150 },
      color: 'orange',
      inputs: ['context-engine', 'creative-ai'],
      outputs: ['social-ai', 'email-ai'],
      status: 'idle'
    },
    {
      id: 'workflow-orchestrator',
      type: 'controller',
      title: 'Workflow AI',
      subtitle: 'Task Coordination',
      icon: Network,
      position: { x: 450, y: 300 },
      color: 'cyan',
      inputs: ['context-engine'],
      outputs: ['pixel-orchestrator', 'analytics-ai', 'quality-gate'],
      status: 'idle'
    },
    {
      id: 'social-ai',
      type: 'processor',
      title: 'Social AI',
      subtitle: 'Social Media',
      icon: Share2,
      position: { x: 650, y: 100 },
      color: 'pink',
      inputs: ['content-ai'],
      outputs: ['analytics-ai'],
      status: 'idle'
    },
    {
      id: 'email-ai',
      type: 'processor',
      title: 'Email AI',
      subtitle: 'Email Campaigns',
      icon: Mail,
      position: { x: 650, y: 200 },
      color: 'green',
      inputs: ['content-ai'],
      outputs: ['analytics-ai'],
      status: 'idle'
    },
    {
      id: 'pixel-orchestrator',
      type: 'processor',
      title: 'Pixel AI',
      subtitle: 'Pixel Perfect',
      icon: Zap,
      position: { x: 450, y: 450 },
      color: 'yellow',
      inputs: ['creative-ai', 'workflow-orchestrator'],
      outputs: ['quality-gate'],
      status: 'idle'
    },
    {
      id: 'analytics-ai',
      type: 'processor',
      title: 'Analytics AI',
      subtitle: 'Performance',
      icon: BarChart3,
      position: { x: 650, y: 350 },
      color: 'indigo',
      inputs: ['workflow-orchestrator', 'social-ai', 'email-ai'],
      outputs: ['quality-gate'],
      status: 'idle'
    },
    {
      id: 'quality-gate',
      type: 'validator',
      title: 'Quality Gate',
      subtitle: 'Final Review',
      icon: Settings,
      position: { x: 650, y: 450 },
      color: 'red',
      inputs: ['workflow-orchestrator', 'pixel-orchestrator', 'analytics-ai'],
      outputs: ['delivery-engine'],
      status: 'idle'
    },
    {
      id: 'delivery-engine',
      type: 'output',
      title: 'Delivery Engine',
      subtitle: 'Client Assets',
      icon: Database,
      position: { x: 850, y: 350 },
      color: 'emerald',
      inputs: ['quality-gate'],
      outputs: [],
      status: 'idle'
    }
  ];

  // Connection paths between nodes
  const connections = [
    { from: 'input-trigger', to: 'context-engine', id: 'conn-1' },
    { from: 'input-trigger', to: 'creative-ai', id: 'conn-2' },
    { from: 'context-engine', to: 'creative-ai', id: 'conn-3' },
    { from: 'context-engine', to: 'workflow-orchestrator', id: 'conn-4' },
    { from: 'context-engine', to: 'content-ai', id: 'conn-5' },
    { from: 'creative-ai', to: 'pixel-orchestrator', id: 'conn-6' },
    { from: 'creative-ai', to: 'content-ai', id: 'conn-7' },
    { from: 'content-ai', to: 'social-ai', id: 'conn-8' },
    { from: 'content-ai', to: 'email-ai', id: 'conn-9' },
    { from: 'workflow-orchestrator', to: 'pixel-orchestrator', id: 'conn-10' },
    { from: 'workflow-orchestrator', to: 'analytics-ai', id: 'conn-11' },
    { from: 'workflow-orchestrator', to: 'quality-gate', id: 'conn-12' },
    { from: 'social-ai', to: 'analytics-ai', id: 'conn-13' },
    { from: 'email-ai', to: 'analytics-ai', id: 'conn-14' },
    { from: 'pixel-orchestrator', to: 'quality-gate', id: 'conn-15' },
    { from: 'analytics-ai', to: 'quality-gate', id: 'conn-16' },
    { from: 'quality-gate', to: 'delivery-engine', id: 'conn-17' }
  ];

  // Orchestration workflow simulation
  useEffect(() => {
    if (!isRunning) return;

    const runOrchestration = async () => {
      // Reset states
      setNodeStates({});
      setActiveConnections([]);
      setDataFlows([]);

      // Phase 1: Trigger activation
      setNodeStates(prev => ({ ...prev, 'input-trigger': 'processing' }));
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Phase 2: Context and Creative AI activation
      setActiveConnections(['conn-1', 'conn-2']);
      setDataFlows(['flow-1', 'flow-2']);
      setNodeStates(prev => ({ 
        ...prev, 
        'input-trigger': 'completed',
        'context-engine': 'processing',
        'creative-ai': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 3: Expand to Content AI and Workflow
      setActiveConnections(prev => [...prev, 'conn-3', 'conn-4', 'conn-5']);
      setDataFlows(prev => [...prev, 'flow-3', 'flow-4', 'flow-5']);
      setNodeStates(prev => ({ 
        ...prev, 
        'context-engine': 'completed',
        'content-ai': 'processing',
        'workflow-orchestrator': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Phase 4: Parallel processing - Social, Email, Pixel
      setActiveConnections(prev => [...prev, 'conn-6', 'conn-7', 'conn-8', 'conn-9', 'conn-10']);
      setDataFlows(prev => [...prev, 'flow-6', 'flow-7', 'flow-8', 'flow-9', 'flow-10']);
      setNodeStates(prev => ({ 
        ...prev, 
        'creative-ai': 'completed',
        'content-ai': 'completed',
        'social-ai': 'processing',
        'email-ai': 'processing',
        'pixel-orchestrator': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Phase 5: Analytics and Quality Gate
      setActiveConnections(prev => [...prev, 'conn-11', 'conn-12', 'conn-13', 'conn-14', 'conn-15']);
      setDataFlows(prev => [...prev, 'flow-11', 'flow-12', 'flow-13', 'flow-14', 'flow-15']);
      setNodeStates(prev => ({ 
        ...prev, 
        'social-ai': 'completed',
        'email-ai': 'completed',
        'pixel-orchestrator': 'completed',
        'workflow-orchestrator': 'completed',
        'analytics-ai': 'processing',
        'quality-gate': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 6: Final delivery
      setActiveConnections(prev => [...prev, 'conn-16', 'conn-17']);
      setDataFlows(prev => [...prev, 'flow-16', 'flow-17']);
      setNodeStates(prev => ({ 
        ...prev, 
        'analytics-ai': 'completed',
        'quality-gate': 'completed',
        'delivery-engine': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Complete
      setNodeStates(prev => ({ ...prev, 'delivery-engine': 'completed' }));
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Auto-restart or stop
      if (isRunning) {
        setTimeout(runOrchestration, 3000);
      }
    };

    runOrchestration();
  }, [isRunning]);

  const getNodeColors = (color, status = 'idle') => {
    const colorMap = {
      blue: {
        idle: 'from-blue-500/20 to-blue-600/20 border-blue-500/40',
        processing: 'from-blue-500/40 to-blue-600/40 border-blue-400 shadow-blue-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      purple: {
        idle: 'from-purple-500/20 to-purple-600/20 border-purple-500/40',
        processing: 'from-purple-500/40 to-purple-600/40 border-purple-400 shadow-purple-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      emerald: {
        idle: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/40',
        processing: 'from-emerald-500/40 to-emerald-600/40 border-emerald-400 shadow-emerald-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      orange: {
        idle: 'from-orange-500/20 to-orange-600/20 border-orange-500/40',
        processing: 'from-orange-500/40 to-orange-600/40 border-orange-400 shadow-orange-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      cyan: {
        idle: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/40',
        processing: 'from-cyan-500/40 to-cyan-600/40 border-cyan-400 shadow-cyan-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      pink: {
        idle: 'from-pink-500/20 to-pink-600/20 border-pink-500/40',
        processing: 'from-pink-500/40 to-pink-600/40 border-pink-400 shadow-pink-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      green: {
        idle: 'from-green-500/20 to-green-600/20 border-green-500/40',
        processing: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      yellow: {
        idle: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40',
        processing: 'from-yellow-500/40 to-yellow-600/40 border-yellow-400 shadow-yellow-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      indigo: {
        idle: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/40',
        processing: 'from-indigo-500/40 to-indigo-600/40 border-indigo-400 shadow-indigo-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      red: {
        idle: 'from-red-500/20 to-red-600/20 border-red-500/40',
        processing: 'from-red-500/40 to-red-600/40 border-red-400 shadow-red-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      }
    };
    return colorMap[color]?.[status] || colorMap.blue.idle;
  };

  const getConnectionPath = (from, to) => {
    const fromNode = agentNodes.find(n => n.id === from);
    const toNode = agentNodes.find(n => n.id === to);
    
    if (!fromNode || !toNode) return "";
    
    const startX = fromNode.position.x + 50; // Node width offset
    const startY = fromNode.position.y + 25; // Node height offset
    const endX = toNode.position.x;
    const endY = toNode.position.y + 25;
    
    // Create smooth bezier curve
    const controlX1 = startX + (endX - startX) * 0.5;
    const controlY1 = startY;
    const controlX2 = endX - (endX - startX) * 0.5;
    const controlY2 = endY;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className={`text-sm font-medium tracking-widest uppercase mb-6 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI AGENT ORCHESTRATION
          </motion.p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Visual{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'
            }`}>
              Workflow Canvas
            </span>
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interactive n8n-style visualization of our AI agent network with real-time data flows and status monitoring.
          </p>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isRunning 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRunning ? 'Stop Workflow' : 'Start Workflow'}</span>
            </motion.button>

            <motion.button
              onClick={() => {
                setNodeStates({});
                setActiveConnections([]);
                setDataFlows([]);
              }}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium bg-gray-600 hover:bg-gray-700 text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Canvas Container */}
        <motion.div
          ref={canvasRef}
          className={`relative w-full h-[600px] rounded-2xl border-2 overflow-hidden ${
            theme === 'dark' 
              ? 'bg-gray-900/50 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='${theme === 'dark' ? '%23374151' : '%23E5E7EB'}' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")` }} />
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient id="activeFlow" x1="0%" y1="0%" x2="100%" y2="0%">
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
            
            {connections.map((connection) => {
              const isActive = activeConnections.includes(connection.id);
              return (
                <motion.path
                  key={connection.id}
                  d={getConnectionPath(connection.from, connection.to)}
                  stroke={isActive ? "url(#activeFlow)" : (theme === 'dark' ? '#374151' : '#9CA3AF')}
                  strokeWidth={isActive ? "3" : "2"}
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  animate={{ 
                    pathLength: isActive ? 1 : 0.5,
                    opacity: isActive ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}
          </svg>

          {/* Agent Nodes */}
          <div className="relative z-20">
            {agentNodes.map((node) => {
              const IconComponent = node.icon;
              const status = nodeStates[node.id] || 'idle';
              const colors = getNodeColors(node.color, status);
              
              return (
                <motion.div
                  key={node.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${node.position.x}px`,
                    top: `${node.position.y}px`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: agentNodes.indexOf(node) * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                >
                  {/* Node Container */}
                  <motion.div
                    className={`relative w-32 h-16 rounded-xl border-2 backdrop-blur-sm flex items-center p-3 transition-all duration-500 bg-gradient-to-br ${colors}`}
                    animate={status === 'processing' ? {
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 40px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)'
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Node Icon */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-2 ${
                      status === 'processing' ? `bg-${node.color}-500` : 
                      status === 'completed' ? 'bg-green-500' : 
                      'bg-gray-600'
                    }`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>

                    {/* Node Info */}
                    <div className="flex-1">
                      <div className="text-xs font-bold text-white truncate">
                        {node.title}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      } truncate`}>
                        {node.subtitle}
                      </div>
                    </div>

                    {/* Status Indicator */}
                    {status === 'processing' && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}

                    {status === 'completed' && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                    )}
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 ${
                      theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'
                    } backdrop-blur-sm border border-gray-600 rounded-lg p-2 min-w-max opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-40`}
                    initial={{ y: 10 }}
                    whileInView={{ y: 0 }}
                  >
                    <div className="text-xs font-semibold">{node.title}</div>
                    <div className="text-xs text-gray-500 capitalize">Status: {status}</div>
                    <div className="text-xs text-gray-500">Type: {node.type}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Data Particles */}
          <AnimatePresence>
            {dataFlows.map((flow, index) => (
              <motion.div
                key={flow}
                className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-15"
                style={{
                  left: `${50 + Math.random() * 700}px`,
                  top: `${50 + Math.random() * 400}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: [0, 100 + Math.random() * 200, 200],
                  y: [0, -20 + Math.random() * 40, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          className={`mt-6 p-4 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
          } border border-gray-600/20`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isRunning 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {isRunning ? 'Workflow Running' : 'Workflow Stopped'}
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Active Connections: {activeConnections.length}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span>Nodes: {Object.keys(nodeStates).length}/{agentNodes.length}</span>
              <span>Processing: {Object.values(nodeStates).filter(s => s === 'processing').length}</span>
              <span>Completed: {Object.values(nodeStates).filter(s => s === 'completed').length}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentOrchestrationCanvas;