import React from "react";

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
    <div>
     
      <Box>
        <Typography variant="h2">
            Enjoy the show!
        </Typography>
        <Card>
            <CardMedia>

            </CardMedia>
        </Card>
        <Button variant="contained" onClick={handleClick} >
            Go back
        </Button>
      </Box>
    </div>
  );
}
