import React from "react";
import Talent from "./Talent";
import sprites from "../assets/talent-icons-sprite.png";

const TalentPath = () => {
    return(
    <div className="TalentPath">
        <Talent sprites={sprites} spriteCoords="-50px 0px"/>
    </div>
    )
}

export default TalentPath