import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { SIMPLEGET } from "../../api";
import "./doctor.scss";

// const data = {
//   _id: "6145ba9d43d7b683e0de5280",
//   name: "Test",
//   email: "abcd@gmail.com",
//   contact: "9612014587",
//   experience: 1,
//   fees: 400,
//   specialization: "heart",
//   rating: 0,
//   totalRatings: 0,
//   about:
//     "I am very good doctor please come to me for your heart operation. I only charge 400 ruppes that is very less please come fast please.",
//   slot: ["10am-12pm", "2pm-3pm", "5pm-7pm"],
// };

export default function Doctor() {
  const [data, setData] = useState(null);
  const doctorId = window.location.pathname.split("/doctor/")[1];
  let name;
  if (data) name = "Doctor " + data.name;

  useEffect(() => {
    SIMPLEGET(`/api/doctors/${doctorId}`)
      .then((res) => {
        res.data.rating = res.data.rating["$numberDecimal"];
        res.data.slot = ["10am-12pm", "2pm-3pm", "5pm-7pm"];
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [doctorId]);
  console.log(data);
  return (
    <section className="main-section-for-each-page">
      {data ? (
        <MainDiv className="doctor-detail-list">
          <h1> {name} </h1>
          <h2> {data.specialization} </h2>
          <br />
          <br />
          <p>{data.about}</p>
          <br />
          <p>
            {name} has an experience of {data.experience} years.
          </p>
          <br />
          <p>
            {name} charges ₹{data.fees} for every appointment.
          </p>
          <br />
          {data.rating > 0 && (
            <>
              <p>
                {name} has got an rating of {data.rating}/5 by{" "}
                {data.totalRatings} patients.
              </p>
              <br />
            </>
          )}
          <p>Want To book A slot ??</p>
          <br />
          <div>
            <p>{name} is Available between these times.</p>
            <br />
            <ul>
              {data.slot.map((ele, index) => (
                <li key={`timeslot-doctor-${index}`}>
                  <p>{ele}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <br />
        </MainDiv>
      ) : (
        <h1>No Data Available</h1>
      )}
    </section>
  );
}

const MainDiv = styled.div`
  width: 50%;
  margin: auto;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  height: auto;
  padding: 2rem 3rem;
  background: #e5f6fd;
  border-radius: 1rem;
`;
