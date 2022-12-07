import React, { useState, useContext } from "react";
import { LoggedInContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";

export default function PurchaseForm() {

    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const navigate = useNavigate();

    const handleRegClick = () => {
        navigate("/register");
    }

    const handleLogClick = () => {
        navigate("/login");
    }

    return (
        <div>
            <form className="form-tickets">
                <TextField
                    type="number"
                    label="Number of Tickets"
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    type="text"
                    label="Price"
                    variant="outlined"
                />
                <br />
                {isLoggedIn ?
                    <div>
                        <br />
                        <Button variant="contained">
                            Proceed to Checkout
                        </Button>
                    </div> :
                    <div>
                        <h3>You must be registered/signed in to purchase tickets</h3>
                        <Button onClick={handleRegClick} variant="contained">
                            Register
                        </Button>
                        &emsp;
                        <Button onClick={handleLogClick} variant="contained">
                            Log In
                        </Button>
                    </div>}
            </form>
        </div>
    )
}