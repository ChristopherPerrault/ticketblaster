import React, { useState } from "react";
import ChrisImg from "../assets/images/chris.png";
import SeenaImg from "../assets/images/seena.jpg";
import KevinImg from "../assets/images/kevin.jpg";
import MattImg from "../assets/images/matt.jpg";
import RegexLogo from "../assets/images/regex_logo.png";
import Button from "@mui/material/Button";
import AboutExtraInfo from "../components/AboutExtraInfo";
function AboutPhotos() {


  return (
    <>
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
    </>
  );
}
export default AboutPhotos;