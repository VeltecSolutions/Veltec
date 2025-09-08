import React from 'react';
import { motion } from 'framer-motion';

const VeltecLogo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl"
  };

  return (
    <motion.div 
      className={`flex items-center font-poppins font-bold ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-glow"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(138, 43, 226, 0.3)",
            "0 0 30px rgba(138, 43, 226, 0.5)",
            "0 0 20px rgba(138, 43, 226, 0.3)"
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <motion.span
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          V
        </motion.span>
        
        {/* Efecto de brillo */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
          animate={{ 
            x: ["-100%", "100%"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      <motion.span 
        className="ml-3 text-gray-800 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ELTEC
      </motion.span>
      
      {/* Punto decorativo */}
      <motion.div 
        className="ml-1 w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};

export default VeltecLogo;
