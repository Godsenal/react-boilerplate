import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/react-icon.png';
import styles from './Home.scss';

export const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      React-boilerplate
    </h1>
    <img className={styles.icon} src={Icon} alt="react-icon" />
    <p className={styles.paragraph}>
      Welcome to simple react boilerplate.
    </p>
    <a href="https://github.com/Godsenal/react-boilerplate">
      Github
    </a>
    <p className={styles.paragraph}>
      Example
    </p>
    <Link to="/todo">
      TODO
    </Link>
  </div>
);

export default Home;
