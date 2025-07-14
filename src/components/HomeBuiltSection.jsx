import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHome, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const HomeBuiltSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const accomplishments = [
    {
      icon: FiHome,
      title: "Our Forever Home",
      description: "From a tiny apartment to our dream house with a garden where love grows alongside the flowers.",
      achievement: "Bought our first home in 2023"
    },
    {
      icon: FiTrendingUp,
      title: "Career Growth",
      description: "Supporting each other's dreams led to promotions, new opportunities, and shared success.",
      achievement: "Both achieved major career milestones"
    },
    {
      icon: FiHeart,
      title: "Emotional Healing",
      description: "Together we've learned to heal old wounds and create new patterns of love and trust.",
      achievement: "Grew stronger through challenges"
    },
    {
      icon: FiAward,
      title: "Shared Dreams",
      description: "From learning to cook together to planning our future family, every dream is sweeter shared.",
      achievement: "Built a life aligned with our values"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-olive-50 via-walnut-50 to-cream-50 dark:from-olive-900 dark:via-walnut-900 dark:to-cream-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-walnut-800 dark:text-cream-100 mb-6">
            The Home We Built
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-walnut-600 dark:text-cream-200 mb-6">
              Five years ago, we were two separate trees. Today, we're a forest.
            </p>
            <blockquote className="text-2xl font-serif italic text-olive-700 dark:text-olive-300 border-l-4 border-olive-600 pl-6">
              "We didn't just build a home. We built each other."
            </blockquote>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {accomplishments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-walnut-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={item.icon} className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-walnut-800 dark:text-cream-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-walnut-600 dark:text-cream-200 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-olive-100 dark:bg-olive-800 text-olive-700 dark:text-olive-200 px-3 py-1 rounded-full text-sm font-medium">
                    <span>✓</span>
                    {item.achievement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-walnut-100 to-olive-100 dark:from-walnut-800 dark:to-olive-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-wood-grain opacity-10"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🏡</div>
              <h3 className="text-2xl font-serif text-walnut-800 dark:text-cream-100 mb-4">
                Home is Where Our Story Lives
              </h3>
              <p className="text-walnut-600 dark:text-cream-200 max-w-2xl mx-auto leading-relaxed">
                Every room holds our laughter, every corner keeps our secrets, and every window 
                frames our dreams. This isn't just where we live—it's where our love has learned to flourish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBuiltSection;