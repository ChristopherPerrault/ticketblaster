import React, { useState, useEffect } from "react";
import EventCards from "../components/EventCards";
import { LoggedInContext } from "../App";
import LoadBar from "../components/LoadBar";
import "../index.css";
import Welcome from "../components/Welcome";

function Home() {
  document.title = "TicketBlaster | Home";

  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  //const [isAdmin, setIsAdmin] = React.useContext(isAdminContext);

  const [eventsData, setEventsData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

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
        setFirstName(json.firstName);
        setLastName(json.lastName);
      });
  }, [userId]);

  useEffect(() => {
    // ticketmaster api is set to run from the backend (index.js of /backend), effectively hiding our api keys
    const url = "http://localhost:3001/api";

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data._embedded.events);
        setLoading(false);
      });
  }, []);

  const eventElements = eventsData.map((event) => {
    return (
      <EventCards
        id={event.id}
        name={event.name}
        startDate={event.dates.start.localDate}
        venues={event._embedded.venues[0].name}
        images={event.images[6].url}
        title={event.name}
        alt={event.name}
      />
    );
  });

  return (
    <>
      <div className="home-container">
        <div className="home-left">
        {isLoggedIn ? <h1 className="home-title">Welcome back {firstName} {lastName}</h1> : <h1 className="home-title">Welcome, Guest</h1>}
          {/*{isAdmin ? <h1>Hello Admin</h1> : <h1></h1>}*/}
          {!loading && <div>{eventElements}</div>}
          {loading && (
            <h3>
              Loading events...
              <LoadBar />
            </h3>
          )}
        </div>
        <div className="home-right">
          <Welcome />
        </div>
      </div>
    </>
  );
}
export default Home;
