import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Code, Users, Lightbulb } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <div className="text-accent-orange mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2 font-poppins">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-500 flex items-center">
        <CalendarDays size={16} className="mr-1" /> {date}
      </p>
    </motion.div>
  );
};

const Classes = () => {
  const events = [
    {
      title: 'Summer Coding Camp 2024',
      description: 'An intensive 2-week camp covering Python, Web Dev, and Game Design.',
      date: 'July 15 - July 26, 2024',
      icon: <Code size={48} />,
    },
    {
      title: 'After-School Robotics Club',
      description: 'Learn to build and program robots using Arduino and Raspberry Pi.',
      date: 'Fall 2024 Semester',
      icon: <Users size={48} />,
    },
    {
      title: 'Intro to AI Workshop',
      description: 'Explore the basics of Artificial Intelligence and Machine Learning.',
      date: 'October 12, 2024',
      icon: <Lightbulb size={48} />,
    },
    {
      title: 'Web Development Fundamentals',
      description: 'A beginner-friendly course on HTML, CSS, and JavaScript.',
      date: 'Spring 2025 Semester',
      icon: <Code size={48} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        Upcoming Events
      </motion.h1>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          We do not have any more upcoming events. If you would like to get notified about future camps, classes, and events, please sign up for our mailing list:
        </p>
        <a
          href="https://forms.gle/D4eZhadswXipJrTW9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-orange text-white-light px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md mb-4"
        >
          Join Our Mailing List
        </a>
      </div>
    </div>
  );
};

export default Classes;
