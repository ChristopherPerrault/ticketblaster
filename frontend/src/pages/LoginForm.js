import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";

function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify(json));
        json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
      });
  };

  return (
    isLoggedIn ? navigate("/") :
      <div>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input id="email" type="email" ref={emailRef} required />
          <br />
          <label for="password">Password</label>
          <input id="password" type="password" ref={passwordRef} required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
  );
}

export default LoginForm;
