import React from "react";
import "./EventCards.css";
import { Card, Box, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MyTicketCard(props) {
   const navigate = useNavigate();
   const handleClick = () => {
     navigate(`/ticket/${props.id}`);
   };
  return (
    <div>
      <Button onClick={handleClick} />
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
/*
   <Box>
        <Card className="indv-card">
          <Button onClick={handleClick}>
            <CardMedia />
            <CardContent>
              <Typography variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2">{props.startDate}</Typography>
              <Typography variant="body2">{props.venues}</Typography>
            </CardContent>
            <CardActions>
              <CardMedia height="170" width="400" component="img" image={props.images} title={props.title} alt={props.alt} />
            </CardActions>
          </Button>
        </Card>
      </Box>


*/