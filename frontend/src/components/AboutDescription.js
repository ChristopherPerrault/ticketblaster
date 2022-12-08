import React from "react";
import RegexLogo from "../assets/images/regex_logo.png";

function AboutDescription() {
  return (
    <>
      <div className="about--description">
        <p>
          &emsp;&emsp; Founded in 2022 by the four gentlemen above,
          TicketBlaster's goal is to disrupt the global ticketing industry by
          serving the customer first. Our philosophy is one of fair ticket
          prices for all regardless of the demand.
        </p>
        <img className="about--regexLogo" src={RegexLogo} alt="Regex Logo" />
      </div>
      ;
    </>
  );
}
export default AboutDescription;
