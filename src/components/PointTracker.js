import React from "react";
import PropTypes from "prop-types"

const PointTracker = (props) => {
    return(
    <div className="PointTracker">
        <h2 className="centered-text">
            {props.points} / 6
        </h2>
        <h2 className="centered-text dark-gray">
            Points Spent
        </h2>

    </div>
    )
}

PointTracker.propTypes = {
    points: PropTypes.number.isRequired
}

export default PointTracker