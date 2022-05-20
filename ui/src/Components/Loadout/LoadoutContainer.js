import React from "react";
import LoadoutCalc from "./LoadoutCalc";
import LoadoutTitle from "./LoadoutTitle";
import CalcBg from "../../assets/talent-calc-bg.png"

function LoadoutContainer() {
  return (
    <div id="loadout-container" style={{
        backgroundColor: "white",
        backgroundImage: `url("${CalcBg}")`,
      }}>
      <LoadoutTitle />
      <LoadoutCalc />
    </div>
  );
}

export default LoadoutContainer;
