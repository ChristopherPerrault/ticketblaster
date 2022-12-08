import React from "react";
import "./EventCards.css";
import { Card, Box, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MyTicketCard(props) {
   const navigate = useNavigate();
   var ticketNum = Math.floor(Math.random() * 100);
   const handleClick = () => {
     navigate(`/ticket/${ticketNum}`);
   };
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
            <Button onClick={handleClick} variant="contained">
              View Tickets
             </Button>
          </CardContent>
          </Card>
          </Box>
         
                
      
    </div>
  );
}
