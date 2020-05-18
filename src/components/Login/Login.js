import React from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { useFormik } from 'formik';
import { loginUser } from "../../actions";

const Login = (props) => {
  const {isAuthenticated, loginError, dispatch} = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      const {email, password} = values;
      dispatch(loginUser(email, password));
    },
  }); 

  if (isAuthenticated) {
    return <Redirect to="/" />
  } else {
    return (
      <div>
      <div>
        <Link to="/signup">Create Account</Link>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {loginError && (<p>Incorrect email or password</p>)}
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
};

function mapStateToprops(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToprops)(Login);
