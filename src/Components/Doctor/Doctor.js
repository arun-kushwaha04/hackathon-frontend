import React from "react";

export default function Doctor() {
  const doctorId = window.location.pathname.split("/doctor/")[1];
  return <h1> Hello from doctor {doctorId} </h1>;
}
