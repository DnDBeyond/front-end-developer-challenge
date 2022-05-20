import React from "react";
import Snowflake from "../assets/snowflake.png";
import Magnet from "../assets/magnet.png";
import Liquid from "../assets/liquid.png";
import { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <div id="nav">
      <button className="nav-button">
        <img src={Snowflake} alt="snowflake" />
        <br />
        <span>SNOWFLAKES</span>
      </button>
      <div className="vl"></div>
      <button className="nav-button">
        <img src={Magnet} alt="magnet" />
        <br />
        <span>MAGNETS</span>
      </button>
      <div className="vl"></div>

      <button
        className="nav-button"
        onClick={() => {
          show === true ? handleClose() : handleOpen();
        }}
      >
        <img src={Liquid} alt="liquid" />
        <br />
        <span>LIQUIDS</span>
      </button>
      {show === true ? (
        <div id="myDropdown" className="dropdown-content">
          <button href="">Flammable</button>
          {/* maybe to become anchor when href is available */}

          <button href="">Combustable</button>

          <button href="">Flambustable</button>
        </div>
      ) : null}
      <div className="vl"></div>
    </div>
  );
}

export default Nav;
