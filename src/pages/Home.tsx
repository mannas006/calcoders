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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-8 py-20 sm:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Empowering the Next
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Generation of Coders
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ ...textVariants.visible.transition, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              CalCoders is a registered nonprofit organization based in Fremont, California, 
              dedicated to spreading technology, STEM, and coding education to everyone through 
              innovative programs and community engagement.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
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
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to inspire and educate the next generation of technology leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💻",
                title: "Coding Classes",
                description: "Interactive coding sessions covering multiple programming languages and frameworks"
              },
              {
                icon: "🔬",
                title: "STEM Programs",
                description: "Hands-on science, technology, engineering, and mathematics learning experiences"
              },
              {
                icon: "🌐",
                title: "Virtual & In-Person",
                description: "Flexible learning options with both online and physical event formats"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg sm:text-xl leading-relaxed opacity-90">
              To spread technology, STEM, and coding to everyone, while empowering them to use their 
              talents and knowledge to make a meaningful difference for others and the world around us.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
