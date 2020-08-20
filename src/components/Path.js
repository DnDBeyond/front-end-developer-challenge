import React, { Fragment, useState } from "react";
import classNames from "classnames";
import Rune from "./Rune";

const Path = ({
  name,
  runes,
  totalPoints,
  currentPoints,
  updatePathPoints,
}) => {
  /** index for the largest rune selected */
  const [pathIndex, setPathIndex] = useState(0);

  /** updates the path index if the given index is within the range of allowed points */
  const updatePathIndex = (index) => {
    if (currentPoints + index <= totalPoints) {
      setPathIndex(index);
      updatePathPoints(name, index);
    }
  };

  const renderDivider = (index) => (
    <div
      className={classNames({
        "rune-mastery__path__runes__divider": true,
        active: pathIndex >= index,
      })}
    />
  );

  return (
    <div className="rune-mastery__path">
      <div className="rune-mastery__path__name">{name}</div>
      <div className="rune-mastery__path__runes">
        {runes.map(({ name }, i) => (
          <Fragment key={i}>
            {i > 0 && i < runes.length && renderDivider(i + 1)}
            <Rune
              key={i}
              value={i + 1}
              name={name}
              currentPoints={currentPoints}
              totalPoints={totalPoints}
              updatePathIndex={updatePathIndex}
              active={pathIndex >= i + 1}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Path;
