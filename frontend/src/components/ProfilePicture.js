import React, { useState } from "react";
import "./Profile.css";
import Photo from "../assets/user-photo.jpg";
function ProfilePicture(){
     return (
       <>
         
           <div className="profile-left-col">
             <h1>My Account</h1>
             <img src={Photo} alt="User profile" class="profile-img" />
           </div>
         
       </>
     );

}
export default ProfilePicture;