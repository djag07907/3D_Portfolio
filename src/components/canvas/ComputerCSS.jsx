// CSS-only computer alternative - lightweight replacement for 3D model
import React from 'react';
import { motion } from 'framer-motion';

const ComputerCSS = ({ isMobile }) => {
  return (
    <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`relative ${isMobile ? 'scale-50' : 'scale-75'} origin-bottom`}
      >
        {/* Computer Base */}
        <div className="relative">
          {/* Monitor Stand */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg"></div>
          
          {/* Monitor Base */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full"></div>
          
          {/* Monitor Screen */}
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(147, 94, 255, 0.3)',
                '0 0 40px rgba(147, 94, 255, 0.5)',
                '0 0 20px rgba(147, 94, 255, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="w-48 h-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border-4 border-gray-600 relative overflow-hidden"
          >
            {/* Screen Glow */}
            <div className="absolute inset-2 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent rounded"></div>
            
            {/* Fake Code Lines */}
            <div className="absolute top-4 left-4 right-4 space-y-1">
              <motion.div
                animate={{ width: ['60%', '80%', '60%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-green-400 rounded opacity-60"
              ></motion.div>
              <div className="h-1 bg-blue-400 rounded opacity-40 w-3/4"></div>
              <motion.div
                animate={{ width: ['40%', '90%', '40%'] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="h-1 bg-purple-400 rounded opacity-50"
              ></motion.div>
              <div className="h-1 bg-yellow-400 rounded opacity-30 w-1/2"></div>
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          </motion.div>
          
          {/* Keyboard */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg">
            {/* Keyboard Keys */}
            <div className="grid grid-cols-12 gap-0.5 p-1 h-full">
              {Array.from({ length: 24 }, (_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    backgroundColor: Math.random() > 0.95 ? '#935eff' : '#374151'
                  }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: Math.random() * 5 }}
                  className="bg-gray-600 rounded-sm"
                ></motion.div>
              ))}
            </div>
          </div>
          
          {/* Mouse */}
          <motion.div
            animate={{ x: [0, 2, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 right-8 w-4 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"
          ></motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-20 left-0 w-full">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className={`absolute w-2 h-2 bg-purple-500 rounded-full`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${Math.sin(i) * 20}px`,
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ComputerCSS;