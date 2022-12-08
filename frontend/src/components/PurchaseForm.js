import React, { useState, useEffect, useContext } from "react";
import { LoggedInContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InputLabel, MenuItem, Select } from "@mui/material";
import "../index.css";

export default function PurchaseForm() {
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
  // ! What happens is, it uses the previous number to calculate and not the current number. so when you move from 0 to 1 ticket, it still says price is 0.
  const calculatePrice = (event) => {
    setTickets(event.target.value);

    if (level === "Floor") {
      setTotalPrice(tickets * 300);
    } else if (level === 1) {
      setTotalPrice(tickets * 250);
    } else if (level === 2) {
      setTotalPrice(tickets * 150);
    } else if (level === 3) {
      setTotalPrice(tickets * 70);
    } else {
      setTotalPrice(0);
    }
  };

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
  }, []);

  // --------- HANDLE SUBMIT --------------
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/tickets/purchase", {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        ticketLevel: level,
        totalTickets: tickets,
        totalPrice: totalPrice,
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
          alert("Sorry something went wrong with the purchase");
        }
      });
  };

  return (
    <div>
      <form className="form-tickets" onSubmit={handleSubmit}>
        <h1>Hey {userData.firstName}</h1>
        <InputLabel id="demo-simple-select-label">Ticket Level</InputLabel>
        <Select labelId="demo-simple-select-label" id="ticket-level" value={level} label="Ticket Level" onChange={handleOnChange}>
          <MenuItem value={"Floor"}>Floor</MenuItem>
          <MenuItem value={1}>Level 1</MenuItem>
          <MenuItem value={2}>Level 2</MenuItem>
          <MenuItem value={3}>Level 3</MenuItem>
        </Select>
        <br />
        <br />
        <TextField id="tickets" type="number" label="Number of Tickets" variant="outlined" onChange={calculatePrice} value={tickets} />
        <br />
        <br />
        <TextField id="price" type="text" label="Price" variant="outlined" value={totalPrice} />
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
