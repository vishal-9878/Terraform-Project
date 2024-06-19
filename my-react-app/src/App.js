import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css'; // Ensure correct path

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to my AWS Project</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/signup" className={styles.link}>REGISTER</Link></li>
          <li><Link to="/signin" className={styles.link}>LOGIN</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
