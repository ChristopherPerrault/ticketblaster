import React from "react";
import "./EventCards.css";
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";

export default function MyTicketCard(props) {
  return (
    <div>
      <Box>
        <Card className="indv-card">
          <CardMedia />
          <CardContent>
            <Typography variant="h5" component="div">
              User: {props.email}
            </Typography>
            <Typography variant="body2">
              You bought seat for this concert on level: <b>{props.seats}</b>
            </Typography>
            <Typography variant="body2">
              Number of tickets purchased: <b>{props.ticketsBought}</b>
            </Typography>
            <Typography variant="body2">
              Price payed: <b>{props.totalPrice}</b>
            </Typography>
            <Typography variant="body2">
              Date Purchased: <b>{props.purchaseDate}</b>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
