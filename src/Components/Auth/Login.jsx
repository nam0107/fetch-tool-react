import "./style.css";
import "./style1.css";
import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="nenLogin">
        <div className="login-9" style={{backgroundColor: '#fefefe'}} >
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{backgroundColor: '#fefefe'}}>
                <div className="form-section" style={{backgroundColor: 'white'}}>
                  <div className="logo">
                    <a href="google.com">Login</a>
                  </div>
                  {/* <div class="btn-section">
                        <a href="#" class="link-btn active">Login</a>
                        <a href="register-9.html" class="link-btn">Register</a>
                    </div> */}
                  <div className="login-inner-form">
                    <form
                      action="http://storage.googleapis.com/themevessel-products/logdy/index.html"
                      method="GET"
                    >
                      <div className="form-group form-box">
                        <input
                          type="email"
                          name="email"
                          className="input-text"
                          placeholder="Email Address"
                        />
                        <i className="flaticon-mail-2" />
                      </div>
                      <div className="form-group form-box">
                        <input
                          type="password"
                          name="Password"
                          className="input-text"
                          placeholder="Password"
                        />
                        <i className="flaticon-password" />
                      </div>
                      <div className="checkbox clearfix">
                        <div className="form-check checkbox-theme">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="forgot-password-9.html">Forgot Password</a>
                      </div>
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="btn-md btn-theme btn-block"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
