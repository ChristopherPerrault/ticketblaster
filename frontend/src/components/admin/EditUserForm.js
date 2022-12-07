import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";

import "./RecordList.css";
export default function EditUser(props) {
  const emailRef = useRef(); 
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const creditCardRef = useRef();
  const securityCodeRef = useRef();
  const expDateRef = useRef();

const params = useParams();
const navigate = useNavigate();
//
loadCurrentUser(params.id);
  useEffect(() => {
    async function fetchData() {
      const id = params._id.toString();
      const response = await fetch(`http://localhost:3001/users/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      console.log(record);
    
    }

    fetchData();

    return;
  }, [params.id, navigate]);


  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      id: params.id,
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

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3001/users/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(console.log(editedPerson));

    navigate("/admin");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="edit-container">
      <h3>Update Record ({params.id})</h3>
      <form onSubmit={onSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="form-control"
            id="email"
            ref={emailRef}
                   
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            className="form-control"
            id="firstName"       
            ref={firstNameRef}            
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            className="form-control"
            id="lastName"            
            ref={lastNameRef}           
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            className="form-control"
            id="address"           
            ref={addressRef}            
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"          
            ref={phoneNumberRef}          
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card: </label>
          <input
            type="text"
            className="form-control"
            id="creditCard"
         
            ref={creditCardRef}
          
          />
        </div>
        <div className="form-group">
          <label htmlFor="securityCode">Security Code: </label>
          <input
            type="text"
            className="form-control"
            id="securityCode"
            
            ref={securityCodeRef}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="expDate">Expiry Date: </label>
          <input
            type="date"
            className="form-control"
            id="expDate"
            
            ref={expDateRef}
         
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

async function loadCurrentUser(id){
fetch(`http://localhost:3001/users/${id}`, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((data) => data.json())
  .then((json) => {
    
    document.getElementById("email").value = json.email;
     document.getElementById("firstName").value = json.firstName;
      document.getElementById("lastName").value = json.lastName;
       document.getElementById("address").value = json.address;
        document.getElementById("phoneNumber").value = json.phoneNumber;
         document.getElementById("creditCard").value = json.creditCard;
         document.getElementById("securityCode").value = json.securityCode;
         
           

  });
}