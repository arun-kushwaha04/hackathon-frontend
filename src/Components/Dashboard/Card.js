import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Fade from "@material-ui/core/Fade";
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

const bookAppointment = (e, index) => {
  e.preventDefault();
  const id = "datetime-local-" + index;
  let element = document.getElementById(id);
  let time = new Date(element.value).getTime();
  if (time < Date.now() + 3600000) {
    console.log(time);
    alert("Appointment Time Should be 1Hrs After the Current Time.");
    return;
  } else {
    //make a request to api
  }
};

export default function Card(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { loginStatus } = UseGlobalContext();

  const handleOpen = () => {
    if (!loginStatus) {
      alert("Please Login/Sign Up to Book a Appointment");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { index, element } = props;

  return (
    <div>
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
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Shedule Appointment
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={`${classes.modal} modal`}
        open={open}
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
                Please Choose Appointment Time Between The Slot Given By Doctor.
              </p>
              <a href="google.com" target="_blank">
                Click Here To see Slots
              </a>

              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => bookAppointment(e, index)}>
                Shedule Appointment
              </Button>
            </Stack>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
