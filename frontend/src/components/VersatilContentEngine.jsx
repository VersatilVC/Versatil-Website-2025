import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { 
  Lightbulb, 
  FileText, 
  Sparkles, 
  Database, 
  Brain,
  Network,
  Target,
  BarChart3,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

const VersatilContentEngine = () => {
  const { theme } = useTheme();
  const [activeWorkflow, setActiveWorkflow] = useState('ideas');
  const [processingStates, setProcessingStates] = useState({});

  // VERSATIL Workflow Stages
  const workflowStages = [
    {
      id: 'dna-analysis',
      title: 'Company DNA Analysis',
      subtitle: 'RAG Processing',
      icon: Database,
      position: { x: 10, y: 20 },
      color: 'purple',
      description: 'Analyzing brand documents, values, and messaging'
    },
    {
      id: 'ideas',
      title: 'Generate Ideas',
      subtitle: 'AI Ideation',
      icon: Lightbulb,
      position: { x: 10, y: 60 },
      color: 'yellow',
      description: 'Creating content ideas from company DNA'
    },
    {
      id: 'briefs',
      title: 'Content Briefs',
      subtitle: 'Detailed Specs',
      icon: FileText,
      position: { x: 50, y: 40 },
      color: 'blue',
      description: 'Generating detailed content specifications'
    },
    {
      id: 'content',
      title: 'Content Items',
      subtitle: 'Final Assets',
      icon: Sparkles,
      position: { x: 90, y: 30 },
      color: 'pink',
      description: 'Producing ready-to-publish content'
    },
    {
      id: 'validation',
      title: 'Brand Validation',
      subtitle: 'Quality Check',
      icon: CheckCircle,
      position: { x: 90, y: 70 },
      color: 'green',
      description: 'Ensuring brand consistency and accuracy'
    }
  ];

  // Content Types Showcase
  const contentTypes = [
    { 
      title: 'Blog Posts', 
      count: 12, 
      status: 'generating',
      category: 'content_engineering'
    },
    { 
      title: 'Social Media', 
      count: 24, 
      status: 'completed',
      category: 'social_media'
    },
    { 
      title: 'Email Campaigns', 
      count: 8, 
      status: 'ready_to_generate',
      category: 'email_marketing'
    },
    { 
      title: 'Landing Pages', 
      count: 4, 
      status: 'generating',
      category: 'web_content'
    }
  ];

  // Simulate VERSATIL workflow
  useEffect(() => {
    const runWorkflow = async () => {
      // Reset states
      setProcessingStates({});
      
      // Stage 1: DNA Analysis
      setActiveWorkflow('dna-analysis');
      setProcessingStates({ 'dna-analysis': 'processing' });
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProcessingStates({ 'dna-analysis': 'completed' });

      // Stage 2: Ideas Generation
      setActiveWorkflow('ideas');
      setProcessingStates(prev => ({ ...prev, 'ideas': 'processing' }));
      await new Promise(resolve => setTimeout(resolve, 1800));
      setProcessingStates(prev => ({ ...prev, 'ideas': 'completed' }));

      // Stage 3: Content Briefs (parallel)
      setActiveWorkflow('briefs');
      setProcessingStates(prev => ({ ...prev, 'briefs': 'processing' }));
      await new Promise(resolve => setTimeout(resolve, 2200));
      setProcessingStates(prev => ({ ...prev, 'briefs': 'completed' }));

      // Stage 4: Content Generation & Validation (parallel)
      setActiveWorkflow('content');
      setProcessingStates(prev => ({ 
        ...prev, 
        'content': 'processing',
        'validation': 'processing'
      }));
      await new Promise(resolve => setTimeout(resolve, 2500));
      setProcessingStates(prev => ({ 
        ...prev, 
        'content': 'completed',
        'validation': 'completed'
      }));

      // Hold completed state
      await new Promise(resolve => setTimeout(resolve, 3000));
    };

    const interval = setInterval(runWorkflow, 12000);
    runWorkflow(); // Run immediately
    
    return () => clearInterval(interval);
  }, []);

  const getStageColors = (color, status = 'idle') => {
    const colorMap = {
      purple: {
        idle: 'from-purple-500/20 to-purple-600/20 border-purple-500/40',
        processing: 'from-purple-500/40 to-purple-600/40 border-purple-400 shadow-purple-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      yellow: {
        idle: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40',
        processing: 'from-yellow-500/40 to-yellow-600/40 border-yellow-400 shadow-yellow-400/50',
        completed: 'from-green-500/40 to-green-600/40 border-green-400 shadow-green-400/50'
      },
      blue: {
        idle: 'from-blue-500/20 to-blue-600/20 border-blue-500/40',
        processing: 'from-blue-500/40 to-blue-600/40 border-blue-400 shadow-blue-400/50',
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
      }
    };
    return colorMap[color]?.[status] || colorMap.purple.idle;
  };

  const getStatusColor = (status) => {
    const statusMap = {
      'completed': 'text-green-400 bg-green-500/10',
      'generating': 'text-blue-400 bg-blue-500/10',
      'ready_to_generate': 'text-yellow-400 bg-yellow-500/10'
    };
    return statusMap[status] || 'text-gray-400 bg-gray-500/10';
  };

  return (
    <div className="relative w-full h-[500px]">
      {/* Background Company DNA Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="versatilPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill={theme === 'dark' ? '#A855F7' : '#7C3AED'} opacity="0.3" />
              <path d="M 5 5 L 15 15 M 15 5 L 5 15" stroke={theme === 'dark' ? '#EC4899' : '#BE185D'} strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#versatilPattern)" />
        </svg>
      </motion.div>

      {/* Workflow Stages */}
      <div className="relative z-10">
        {workflowStages.map((stage, index) => {
          const IconComponent = stage.icon;
          const status = processingStates[stage.id] || 'idle';
          const isActive = activeWorkflow === stage.id;
          const colors = getStageColors(stage.color, status);
          
          return (
            <motion.div
              key={stage.id}
              className="absolute cursor-pointer group"
              style={{
                left: `${stage.position.x}%`,
                top: `${stage.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              whileHover={{ scale: 1.1, zIndex: 30 }}
            >
              {/* Stage Node */}
              <motion.div
                className={`relative w-20 h-20 rounded-2xl border-2 backdrop-blur-sm flex flex-col items-center justify-center p-2 transition-all duration-500 bg-gradient-to-br ${colors}`}
                animate={status === 'processing' ? {
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(236, 72, 153, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.3)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IconComponent className={`w-6 h-6 mb-1 ${
                  status === 'processing' ? 'text-white animate-pulse' :
                  status === 'completed' ? 'text-green-400' :
                  'text-gray-400'
                }`} />
                <div className="text-xs font-bold text-center text-white leading-tight">
                  {stage.title.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>

                {/* Processing Indicator */}
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
                <div className="text-xs font-semibold">{stage.title}</div>
                <div className="text-xs text-gray-500">{stage.description}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Data Flow Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
        <defs>
          <linearGradient id="versatilFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
            {(processingStates['dna-analysis'] || processingStates['ideas'] || processingStates['briefs']) && (
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </linearGradient>
        </defs>
        
        {/* Connection paths */}
        {[
          { from: { x: 10, y: 20 }, to: { x: 10, y: 60 } },
          { from: { x: 10, y: 60 }, to: { x: 50, y: 40 } },
          { from: { x: 50, y: 40 }, to: { x: 90, y: 30 } },
          { from: { x: 90, y: 30 }, to: { x: 90, y: 70 } }
        ].map((path, index) => (
          <motion.path
            key={index}
            d={`M ${path.from.x} ${path.from.y} L ${path.to.x} ${path.to.y}`}
            stroke="url(#versatilFlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ 
              pathLength: Object.keys(processingStates).length > 0 ? 1 : 0.5,
              opacity: Object.keys(processingStates).length > 0 ? 1 : 0.3
            }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          />
        ))}
      </svg>

      {/* Content Types Dashboard */}
      <motion.div
        className={`absolute bottom-4 left-4 right-4 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        } backdrop-blur-sm border border-gray-600/30 rounded-lg p-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold">Content Pipeline</h4>
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-gray-500">Live Processing</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {contentTypes.map((type, index) => (
            <motion.div
              key={index}
              className={`p-2 rounded text-xs ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">{type.title}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${getStatusColor(type.status)}`}>
                  {type.count}
                </span>
              </div>
              <div className="text-xs text-gray-500 capitalize">
                {type.status.replace('_', ' ')}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RAG Processing Indicator */}
      <motion.div
        className={`absolute top-4 right-4 ${
          theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100/80'
        } border border-purple-500/30 rounded-lg p-3`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-purple-500" />
          <div>
            <div className="text-xs font-semibold text-purple-600">RAG Engine</div>
            <div className="text-xs text-gray-500">Zero Hallucinations</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VersatilContentEngine;