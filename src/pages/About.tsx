import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        About CalCoders
      </motion.h1>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Lightbulb size={64} className="text-deep-blue flex-shrink-0" />
          <p className="text-lg leading-relaxed">
            CalCoders is dedicated to fostering a passion for computer science and technology among K-12 students.
            We believe that coding is a fundamental skill for the 21st century, empowering young minds to become
            innovators and problem-solvers. Our mission is to provide high-quality, accessible, and engaging
            coding education that inspires creativity and critical thinking.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Our Story</h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Users size={64} className="text-deep-blue flex-shrink-0" />
          <p className="text-lg leading-relaxed">
            Founded by a group of passionate educators and tech enthusiasts, CalCoders started with a simple idea:
            to bridge the gap in computer science education in local communities. What began as small workshops
            in community centers quickly grew into a recognized nonprofit organization. We've since expanded our
            reach, offering a variety of programs, camps, and events designed to make learning to code fun and
            rewarding for students of all ages and skill levels.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Our Approach</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <GraduationCap size={64} className="text-deep-blue flex-shrink-0" />
          <p className="text-lg leading-relaxed">
            At CalCoders, we believe in hands-on learning, collaborative projects, and a supportive environment.
            Our curriculum is designed to be engaging and relevant, covering topics from basic programming concepts
            to advanced web development and artificial intelligence. We strive to empower students not just with
            coding skills, but also with problem-solving abilities, logical thinking, and the confidence to
            pursue their interests in STEM fields.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
