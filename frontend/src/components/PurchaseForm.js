import React, { useState, useContext } from "react";
import { LoggedInContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { integerPropType } from "@mui/utils";
import { MenuItem, Select } from "@mui/material";

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
                <Select
                    id="level"
                    label="Ticket Level"
                    variant="outlined"
                >
                    <MenuItem value={"Floor"}>Floor</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
                <br />
                <br />
                <TextField
                    id="tickets"
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