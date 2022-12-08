import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoggedInContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validEmail, validPassword } from "../Regex";

function LoginForm() {
  document.title = "TicketBlaster | Log In";

  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailErr, setEmailErr] = React.useState(null);
  const [passwordErr, setPasswordErr] = React.useState(null);

  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [isAdmin, setIsAdmin] = React.useContext(LoggedInContext);

  
  const handleSubmit = (event) => {
    console.log(email);
    console.log(password);
    event.preventDefault();

    setEmailErr(false);
    setPasswordErr(false);

    if (!validEmail.test(email)) {
      setEmailErr(true);
    }

    if (!validPassword.test(password)) {
      setPasswordErr(true);
    }

    if (emailErr === false && passwordErr === false) {
      fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          console.log("login call " + email);
         
          getUserId(email);
          alert("Successfully Logged in!");
          json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
          json.success ? sessionStorage.setItem("pw", password) : console.log("fail"); //setting password in storage to help with admin update, will change
                                                                                       //as soon as i figure out a better solution
        });
    }
  };

  return isLoggedIn ? (
   navigate("/")
  ) : (
    <div>
      <form className="login--form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          error={emailErr}
          helperText={emailErr ? "Invalid Email" : " "}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErr}
          helperText={passwordErr ? "Min 8 letters, at least one symbol, one uppercase letter and one lowercase letter " : " "}
        />
        <p style={{ color: "red" }} id="customErrorMessage"></p>
        <br />
        <p>Don't have an account? Register <Link to="/register">Here</Link></p>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;



function getUserId(email) {
  console.log("Received email: " + email);
  
  fetch(`http://localhost:3001/users/email/${email}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => {      
      console.log("Received user: " + JSON.stringify(json));
      sessionStorage.setItem("userId", json._id);
     // json.isAdmin ? sessionStorage.setItem("admin", true) : sessionStorage.setItem("admin", false);
      
    });
}
 
