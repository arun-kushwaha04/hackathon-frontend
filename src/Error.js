import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <h1>
      404 Page not Found <Link to="/"> Go To Home</Link>{" "}
    </h1>
  );
}
