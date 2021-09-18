import React from "react";
import LogoIMG from "../../assets/logo.svg";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import "./navbar.scss";

export default function Nav() {
  const { userType, loginStatus } = UseGlobalContext();
  const navList =
    userType === "patient"
      ? ["Book a Session", "Sheduled Appointments"]
      : loginStatus
      ? ["Edit Information", "Appointments"]
      : ["Appointments"];
  return (
    <NavBar>
      <Logo className="logo-div">
        <img src={LogoIMG} alt="logo" />
        HealthVisiory
      </Logo>
      <Div className="nav-link-div">
        <List>
          {navList.map((element, idx) => {
            return <li key={`navlink-${idx}`}>{element}</li>;
          })}

          <li key={`navlink-login`}>
            <p>
              {loginStatus === true
                ? `Hello ${localStorage.get("Name")}`
                : "Sign UP/IN"}
            </p>
          </li>
        </List>
      </Div>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  height: 12vh;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: var(--Slate);
  padding: 1rem 2rem;
  border-bottom: 2px solid green;
`;

const Logo = styled.div`
  width: 10%;
  height: auto;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  align-self: center;
  display: flex;
  font-family: "Roboto Mono", monospace;
`;
const Div = styled.div`
  width: 30%;
  height: auto;
  text-align: center;
  font-weight: 600;
  align-self: center;
  display: flex;
  font-family: "Roboto Mono", monospace;

  p {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--Lighest_Backround);
    font-family: "Roboto", sans-serif;
  }
`;

const List = styled.ul`
  width: auto;
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 2rem;

  li {
    font-size: 1.5rem;
    align-self: center;
    font-family: "Roboto Mono", monospace;
    cursor: pointer;
    color: var(--Lighest_Backround);
    padding-bottom: 8px;

    &:hover {
      color: var(--Slate);
      border-bottom: 2px dotted green;
    }
  }
`;
