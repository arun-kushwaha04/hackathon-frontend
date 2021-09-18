import React from "react";
import styled from "styled-components";
import { UseGlobalContext } from "../../Context";
import Filter from "../Filter/filter";
import "./dashboard.scss";

export default function dashboard() {
  return (
    <section className="main-section-dashboard">
      <Filter />
    </section>
  );
}
