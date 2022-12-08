import React, { useState, useEffect } from "react";
import MyTicketCard from "../components/MyTicketsCard";

function MyTickets() {
  document.title = "TicketBlaster | My Tickets";

  const [ticketsData, setTicketsData] = useState([]);
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

  const ticketElements = ticketsData.map((ticket) => {
    return <MyTicketCard email={ticket.email} seats={ticket.ticketLevel} ticketsBought={ticket.totalTickets} totalPrice={ticket.totalPrice} />;
  });

  return (
    <div>
      <h1>Currently Display All purchased Tickets</h1>
      <h4>{ticketElements}</h4>
      {/* <h4>User Email: {ticketsData[0].email}</h4> */}
      {/* <h4>User Email: {ticketsData[0].email}</h4>
      <h4>Your seats: {ticketsData[0].ticketLevel}</h4>
      <h4>Total tickets bought: {ticketsData[0].totalTickets}</h4>
      <h4>Total price payed: {ticketsData[0].totalPrice}</h4> */}
    </div>
  );
}

export default MyTickets;
