import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../index.css";

export default function Contact() {
  document.title = "TicketBlaster | Contact";

  return (
    <div className="container">
      <div className="title">
        <h1>Contact Us on Any of Our Platforms!</h1>
      </div>
      <div className="description">
        <p>
          Click on any of the icons below to contact us with any needs,
          questions or suggestions! <br />
          We are looking forward to hearing from you!
        </p>
      </div>
      <div className="icons">
        <div>
          <LocationOnIcon
            className="icon"
            sx={{ color: "#d82823", fontSize: "100px" }}
          />
          <p>Montreal, Quebec</p>
        </div>
        <div>
          <PhoneIcon
            className="icon"
            sx={{ color: "#1eb730", fontSize: "100px" }}
          />
          <p>1 (800) 842-5387</p>
        </div>
        <div>
          <a href="mailto:ticketblaster55@gmail.com" title="Email">
            <EmailIcon
              className="icon"
              sx={{ color: "#f1d68f", fontSize: "100px" }}
            />
          </a>
          <p>Send us an Email!</p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/ticketblaster22/"
            title="Instagram"
          >
            <InstagramIcon
              className="icon"
              sx={{ color: "#ec2ec7", fontSize: "100px" }}
            />
          </a>
          <p>
            Message us on
            <br />
            Instagram!
          </p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/?stype=lo&jlou=AfcCjbF-TFvWyRU2AOORdTjcLqayzv6EG1dPxi594BYATF_vB8ZrjlLrScsfD_rY0CL72--wvVlMbE5zgAQ9YCWTihO7FWPi0aC2PcqQFN4NcA&smuh=4041&lh=Ac-U-lUwX5os2ycFUGI"
            title="Facebook"
          >
            <FacebookIcon
              className="icon"
              sx={{ color: "#0267d4", fontSize: "100px" }}
            />
          </a>
          <p>
            Connect with us
            <br />
            on Facebook!
          </p>
        </div>
      </div>
    </div>
  );
}
