import React from 'react';
import Icon from '../../images/react-icon.png';
import styles from './Home.scss';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Welcome!</h1>
    <img className={styles.icon} src={Icon} />
    <p className={styles.paragraph}>Welcome to simple react boilerplate.</p>
    <a className={styles.link} href="https://github.com/Godsenal/react-boilerplate">Github</a>
  </div>
);

export default Home;
