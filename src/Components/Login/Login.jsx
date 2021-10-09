import React from "react";
import LoginBox from "./LoginBox";
import SignUpBox from "./SignUpBox";
import "./styles/Login.scss";

function Login() {
  return (
    <div id="container">
      <h1 id="welcome">Welcome</h1>
      <p id="lorem">
        HealthVisiory is a solution of booking appointments in the Coid-era
        <br />
        Covid caused us to remain locked into our homes
        <br />
        This webapp allows to create appointments, confirm and cancel them.
        <br />
        Also doctors can confirm and cancel their next appointments.
        <br />
      </p>
      <div id="right">
        {LoginBox}
        {/* <Route path="/signup" exact component={SignUpBox} /> */}
      </div>
    </div>
  );
}

export default Login;
