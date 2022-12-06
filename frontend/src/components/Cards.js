import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";

export default function Cards() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  //  real ticketmaster API
  useEffect(() => {
    const url =
      // Chris:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

      // Matt #1:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M";

      // Matt #2:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=hu5LlW3eJkDoVLKyUGnAZmbpZS8k6eCE111";

      // Kevin:
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

    const loadData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEvents(
            data._embedded.events.map((event, index) => {
              const handleClick = () => {
                navigate(`/purchase/${event.id}`);
              };
              return (
                <div>
                  <Box>
                    <Card className="indv-card">
                      <Button onClick={handleClick}>
                        <CardMedia />
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {event.name}
                          </Typography>
                          <Typography variant="body2">
                            {event.dates.start.localDate}
                            {/* {event.products[0].name} */}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <CardMedia
                            height="170"
                            width="400"
                            component="img"
                            image={event.images[6].url}
                            alt="artist image"
                          />
                        </CardActions>
                      </Button>
                    </Card>
                  </Box>
                </div>

                //  <div>
                //   <button onClick={handleClick}>
                //      <img alt="img" srcSet={event.images[6].url} width="215px" />
                //    </button>
                //    <p className="name">{event.name}</p>
                //    <p className="date">{event.dates.start.localDate}</p>
                //  </div>
              );
            })
          );
        });
    };

    loadData();
  }, [navigate]);

  //?  work in progress. For the time being, this renders the first event name from the API. I know .map() comes into play in the rendering; I have been experimenting with that

  // useEffect runs loadData() and waits for a successful fetch. If success, the API's data is stored as a JSON response and state "setEventName" is passed specific data.

  // this had class .events
  return <div>{events}</div>;
}
