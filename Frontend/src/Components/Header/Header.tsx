import React from 'react';
import styles from './Header.module.css';
import { FaTruck, FaClock, FaPhone } from 'react-icons/fa';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
          <FaTruck size={24} color="#fcd900" /> 
        </div>
        <div className={styles.item}>
          <FaClock size={24} color="#fcd900" />
          <div>
            <p className={styles.title}>OPEN TIME</p>
            <p className={styles.subtitle}>Open 24/7<br />Mon-Sun</p>
          </div>
        </div>
        <div className={styles.item}>
          <FaPhone size={24} color="#fcd900" />
          <div>
            <p className={styles.title}>CALL US NOW</p>
            <p className={styles.subtitle}>0759595577</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;