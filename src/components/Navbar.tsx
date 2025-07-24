import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
    { name: 'STEMNN', path: '/stemnn' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="bg-white/95 backdrop-blur-lg text-gray-900 py-3 shadow-lg sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="container mx-auto flex flex-row justify-between items-center px-3 sm:px-4 lg:pl-8 lg:pr-2">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-4 mr-2 sm:mr-6 min-w-max">
            <div className="relative">
              <img src="/logo.png" alt="CalCoders Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg border-2 border-blue-500 hover:border-blue-600 transition-colors duration-200" />
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-lg sm:text-2xl lg:text-3xl font-black font-poppins tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">CalCoders</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <div className="flex flex-row items-center gap-1 mr-2 lg:mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group px-3 lg:px-4 py-2 rounded-xl font-semibold text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              {user && user.emailVerified ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 lg:space-x-3 px-3 lg:px-5 py-2 lg:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none transition-all duration-200">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs lg:text-sm font-bold">{(user.displayName || user.email?.split('@')[0] || 'U').charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-xs lg:text-sm hidden sm:inline">Hi, {user.displayName || user.email?.split('@')[0]}</span>
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 ml-1 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    <div className="p-2">
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200 font-medium">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm lg:text-base"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <X size={20} className="text-gray-700 sm:hidden" />
              ) : (
                <Menu size={20} className="text-gray-700 sm:hidden" />
              )}
              {isOpen ? (
                <X size={24} className="text-gray-700 hidden sm:block" />
              ) : (
                <Menu size={24} className="text-gray-700 hidden sm:block" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-lg mt-2 mx-2 sm:mt-3 sm:mx-4 rounded-2xl shadow-2xl border border-gray-200"
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm sm:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
              {user && user.emailVerified ? (
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-blue-50 rounded-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-white">{(user.displayName || user.email?.split('@')[0] || 'U').charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Hi, {user.displayName || user.email?.split('@')[0]}</span>
                  </div>
                  <button
                    onClick={() => { setIsOpen(false); handleLogout(); }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold text-white shadow-lg text-sm sm:text-base"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Logout
                    </span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-white shadow-lg text-center text-sm sm:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
