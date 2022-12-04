import Outlet from "./components/Outlet";
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn];

  return (
    <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
      <Outlet />
    </LoggedInContext.Provider>
  )
}

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
});
