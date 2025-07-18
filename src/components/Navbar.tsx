import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-poppins">
          CalCoders
        </Link>

        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center for explicit alignment */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-accent-orange transition-colors duration-300 py-2" // Added py-2 here
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-accent-orange px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-deep-blue mt-2 pb-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block hover:text-accent-orange transition-colors duration-300 py-2" // Added py-2 here for mobile menu
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-accent-orange px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
