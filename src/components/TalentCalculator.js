import React from "react";
import PointTracker from "./PointTracker";
import TalentPath from "./TalentPath";

const TalentCalculator = () => {
    return(
    <div className="TalentCalculator">
        <div>TitanStar Legends - Rune Mastery Talent Calculator 9000</div>
        <TalentPath/>
        {/* TODO: Add point tracking to its own component */}
        <PointTracker/>
    </div>
    )
}

export default TalentCalculator