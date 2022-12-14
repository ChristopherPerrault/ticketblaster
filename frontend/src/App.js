import Outlet from "./components/Outlet";
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn];
  //const adminValueAndSetterToProvide = [isAdmin, setIsAdmin];
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
      {/*<isAdminContext.Provider value={adminValueAndSetterToProvide} /> */}
      <Outlet />
    </LoggedInContext.Provider>
  );
}

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});
/* export const isAdminContext = React.createContext({
  isAdmin: false,
  setIsLoggedIn: () => {},
}); */
