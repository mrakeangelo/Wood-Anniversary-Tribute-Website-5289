import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlay, FiPause, FiHeart } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const ReflectionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeMessage, setActiveMessage] = useState(0);

  const messages = [
    {
      title: "From My Heart to Yours",
      author: "Sarah",
      content: "Five years ago, I thought I knew what love was. But loving you has taught me that love isn't just a feeling - it's a choice we make every single day. It's in the way you bring me coffee in the morning, how you listen when I'm excited about something silly, and how you hold space for all my dreams. You've shown me that home isn't a place, it's a person. And you, my love, are my forever home.",
      highlight: "You've shown me that home isn't a place, it's a person."
    },
    {
      title: "What I've Learned",
      author: "Michael",
      content: "These five years have been the greatest adventure of my life. I've learned that marriage isn't about finding someone you can live with - it's about finding someone you can't imagine living without. You challenge me to be better, support me when I fall, and celebrate every victory with me. Watching you grow into the incredible woman you are today has been my greatest privilege. Here's to growing old together, one ring at a time.",
      highlight: "Marriage isn't about finding someone you can live with - it's about finding someone you can't imagine living without."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-walnut-50 via-cream-50 to-olive-50 dark:from-walnut-800 dark:via-walnut-900 dark:to-olive-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-walnut-800 dark:text-cream-100 mb-4">
            Reflections from the Heart
          </h2>
          <p className="text-xl text-walnut-600 dark:text-cream-200">
            Words that capture what five years of love has taught us
          </p>
        </motion.div>

        <div className="space-y-8">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white dark:bg-walnut-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHeart} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-walnut-800 dark:text-cream-100">
                    {message.title}
                  </h3>
                  <p className="text-walnut-600 dark:text-cream-200">— {message.author}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-walnut-700 dark:text-cream-200 leading-relaxed mb-6">
                  {message.content}
                </p>
                
                <blockquote className="border-l-4 border-olive-600 pl-6 bg-olive-50 dark:bg-olive-900 p-4 rounded-r-lg">
                  <p className="text-olive-800 dark:text-olive-200 font-medium italic">
                    "{message.highlight}"
                  </p>
                </blockquote>
              </div>

              {/* Audio Player Placeholder */}
              <div className="mt-6 p-4 bg-olive-50 dark:bg-olive-900 rounded-lg">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 bg-olive-600 rounded-full flex items-center justify-center hover:bg-olive-700 transition-colors">
                    <SafeIcon icon={FiPlay} className="text-white ml-1" />
                  </button>
                  <div className="flex-1">
                    <p className="text-olive-800 dark:text-olive-200 font-medium">
                      Listen to personal message
                    </p>
                    <div className="w-full bg-olive-200 dark:bg-olive-700 h-2 rounded-full mt-2">
                      <div className="w-0 bg-olive-600 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-olive-600 dark:text-olive-300 text-sm">0:00 / 2:34</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionsSection;