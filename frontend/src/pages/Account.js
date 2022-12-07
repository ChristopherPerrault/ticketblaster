import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import EditProfileForm from "../components/EditProfileForm";

export default function Account() {
  document.title = "TicketBlaster | Account";

  return (
    <>
      <div className="profile-container">
        <ProfilePicture />
        <EditProfileForm />
      </div>
    </>
  );
}
