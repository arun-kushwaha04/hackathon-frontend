import React, { useState } from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Filter() {
  const { filterArray, setFilterArray } = UseGlobalContext();
  const [checkbox, setCheckbox] = useState({
    rating: true,
    experience: false,
    price: false,
  });

  const isChecked = (label) => {
    if (
      filterArray == null ||
      filterArray === undefined ||
      filterArray.length === 0
    ) {
      return false;
    }
    if (filterArray.find((ele) => ele === label)) {
      return true;
    } else return false;
  };
  const onChangedHandle = (e, label) => {
    console.log("is checked", isChecked(label));
    if (isChecked(label)) {
      console.log("in if statement");
      const temp = filterArray.filter((item) => item !== label);
      setFilterArray(temp);
      setCheckbox((prevState) => ({
        ...prevState,
        [label]: false,
      }));
    } else {
      console.log("in else statement");
      setFilterArray((prevState) => [...prevState, label]);
      setCheckbox((prevState) => ({
        ...prevState,
        [label]: true,
      }));
    }
  };
  return (
    <MainDiv>
      <div className="filter-input-div">
        <input type="text" placeholder="Specialization of Doctor" />
      </div>
      <FormGroup className="filter-div">
        <FormControlLabel
          control={<Checkbox />}
          label="Rating"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          checked={checkbox.rating}
          onChange={(e) => onChangedHandle(e, "rating")}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Less To High Appointment Fees"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          checked={checkbox.price}
          onChange={(e) => onChangedHandle(e, "price")}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Experience"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          checked={checkbox.experience}
          onChange={(e) => onChangedHandle(e, "experience")}
        />
      </FormGroup>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  height: 8rem;
  width: 70%;
  margin: auto;
  align-content: center;
  justify-content: space-between;
  font-size: 1.5px;
  padding: 2rem 0;
  font-family: "Roboto", sans-serif;
`;
