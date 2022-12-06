import React from "react";
import ChrisImg from "../assets/images/chris.png";
import SeenaImg from "../assets/images/seena.jpg";
import KevinImg from "../assets/images/user-photo.jpg";
import MattImg from "../assets/images/matt.jpg"
import RegexLogo from "../assets/images/regex_logo.png";
import Button from "@mui/material/Button";
import AboutExtraInfo from "../components/admin/AboutExtraInfo";

export default function About() {
  const [showMoreInfo, setShowMoreInfo] = React.useState(true);
  function handleClick() {
    setShowMoreInfo((prevState) => !prevState);
  }

  return (
    <div className="container">
      <div className="about--title">
        <h1>The TicketBlaster Team!</h1>
      </div>
      <div className="about--images">
        <div>
          <img src={ChrisImg} alt="Chris" />
          <figcaption>Chris Perrault</figcaption>
        </div>
        <div>
          <img src={SeenaImg} alt="Seena" />
          <figcaption>Seena Sabet-Kassouf</figcaption>
        </div>
        <div>
          <img src={KevinImg} alt="Kevin" />
          <figcaption>Kevin Darby</figcaption>
        </div>
        <div>
          <img src={MattImg} alt="Matt" />
          <figcaption>Matthew Joseph Reda</figcaption>
        </div>
      </div>
      <div className="about--description">
        <p>
          &emsp;&emsp; Founded in 2022 by the four gentlemen above, TicketBlaster's goal is to disrupt the global ticketing industry by serving the
          customer first. Our philosophy is one of fair ticket prices for all regardless of the demand.
        </p>
        <img className="about--regexLogo" src={RegexLogo} alt="Regex Logo" />
      </div>
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
