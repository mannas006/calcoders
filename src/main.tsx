import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import STEMNN from './pages/STEMNN';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext';


// Route guard for dashboard
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!user) {
    window.location.href = '/login';
    return null;
  }
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'classes', element: <Classes /> },
      { path: 'team', element: <Team /> },
      { path: 'partners', element: <Partners /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
      { path: 'stemnn', element: <STEMNN /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
