import React from "react";
import Layout from "../Components/Layout";
import "../assets/styles/Services.css";
import carTowingImage from "../assets/Images/Services/car-towing.jpg";
import roadsideAssistanceImage from "../assets/Images/Services/roadside-assistance.jpg";
import accidentRecoveryImage from "../assets/Images/Services/accident-recovery.jpg";
import heavyLiftingImage from "../assets/Images/Services/heavy-lifting.jpg";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="services-page">
        <div className="services-header">
          <h1>OUR SERVICES</h1>
        </div>

        <div className="services-container">
          <div className="service-card">
            <img src={carTowingImage} alt="Car Towing" />
            <h3>CAR TOWING</h3>
            <p>Quick and reliable car towing services whenever you need them.</p>
          </div>

          <div className="service-card">
            <img src={accidentRecoveryImage} alt="Accident Recovery Towing" />
            <h3>ACCIDENT RECOVERY TOWING</h3>
            <p>Professional recovery for vehicles involved in accidents.</p>
          </div>

          <div className="service-card">
            <img src={roadsideAssistanceImage} alt="Roadside Assistance" />
            <h3>ROADSIDE ASSISTANCE</h3>
            <p>
              From flat tires to jump starts, we are here to help you get back on
              the road.
            </p>
          </div>

          <div className="service-card">
            <img src={heavyLiftingImage} alt="Heavy Crane Services" />
            <h3>HEAVY CRANE SERVICES</h3>
            <p>
              Specialized services for heavy-duty lifting and towing
              requirements.
            </p>
          </div>
        </div>

        <div className="additional-services">
          <h2>ADDITIONAL SERVICES</h2>
          <ul>
            <li>Long-distance towing for personal and commercial vehicles.</li>
            <li>Flatbed towing for vehicles that require special handling.</li>
            <li>Emergency fuel delivery and lockout services.</li>
            <li>Transportation of construction and industrial equipment.</li>
            <li>Recovery of vehicles stuck in remote or challenging terrains.</li>
          </ul>
        </div>

        <div className="pricing-section">
          <h2>PRICING</h2>
          <div className="pricing-tables">
            <div className="pricing-table">
              <h3>Saloons and Station Wagons</h3>
              <table>
                <thead>
                  <tr>
                    <th>Distance</th>
                    <th>Charges in Ksh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0-10 KM</td>
                    <td>5000</td>
                  </tr>
                  <tr>
                    <td>10-20 KM</td>
                    <td>6000</td>
                  </tr>
                  <tr>
                    <td>20-30 KM</td>
                    <td>8000</td>
                  </tr>
                  <tr>
                    <td>30-40 KM</td>
                    <td>10000</td>
                  </tr>
                  <tr>
                    <td>40-50 KM</td>
                    <td>12000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pricing-table">
              <h3>SUVs, Pick-ups, Micro/Mini Bus and Trucks below 2 Tons</h3>
              <table>
                <thead>
                  <tr>
                    <th>Distance</th>
                    <th>Charges in Ksh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0-10 KM</td>
                    <td>5500</td>
                  </tr>
                  <tr>
                    <td>10-20 KM</td>
                    <td>6500</td>
                  </tr>
                  <tr>
                    <td>20-30 KM</td>
                    <td>9000</td>
                  </tr>
                  <tr>
                    <td>30-40 KM</td>
                    <td>11000</td>
                  </tr>
                  <tr>
                    <td>40-50 KM</td>
                    <td>13000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
