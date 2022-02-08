import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SigneOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    );
  }
}

export default SigneOutLinks;
