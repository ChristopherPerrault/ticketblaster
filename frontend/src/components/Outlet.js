import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import EditUser from "../pages/EditUser";
import AdminCrudUsers from "../pages/AdminCrudUsers";
import Account from "../pages/Account";
import { Navigate } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import LoginForm from "../pages/LoginForm";
import FAQ from "../pages/FAQ";

export default function Outlet() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="account" element={<Account />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="admin" element={<AdminCrudUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
