import React from "react";
import Card from "../components/Card";
import { LoggedInContext } from "../App";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  return (
    <>
      {isLoggedIn ? <h1>Hello Logged in</h1> : <h1>Hello Logged Out</h1>}
      <h1>Homepage</h1>
      <Card />
    </>
  );
}
export default Home;
