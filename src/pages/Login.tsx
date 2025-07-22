import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
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
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(undefined);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        if (!userCredential.user.emailVerified) {
          toast.error('Please verify your email before logging in.');
          setStatus('Please verify your email before logging in.');
          return;
        }
        toast.success('Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1200);
      } catch (error: any) {
        toast.error(error.message || 'Login failed.');
        setStatus(error.message || 'Login failed.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white-light text-deep-blue">
      <Toaster position="top-center" />
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
            className={`w-full bg-accent-orange text-white-light py-3 rounded-md font-semibold text-lg transition-colors duration-300 shadow-md flex items-center justify-center ${formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
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
