import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const AIOrchestrationHero = () => {
  const { theme } = useTheme();
  const [activeNodes, setActiveNodes] = useState([]);
  const [dataFlows, setDataFlows] = useState([]);

  // AI Agent Nodes with sophisticated positioning
  const aiNodes = [
    { id: 'creative-ai', name: 'Creative AI', x: 15, y: 20, type: 'primary', pulse: true },
    { id: 'brand-ai', name: 'Brand AI', x: 75, y: 15, type: 'secondary', pulse: false },
    { id: 'content-ai', name: 'Content AI', x: 85, y: 45, type: 'tertiary', pulse: false },
    { id: 'strategy-ai', name: 'Strategy AI', x: 25, y: 70, type: 'secondary', pulse: false },
    { id: 'design-ai', name: 'Design AI', x: 65, y: 75, type: 'primary', pulse: false },
    { id: 'context-ai', name: 'Context AI', x: 45, y: 35, type: 'core', pulse: true },
  ];

  // Data flow connections with sophisticated timing
  const connections = [
    { from: 'creative-ai', to: 'context-ai', strength: 'strong', delay: 0 },
    { from: 'context-ai', to: 'brand-ai', strength: 'medium', delay: 800 },
    { from: 'context-ai', to: 'content-ai', strength: 'strong', delay: 1200 },
    { from: 'brand-ai', to: 'design-ai', strength: 'medium', delay: 1600 },
    { from: 'strategy-ai', to: 'context-ai', strength: 'strong', delay: 400 },
    { from: 'content-ai', to: 'design-ai', strength: 'medium', delay: 2000 },
  ];

  // Orchestrated activation sequence
  useEffect(() => {
    const activationSequence = [
      { nodeId: 'creative-ai', delay: 0 },
      { nodeId: 'context-ai', delay: 500 },
      { nodeId: 'strategy-ai', delay: 1000 },
      { nodeId: 'brand-ai', delay: 1500 },
      { nodeId: 'content-ai', delay: 2000 },
      { nodeId: 'design-ai', delay: 2500 },
    ];

    activationSequence.forEach(({ nodeId, delay }) => {
      setTimeout(() => {
        setActiveNodes(prev => [...prev, nodeId]);
        
        // Trigger data flows from this node
        connections
          .filter(conn => conn.from === nodeId)
          .forEach(conn => {
            setTimeout(() => {
              setDataFlows(prev => [...prev, `${conn.from}-${conn.to}-${Date.now()}`]);
            }, conn.delay);
          });
      }, delay);
    });

    // Reset and repeat the cycle
    const resetInterval = setInterval(() => {
      setActiveNodes([]);
      setDataFlows([]);
      // Restart the sequence after a brief pause
      setTimeout(() => {
        activationSequence.forEach(({ nodeId, delay }) => {
          setTimeout(() => {
            setActiveNodes(prev => [...prev, nodeId]);
            connections
              .filter(conn => conn.from === nodeId)
              .forEach(conn => {
                setTimeout(() => {
                  setDataFlows(prev => [...prev, `${conn.from}-${conn.to}-${Date.now()}`]);
                }, conn.delay);
              });
          }, delay);
        });
      }, 1000);
    }, 12000);

    return () => clearInterval(resetInterval);
  }, []);

  const getNodeStyle = (node) => {
    const isActive = activeNodes.includes(node.id);
    const baseClasses = "absolute rounded-full border-2 transition-all duration-1000 flex items-center justify-center backdrop-blur-sm";
    
    const sizeClasses = {
      core: "w-16 h-16 text-xs",
      primary: "w-12 h-12 text-xs",
      secondary: "w-10 h-10 text-xs",
      tertiary: "w-8 h-8 text-xs"
    };

    const colorClasses = theme === 'dark' 
      ? {
          core: isActive ? "bg-blue-500/30 border-blue-400 text-blue-300 shadow-lg shadow-blue-500/30" : "bg-gray-800/50 border-gray-600 text-gray-400",
          primary: isActive ? "bg-purple-500/20 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20" : "bg-gray-800/30 border-gray-700 text-gray-500",
          secondary: isActive ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20" : "bg-gray-800/20 border-gray-700 text-gray-600",
          tertiary: isActive ? "bg-green-500/20 border-green-400 text-green-300 shadow-sm shadow-green-500/20" : "bg-gray-800/10 border-gray-700 text-gray-600"
        }
      : {
          core: isActive ? "bg-blue-100/80 border-blue-500 text-blue-700 shadow-lg shadow-blue-500/20" : "bg-gray-100/50 border-gray-300 text-gray-500",
          primary: isActive ? "bg-purple-100/60 border-purple-500 text-purple-700 shadow-lg shadow-purple-500/20" : "bg-gray-100/30 border-gray-400 text-gray-600",
          secondary: isActive ? "bg-cyan-100/60 border-cyan-500 text-cyan-700 shadow-md shadow-cyan-500/20" : "bg-gray-100/20 border-gray-400 text-gray-600",
          tertiary: isActive ? "bg-green-100/60 border-green-500 text-green-700 shadow-sm shadow-green-500/20" : "bg-gray-100/10 border-gray-400 text-gray-600"
        };

    return `${baseClasses} ${sizeClasses[node.type]} ${colorClasses[node.type]} ${
      isActive ? 'scale-110' : 'scale-90'
    } ${node.pulse && isActive ? 'animate-pulse' : ''}`;
  };

  const getConnectionPath = (fromNode, toNode) => {
    const from = aiNodes.find(n => n.id === fromNode);
    const to = aiNodes.find(n => n.id === toNode);
    
    if (!from || !to) return "";
    
    const startX = from.x;
    const startY = from.y;
    const endX = to.x;
    const endY = to.y;
    
    // Create a smooth curved path
    const controlX1 = startX + (endX - startX) * 0.3;
    const controlY1 = startY - 10;
    const controlX2 = endX - (endX - startX) * 0.3;
    const controlY2 = endY - 10;
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="neuralGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill={theme === 'dark' ? '#3B82F6' : '#1E40AF'} opacity="0.3" />
            </pattern>
            
            {/* Animated gradient for data flows */}
            <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor={theme === 'dark' ? '#3B82F6' : '#1E40AF'} stopOpacity="0.8" />
              <stop offset="70%" stopColor={theme === 'dark' ? '#8B5CF6' : '#7C3AED'} stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;100 0;-100 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          
          <rect width="100" height="100" fill="url(#neuralGrid)" />
          
          {/* Dynamic Connection Lines */}
          {connections.map((conn, index) => {
            const isFlowing = dataFlows.some(flow => flow.includes(`${conn.from}-${conn.to}`));
            return (
              <path
                key={`${conn.from}-${conn.to}-${index}`}
                d={getConnectionPath(conn.from, conn.to)}
                stroke={isFlowing ? "url(#dataFlowGradient)" : (theme === 'dark' ? '#374151' : '#9CA3AF')}
                strokeWidth={isFlowing ? "0.3" : "0.1"}
                fill="none"
                opacity={isFlowing ? 0.8 : 0.3}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
      </div>

      {/* AI Agent Nodes */}
      <div className="relative w-full h-full">
        {aiNodes.map((node) => (
          <div
            key={node.id}
            className={getNodeStyle(node)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: `translate(-50%, -50%) ${activeNodes.includes(node.id) ? 'scale(1.1)' : 'scale(0.9)'}`
            }}
          >
            <span className="font-medium text-center leading-tight px-1">
              {node.name.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-blue-400/40' : 'bg-blue-600/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `aiParticleFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contextual Intelligence Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 w-32 h-32 rounded-full ${
          theme === 'dark' 
            ? 'bg-gradient-radial from-purple-500/10 to-transparent' 
            : 'bg-gradient-radial from-purple-300/20 to-transparent'
        } animate-pulse`} 
        style={{ animationDuration: '4s' }} />
        
        <div className={`absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full ${
          theme === 'dark' 
            ? 'bg-gradient-radial from-cyan-500/10 to-transparent' 
            : 'bg-gradient-radial from-cyan-300/20 to-transparent'
        } animate-pulse`} 
        style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>

      <style jsx>{`
        @keyframes aiParticleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-15px) translateX(5px);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px) translateX(-3px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-12px) translateX(8px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AIOrchestrationHero;