import React from "react";
import LogoIMG from "../../assets/logo.svg";
import styled from "styled-components";
import Patient from "./patient.svg";
import Doctor from "./doctor.svg";
import LoginBox from "./LoginBox";
// import SignUpBox from "./SignUpBox";
import Button from "@material-ui/core/Button";
import "./styles/Login.scss";

function Login() {
  return (
    <div id="container">
      <Logo>
        <img src={LogoIMG} alt="logo" />
        HealthVisiory
      </Logo>
      <SubHeading>
        HealthVisiory is a solution of booking appointments in the Covid-era
        Covid caused us to remain locked into our homes This webapp allows to
        create appointments, confirm and cancel them. Also doctors can confirm
        and cancel their next appointments.
      </SubHeading>
      <div className="auth-container">
        <h1>I'am A</h1>
        <div>
          <div className="card">
            <div className="user-type front">
              <img src={Patient} alt="patient" />
              <h1>Patient</h1>
            </div>
            <div className="user-type back">
              <Button variant="contained" color="secondary">
                Sign In
              </Button>
              <Button variant="contained" color="secondary">
                Log In
              </Button>
            </div>
          </div>
          <div className="card">
            <div className="user-type front">
              <img src={Doctor} alt="doctor" />
              <h1>Doctor</h1>
            </div>
            <div className="user-type back">
              <Button variant="contained" color="secondary">
                Sign In
              </Button>
              <Button variant="contained" color="secondary">
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div id="right">
        {LoginBox}
        {/* <Route path="/signup" exact component={SignUpBox} /> */}
      </div>
    </div>
  );
}

export default Login;

const Logo = styled.div`
  width: 100%;
  height: auto;
  font-size: 3rem;
  font-weight: 600;
  align-self: center;
  justify-content: center;
  display: flex;
  margin: 1rem 0;
  font-family: "Roboto Mono", monospace;
`;

const SubHeading = styled.p`
  width: 100%;
  font-size: 2rem;
  margin: 2rem;
`;
