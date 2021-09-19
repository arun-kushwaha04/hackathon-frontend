import React, { useState } from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Filter() {
  const { filterArray, setFilterArray, specialization, setSepcialization } =
    UseGlobalContext();
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
    if (isChecked(label)) {
      const temp = filterArray.filter((item) => item !== label);
      setFilterArray(temp);
      setCheckbox((prevState) => ({
        ...prevState,
        [label]: false,
      }));
    } else {
      setFilterArray((prevState) => [...prevState, label]);
      setCheckbox((prevState) => ({
        ...prevState,
        [label]: true,
      }));
    }
  };

  const handleChange = (event) => {
    setSepcialization(event.target.value);
  };

  return (
    <MainDiv>
      <div className="filter-input-div">
        {/* <input type="text" placeholder="Specialization of Doctor" /> */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Type of Doctor
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={specialization}
            label="Doctor Type"
            onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Cardiologist"}>Cardiologist</MenuItem>
            <MenuItem value={"Oncologist"}>Oncologist</MenuItem>
            <MenuItem value={"Gastroenterologist"}>Gastroenterologist</MenuItem>
            <MenuItem value={"Pulmonologist"}>Pulmonologist</MenuItem>
            <MenuItem value={"Gynecologist"}>Gynecologist</MenuItem>
            <MenuItem value={"Nephrologist"}>Nephrologist</MenuItem>
            <MenuItem value={"Endocrinologist"}>Endocrinologist</MenuItem>
            <MenuItem value={"Ophthalmologist"}>Ophthalmologist</MenuItem>
            <MenuItem value={"Otolaryngologist"}>Otolaryngologist</MenuItem>
            <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
            <MenuItem value={"Psychiatrist"}>Psychiatrist</MenuItem>
            <MenuItem value={"Neurologist"}>Neurologist</MenuItem>
            <MenuItem value={"Radiologist"}>Radiologist</MenuItem>
            <MenuItem value={"Surgeon"}>Surgeon</MenuItem>
            <MenuItem value={"Anesthesiologist"}>Anesthesiologist</MenuItem>
          </Select>
          {/* <FormHelperText>Select Doctor Type</FormHelperText> */}
        </FormControl>
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
