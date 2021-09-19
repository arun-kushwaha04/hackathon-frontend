import React from "react";
import NavBar from "./Components/NavBar/navbar";
import Dashboard from "./Components/Dashboard/dashboard";
import Appointment from "./Components/Appointments/Appointment";
import Doctor from "./Components/Doctor/Doctor";
import Error from "./Error";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import {UseGlobalContext} from "./Context.js";


export default function App() {

  const {loginStatus} = UseGlobalContext();

  return (
    loginStatus === true?
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/appointment" exact>
          <Appointment />
        </Route>
        <Route path="/doctor/:id" exact>
          <Doctor />
        </Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
    : <Login></Login>
  );
}
