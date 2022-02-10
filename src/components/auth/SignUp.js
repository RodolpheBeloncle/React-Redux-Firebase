import React, { Component } from 'react';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    console.log(this.state);
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              id="firstName"
              onChange={(e) =>
                this.setState({
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              id="lastName"
              onChange={(e) =>
                this.setState({
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

// function dispatcher to get access from action reducer
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
