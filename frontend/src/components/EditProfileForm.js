import React, { useEffect, useRef } from "react";
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
  const idRef = useRef();
  const xRef = useRef();
  const emailRef = useRef();
//  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const creditCardRef = useRef();
  const securityCodeRef = useRef();
  const expDateRef = useRef();

  const navigate = useNavigate();
  //const id = idRef.current.value();
 // console.log(idRef.current.value());

 
  useEffect(() => {
     loadUserDetails(loggedInUser);
  }, [loggedInUser])

  const handleSubmit = (event) => {
    console.log("Received event: " + event)
    const editedPerson = {
      id: idRef.current.value,
      email: emailRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      creditCard: creditCardRef.current.value,
      securityCode: securityCodeRef.current.value,
      expDate: expDateRef.current.value,
    };
    console.log(JSON.stringify(editedPerson));
    const id = idRef.current.value;
    fetch(`http://localhost:3001/users/${id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify(json));

        try {
         
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
        <div ref={idRef} className="hiddenId" style={{ display: "none" }}></div>
        <TextField
          style={TextStyle}
          className="email-input"
          type="text"
          label="Email Address"
          variant="outlined"
          ref={emailRef}
        />
        <input type="text" ref={xRef} id="x" />

        {/*   
    <br />
      <TextField
          style={TextStyle}
          type="password"
          label="Password"
          variant="outlined"
          ref={passwordRef}
        /> */}

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
/* const response = await fetch(`http://localhost:3001/users/${email}`);

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
     
       const userId = record._id;
     const userEmail = record.email;
     const password = record.password;
      const fName = record.firstName;
      const lName = record.lastName;
      const adr = record.address;
      const phoneNum = record.phoneNumber;
      const cc = record.creditCard;
      const secCode = record.securityCode;
      const expiry = record.expDate; 

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
      }; */

      fetch(`http://localhost:3001/users/${email}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((data) => data.json())
      .then((json) => {
       // document.querySelector(".email-input").value = json.email;
         document.getElementById("x").value = json.email;
         document.querySelector(".email-input").value = json.email;
       
//console.log(json._id);
      });

    //  document.querySelector(".email-input").label = userEmail;
    
      
}