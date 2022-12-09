import React from "react";
import "../index.css";
import QR from "../assets/images/qrCode.png";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DisplayTicket(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="display-ticket">
      <Box>
        <Typography variant="h2">Enjoy the show!</Typography>
        <Typography variant="h3">{props.seats}</Typography>
        <img
          src={QR}
          alt="Use this to get in at the venue!"
          className="qr-img"
          style={{ width: "300px", height: "300px" }}
        />
        <br />
        <Button variant="contained" onClick={handleClick}>
          Go back
        </Button>
      </Box>
    </div>
  );
}
