import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SafeIcon from '../common/SafeIcon';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-walnut-900/80 backdrop-blur-lg border-b border-olive-200 dark:border-walnut-700"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-sm">🌲</span>
          </div>
          <span className="font-serif text-lg text-walnut-800 dark:text-cream-100">Planted in Love</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-olive-100 dark:hover:bg-walnut-700 transition-colors"
          >
            <SafeIcon 
              icon={isDark ? FiSun : FiMoon} 
              className="text-xl text-walnut-600 dark:text-cream-200" 
            />
          </button>
          
          <Link
            to="/admin"
            className="p-2 rounded-lg hover:bg-olive-100 dark:hover:bg-walnut-700 transition-colors"
          >
            <SafeIcon 
              icon={FiSettings} 
              className="text-xl text-walnut-600 dark:text-cream-200" 
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;