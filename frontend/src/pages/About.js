import React from "react";
import Button from "@mui/material/Button";
import AboutExtraInfo from "../components/AboutExtraInfo";
import AboutPhotos from "../components/AboutPhotos";
import AboutDescription from "../components/AboutDescription";
import "../index.css";

export default function About() {
  document.title = "TicketBlaster | About Us";

  const [showMoreInfo, setShowMoreInfo] = React.useState(true);
  function handleClick() {
    setShowMoreInfo((prevState) => !prevState);
  }

  return (
    <div className="container">
      <AboutPhotos />
      <AboutDescription />
      <div>
        {showMoreInfo ? (
          <div className="about--button">
            <Button variant="contained" onClick={handleClick}>
              Learn More
            </Button>
          </div>
        ) : (
          <div>
            <AboutExtraInfo />
          </div>
        )}
      </div>
    </div>
  );
}
