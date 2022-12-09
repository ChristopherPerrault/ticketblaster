import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { Card, Box, CardContent, Typography, CardMedia, Button, CardActions } from "@mui/material";
import PurchaseForm from "../components/PurchaseForm";

export default function PurchaseTicket(props) {
  document.title = "TicketBlaster | Event Details";

  const [events, setEvents] = useState([]);
  const [purchaseForm, setPurchaseForm] = useState(false);
  const params = useParams();

  const handlePurchaseClick = () => {
    setPurchaseForm(true);
  };
  useEffect(() => {
    // ticketmaster api is set to run from the backend (index.js of /backend), effectively hiding our api keys
    const url = "http://localhost:3001/api";

    const loadData = async () => {
      const id = params.id.toString();
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEvents(
            data._embedded.events.map((event, index) => {
              if (event.id === id) {
                // creating and storing the event info as an object in session storage
                const eventName = event.name;
                sessionStorage.setItem("eventName", eventName);

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
                        <Button onClick={handlePurchaseClick} variant="contained" style={{ marginLeft: "50%", marginTop: "-5%" }}>
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
      {purchaseForm ? (
        <div className="purchase-form">
          <PurchaseForm />
        </div>
      ) : null}
    </div>
  );
}
