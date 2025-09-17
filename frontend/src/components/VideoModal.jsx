import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const VideoModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', zIndex: 9999 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          className={`relative w-full max-w-6xl h-[90vh] mx-2 md:mx-4 border-2 flex flex-col ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-white border-gray-300'
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b-2 flex-shrink-0 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
              }`}>
                <Play className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`} />
              </div>
              <div>
                <h2 className={`text-xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  VERSATIL SHORT DEMO
                </h2>
                <p className={`text-xs font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  See how VERSATIL transforms content marketing
                </p>
              </div>
            </div>
            
            <motion.button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                theme === 'dark'
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-black'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Video Player */}
          <div className="flex-1 p-3 overflow-hidden">
            <video
              className={`w-full h-full rounded-lg border-2 ${
                theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}
              controls
              autoPlay
              preload="metadata"
              style={{ minHeight: '400px', objectFit: 'contain' }}
            >
              <source src="https://customer-assets.emergentagent.com/job_ai-orchestration-1/artifacts/io5g73k3_Marketing%20Envy_Marko%20talk-1%20%282%29.mp4" type="video/mp4" />
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Your browser does not support the video tag. 
                <a 
                  href="https://customer-assets.emergentagent.com/job_ai-orchestration-1/artifacts/io5g73k3_Marketing%20Envy_Marko%20talk-1%20%282%29.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-600 underline ml-1"
                >
                  Click here to download the video.
                </a>
              </p>
            </video>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default VideoModal;