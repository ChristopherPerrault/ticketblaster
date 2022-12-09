import React from "react";
import "./Footer.css";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <ScrollToTop />
      <div className="footer">Copyright &copy; {currentYear} THE REGEX</div>
    </>
  );
}

export default Footer;
