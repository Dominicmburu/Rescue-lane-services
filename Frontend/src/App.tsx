import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/services';
import Contact from './Pages/ContactForm/ContactForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} /> 
  );
}

export default App;