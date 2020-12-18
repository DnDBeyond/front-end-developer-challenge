import React from "react";

const TalentPath = (props) => {
    return(
        <div className="Talent" style={{backgroundImage: `url(${props.sprites})`, backgroundPosition: props.spriteCoords}}></div>
    )
}

export default TalentPath