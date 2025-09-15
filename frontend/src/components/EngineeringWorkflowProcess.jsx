import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Send, RefreshCw, CheckCircle, Zap, GitBranch, Cpu, Database, Cloud } from "lucide-react";

const EngineeringWorkflowProcess = () => {
  const { theme } = useTheme();
  const [activeStage, setActiveStage] = useState(0);
  const [workflowState, setWorkflowState] = useState('idle');
  const [processedData, setProcessedData] = useState([]);

  const workflowStages = [
    {
      id: 'intake',
      title: 'AI Request Processing',
      icon: Send,
      description: 'Intelligent brief analysis and requirement extraction',
      techStack: ['NLP', 'Intent Detection', 'Auto-categorization'],
      duration: '0.3s',
      color: 'blue'
    },
    {
      id: 'orchestration', 
      title: 'Multi-Agent Orchestration',
      icon: GitBranch,
      description: 'Dynamic team assembly based on project complexity',
      techStack: ['Agent Router', 'Load Balancer', 'Skill Matching'],
      duration: '1.2s',
      color: 'purple'
    },
    {
      id: 'processing',
      title: 'Parallel Processing',
      icon: Cpu,
      description: 'Concurrent creative workstreams with real-time sync',
      techStack: ['GPU Acceleration', 'Distributed Computing', 'Version Control'],
      duration: '2.1s',
      color: 'cyan'
    },
    {
      id: 'intelligence',
      title: 'Contextual Intelligence',
      icon: Zap,
      description: 'Brand consistency and quality assurance checks',
      techStack: ['Brand AI', 'Style Transfer', 'Quality Gates'],
      duration: '0.8s',
      color: 'green'
    },
    {
      id: 'delivery',
      title: 'Smart Delivery Pipeline',
      icon: CheckCircle,
      description: 'Automated formatting and multi-channel deployment',
      techStack: ['Auto-Export', 'Cloud Storage', 'CDN Distribution'],
      duration: '0.5s',
      color: 'orange'
    }
  ];

  // Orchestrated workflow animation
  useEffect(() => {
    const runWorkflow = () => {
      setWorkflowState('running');
      setProcessedData([]);
      
      workflowStages.forEach((stage, index) => {
        setTimeout(() => {
          setActiveStage(index);
          setProcessedData(prev => [...prev, stage.id]);
          
          // Add some data processing visualization
          setTimeout(() => {
            if (index === workflowStages.length - 1) {
              setWorkflowState('completed');
              setTimeout(() => {
                setWorkflowState('idle');
                setActiveStage(0);
                setProcessedData([]);
              }, 2000);
            }
          }, parseFloat(stage.duration) * 1000);
        }, index * 1500);
      });
    };

    const interval = setInterval(runWorkflow, 12000);
    runWorkflow(); // Run immediately
    
    return () => clearInterval(interval);
  }, []);

  const getStageStyles = (stage, index) => {
    const isActive = activeStage === index;
    const isCompleted = processedData.includes(stage.id);
    const isUpcoming = index > activeStage;
    
    const colorMap = {
      blue: theme === 'dark' ? 'blue-500' : 'blue-600',
      purple: theme === 'dark' ? 'purple-500' : 'purple-600', 
      cyan: theme === 'dark' ? 'cyan-500' : 'cyan-600',
      green: theme === 'dark' ? 'green-500' : 'green-600',
      orange: theme === 'dark' ? 'orange-500' : 'orange-600'
    };

    const baseClasses = "relative p-6 rounded-2xl border transition-all duration-1000 group";
    
    if (isActive) {
      return `${baseClasses} bg-${colorMap[stage.color]}/10 border-${colorMap[stage.color]}/50 shadow-lg shadow-${colorMap[stage.color]}/20 scale-105 z-10`;
    } else if (isCompleted) {
      return `${baseClasses} ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-600' 
          : 'bg-gray-100 border-gray-300'
      } opacity-60`;
    } else if (isUpcoming) {
      return `${baseClasses} ${
        theme === 'dark' 
          ? 'bg-gray-900/30 border-gray-700' 
          : 'bg-gray-50 border-gray-200'
      } opacity-40`;
    }
    
    return `${baseClasses} ${
      theme === 'dark' 
        ? 'bg-gray-800/30 border-gray-700' 
        : 'bg-white border-gray-200'
    }`;
  };

  const getDataFlowVisualization = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
              {workflowState === 'running' && (
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="-100 0;400 0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main workflow pipeline */}
          <path
            d="M 20 150 L 380 150"
            stroke={workflowState === 'running' ? "url(#dataFlow)" : (theme === 'dark' ? '#374151' : '#9CA3AF')}
            strokeWidth="3"
            filter={workflowState === 'running' ? "url(#glow)" : "none"}
          />
          
          {/* Stage connection points */}
          {workflowStages.map((stage, index) => {
            const x = 50 + (index * 70);
            const isActive = activeStage === index;
            return (
              <g key={stage.id}>
                <circle
                  cx={x}
                  cy="150"
                  r={isActive ? "8" : "4"}
                  fill={isActive ? '#3B82F6' : (theme === 'dark' ? '#6B7280' : '#9CA3AF')}
                  className="transition-all duration-500"
                >
                  {isActive && (
                    <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
                  )}
                </circle>
                
                {/* Data processing indicators */}
                {isActive && (
                  <g>
                    <circle cx={x} cy="130" r="2" fill="#8B5CF6" opacity="0.8">
                      <animate attributeName="cy" values="130;110;130" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={x-10} cy="135" r="1.5" fill="#3B82F6" opacity="0.6">
                      <animate attributeName="cy" values="135;115;135" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={x+10} cy="140" r="1" fill="#10B981" opacity="0.7">
                      <animate attributeName="cy" values="140;120;140" dur="0.8s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Workflow State Indicator */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className={`w-3 h-3 rounded-full ${
              workflowState === 'running' ? 'bg-green-500 animate-pulse' :
              workflowState === 'completed' ? 'bg-blue-500' :
              'bg-gray-400'
            } transition-colors duration-300`} />
            <span className="text-sm font-medium">
              {workflowState === 'running' ? 'AI Workflow Active' :
               workflowState === 'completed' ? 'Delivery Complete' :
               'System Ready'}
            </span>
            <Database className="w-4 h-4 opacity-60" />
          </div>
        </div>

        {/* Engineering Workflow Visualization */}
        <div className="relative">
          {getDataFlowVisualization()}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {workflowStages.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = activeStage === index;
              
              return (
                <div key={stage.id} className={getStageStyles(stage, index)}>
                  {/* Active processing indicator */}
                  {isActive && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-ping" />
                      <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      isActive 
                        ? `bg-${stage.color === 'blue' ? 'blue' : stage.color === 'purple' ? 'purple' : stage.color === 'cyan' ? 'cyan' : stage.color === 'green' ? 'green' : 'orange'}-500/20` 
                        : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    } transition-colors duration-500`}>
                      <IconComponent className={`w-6 h-6 ${
                        isActive ? `text-${stage.color === 'blue' ? 'blue' : stage.color === 'purple' ? 'purple' : stage.color === 'cyan' ? 'cyan' : stage.color === 'green' ? 'green' : 'orange'}-500` : 'text-gray-500'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{stage.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {stage.duration}
                        </span>
                      </div>
                      
                      <p className={`text-sm mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {stage.description}
                      </p>
                      
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2">
                        {stage.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`text-xs px-3 py-1 rounded-full ${
                              isActive 
                                ? `bg-${stage.color === 'blue' ? 'blue' : stage.color === 'purple' ? 'purple' : stage.color === 'cyan' ? 'cyan' : stage.color === 'green' ? 'green' : 'orange'}-500/20 text-${stage.color === 'blue' ? 'blue' : stage.color === 'purple' ? 'purple' : stage.color === 'cyan' ? 'cyan' : stage.color === 'green' ? 'green' : 'orange'}-400 border border-${stage.color === 'blue' ? 'blue' : stage.color === 'purple' ? 'purple' : stage.color === 'cyan' ? 'cyan' : stage.color === 'green' ? 'green' : 'orange'}-500/30`
                                : theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                            } transition-colors duration-500`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Real-time metrics for active stage */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-gray-600/30">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Processing...</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-1">
                            <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{width: '70%'}} />
                          </div>
                          <Cloud className="w-3 h-3 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Metrics Dashboard */}
        <div className={`mt-12 p-6 rounded-2xl ${
          theme === 'dark' 
            ? 'bg-gray-900/50 border border-gray-800' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className="text-lg font-bold mb-4 text-center">Real-Time Engineering Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Processing Speed', value: '2.3s avg', trend: 'up', color: 'green' },
              { label: 'Quality Score', value: '98.7%', trend: 'up', color: 'blue' },
              { label: 'Active Agents', value: workflowState === 'running' ? activeStage + 1 : '0', trend: 'neutral', color: 'purple' },
              { label: 'Success Rate', value: '99.2%', trend: 'up', color: 'cyan' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold text-${metric.color}-500 mb-1`}>
                  {metric.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringWorkflowProcess;