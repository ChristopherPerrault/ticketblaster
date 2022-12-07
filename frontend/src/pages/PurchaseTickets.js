import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import ProductCard from "../components/ProductCard";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";

export default function PurchaseTicket(props) {
  document.title = "TicketBlaster | Event Details";

  const [events, setEvents] = useState([]);
  const params = useParams();

  useEffect(() => {
    const url =
      // Chris:
      // "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=zhJDIqfMsloXKpRjywIbmnUSBGw9AxNq";

      // Matt #1:
      //"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=qiJ5AkBhkvr6IFdd9UamBev1hYovx46M";

      // Matt #2:
      // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=hu5LlW3eJkDoVLKyUGnAZmbpZS8k6eCE111

      // Kevin:
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=LVpUpS7gaeXxvoQMKgDF1zSNbXbASUgS";

    const loadData = async () => {
      const id = params.id.toString();
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEvents(
            data._embedded.events.map((event, index) => {
              if (event.id === id) {
                const date = new Date(event.dates.start.localDate);
                const formattedDate = date.toLocaleDateString("en-CA", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <div>
                    <Box>
                      <Card className="indv-event-details-container">
                        <CardActions>
                          <CardMedia
                            height="400"
                            width="400"
                            component="img"
                            srcSet={event.images[5].url}
                            title={event.name + " banner image"}
                            alt={event.name + " banner image"}
                          />
                        </CardActions>
                        <CardMedia />
                        <CardContent>
                          <ProductCard product={id} />
                          <Typography variant="h4" component="h4">
                            {event.name}
                          </Typography>
                          <Typography variant="body1" component="h4">
                            {formattedDate}
                            <br />
                            <br />
                            Performing LIVE at: <br />
                            {event._embedded.venues[0].name}
                            <br />
                            {event._embedded.venues[0].city.name},{"\u00A0"}
                            {event._embedded.venues[0].state.name},{"\u00A0"}
                            {event._embedded.venues[0].country.name}
                            <br />
                            {event._embedded.venues[0].postalCode}
                            <br />
                            <br />
                            {event._embedded.venues[0].name} Seatmap:
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <CardMedia
                            component="img"
                            className="seatmap"
                            srcSet={event.seatmap.staticUrl}
                            title={event._embedded.venues[0].name + " seatmap"}
                            alt={event._embedded.venues[0].name + " seatmap"}
                          />
                        </CardActions>

                        <CardMedia />
                        {/* add time, doors, show */}
                        {/* add price range */}
                        {/* add capacity */}
                        {/* add age restrictions/notices */}
                        <Button type="submit" variant="contained">
                          Purchase
                        </Button>
                      </Card>
                    </Box>
                  </div>
                );
              } else {
                return null;
              }
            })
          );
        });
    };
    loadData();
  }, [params.id]);

  return (
    <div>
      <div>{events}</div>
    </div>
  );
}
