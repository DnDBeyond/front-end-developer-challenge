import React from "react";
import PropTypes from "prop-types"

const Talent = (props) => {
    function canSetActive(state, idx) {
        // Handle first talent
        if (idx === 0 && !state[props.path][0].active) {
            return true;
        } else if (idx > 0 && state[props.path][idx - 1].active) {
            return true;
        } else {
            return false;
        }
    }

    function canSetInactive(state, idx) {
        // Handle last talent
        const p = state[props.path]
        if (idx === p.length - 1 && p[p.length - 1].active) {
            return true;
        } else if (idx < p.length - 1 && !state[props.path][idx + 1].active) {
            return true;
        } else {
            return false;
        }
    }

    function onLeftClick() {
        if (canSetActive(props.talents, props.level)) {
            props.setActive(props.level);
        } else {
            // Show user feedback
            console.log("You are not a high enough level yet!")
        };   
    }

    function onRightClick(e) {
        e.preventDefault();
        if (canSetInactive(props.talents, props.level)) {
            props.setInactive(props.level);
        } else {
            // Show user feedback
            console.log("You must remove talents from higher levels before making this talent inactive!")
        };
    }


    const bgPosition = props.active ? `${props.spriteX}px ${props.spriteY}px` : `${props.spriteX}px ${props.spriteY + 50}px`
    return(
        <div 
            className="Talent" 
            onClick={() => onLeftClick()}
            onContextMenu={(e) => onRightClick(e)}
            style={{backgroundImage: `url(${props.sprites})`, backgroundPosition: bgPosition}}></div>
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