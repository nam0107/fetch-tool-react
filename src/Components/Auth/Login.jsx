import "./style.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = { value: null };
  }

  handleLoginClick(e) {
    // this.setState(() => ({ error_msg: "" }));
    // auth.login(
    //   this.refs.username.value,
    //   this.refs.password.value,
    //   (state, side) => {
    //     if (!state) {
    //       toast.error("Login failed!", {
    //         position: toast.POSITION.BOTTOM_RIGHT
    //       });
    //     } else {
    //       window.location = "/";
    //     }
    //   }
    // );
  }

  render() {
    return (
      <div class="app-container">
         <ToastContainer /> 
        <div className="h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <div className="mx-auto app-login-box col-md-8">
              <div className="app-logo-inverse mx-auto mb-3" />
              <div className="modal-dialog w-100 mx-auto">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="h5 modal-title text-center">
                      <h4 className="mt-2">
                        <div>Fetch Tool</div>
                      </h4>
                    </div>
                    <form className>
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <input
                              ref="username"
                              id="exampleEmail"
                              placeholder="Username here..."
                              type="text"
                              className="form-controll main-input"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <input
                              ref="password"
                              id="examplePassword"
                              placeholder="Password here..."
                              type="password"
                              className="main-input"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer clearfix">
                    <div className="float-left">
                      {/* <a
                        href="javascript:void(0);"
                        className="btn-lg btn btn-link"
                      >
                        Recover Password
                      </a> */}
                    </div>
                    <div className="float-right">
                      <button
                        className="btn btn-primary btn-lg"
                        onclick="{this.handleLoginClick}"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-white opacity-8 mt-3">
                Copyright © Fetch Tool 2019
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
