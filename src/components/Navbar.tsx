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
    { name: 'Partners', path: '/partners' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
    { name: 'STEMNN', path: '/stemnn' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="bg-deep-blue text-white-light p-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex flex-row justify-between items-center px-2 sm:px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="CalCoders Logo" className="h-8 w-8" />
          <span className="text-xl sm:text-2xl font-bold font-poppins">CalCoders</span>
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex flex-wrap space-x-2 sm:space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-accent-orange transition-colors duration-300 py-2"
              >
                {link.name}
              </Link>
            ))}
            {user && user.emailVerified ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-700 text-white-light font-semibold focus:outline-none">
                  <span>Hi, {user.displayName || user.email?.split('@')[0]}</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-accent-orange px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center ml-2">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-deep-blue mt-2 pb-4 px-2"
        >
          <div className="flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block hover:text-accent-orange transition-colors duration-300 py-2 text-base"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user && user.emailVerified ? (
              <button
                onClick={() => { setIsOpen(false); handleLogout(); }}
                className="bg-accent-orange px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 w-full text-left text-base"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-accent-orange px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 text-base"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
