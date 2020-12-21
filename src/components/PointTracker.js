import React from "react";
import PropTypes from "prop-types"

const PointTracker = (props) => {
    return(
    <div className="PointTracker">
        {props.points}/6
    </div>
    )
}

PointTracker.propTypes = {
    points: PropTypes.number.isRequired
}

export default PointTracker