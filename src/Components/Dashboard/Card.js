import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Fade from "@material-ui/core/Fade";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../Context";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontSize: "1.5rem",
  },
}));

const bookAppointment = (e, index, setTimeError, setOpen) => {
  e.preventDefault();
  const id = "datetime-local-" + index;
  let element = document.getElementById(id);
  let time = new Date(element.value).getTime();
  if (time < Date.now() + 3600000) {
    // console.log(time);
    // alert("Appointment Time Should be 1Hrs After the Current Time.");
    // return;
    setOpen(false);
    setTimeError(true);
    return;
  } else {
    //make a request to api
  }
};

export default function Card(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [timeError, setTimeError] = React.useState(false);
  const { loginStatus } = UseGlobalContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { index, element } = props;

  const doctorLink = `/doctor/${element._id}`;

  return (
    <div>
      {!loginStatus && open && (
        <Stack
          sx={{
            width: "50%",
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translate(-50%,0)",
            margin: "auto",
          }}
          spacing={2}>
          <Alert
            severity="info"
            onClose={() => {
              setOpen(false);
            }}
            className="info-alert-dashboard">
            <AlertTitle>Not Logged In</AlertTitle>
            Please Login/SignUp to Book a Appointment{" "}
            <strong>
              <Link to="/login">Click Here</Link>
            </strong>
          </Alert>
        </Stack>
      )}
      {timeError && (
        <Stack
          sx={{
            width: "50%",
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translate(-50%,0)",
            margin: "auto",
          }}
          spacing={2}>
          <Alert
            severity="warning"
            onClose={() => {
              setTimeError(false);
            }}
            className="info-alert-dashboard">
            <AlertTitle>Time Error</AlertTitle>
            Appointment Time Should be 1Hrs After the Current Time.{" "}
            <strong>
              <Link to={doctorLink}>Click Here To View Slots</Link>
            </strong>
          </Alert>
        </Stack>
      )}
      <div className="card-div-doctor">
        <h1>{element.specialization}</h1>
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
            <span>Fees :</span> ₹{element.fees}
          </p>
        </article>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Shedule Appointment
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={`${classes.modal} modal`}
          open={open && loginStatus}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <Stack component="form" noValidate spacing={3}>
                <h1>Shedule Appointment</h1>
                <h4>
                  Please Note That Your Are Sheduling A Appointment With Doctor{" "}
                  {element.name}.
                </h4>
                <TextField
                  id={`datetime-local-${index}`}
                  label="Appointment Details"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  sx={{ width: 250, fontSize: "1.5rem" }}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "2rem" },
                  }}
                />
                <p>
                  Please Choose Appointment Time Between The Slot Given By
                  Doctor.
                </p>
                <Link to={doctorLink}>Click Here To View Slots</Link>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) =>
                    bookAppointment(e, index, setTimeError, setOpen)
                  }>
                  Shedule Appointment
                </Button>
              </Stack>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
