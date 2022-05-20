import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

function Footer() {
  return (
    <footer>
      <div className="bottom-link-copy-container">
        <Link to="">SNOWFLAKES</Link> | <Link to="">MAGNETS</Link> | <Link to="">LIQUIDS</Link>
        <br />
        <span className="copyright">Curse Front-End Design Challenge - Copyright 2017</span>
      </div>
      <div className="bottom-social-links"><Social /></div>
    </footer>
  );
}

export default Footer;
