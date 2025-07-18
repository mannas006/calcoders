import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Classes from './pages/Classes.tsx';
import Team from './pages/Team.tsx';
import Partners from './pages/Partners.tsx';
import Testimonials from './pages/Testimonials.tsx';
import Contact from './pages/Contact.tsx';
import Donate from './pages/Donate.tsx';
import STEMNN from './pages/STEMNN.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
