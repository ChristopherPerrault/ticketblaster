import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Account from "../pages/Account";
import { Navigate } from "react-router-dom";

export default function Outlet() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="events" element={<Events />} />
                    <Route path="account" element={<Account />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}