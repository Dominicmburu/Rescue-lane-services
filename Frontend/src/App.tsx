import React from 'react';
import './App.css';

// Components
import Header from './Components/Header/Header';
import Services from './Components/Services/services';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="services">
          <h2>Our Services</h2>
          <Services />
        </section>
        <section id="testimonials">
          <h2>What Our Customers Say</h2>
          <Testimonials />
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
