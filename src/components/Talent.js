import React from "react";
import PropTypes from "prop-types"

const Talent = (props) => {
    function onRightClick(e, idx) {
        e.preventDefault();
        props.setInactive(idx);
    }

    const bgPosition = props.active ? `${props.spriteX}px ${props.spriteY}px` : `${props.spriteX}px ${props.spriteY + 50}px`
    return(
        <div 
            className="Talent" 
            onClick={() => props.setActive()}
            onContextMenu={(e) => onRightClick(e)}
            style={{backgroundImage: `url(${props.sprites})`, backgroundPosition: bgPosition}}></div>
    )
}

Talent.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    setInactive: PropTypes.func.isRequired,
    sprites: PropTypes.string.isRequired,
    spriteX: PropTypes.number.isRequired,
    spriteY: PropTypes.number.isRequired,
}

export default Talent