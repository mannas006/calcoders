import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      // This is where you would integrate with Formspree or EmailJS
      // For Formspree, you'd typically use a form action or fetch API:
      // const response = await fetch("https://formspree.io/f/your_form_id", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });
      // if (response.ok) {
      //   alert('Message sent successfully!');
      //   resetForm();
      // } else {
      //   alert('Failed to send message. Please try again.');
      // }

      console.log('Form submitted:', values);
      alert('Thank you for your message! (Formspree/EmailJS integration placeholder)');
      resetForm();
    },
  });

  const containerVariants = {
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
        Contact Us
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
            Fill out the form or reach us through the contact details below.
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <Mail size={24} className="text-accent-orange mr-3" />
              <span>info@calcoder.org</span>
            </div>
            <div className="flex items-center">
              <Phone size={24} className="text-accent-orange mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start">
              <MapPin size={24} className="text-accent-orange mr-3 mt-1" />
              <span>123 Coding Lane, Fremont, CA 94538</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Send Us a Message</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                {...formik.getFieldProps('message')}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent-orange text-white-light py-3 rounded-md font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
