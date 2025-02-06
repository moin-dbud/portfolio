import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            © {currentYear} All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            Developed with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Moin Sheikh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;