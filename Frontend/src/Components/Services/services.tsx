import React from 'react';
import './Services.module.css';

const Services: React.FC = () => {
  const services = [
    "Light-Duty Towing",
    "Medium-Duty Towing",
    "Heavy-Duty Towing",
    "Flatbed Towing",
    "Emergency Towing",
    "Luxury Vehicle Transport",
    "Roadside Assistance",
  ];

  return (
    <div className="services">
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
