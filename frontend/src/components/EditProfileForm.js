import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function EditProfilehtmlForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const creditCardRef = useRef();
  const securityCodeRef = useRef();
  const expDateRef = useRef();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/users", {
      method: "PUT",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        address: addressRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        creditCard: creditCardRef.current.value,
        securityCode: securityCodeRef.current.value,
        expDate: expDateRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify(json));

        try {
          navigate("/account", { replace: true });
        } catch (error) {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-right-col">
        <h1>Edit Account Info</h1>
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          placeholder=""
          ref={emailRef}
        />
        <br />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          ref={passwordRef}
        />
        <br />
        <TextField
          type="text"
          label="First Name"
          variant="outlined"
          ref={firstNameRef}
        />

        <br />
        <TextField
          type="text"
          label="Last Name"
          variant="outlined"
          ref={lastNameRef}
        />
        <br />
        <TextField
          type="text"
          label="Address"
          variant="outlined"
          ref={addressRef}
        />
        <br />
        <TextField
          type="text"
          label="Phone Number"
          variant="outlined"
          ref={phoneNumberRef}
        />
        <br />
        <TextField
          type="text"
          label="Credit Card"
          variant="outlined"
          ref={creditCardRef}
        />
        <br />
        <TextField
          type="text"
          label="Security Code"
          variant="outlined"
          ref={securityCodeRef}
        />
        <br />
        <TextField
          type="date"
          label="Expiry Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          ref={expDateRef}
        />
        <br />
        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditProfilehtmlForm;
