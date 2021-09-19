import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SIMPLEGET } from "../../api";
import Filter from "./filter";
import Card from "./Card";
import { UseGlobalContext } from "../../Context";

export default function Appointment() {
  const [data, setData] = useState(null);
  const [param, setParam] = useState(null);
  const location = useLocation();
  const { userType } = UseGlobalContext();
  const link = window.location.search;
  useEffect(() => {
    const urlParams = new URLSearchParams(link);
    setParam(urlParams.get("type"));
  }, [link, location]);

  useEffect(() => {
    if (param) {
      SIMPLEGET(
        `/api/appointments/${param}/${userType}/${localStorage.getItem(
          "userId"
        )}`
      )
        .then((res) => {
          setData(res[param]);
        })
        .catch((err) => console.log(err));
    }
  }, [param, userType]);
  return (
    <section className="main-section-for-each-page">
      <Filter param={param} />
      <CardDiv>
        {!data || data.length === 0 ? (
          <h1>No Data Available</h1>
        ) : (
          data.map((element, index) => {
            return (
              <Card
                data={element}
                param={param}
                index={index}
                key={`card-element-${index}`}
              />
            );
          })
        )}
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
    height: 30rem;
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
`;
