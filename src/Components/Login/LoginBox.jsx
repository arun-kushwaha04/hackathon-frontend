import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../Context.js";

function LoginBox() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setLoginStatus } = UseGlobalContext();

  const login = async () => {
    setLoginStatus(true);
  };

  console.log(email, password);

  return (
    <>
      <h1 id="login">LogIn</h1>
      <br />
      <input
        type="email"
        id="email"
        class="client-info"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label for="email" className="label">
        Email
      </label>
      <input
        type="password"
        id="password"
        class="client-info"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label for="password" className="label">
        Password
      </label>
      <input
        type="button"
        id="submit"
        class="client-info"
        value="Submit"
        onClick={() => {
          login();
        }}
      />
      <div>
        <Link className="box-nav-link" to="/signup">
          Create an account
        </Link>
      </div>
    </>
  );
}

export default LoginBox;
