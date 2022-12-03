import React, { useState } from "react";
import "./Header.css"
import Navbar from "./Navbar";
import logo from "../assets/logo.jpg";
import SearchBar from "./SearchBar";

function Header() {

    let [query, setQuery] = useState("");

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
            <div className="search">
                <SearchBar query={query}
                    onQueryChange={myQuery => setQuery(myQuery)}
                />

            </div>
            <div className="button">

            </div>
        </div>
    )
}

export default Header;