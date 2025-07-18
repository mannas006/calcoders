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
          Your generous contribution helps CalCoders continue to provide free and low-cost coding education
          to students in our community. Every donation, big or small, directly supports our programs,
          helps us acquire necessary resources, and allows us to reach more aspiring young coders.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Thank you for investing in the future of technology and empowering the next generation of innovators!
        </p>

        <div className="space-y-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID" // Replace with actual PayPal link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-accent-orange text-white-light px-8 py-4 rounded-lg font-semibold text-xl hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Donate via PayPal
          </motion.a>
          <p className="text-sm text-gray-600">
            (Placeholder for external donation system. Please replace with your actual donation link.)
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Donate;
