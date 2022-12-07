import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCards.css";
import { Card, Box, CardContent, Typography, CardMedia, Button, CardActions } from "@mui/material";

export default function EventCards(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/purchase/${props.id}`);
  };

  return (
    <div>
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
    </div>
  );
}
