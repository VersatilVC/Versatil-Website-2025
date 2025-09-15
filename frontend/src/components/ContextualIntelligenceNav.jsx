import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

const ContextualIntelligenceNav = ({ children }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const [contextualState, setContextualState] = useState({
    userIntent: 'browsing',
    pageContext: 'home',
    adaptiveElements: []
  });

  // AI-powered context detection
  useEffect(() => {
    const detectContext = () => {
      const path = location.pathname;
      let newContext = {
        userIntent: 'browsing',
        pageContext: path.substring(1) || 'home',
        adaptiveElements: []
      };

      // Contextual intelligence based on page
      switch (path) {
        case '/':
          newContext.userIntent = 'exploring';
          newContext.adaptiveElements = ['hero-focus', 'conversion-hints'];
          break;
        case '/platform':
          newContext.userIntent = 'learning';
          newContext.adaptiveElements = ['feature-highlight', 'demo-suggestion'];
          break;
        case '/cases':
          newContext.userIntent = 'researching';
          newContext.adaptiveElements = ['portfolio-focus', 'industry-filter'];
          break;
        case '/pricing':
          newContext.userIntent = 'evaluating';
          newContext.adaptiveElements = ['value-emphasis', 'comparison-helper'];
          break;
        case '/shop':
          newContext.userIntent = 'purchasing';
          newContext.adaptiveElements = ['product-recommendations', 'urgency-signals'];
          break;
        default:
          break;
      }

      setContextualState(newContext);
    };

    detectContext();
  }, [location.pathname]);

  // Smart navigation adaptation
  const getAdaptiveNavStyles = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    switch (contextualState.userIntent) {
      case 'exploring':
        return `${baseClasses} backdrop-blur-xl bg-background/90 border-b border-border/50`;
      case 'learning':
        return `${baseClasses} backdrop-blur-lg bg-background/95 border-b-2 border-blue-500/30`;
      case 'researching':
        return `${baseClasses} backdrop-blur-md bg-background/85 border-b border-purple-500/20`;
      case 'evaluating':
        return `${baseClasses} backdrop-blur-lg bg-background/95 border-b-2 border-green-500/30`;
      case 'purchasing':
        return `${baseClasses} backdrop-blur-xl bg-background/98 border-b-2 border-orange-500/30 shadow-lg`;
      default:
        return baseClasses;
    }
  };

  // Contextual micro-interactions
  const getContextualIndicators = () => {
    if (!contextualState.adaptiveElements.length) return null;

    return (
      <div className="absolute top-full left-0 right-0 pointer-events-none">
        {/* Smart breadcrumbs based on user intent */}
        {contextualState.userIntent === 'researching' && (
          <div className="flex justify-center pt-2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              theme === 'dark' 
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                : 'bg-purple-100/80 text-purple-700 border border-purple-300'
            } animate-fadeInUp`}>
              💡 Exploring success stories
            </div>
          </div>
        )}
        
        {contextualState.userIntent === 'evaluating' && (
          <div className="flex justify-center pt-2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              theme === 'dark' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-green-100/80 text-green-700 border border-green-300'
            } animate-fadeInUp`}>
              🎯 Finding the right plan
            </div>
          </div>
        )}
        
        {contextualState.userIntent === 'purchasing' && (
          <div className="flex justify-center pt-2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              theme === 'dark' 
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                : 'bg-orange-100/80 text-orange-700 border border-orange-300'
            } animate-fadeInUp`}>
              🛒 Ready to transform your brand
            </div>
          </div>
        )}
      </div>
    );
  };

  // Neural network visualization for context switching
  const getContextualAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 60">
          <defs>
            <linearGradient id="contextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor={
                contextualState.userIntent === 'exploring' ? '#3B82F6' :
                contextualState.userIntent === 'learning' ? '#3B82F6' :
                contextualState.userIntent === 'researching' ? '#8B5CF6' :
                contextualState.userIntent === 'evaluating' ? '#10B981' :
                '#F59E0B'
              } stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-100 0;400 0;-100 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          
          {/* Contextual data flow */}
          <path
            d="M 0 30 Q 100 15, 200 30 T 400 30"
            stroke="url(#contextGradient)"
            strokeWidth="1"
            fill="none"
            className="transition-all duration-1000"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className={`relative ${getAdaptiveNavStyles()}`}>
      {getContextualAnimation()}
      {children}
      {getContextualIndicators()}
      
      {/* Smart engagement hints */}
      {contextualState.adaptiveElements.includes('conversion-hints') && (
        <div className="absolute top-full right-6 mt-2 pointer-events-none">
          <div className={`px-2 py-1 rounded text-xs ${
            theme === 'dark' 
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
              : 'bg-blue-50 text-blue-600 border border-blue-200'
          } animate-bounce`} style={{ animationDuration: '2s' }}>
            ↓ Scroll to see magic
          </div>
        </div>
      )}
    </div>
  );
};

export default ContextualIntelligenceNav;