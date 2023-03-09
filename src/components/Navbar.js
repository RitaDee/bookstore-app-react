import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.nav_container}>
    <nav>
      <h1>Bookstore CMS</h1>

      <ul>
        <li className={styles.l}>
          <Link to="/">BOOKS</Link>
        </li>

        <li className={styles.l}>
          <Link to="/categories">CATEGORIES</Link>
        </li>

      </ul>
    </nav>
  </div>
);

export default Navbar;
