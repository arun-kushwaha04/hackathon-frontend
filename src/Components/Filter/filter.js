import React from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function filter() {
  return (
    <MainDiv>
      <div className="filter-input-div">
        <input type="text" placeholder="Specialization of Doctor" />
      </div>
      <FormGroup className="filter-div">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Rating"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Less To High Appointment Fees"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Experience"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
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
