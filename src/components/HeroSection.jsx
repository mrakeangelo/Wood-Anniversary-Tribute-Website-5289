import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const HeroSection = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-olive-50 via-cream-50 to-walnut-50 dark:from-walnut-900 dark:via-walnut-800 dark:to-olive-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wood-grain opacity-30"></div>
      <div className="absolute inset-0 bg-leaf-pattern"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        🍃
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-16 text-4xl opacity-20"
      >
        🌿
      </motion.div>
      
      <motion.div
        animate={{ y: [-5, 15, -5], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 text-5xl opacity-20"
      >
        🌱
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-olive-100 dark:bg-olive-800 text-olive-800 dark:text-olive-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🪵</span>
            Wood Anniversary
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-walnut-800 dark:text-cream-100 mb-6 leading-tight"
        >
          Planted in
          <br />
          <span className="text-olive-600 dark:text-olive-400">Love</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl font-serif text-walnut-600 dark:text-cream-200 mb-8 italic"
        >
          Five years. A home, a journey, a life in bloom.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg text-walnut-500 dark:text-cream-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Like trees that grow stronger with each passing season, our love has deepened its roots 
          and stretched toward the light, creating a canopy of memories and dreams.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={scrollToTimeline}
          className="inline-flex items-center gap-2 bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore Our Roots
          <SafeIcon icon={FiChevronDown} className="text-xl" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <SafeIcon icon={FiChevronDown} className="text-2xl text-walnut-400 dark:text-cream-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;