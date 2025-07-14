import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiDownload, FiShare2, FiCopy } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Planted in Love - 5th Anniversary Tribute',
        text: 'Check out this beautiful anniversary tribute website!',
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCreateTribute = () => {
    alert('This would redirect to a form to create your own anniversary tribute!');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-olive-600 via-walnut-600 to-olive-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wood-grain opacity-10"></div>
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        💕
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-5xl opacity-20"
      >
        🌺
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <SafeIcon icon={FiHeart} className="text-6xl mx-auto mb-6 text-cream-100" />
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Love Stories Deserve to be Celebrated
            </h2>
            <p className="text-xl text-cream-200 max-w-2xl mx-auto leading-relaxed">
              Every love story is unique and beautiful. Create your own digital tribute 
              to celebrate the milestones that matter most to your relationship.
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={handleCreateTribute}
              className="inline-flex items-center gap-2 bg-cream-100 text-walnut-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <SafeIcon icon={FiHeart} />
              Create Your Own Tribute
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-cream-200 text-cream-100 px-6 py-3 rounded-full font-medium hover:bg-cream-100 hover:text-walnut-800 transition-all duration-300"
              >
                <SafeIcon icon={FiDownload} />
                Print Story
              </button>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-cream-200 text-cream-100 px-6 py-3 rounded-full font-medium hover:bg-cream-100 hover:text-walnut-800 transition-all duration-300"
              >
                <SafeIcon icon={FiShare2} />
                Share
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-serif text-lg mb-2">Mobile-First Design</h4>
              <p className="text-cream-200 text-sm">
                Beautiful on every device, from phone to desktop
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-serif text-lg mb-2">Customizable Themes</h4>
              <p className="text-cream-200 text-sm">
                Choose colors and styles that reflect your unique love story
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💾</span>
              </div>
              <h4 className="font-serif text-lg mb-2">Digital Keepsake</h4>
              <p className="text-cream-200 text-sm">
                Preserve your memories forever with downloadable PDFs
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;