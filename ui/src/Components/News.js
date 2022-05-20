import React from "react";
import NewsBg from "../assets/news-bg.png";

function News() {
  return (
    <div id="news">
      <div className="news-title">Important News Items</div>
      <div
        className="news-content"
        style={{
          backgroundColor: "white",
          backgroundImage: `url("${NewsBg}")`,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button id="read-more-btn">Read More</button>
      </div>
    </div>
  );
}

export default News;
