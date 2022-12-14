import React, { useState, useContext } from "react";
import { LoggedInContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InputLabel, MenuItem, Select } from "@mui/material";
import "../index.css";

export default function PurchaseForm() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [level, setLevel] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [tickets, setTickets] = useState(0);

  const navigate = useNavigate();

  const handleRegClick = () => {
    navigate("/register");
  };

  const handleLogClick = () => {
    navigate("/login");
  };

  const handleOnChange = (event) => {
    setLevel(event.target.value);
  };

  // Function to calculate the price on change of number of tickets
  const calculatePrice = (event) => {
    setTickets(event.target.value);
    var numOfTickets = document.getElementById("tickets").value;
    if (level === "Floor") {
      setTotalPrice(numOfTickets * 300);
    } else if (level === 1) {
      setTotalPrice(numOfTickets * 250);
    } else if (level === 2) {
      setTotalPrice(numOfTickets * 150);
    } else if (level === 3) {
      setTotalPrice(numOfTickets * 70);
    } else if (totalPrice < 0) {
      setTotalPrice(0);
    }
  };

  // --------- HANDLE SUBMIT --------------
  const handleSubmit = (event) => {
    event.preventDefault();
    // create an object with the form values
    const purchaseInfo = { level, totalPrice, tickets };

    // stringify the object and set in session storage in order to retrieve on FinalizePurchase page
    sessionStorage.setItem("purchaseInfo", JSON.stringify(purchaseInfo));
    navigate("/finalizePurchase");
  };

  return (
    <div>
      <form className="form-tickets" onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Ticket Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="ticket-level"
          value={level}
          label="Ticket Level"
          onChange={handleOnChange}
        >
          <MenuItem value={"Floor"}>Floor</MenuItem>
          <MenuItem value={1}>Level 1</MenuItem>
          <MenuItem value={2}>Level 2</MenuItem>
          <MenuItem value={3}>Level 3</MenuItem>
        </Select>
        <br />
        <br />
        <TextField
          id="tickets"
          type="number"
          InputProps={{ inputProps: { min: "0", max: "8", step: "1" } }}
          label="Number of Tickets"
          variant="outlined"
          onChange={calculatePrice}
          value={tickets}
        />
        <br />
        <br />
        <TextField
          id="price"
          type="text"
          label="Price"
          variant="outlined"
          value={totalPrice}
        />
        <br />
        {isLoggedIn ? (
          <div>
            <br />
            <Button type="submit" variant="contained">
              Proceed to Checkout
            </Button>
          </div>
        ) : (
          <div>
            <h3>You must be registered/signed in to purchase tickets</h3>
            <Button onClick={handleRegClick} variant="contained">
              Register
            </Button>
            &emsp;
            <Button onClick={handleLogClick} variant="contained">
              Log In
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
