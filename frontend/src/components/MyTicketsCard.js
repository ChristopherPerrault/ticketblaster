import React from "react";
import "./EventCards.css";
import { Card, Box, CardContent, Typography, CardMedia, Button, CardActions } from "@mui/material";

export default function MyTicketCard(props) {
  return (
    <div>
      <Box>
        <Card className="indv-card">
          <CardMedia />
          <CardContent>
            <Typography variant="h5" component="div">
              {props.email}
            </Typography>
            <Typography variant="body2">{props.seats}</Typography>
            <Typography variant="body2">{props.ticketsBought}</Typography>
            <Typography variant="body2">{props.totalPrice}</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
