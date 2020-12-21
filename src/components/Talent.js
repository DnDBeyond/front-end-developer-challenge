import React from "react";

const TalentPath = (props) => {
    const bgPosition = props.active ? `${props.spriteX}px ${props.spriteY}px` : `${props.spriteX}px ${props.spriteY + 50}px`
    return(
        <div className="Talent" style={{backgroundImage: `url(${props.sprites})`, backgroundPosition: bgPosition}}></div>
    )
}

export default TalentPath