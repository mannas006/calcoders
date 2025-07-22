import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white-light py-6 sm:py-8 mt-8 sm:mt-12 text-center">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors duration-300">
            <Linkedin size={24} />
          </a>
        </div>
        <div className="mb-2 sm:mb-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
            <li><Link to="/about" className="hover:text-accent-orange transition-colors duration-300">About Us</Link></li>
            <li><Link to="/classes" className="hover:text-accent-orange transition-colors duration-300">Classes</Link></li>
            <li><Link to="/team" className="hover:text-accent-orange transition-colors duration-300">Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent-orange transition-colors duration-300">Contact</Link></li>
            <li><Link to="/donate" className="hover:text-accent-orange transition-colors duration-300">Donate</Link></li>
          </ul>
        </div>
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} CalCoders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
