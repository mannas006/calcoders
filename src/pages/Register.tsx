import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import app, { auth } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(undefined);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        await updateProfile(userCredential.user, { displayName: values.name });
        // Store user data in Firestore
        const db = getFirestore(app);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          name: values.name,
          email: values.email,
          createdAt: serverTimestamp(),
        });
        await sendEmailVerification(userCredential.user);
        toast.success('Verification email sent. Please check your inbox and verify your email.');
        formik.resetForm();
        // User remains logged in; optionally, you can redirect to home or dashboard if desired:
        // navigate('/');
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('This email is already registered. Please use a different email or login.');
          setStatus('This email is already registered. Please use a different email or login.');
        } else {
          toast.error(error.message || 'Registration failed.');
          setStatus(error.message || 'Registration failed.');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white-light text-deep-blue px-2 sm:px-4">
      <Toaster position="top-center" />
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 font-poppins">Register</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps('name')}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none text-base sm:text-lg"
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
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none text-base sm:text-lg"
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
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none text-base sm:text-lg"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none text-base sm:text-lg"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full bg-accent-orange text-white-light py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-colors duration-300 shadow-md flex items-center justify-center ${formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Register'
            )}
          </motion.button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-gray-600 text-base sm:text-lg">
          Already have an account? <Link to="/login" className="text-accent-orange hover:underline">Login here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
