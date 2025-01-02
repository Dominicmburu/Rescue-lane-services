import React from 'react';
import './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Vivian",
      feedback: "I highly recommend Rescue Lane Towing! The service was prompt and professional.",
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <blockquote key={index}>
          <p>"{testimonial.feedback}"</p>
          <cite>- {testimonial.name}</cite>
        </blockquote>
      ))}
    </div>
  );
};

export default Testimonials;
