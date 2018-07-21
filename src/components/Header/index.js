import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <span className={styles.link}>
      <Link to="/">Home</Link>
    </span>
  </div>
);

export default Header;
