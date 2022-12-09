import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function FinalizePurchase() {
  const navigate = useNavigate();

  // -------------- LOAD IN SESSION PURCHASEINFO --------------
  const purchaseInfo = JSON.parse(sessionStorage.purchaseInfo);

  // -------------- LOAD IN SESSION EVENTINFO --------------
  console.log(sessionStorage.eventInfo);
  const eventName = sessionStorage.eventName;

  // -------------- LOAD IN USER DATA --------------
  const loggedInUser = sessionStorage.getItem("userId");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/users/id/${loggedInUser}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [loggedInUser]);

  // --------- HANDLE SUBMIT --------------
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/tickets/purchase", {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        ticketLevel: purchaseInfo.level,
        totalTickets: purchaseInfo.tickets,
        totalPrice: purchaseInfo.totalPrice,
        purchaseDate: new Date(),
        eventName: eventName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        if (json.success === true) {
          try {
            alert("Successful purchase!");
            navigate("/myTickets", { replace: true });
          } catch (error) {
            console.log(error);
          }
        } else {
          alert("Sorry, something went wrong with the purchase");
        }
      });
  };

  return (
    <div>
      <form className="form-tickets" onSubmit={handleSubmit}>
        <br />
        <br />
        <TextField
          id="name"
          type="text"
          label="Name"
          variant="outlined"
          value={userData.firstName + " " + userData.lastName}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />
        <TextField id="email" type="text" label="Email" variant="outlined" value={userData.email} InputLabelProps={{ shrink: true }} readonly />

        <br />
        <br />
        <TextField
          id="ticket-level"
          type="text"
          label="Ticket Level"
          variant="outlined"
          value={purchaseInfo.level}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />
        <TextField
          id="tickets"
          type="text"
          label="Number of Tickets"
          variant="outlined"
          value={purchaseInfo.tickets}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />
        <TextField
          id="price"
          type="text"
          label="Price"
          variant="outlined"
          value={purchaseInfo.totalPrice}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />

        <TextField
          id="creditCard"
          type="text"
          label="Credit Card"
          variant="outlined"
          value={userData.creditCard}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />
        <TextField
          id="securityCode"
          type="text"
          label="Security Code"
          variant="outlined"
          value={userData.securityCode}
          InputLabelProps={{ shrink: true }}
          readonly
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Confirm Purchase
        </Button>
        <br />
      </form>
    </div>
  );
}
