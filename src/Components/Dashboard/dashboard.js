import React from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import { doctor } from "../../data";
import Filter from "../Filter/filter";
import { Button } from "reactstrap";
import "./dashboard.scss";

export default function dashboard() {
  return (
    <section className="main-section-dashboard">
      <Filter />
      <CardDiv>
        {doctor.map((element, index) => {
          return (
            <div key={`card-element-${index}`}>
              <h1>{element.specialization} Specialist</h1>
              <article>
                <p>
                  <span>Doctor {element.name}</span>
                </p>
                <p>
                  <span>Experience :</span> {element.experience}
                </p>
                <p>
                  <span>Rating :</span> {element.rating}
                </p>
                <p>
                  <span>Fees :</span> ₹{element.price}
                </p>
              </article>
              <Button type="submit">Shedule Appointment</Button>
            </div>
          );
        })}
      </CardDiv>
    </section>
  );
}

const CardDiv = styled.div`
  width: 95%;
  margin: auto;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-row-gap: 2rem;
  justify-content: space-evenly;
  padding: 2rem 0;

  > div {
    width: 25rem;
    height: 25rem;
    margin: auto;
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--Lightest_Slate);
    position:relative;
    border-radius:1rem;
    box-shadow: 0 2px 4px 0 rgba( 31, 38, 135, 0.37 );
    h1 {
      text-align: center;
      color: var(--Lighest_Backround);
      font-weight: 400;
      width: auto;
      margin: auto;
      margin-bottom: 1rem;
    }
    button {
     background-color: black:
     color: white;
     position:absolute;
     bottom:2rem;
     right:1rem;
     outline:none;
     border:none;
     padding:1rem 0.5rem;
     border-radius:0.5rem;
     cursor:pointer;
     font-family: 'Roboto', sans-serif;
     left:1rem;
     font-size:1.5rem;
    }
  }
  article {
    font-family: "Roboto Mono", monospace;
    span {
      font-weight: 500;
    }
   }  
`;
