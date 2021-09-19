import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../Context";
let name,
  email,
  contact,
  fees,
  specialization,
  experience,
  age = null;

export default function Card(props) {
  const { userType } = UseGlobalContext();
  const { data, param } = props;

  if (data) {
    if (userType === "patient") {
      let temp = data.doctorDetails;
      // console.log("temp", temp);
      name = temp.doctorname;
      email = temp.doctoremail;
      contact = temp.doctorcontact;
      fees = temp.doctorfees;
      specialization = temp.doctorspecialization;
      experience = temp.doctorexperience;
      age = null;
    } else {
      let temp = data.patientDetails;
      name = temp.patientname;
      email = temp.patientemail;
      contact = temp.patientcontact;
      age = temp.patientage;
      fees = null;
      specialization = null;
      experience = null;
    }
  }

  const doctorLink = `/doctor/${data._id}`;

  return (
    <div>
      {userType === "patient" ? (
        <div className="card-div-doctor">
          <h1>{specialization}</h1>
          <article>
            <p>
              <Link to={doctorLink}>
                <span>Doctor {name}</span>
              </Link>
            </p>
            <p>
              <span>Experience :</span> {experience} years
            </p>
            <p>
              <span>Doctor Email :</span> {email}
            </p>
            <p>
              <span>Doctor Number :</span> {contact}
            </p>
            <p>
              <span>Fees :</span> ₹{fees}
            </p>
          </article>
          {param === "nextAppointment" ? (
            <Button variant="contained" color="secondary">
              <a href={data.url} _target="_blank">
                <span>Join Meet</span>
              </a>
            </Button>
          ) : param === "futureAppointments" ||
            param === "requestedAppointments" ? (
            <Button variant="contained" color="secondary">
              <span>Cancel Appointment</span>
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="card-div-doctor">
          <article>
            <p>
              <span>Patient Name : {name}</span>
            </p>
            <p>
              <span>Patient Age :</span> {age}
            </p>
            <p>
              <span>Patient Email :</span> {email}
            </p>
            <p>
              <span>Patient Number :</span> {contact}
            </p>
          </article>
          {param === "requestedAppointments" && (
            <Button variant="contained" color="secondary">
              <span>Cancel Appointment</span>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
