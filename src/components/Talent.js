import React from "react";
import PropTypes from "prop-types"

const Talent = (props) => {
    // console.log("Props:", props);
    const bgPosition = props.active ? `${props.spriteX}px ${props.spriteY}px` : `${props.spriteX}px ${props.spriteY + 50}px`
    console.log("Bg positions ", bgPosition)
    return(
        <div className="TalentWrapper">
            <div className={ props.active ? "Talent active" : "Talent"}
                style={{backgroundImage: `url(${props.sprites})`, backgroundPosition: bgPosition}}                    
                onClick={() => props.setActive(props.path, props.level)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    props.setInactive(props.path, props.level)
                }}></div>
            <div className="connection"></div>
        </div>
    )
}

Talent.propTypes = {
    talents: PropTypes.array.isRequired,
    path: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    setInactive: PropTypes.func.isRequired,
    sprites: PropTypes.string.isRequired,
    spriteX: PropTypes.number.isRequired,
    spriteY: PropTypes.number.isRequired,
}

export default Talent