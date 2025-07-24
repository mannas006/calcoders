import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="CalCoders Logo" className="h-12 w-12 rounded-xl shadow-lg border-2 border-blue-400" />
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">CalCoders</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering the next generation through innovative STEM and coding education programs. 
              Building tomorrow's technology leaders today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Classes</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Team</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Partners</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/testimonials" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">Donate</Link></li>
              <li><Link to="/stemnn" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium">STEMNN</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-medium mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CalCoders. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Made with ❤️ in Fremont, CA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
