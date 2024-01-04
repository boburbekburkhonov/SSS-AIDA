import React from 'react';
import './Login.css'

const Login = () => {
  const submit = e => {
    e.preventDefault()

    const { name, password } = e.target

    fetch()

    name.value = ''
    password.value = ''
  }

  return (
    <>
      <div className="wrapper">

        <form className="form-signin" onSubmit={submit}>
          <h2 className="form-signin-heading text-center">Login</h2>

          <div className="inner-addon left-addon">
            <label className="control-label">Username</label>
              <i className="glyphicon glyphicon-globe"></i>
              <input type="text" className="form-control" name="name" placeholder=" Username" required />
          </div>
          <div className="inner-addon left-addon">
            <label className="control-label">Password</label>
              <i className="glyphicon glyphicon-lock"></i>
              <input type="password" className="form-control" name="password" placeholder=" Password" required />
          </div>
          <a className="forgot-password" href="#">I forgot my password</a>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Kirish</button>
        </form>
        <p className="account-signup">Don't have an account? <a href="#">Sign up here</a>
        </p>
      </div>
    </>
  );
};

export default Login;