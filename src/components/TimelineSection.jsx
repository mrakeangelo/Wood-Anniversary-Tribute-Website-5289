import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiHome, FiTrendingUp, FiCompass, FiAward } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineData = [
    {
      year: 1,
      title: "Paper",
      subtitle: "The Foundation",
      icon: FiHeart,
      description: "Our first year was like delicate paper - fragile yet full of potential. We learned to write our story together, one day at a time.",
      memory: "Remember our first apartment? The way we hung fairy lights and called it home.",
      color: "from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900"
    },
    {
      year: 2,
      title: "Trust",
      subtitle: "Deep Roots",
      icon: FiHome,
      description: "Year two brought deeper understanding. Like cotton, we became more durable, learning to weather storms together.",
      memory: "The night we talked until sunrise about our dreams and fears - that's when I knew.",
      color: "from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900"
    },
    {
      year: 3,
      title: "Growth",
      subtitle: "Branching Out",
      icon: FiTrendingUp,
      description: "Our third year was leather - strong, flexible, beautiful with age. We stretched beyond our comfort zones together.",
      memory: "The road trip where we got lost but found ourselves laughing in the rain.",
      color: "from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900"
    },
    {
      year: 4,
      title: "Adventure",
      subtitle: "New Horizons",
      icon: FiCompass,
      description: "Like flowers blooming in their fourth season, we discovered new facets of our love and partnership.",
      memory: "Building our first garden together - watching things grow under our care.",
      color: "from-yellow-100 to-amber-100 dark:from-yellow-900 dark:to-amber-900"
    },
    {
      year: 5,
      title: "Strength",
      subtitle: "Wood Anniversary",
      icon: FiAward,
      description: "Now we are wood - strong, grounded, and beautiful. Our love has grown into something that can weather any storm.",
      memory: "Today, looking back at all we've built, all we've become. Ready for whatever comes next.",
      color: "from-walnut-100 to-olive-100 dark:from-walnut-800 dark:to-olive-800"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-cream-50 dark:bg-walnut-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-walnut-800 dark:text-cream-100 mb-4">
            Five Rings of Our Story
          </h2>
          <p className="text-xl text-walnut-600 dark:text-cream-200 max-w-2xl mx-auto">
            Each year has added another ring to our tree of love, marking growth, strength, and deeper roots.
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 lg:max-w-md">
                <div className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white dark:bg-walnut-800 rounded-full flex items-center justify-center">
                      <SafeIcon icon={item.icon} className="text-2xl text-olive-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-walnut-800 dark:text-walnut-100">
                        Year {item.year}: {item.title}
                      </h3>
                      <p className="text-walnut-600 dark:text-walnut-200 font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-walnut-700 dark:text-walnut-200 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <blockquote className="border-l-4 border-olive-600 pl-4 italic text-walnut-600 dark:text-walnut-300">
                    "{item.memory}"
                  </blockquote>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 lg:max-w-md">
                <div className="aspect-square bg-gradient-to-br from-olive-200 to-walnut-200 dark:from-olive-800 dark:to-walnut-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl opacity-20">
                    {item.year === 1 && '💕'}
                    {item.year === 2 && '🏠'}
                    {item.year === 3 && '🌱'}
                    {item.year === 4 && '🌸'}
                    {item.year === 5 && '🌳'}
                  </div>
                  <div className="absolute inset-0 bg-wood-grain opacity-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;