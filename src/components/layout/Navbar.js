import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SigneOutLinks from './SigneOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const {auth,profile} = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile} /> :  <SigneOutLinks />
  return (
    <div>
      <nav className="nav-wrapper grey draken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Mario Plan
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state)=> {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile

  }

}

export default connect(mapStateToProps)(Navbar);
