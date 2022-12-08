import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EditUser from "../pages/EditUser";
import AdminCrudUsers from "../pages/AdminCrudUsers";
import Account from "../pages/Account";
import { Navigate } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import FAQ from "../pages/FAQ";
import PurchaseTicket from "../pages/PurchaseTickets";
import MyTickets from "../pages/MyTickets";

export default function Outlet() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="admin" element={<AdminCrudUsers />} />

          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="/purchase/:id" element={<PurchaseTicket />} />
          <Route path="myTickets" element={<MyTickets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
