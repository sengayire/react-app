import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="Header">
    <header>
      <div class="container">
        <div id="branding">
          <h1>POLITICO</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);
export default Header;
