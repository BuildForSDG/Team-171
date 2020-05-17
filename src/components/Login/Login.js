import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { useFormik } from 'formik';
import { loginUser } from "../../actions";

const Login = (props) => {
  const {isAuthenticated, loginError} = props;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      const {dispatch} = props;
      const {email, password} = values;
      dispatch(loginUser(email, password));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  if (isAuthenticated) {
    return <Redirect to="/" />
  } else {
    return (
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
