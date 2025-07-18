import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Tech Innovators Inc.', logo: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Partner+1' },
  { name: 'Code Academy', logo: 'https://via.placeholder.com/150/F97316/F9FAFB?text=Partner+2' },
  { name: 'Future Coders Foundation', logo: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Partner+3' },
  { name: 'Silicon Valley EdTech', logo: 'https://via.placeholder.com/150/F97316/F9FAFB?text=Partner+4' },
  { name: 'Community STEM Hub', logo: 'https://via.placeholder.com/150/1E3A8A/F9FAFB?text=Partner+5' },
  { name: 'Global Robotics League', logo: 'https://via.placeholder.com/150/F97316/F9FAFB?text=Partner+6' },
];

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        Our Valued Partners
      </motion.h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        We are proud to collaborate with leading organizations and companies that share our vision
        of empowering the next generation through technology education. Our partners play a crucial
        role in supporting our programs and expanding our reach.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-48 w-48 hover:shadow-xl transition-shadow duration-300"
          >
            <img src={partner.logo} alt={partner.name} className="max-h-24 max-w-full object-contain mb-4" />
            <p className="text-center font-semibold text-lg">{partner.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <p className="text-xl font-semibold mb-4">
          Interested in partnering with CalCoders?
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-orange text-white-light px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default Partners;
