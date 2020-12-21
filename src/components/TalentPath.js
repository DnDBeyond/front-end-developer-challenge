import React from "react";
import Talent from "./Talent";
import sprites from "../assets/talent-icons-sprite.png";
import PropTypes from "prop-types"

const TalentPath = (props) => {
    return(
    <div className="TalentPath">
        {
            props.spriteCoords.map((spriteCoord, idx) => (
            <Talent key={idx}
                level={idx}
                setActive={() => props.setActive(idx)}
                setInactive={() => props.setInactive(idx)}
                talents={props.talents}
                path={props.path}
                sprites={sprites} 
                active={spriteCoord.active}
                spriteX={spriteCoord.x} 
                spriteY={spriteCoord.y}/>)
            )
        }
    </div>
    )
}

TalentPath.propTypes = {
    talents: PropTypes.array.isRequired,
    path: PropTypes.number.isRequired,
    setActive: PropTypes.func.isRequired,
    setInactive: PropTypes.func.isRequired,
    spriteCoords: PropTypes.array.isRequired
}

export default TalentPath