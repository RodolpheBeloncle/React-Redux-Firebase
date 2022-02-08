import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SigneOutLinks from './SigneOutLinks';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey draken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Mario Plan
          </Link>
          <SignedInLinks />
          <SigneOutLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
