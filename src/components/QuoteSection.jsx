import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const QuoteSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Like trees, love grows quiet but strong.",
      author: "Anonymous",
      theme: "strength"
    },
    {
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
      theme: "togetherness"
    },
    {
      text: "In all the world, there is no heart for me like yours.",
      author: "Maya Angelou",
      theme: "devotion"
    },
    {
      text: "We were together. I forget the rest.",
      author: "Walt Whitman",
      theme: "presence"
    },
    {
      text: "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.",
      author: "Unknown",
      theme: "daily choice"
    }
  ];

  // Auto-rotate quotes
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [inView, quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-walnut-100 via-olive-100 to-cream-100 dark:from-walnut-800 dark:via-olive-800 dark:to-cream-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-wood-grain opacity-5"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-6xl opacity-10"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 text-5xl opacity-10"
      >
        🍃
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative">
            {/* Quote Container */}
            <div className="min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <span className="text-6xl text-olive-600 dark:text-olive-400 opacity-50 font-serif">"</span>
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-walnut-800 dark:text-cream-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                    {quotes[currentQuote].text}
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-px bg-olive-600"></div>
                    <cite className="text-lg text-walnut-600 dark:text-cream-300 not-italic">
                      {quotes[currentQuote].author}
                    </cite>
                    <div className="w-12 h-px bg-olive-600"></div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block bg-olive-100 dark:bg-olive-800 text-olive-700 dark:text-olive-200 px-3 py-1 rounded-full text-sm font-medium">
                      {quotes[currentQuote].theme}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevQuote}
                className="w-12 h-12 bg-white dark:bg-walnut-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <SafeIcon icon={FiChevronLeft} className="text-xl text-walnut-600 dark:text-cream-200" />
              </button>

              {/* Quote Indicators */}
              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentQuote
                        ? 'bg-olive-600 scale-125'
                        : 'bg-olive-300 dark:bg-olive-700 hover:bg-olive-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextQuote}
                className="w-12 h-12 bg-white dark:bg-walnut-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <SafeIcon icon={FiChevronRight} className="text-xl text-walnut-600 dark:text-cream-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;