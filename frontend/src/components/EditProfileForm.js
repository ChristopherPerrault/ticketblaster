import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EditProfilehtmlForm() {
 
const loggedInUser = localStorage.getItem("user");
  const TextStyle = {
    width:"200px",
    margin:"5px"
  }
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

  const currentUser = loadUserDetails(loggedInUser);
  currentUser.then((currentUser) => console.log("Resolving promise"));
  
  console.log(currentUser.id);
  const handleSubmit = (event) => {
    event.preventDefault();    
    fetch("http://localhost:3001/users/update", {
      method: "POST",
      body: JSON.stringify(currentUser)   
      ,
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
 // 

  return (
    <div>
      <form onSubmit={handleSubmit} className="profile-right-col">
        <h1>Edit Account Info</h1>
        <h2>{loggedInUser}</h2>
        <TextField
          style={TextStyle}
          type="text"
          label="Email"
          variant="outlined"
          placeholder=""
          ref={emailRef}
        />
        <br />
        <TextField
        
          style={TextStyle}
          type="password"
          label="Password"
          variant="outlined"
          ref={passwordRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="First Name"
          variant="outlined"
          ref={firstNameRef}
        />

        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Last Name"
          variant="outlined"
          ref={lastNameRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Address"
          variant="outlined"
          ref={addressRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Phone Number"
          variant="outlined"
          ref={phoneNumberRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Credit Card"
          variant="outlined"
          ref={creditCardRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="text"
          label="Security Code"
          variant="outlined"
          ref={securityCodeRef}
        />
        <br />
        <TextField
          style={TextStyle}
          type="date"
          label="Expiry Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          ref={expDateRef}
        />
        
        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditProfilehtmlForm;

async function loadUserDetails(email){
const response = await fetch(`http://localhost:3001/users/${email}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json()
      if (!record) {
        window.alert(`Record with id ${email} not found`);
        
        return;
      }
     // console.log(record._id);    
    /*   const userId = record._id;
     const email = record.email;
     const password = record.password;
      const fName = record.firstName;
      const lName = record.lastName;
      const adr = record.address;
      const phoneNum = record.phoneNumber;
      const cc = record.creditCard;
      const secCode = record.securityCode;
      const expiry = record.expDate; */

      const currentUser = {
        id: record._id,
        email: record.email,
        password: record.password,
        firstName: record.firstName,
        lastName: record.lastName,
        address: record.address,
        phoneNumber: record.phoneNumber,
        creditCard: record.creditCard,
        securityCode: record.securityCode,
        expDate: record.expDate,
      };
     // console.log(userId)
      return currentUser;
}