import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage/ServicesPage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import ContactPage from './pages/ContactPage/ContactPage';
// import BlogPage from './pages/BlogPage/BlogPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </Router>
  );
};

export default App;
