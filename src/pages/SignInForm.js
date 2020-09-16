import React, { Component } from 'react';
import Net from './Net';
import '../App.css';

class SignInForm extends Component {
  render() {
    return (
          <div className={"col-md-9 register-right"}>
            <div className={"tab-content"} id={"myTabContent"}>
              <div
                className={"tab-pane fade show active"}
                id={"home"}
                role={"tabpanel"}
                aria-labelledby={"home-tab"}
              >
                <h3 className={"register-heading"}>Login as a Member</h3>
                <div className={"row register-form"}>
                  <div className={"col-md-6"}>
                    <div className={"form-group"}>
                      <input
                        type={"email"}
                        className={"form-control"}
                        placeholder={"Your Email *"}
                      />
                    </div>
                    <div className={"form-group"}>
                      <input
                        type={"password"}
                        className={"form-control"}
                        placeholder={"Password *"}
                      />
                    </div>
                  </div>
                  <React.StrictMode>
          <Net />
        </React.StrictMode>

                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default SignInForm;
