import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Filter(props) {
  const { param } = props;
  return (
    <MainDiv>
      <NavLink to="appointment?type=nextAppointments">
        <span className={param === "nextAppointments" ? "tab" : null}>
          Next Appointment
        </span>
      </NavLink>
      <NavLink to="appointment?type=futureAppointments">
        <span className={param === "futureAppointments" ? "tab" : null}>
          Future Appointment
        </span>
      </NavLink>
      <NavLink to="appointment?type=pastAppointments">
        <span className={param === "pastAppointments" ? "tab" : null}>
          Missed And Past Appointment
        </span>
      </NavLink>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  height: 8rem;
  width: 70%;
  margin: auto;
  align-content: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  border-bottom: 2px solid green;
  a {
    text-decoration: none;
    color: var(--Lighest_Backround);
  }
  .tab {
    color: red;
  }
`;
