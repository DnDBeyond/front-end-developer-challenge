import React from "react";
import Twitter from "../assets/twitter.png";
import FB from "../assets/fb.png";
import YouTube from "../assets/youtube.png";

function Social() {
  return (
    <div className="social">
      <button className="social-button"><img src={Twitter} alt="twitter" /></button>
      <button className="social-button"><img src={FB} alt="fb" /></button>
      <button className="social-button"><img src={YouTube} alt="youtube" /></button>
    </div>
  );
}

export default Social;
