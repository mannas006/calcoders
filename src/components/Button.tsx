import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className }) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300/50";
  const primaryClasses = "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl";
  const secondaryClasses = "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl";

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className || ''}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (to) {
    return (
      <Link to={to}>
        <motion.button {...motionProps} className={classes}>
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick} className={classes}>
      {children}
    </motion.button>
  );
};

export default Button;
