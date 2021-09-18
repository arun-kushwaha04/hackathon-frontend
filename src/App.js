import React from "react";
import NavBar from "./Components/NavBar/navbar";
import Dashboard from "./Components/Dashboard/dashboard";
import Appointment from "./Components/Appointments/Appointment";
import Error from "./Error";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/appointment" exact>
          <Appointment />
        </Route>

        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}
