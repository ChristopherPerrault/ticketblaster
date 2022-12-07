import React from "react";
import Cards from "../components/Cards";
import { LoggedInContext } from "../App";
import "../index.css";

function Home() {
  document.title = "TicketBlaster | Home";
  
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  //const [isAdmin, setIsAdmin] = React.useContext(isAdminContext);

  return (
    <div>
      {isLoggedIn ? <h1>Hello Logged in</h1> : <h1>Hello Logged Out</h1>}
     {/* {isAdmin ? <h1>Hello Admin</h1> : <h1></h1>}*/}
      <h1>Homepage</h1>
      <Cards />
    </div>
  );
}
export default Home;
