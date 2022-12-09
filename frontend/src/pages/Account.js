import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import EditProfileForm from "../components/EditProfileForm";
import { Box } from "@mui/material";

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
