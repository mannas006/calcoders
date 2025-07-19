import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white-light text-deep-blue overflow-hidden">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight font-poppins"
        >
          Empowering the Next Generation of Coders
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          CalCoders is a registered nonprofit organization based in Fremont, California.
          <br />
          <br />
          We conduct both in person and virtual events, camps, classes, and more that engage people in coding, STEM and technology.
          <br />
          <br />
          Our mission is to spread technology, STEM, and coding to everyone, while allowing them to use their talents to use what they have learned to make a difference for others and for the world.
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button to="/contact" variant="primary">
            Join Our Team Today
          </Button>
          <Button to="/about" variant="secondary">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
