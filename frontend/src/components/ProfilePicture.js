import React, { useState } from "react";
import "./Profile.css";
import Photo from "../assets/images/user-photo.jpg";
function ProfilePicture() {
  return (
    <>
      <div className="profile-left-col">
        <h1>My Account</h1>
        <img src={Photo} alt="User profile" className="profile-img" />
      </div>
    </>
  );
}
export default ProfilePicture;
