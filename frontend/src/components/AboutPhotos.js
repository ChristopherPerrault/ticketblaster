import React from "react";
import ChrisImg from "../assets/images/chris.png";
import SeenaImg from "../assets/images/seena.jpg";
import KevinImg from "../assets/images/kevin.jpg";
import MattImg from "../assets/images/matt.jpg";

function AboutPhotos() {
  return (
    <>
      <div className="about--title">
        <h1 style={{ fontSize: "2.5rem" }}>The TicketBlaster Team!</h1>
      </div>
      <div className="about--images">
        <div>
          <img src={ChrisImg} alt="Chris" title="Chris" />
          <figcaption>Chris Perrault</figcaption>
        </div>
        <div>
          <img src={SeenaImg} alt="Seena" title="Seena" />
          <figcaption>Seena Sabet-Kassouf</figcaption>
        </div>
        <div>
          <img src={KevinImg} alt="Kevin" title="Kevin" />
          <figcaption>Kevin Darby</figcaption>
        </div>
        <div>
          <img src={MattImg} alt="Matt" title="Matt" />
          <figcaption>Matthew Joseph Reda</figcaption>
        </div>
      </div>
    </>
  );
}
export default AboutPhotos;
