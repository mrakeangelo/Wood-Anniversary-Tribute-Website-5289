import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiMail } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-walnut-800 dark:bg-walnut-900 text-cream-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-olive-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-lg">🌲</span>
            </div>
            <span className="font-serif text-2xl">Planted in Love</span>
          </div>

          {/* Main Message */}
          <p className="text-xl font-serif italic mb-8 text-cream-200">
            "Five years planted, a lifetime to grow"
          </p>

          {/* Date */}
          <div className="mb-8">
            <p className="text-cream-300">
              Celebrating our Wood Anniversary
            </p>
            <p className="text-cream-400 text-sm">
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="/admin"
              className="flex items-center gap-2 text-cream-300 hover:text-cream-100 transition-colors"
            >
              <SafeIcon icon={FiHeart} />
              Admin
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-cream-300 hover:text-cream-100 transition-colors"
            >
              <SafeIcon icon={FiMail} />
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-walnut-700">
            <p className="text-cream-400 text-sm">
              Made with love for Sarah & Michael • {new Date().getFullYear()}
            </p>
            <p className="text-cream-500 text-xs mt-2">
              Built with React, Tailwind CSS, and lots of ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;