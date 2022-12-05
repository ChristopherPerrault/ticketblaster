import React, { useState, useEffect } from "react";

export default function Card() {
  const [events, setEvents] = useState([]);

  //  real ticketmaster API
  const url =
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

  useEffect(() => {
    loadData();
  }, []);

  //?  work in progress. For the time being, this renders the first event name from the API. I know .map() comes into play in the rendering; I have been experimenting with that

  // useEffect runs loadData() and waits for a successful fetch. If success, the API's data is stored as a JSON response and state "setEventName" is passed specific data.
  const loadData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data._embedded.events.map((info, index) => {
            return (
              <>
                <div>{info.name}</div>
                <img alt="img" srcSet={info.images[0].url}></img>
              </>
            );
          })
        );
        // allows us to view the contents of the API
        console.log(data);
      });
  };

  return (
    <div>
      {/* <button onClick={loadData}>GetData</button> */}
      <h2>{events}</h2>
    </div>
  );
}
