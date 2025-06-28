import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-white font-semibold">Yuvraj Tyagi</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for a safer digital world</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 Yuvraj Tyagi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;