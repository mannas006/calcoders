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
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-accent-orange font-poppins">Contact Us</h2>
        <p className="text-lg mb-8">
          To contact us, you can email us at:
          <br />
          <span className="font-semibold">calcoders@gmail.com</span>
          <br /><br />
          Or call us at:
          <br />
          <span className="font-semibold">(510)-299-7425</span>
          <br /><br />
          Check us out on social media by clicking one of the buttons below:
        </p>
        {/* Social media buttons placeholder */}
        <div className="flex justify-center gap-6 mt-6">
          {/* Example social media buttons, replace # with actual links */}
          <a href="#" className="bg-accent-orange text-white-light px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">Instagram</a>
          <a href="#" className="bg-accent-orange text-white-light px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">Facebook</a>
          <a href="#" className="bg-accent-orange text-white-light px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
