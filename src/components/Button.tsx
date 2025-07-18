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
  const baseClasses = "px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out";
  const primaryClasses = "bg-accent-orange text-white-light hover:bg-orange-600 shadow-md";
  const secondaryClasses = "bg-transparent border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white-light";

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className || ''}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
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
