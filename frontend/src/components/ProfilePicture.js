import React from "react";
import "./Profile.css";
import Photo from "../assets/images/user-photo.jpg";
import { Typography } from "@mui/material";
function ProfilePicture() {
  return (
    <>
      <div className="profile-left-col">
        <Typography variant="h3" component="h3">
          My Account
        </Typography>
        <img src={Photo} alt="User profile" className="profile-img" />
      </div>
    </>
  );
}
export default ProfilePicture;
