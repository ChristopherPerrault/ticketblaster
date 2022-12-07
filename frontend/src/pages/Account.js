import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import EditProfileForm from "../components/EditProfileForm";
import {
  // Card,
  Box,
  // CardContent,
  // Typography,
  // CardMedia,
  // Button,
  // CardActions,
} from "@mui/material";

export default function Account() {
  document.title = "TicketBlaster | Account";

  return (
    <>
      <div className="profile-container">
        <Box>
          <ProfilePicture />
        </Box>
        <EditProfileForm />
      </div>
    </>
  );
}
/*
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
*/