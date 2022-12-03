import React from "react";
import Header from "../components/Header";
import Outlet from "../components/Outlet";

export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}