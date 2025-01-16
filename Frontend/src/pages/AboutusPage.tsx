import React from "react";
import Layout from "../Components/Layout";
import "../assets/styles/About.css";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="about-page">
        {/* Header Section */}
        <div className="about-header">
          <h1>About Us</h1>
        </div>

        {/* Company Overview */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a dedicated team committed to providing reliable towing and roadside assistance services. With years of experience in the industry, we pride ourselves on delivering professional, efficient, and affordable solutions to our customers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to ensure the safety and satisfaction of our customers by providing top-notch towing and recovery services, no matter the time or place.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted and reliable towing service provider in the region, setting new standards for excellence and customer care.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <p>
            Our team consists of skilled professionals who are passionate about helping others. Each member brings unique expertise and dedication to ensure our customers receive the best service possible.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
