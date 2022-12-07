import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EditProfilehtmlForm() {
  const TextStyle = {
    width: "200px",
    margin: "5px",
  };
  const idRef = useRef();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [creditCard, setCreditCard] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [expDate, setExpDate] = React.useState(null);

  const navigate = useNavigate();
  //storage is set when user logs in
  const loggedInUser = localStorage.getItem("user");
  /* this method is used to generate all data about the user and display it,
   having difficulty getting it to show with material atm */
  loadUserDetails(loggedInUser);

  async function handleSubmit(event) {
    event.preventDefault();
    const id = document.querySelector(".hiddenId");
    console.log(id.value);
    console.log("Received update");
    const editedPerson = {
      // id: id,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      creditCard: creditCard,
      securityCode: securityCode,
      expDate: expDate,
    };
    console.log(
      "Sending the following data to server: " + JSON.stringify(editedPerson)
    );

    // This will send a post request to update the data in the database.
    try {
      await fetch(`http://localhost:3001/users/${email}`, {
        method: "POST",
        body: JSON.stringify(editedPerson),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) =>
        console.log("Response: " + JSON.stringify(response))
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-right-col">
        <h1>Edit Account Info</h1>
        {/* The below element stores the id of the user, which is generated by @loadUserDetails below */}

        <div ref={idRef} className="hiddenId" style={{ display: "none" }}></div>
        {/* Testing purposes, will delete*/}
        <input type="text" className="x" />
        <TextField
          style={TextStyle}
          className="email-input"
          type="text"
          label="Email Address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/*   <input type="text" ref={xRef} id="x" />*/}
        <br />
        <TextField
          style={TextStyle}
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Address"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Credit Card"
          variant="outlined"
          onChange={(e) => setCreditCard(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Security Code"
          variant="outlined"
          onChange={(e) => setSecurityCode(e.target.value)}
        />
        <br />
        <TextField
          style={TextStyle}
          type="date"
          label="Expiry Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={(e) => setExpDate(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditProfilehtmlForm;

async function loadUserDetails(email) {
  fetch(`http://localhost:3001/users/${email}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      document.querySelector(".hiddenId").innerHTML = json._id;
      document.querySelector(".x").value = json.email;
    });
}
