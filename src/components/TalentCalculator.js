import React, { useState } from "react";
import PointTracker from "./PointTracker";
import TalentPath from "./TalentPath";

const TalentCalculator = () => {
    const spriteCoords1 = [{x: 0, y: 0, active: false}, {x: -50, y: 0, active: false}, {x: -100, y:0, active: false}, {x: -150, y:0, active: false}];
    const spriteCoords2 = [{x: -200, y: 0, active: false}, {x: -250, y: 0, active: false}, {x: -300, y:0, active: false}, {x: -350, y:0, active: false}];
    const [active, setActive] = useState(false);

    return(
    <div className="TalentCalculator">
        <div>TitanStar Legends - Rune Mastery Talent Calculator 9000</div>
        <TalentPath spriteCoords={spriteCoords1} setActive={setActive}/>
        <TalentPath spriteCoords={spriteCoords2} setActive={setActive}/>
        {/* TODO: Add point tracking to its own component */}
        <PointTracker/>
    </div>
    )
}

export default TalentCalculator