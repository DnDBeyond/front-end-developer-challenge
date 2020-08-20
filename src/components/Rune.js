import React from "react";
import classNames from "classnames";

const Rune = ({
  name,
  value,
  currentPoints,
  totalPoints,
  updatePathIndex,
  active = false,
}) => {
  /** handles the left click for a rune */
  const handleClick = (e) => {
    e.preventDefault();
    updatePathIndex(value);
  };

  /** handles the right click for a rune */
  const handleRightClick = (e) => {
    e.preventDefault();
    if (active) updatePathIndex(value - 1);
  };

  return (
    <div
      className={classNames({
        "rune-mastery__rune": true,
        active: active,
        disabled: !active && currentPoints + value > totalPoints,
      })}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      <div
        className={classNames({
          [`rune-mastery__rune__icon rune-mastery__rune__icon--${name}`]: true,
          active: active,
          disabled: !active && currentPoints + value > totalPoints,
        })}
      ></div>
    </div>
  );
};

export default Rune;
