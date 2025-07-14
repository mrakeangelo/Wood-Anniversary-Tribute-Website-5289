import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEdit3, FiCheck, FiHeart } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const PromisesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [promises, setPromises] = useState([
    {
      id: 1,
      text: "To continue choosing each other every single day, even when it's hard",
      editable: false
    },
    {
      id: 2,
      text: "To create new adventures while cherishing our quiet moments at home",
      editable: false
    },
    {
      id: 3,
      text: "To support each other's dreams with the same passion we felt five years ago",
      editable: false
    },
    {
      id: 4,
      text: "To build a family (furry and human) filled with love, laughter, and acceptance",
      editable: false
    },
    {
      id: 5,
      text: "To never stop growing together, learning together, and becoming better together",
      editable: false
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (promise) => {
    setEditingId(promise.id);
    setEditText(promise.text);
  };

  const saveEdit = () => {
    setPromises(promises.map(p => 
      p.id === editingId ? { ...p, text: editText } : p
    ));
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const downloadPDF = () => {
    // This would integrate with jsPDF to create a downloadable PDF
    alert('PDF download feature would be implemented here with jsPDF');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream-50 via-olive-50 to-walnut-50 dark:from-cream-900 dark:via-olive-900 dark:to-walnut-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-walnut-800 dark:text-cream-100 mb-6">
            Anniversary Promises
          </h2>
          <p className="text-xl text-walnut-600 dark:text-cream-200 mb-8">
            Five promises for the next five years of our beautiful journey
          </p>
          <div className="inline-flex items-center gap-2 bg-olive-100 dark:bg-olive-800 text-olive-800 dark:text-olive-200 px-4 py-2 rounded-full text-sm font-medium">
            <SafeIcon icon={FiHeart} />
            Our Sacred Commitments
          </div>
        </motion.div>

        {/* Promises Contract */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-walnut-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-olive-600 to-walnut-600 p-6 text-white">
            <h3 className="text-2xl font-serif text-center">
              Five Promises for Our Next Five Years
            </h3>
            <p className="text-center mt-2 opacity-90">
              Made with love on our 5th Anniversary
            </p>
          </div>

          {/* Promises List */}
          <div className="p-8">
            <div className="space-y-6">
              {promises.map((promise, index) => (
                <motion.div
                  key={promise.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-olive-50 dark:bg-olive-900 rounded-xl"
                >
                  <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    {editingId === promise.id ? (
                      <div className="space-y-3">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full p-3 border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 dark:bg-walnut-700 dark:border-walnut-600 dark:text-cream-100 resize-none"
                          rows="3"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={saveEdit}
                            className="flex items-center gap-1 bg-olive-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-olive-700 transition-colors"
                          >
                            <SafeIcon icon={FiCheck} />
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-walnut-700 dark:text-cream-200 leading-relaxed">
                          {promise.text}
                        </p>
                        <button
                          onClick={() => startEdit(promise)}
                          className="text-olive-600 hover:text-olive-800 p-1 rounded"
                        >
                          <SafeIcon icon={FiEdit3} className="text-sm" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-olive-200 dark:border-olive-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="h-16 border-b-2 border-olive-600 mb-2 flex items-end justify-center">
                    <span className="font-serif text-2xl text-olive-600 pb-2">Sarah ♥</span>
                  </div>
                  <p className="text-walnut-600 dark:text-cream-300 text-sm">Signature</p>
                </div>
                <div className="text-center">
                  <div className="h-16 border-b-2 border-olive-600 mb-2 flex items-end justify-center">
                    <span className="font-serif text-2xl text-olive-600 pb-2">Michael ♥</span>
                  </div>
                  <p className="text-walnut-600 dark:text-cream-300 text-sm">Signature</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-walnut-500 dark:text-cream-400 text-sm">
                  Sealed with love on {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 bg-walnut-600 hover:bg-walnut-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <SafeIcon icon={FiDownload} />
            Download as PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PromisesSection;