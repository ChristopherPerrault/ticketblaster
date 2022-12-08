import React, { useState, useEffect } from "react";
import MyTicketCard from "../components/MyTicketsCard";

function MyTickets() {
  document.title = "TicketBlaster | My Tickets";

  const [currentEmail, setCurrentEmail] = useState("");
  const [ticketsData, setTicketsData] = useState([]);

  // retrieve logged in user information from session storage in order to retrieve email
  const userId = sessionStorage.getItem("userId");
  useEffect(() => {
    fetch(`http://localhost:3001/users/id/${userId}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        setCurrentEmail(json.email);
      });
  }, [userId]);

  // fetch all tickets
  useEffect(() => {
    fetch("http://localhost:3001/allTickets", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTicketsData(data);
      });
  }, []);
  console.log(ticketsData);

  // map through all tickets,
  const ticketElements = ticketsData.map((ticket) => {
    // but only return those of current logged in user
    if (ticket.email === currentEmail) {
      return (
        <MyTicketCard
          email={ticket.email}
          seats={ticket.ticketLevel}
          ticketsBought={ticket.totalTickets}
          totalPrice={ticket.totalPrice}
          purchaseDate={ticket.purchaseDate}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <h1>Tickets purchased by {currentEmail}:</h1>
      <h4>{ticketElements}</h4>
    </div>
  );
}

export default MyTickets;
