import React from 'react';
import { Link } from 'react-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>

    <ul>
      <li>
        <Link to="/book">BOOKS</Link>
      </li>

      <li>
        <Link to="/book">BOOKS</Link>
      </li>

    </ul>
  </nav>
);

export default Navbar;
