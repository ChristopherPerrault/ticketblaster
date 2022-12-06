import React from "react";
import Card from "../components/Card";
import { LoggedInContext } from "../App";
import "../index.css";

function Home() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);


  return (
    <div>
      {isLoggedIn ? <h1>Hello Logged in</h1> : <h1>Hello Logged Out</h1>}
      <h1>Homepage</h1>
      <Card />
    </div>
  );
}
export default Home;
