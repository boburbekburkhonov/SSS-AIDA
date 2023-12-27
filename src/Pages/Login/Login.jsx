import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="wrapper">
        
        <form className="form-signin">
          <h2 className="form-signin-heading">Login</h2>

          <div className="inner-addon left-addon">
            <label className="control-label">Site name</label>
              <i className="glyphicon glyphicon-globe"></i>
              <input type="text" className="form-control" name="site" placeholder="yourdomain.com" required="" autofocus=""/>
          </div>
          <div className="inner-addon left-addon">
            <label className="control-label">Sitebuilder password</label>
              <i className="glyphicon glyphicon-lock"></i>
              <input type="password" className="form-control" name="password" placeholder="*******" required="" autofocus=""/>
          </div>
          <a className="forgot-password" href="#">I forgot my password</a>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Let me in!</button>
        </form>
        <p className="account-signup">Don't have an account? <a href="#">Sign up here</a>
        </p>
      </div>
    </>
  );
};

export default Login;