import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/navbar";
// import { doctor } from "../../data";
import Card from "./Card";
import Filter from "../Filter/filter";
import { UseGlobalContext } from "../../Context";
import { POSTWITHBODY } from "../../api";
import "./dashboard.scss";

export default function Dashboard() {
  const [doctor, setDoctor] = useState(null);
  const { filterArray } = UseGlobalContext();

  useEffect(() => {
    let userData = {
      filterArray: filterArray,
    };
    userData = JSON.stringify(userData);
    POSTWITHBODY("/api/doctors", userData)
      .then((res) => {
        res.data.forEach((ele) => {
          ele.rating = ele.rating["$numberDecimal"];
        });
        setDoctor(res.data);
      })
      .catch((err) => console.log(err));
  }, [filterArray]);

  return (
    <>
      <NavBar />
      <section className="main-section-for-each-page">
        {!doctor || doctor.length === 0 ? (
          <h1>No data Available</h1>
        ) : (
          <>
            <Filter />
            <CardDiv>
              {doctor.map((element, index) => {
                return (
                  <Card
                    element={element}
                    index={index}
                    key={`card-element-${index}`}
                  />
                );
              })}
            </CardDiv>
          </>
        )}
      </section>
    </>
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

  .card-div-doctor {
    width: 25rem;
    height: 25rem;
    margin: auto;
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--Lightest_Slate);
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
    h1 {
      text-align: center;
      color: var(--Lighest_Backround);
      font-weight: 400;
      width: auto;
      margin: auto;
      margin-bottom: 1rem;
    }
    button {
      color: white;
      position: absolute;
      bottom: 2rem;
      right: 1rem;
      outline: none;
      border: none;
      padding: 1rem 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      left: 1rem;
      font-size: 1.5rem;
    }
  }
  article {
    font-family: "Roboto Mono", monospace;
    span {
      font-weight: 500;
    }
  }

  .MuiAlert-message {
    div {
      font-size: 2rem;
    }
    font-size: 1.5rem;
  }

  .MuiAlert-action {
    button {
      color: red;
      svg {
        font-size: 2rem;
      }
    }
  }
`;
