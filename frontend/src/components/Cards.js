import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import { LoggedInContext } from "../App";
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
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  //  real ticketmaster API
  useEffect(() => {
    const url =
      // Chris:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

      // Matt #1:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M";

      // Matt #2:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=hu5LlW3eJkDoVLKyUGnAZmbpZS8k6eCE111";

      // Kevin:
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

    const loadData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEvents(
            data._embedded.events.map((event, index) => {
              const handleClick = () => {
                if (isLoggedIn) {
                  navigate(`/purchase/${event.id}`);
                }
                else {
                  navigate("/login");
                }
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
                          </Typography>
                          <Typography variant="body2">
                            {event._embedded.venues[0].name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <CardMedia
                            height="170"
                            width="400"
                            component="img"
                            image={event.images[6].url}
                            title={event.name}
                            alt={event.name}
                          />
                        </CardActions>
                      </Button>
                    </Card>
                  </Box>
                </div>
              );
            })
          );
        });
    };

    loadData();
  }, [navigate, isLoggedIn]);

  return <div>{events}</div>;
}
