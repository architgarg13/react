import React, { Component } from 'react';
import '../App.css';

class SignUpForm extends Component {
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
           <h3 className={"register-heading"}>Sign up as a Member</h3>
           <div className={"row register-form"}>
             <div className={"col-md-6"}>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Name *"}
                 />
               </div>
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
             <a href={"index.html"} class={"btn btn-primary btn-lg"}>
               Sign up
             </a>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default SignUpForm;
