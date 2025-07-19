import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Donate = () => {
  const contentVariants = {
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
        Support CalCoders
      </motion.h1>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center"
      >
        <Heart size={80} className="text-accent-orange mx-auto mb-6" />
        <h2 className="text-3xl font-semibold mb-4 font-poppins">Make a Difference Today</h2>
        <p className="text-lg leading-relaxed mb-6">
          You can donate to us via our fiscal sponsor, Hack Club, using this link:
          <br />
          <a
            href="https://hcb.hackclub.com/donations/start/calcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-orange underline font-semibold"
          >
            https://hcb.hackclub.com/donations/start/calcoders
          </a>
        </p>
        <p className="text-lg leading-relaxed mb-8">
          We rely on donors and sponsors for our financial needs. Your support of our organization is greatly appreciated.
        </p>

        <div className="space-y-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://hcb.hackclub.com/donations/start/calcoders"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-accent-orange text-white-light px-8 py-4 rounded-lg font-semibold text-xl hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Donate via Hack Club
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Donate;
