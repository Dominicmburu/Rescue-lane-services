import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import AboutusPage from './Pages/AboutusPage'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          {/*<Route path="*" element={<NotFoundPage />} /> */}
          <Route path ="/about" element={<AboutusPage/>}/>
        </Routes>
    </Router>
  );
};

export default App;
