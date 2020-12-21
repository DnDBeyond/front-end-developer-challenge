import React from "react";
import Talent from "./Talent";
import sprites from "../assets/talent-icons-sprite.png";

const TalentPath = (props) => {
    return(
    <div className="TalentPath">
        {
            props.spriteCoords.map((spriteCoord, idx) => (
            <Talent key={idx}
                onClick={() => props.setActive(idx)}
                sprites={sprites} 
                active={spriteCoord.active}
                spriteX={spriteCoord.x} 
                spriteY={spriteCoord.y}/>)
            )
        }
    </div>
    )
}

export default TalentPath