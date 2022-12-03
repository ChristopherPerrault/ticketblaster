import React from "react";
import "./Header.css"
import Navbar from "./Navbar";
import logo from "../assets/logo.jpg";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <a href="/" title="Home">
                    <img alt="Logo" src={logo} width="200px" />
                </a>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Header;