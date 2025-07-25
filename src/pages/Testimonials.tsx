import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

// No testimonials for now
const testimonials: Testimonial[] = [];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <Quote size={48} className="text-accent-orange mb-4" />
      <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-deep-blue"
      />
      <h4 className="text-xl font-semibold font-poppins">{testimonial.name}</h4>
      <p className="text-gray-600 text-sm">{testimonial.title}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-deep-blue">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        What People Say About Us
      </motion.h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Hear directly from our students, parents, and community members about their experiences
        with CalCoders and the impact we've made.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">
            No testimonials available at this time.
          </div>
        ) : (
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonials;
