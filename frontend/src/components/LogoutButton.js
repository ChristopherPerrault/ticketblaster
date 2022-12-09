import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";
import "./Button.css"

export default function LogoutButton() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    // eslint-disable-next-line
     const [isAdmin, setIsAdmin] = useContext(LoggedInContext);
    const handleLogOut = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        sessionStorage.setItem("admin", false);
        sessionStorage.setItem("userId", null);
        sessionStorage.setItem("pw", null);
        navigate("/");
    };
    return (
        <div>
            <button className="Button" onClick={handleLogOut}><p>LOG OUT</p></button>
        </div>
    )
}