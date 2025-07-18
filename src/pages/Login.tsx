import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Login attempt:', values);
      alert('Login functionality is UI-only for now. No backend integration.');
      // In a real app, you'd send these credentials to your backend/Firebase Auth
    },
  });

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white-light text-deep-blue">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-center mb-8 font-poppins">Login</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
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
            <label htmlFor="password" className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-accent-orange text-white-light py-3 rounded-md font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Login
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-accent-orange hover:underline">Register here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
