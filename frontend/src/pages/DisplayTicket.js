import React from "react";
import "../index.css";
import Ticket from "../components/Ticket";
import QR from "../assets/images/qrCode.png";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DisplayTicket(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Box>
      <h1>hello</h1>
      <Typography variant="h2">Enjoy the show!</Typography>
      <Typography variant="h3">{props.totalTickets}</Typography>
      <img
        src={QR}
        alt="Use this to get in at the venue!"
        className="qr-img"
        style={{width:"300px",height:"300px"}}
      />
      <Button variant="contained" onClick={handleClick}>
        Go back
      </Button>
    </Box>
  );
}
