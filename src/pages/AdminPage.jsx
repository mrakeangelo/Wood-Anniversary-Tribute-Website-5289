import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiEdit3 } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'planted2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream-50 dark:bg-walnut-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-walnut-800 rounded-2xl shadow-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <SafeIcon icon={FiLock} className="mx-auto text-4xl text-olive-600 mb-4" />
            <h1 className="text-2xl font-serif text-walnut-800 dark:text-cream-100">Admin Access</h1>
            <p className="text-walnut-600 dark:text-cream-200 mt-2">Enter password to edit content</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-olive-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 dark:bg-walnut-700 dark:border-walnut-600 dark:text-cream-100"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-olive-600 text-white py-3 rounded-lg hover:bg-olive-700 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-walnut-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-walnut-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <SafeIcon icon={FiEdit3} className="text-3xl text-olive-600" />
            <h1 className="text-3xl font-serif text-walnut-800 dark:text-cream-100">Content Editor</h1>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-olive-50 dark:bg-walnut-700 rounded-lg">
              <h3 className="font-semibold text-olive-800 dark:text-olive-200 mb-2">Timeline Stories</h3>
              <p className="text-olive-600 dark:text-olive-300">Edit the five-year journey stories and memories.</p>
              <button className="mt-2 text-olive-600 hover:text-olive-800 font-medium">Edit →</button>
            </div>
            
            <div className="p-4 bg-olive-50 dark:bg-walnut-700 rounded-lg">
              <h3 className="font-semibold text-olive-800 dark:text-olive-200 mb-2">Photo Gallery</h3>
              <p className="text-olive-600 dark:text-olive-300">Upload and manage milestone photos.</p>
              <button className="mt-2 text-olive-600 hover:text-olive-800 font-medium">Edit →</button>
            </div>
            
            <div className="p-4 bg-olive-50 dark:bg-walnut-700 rounded-lg">
              <h3 className="font-semibold text-olive-800 dark:text-olive-200 mb-2">Personal Messages</h3>
              <p className="text-olive-600 dark:text-olive-300">Update reflections and anniversary promises.</p>
              <button className="mt-2 text-olive-600 hover:text-olive-800 font-medium">Edit →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;