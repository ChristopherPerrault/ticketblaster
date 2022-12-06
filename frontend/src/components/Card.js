import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Card() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  //  real ticketmaster API
  useEffect(() => {
    const url =
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M"; 
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";
    const loadData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEvents(
            data._embedded.events.map((info, index) => {
              const handleClick = () => {
                navigate(`/purchase/${info.id}`);
              }
              return (
                <div>
                  <button onClick={handleClick}>
                    <img alt="img" srcSet={info.images[6].url} width="215px" />
                  </button>
                  <p className="name">{info.name}</p>
                  <p className="date">{info.dates.start.localDate}</p>
                </div >
              );
            })
          );
        });
    };

    loadData();
  }, [navigate]);

  //?  work in progress. For the time being, this renders the first event name from the API. I know .map() comes into play in the rendering; I have been experimenting with that

  // useEffect runs loadData() and waits for a successful fetch. If success, the API's data is stored as a JSON response and state "setEventName" is passed specific data.

  return (
    <div className="events">
      {events}
    </div>
  );
}
