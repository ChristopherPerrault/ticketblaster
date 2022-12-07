import React, { useState, useEffect } from "react";
import EventCards from "../components/EventCards";
import { LoggedInContext } from "../App";
import LoadBar from "../components/LoadBar";
import "../index.css";

function Home() {
  document.title = "TicketBlaster | Home";

  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  //const [isAdmin, setIsAdmin] = React.useContext(isAdminContext);

  const [eventsData, setEventsData] = useState([]);

  const [loading, setLoading] = useState(false);

  //  real ticketmaster API
  useEffect(() => {
    // console.log("Effect Ran");

    const url =
      // Chris:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

      // Matt #1:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M";

      // Matt #2:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=hu5LlW3eJkDoVLKyUGnAZmbpZS8k6eCE111";

      // Kevin:
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

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
    <div>
      {isLoggedIn ? <h1>Hello Logged in</h1> : <h1>Hello Logged Out</h1>}
      {/* {isAdmin ? <h1>Hello Admin</h1> : <h1></h1>}*/}
      <h1>Homepage</h1>
      {!loading && <div>{eventElements}</div>}
      {loading && (
        // eslint-disable-next-line react/style-prop-object
        <h3>
          Loading events...
          <LoadBar />
        </h3>
      )}
    </div>
  );
}
export default Home;
