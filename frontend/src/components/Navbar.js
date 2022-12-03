import React from "react";
import NavButton from "./NavButton";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Navbar() {

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosRoundedIcon fontSize='tiny' />} className="nav">
                <NavButton to="/" label="Home" />
                <NavButton to="/about" label="About Us" />
                <NavButton to="/events" label="Events" />
                <NavButton to="/account" label="My Account" />
            </Breadcrumbs>
        </div>
    )
}
export default Navbar;