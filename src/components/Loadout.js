import React, { useState, useEffect } from "react";
import Path from "./Path";
import paths from "../assets/paths.json";

const Loadout = ({ totalPoints = 6 }) => {
  /** the cumulative running total of points */
  const [currentPoints, setCurrentPoints] = useState(0);

  /** object representative for points per path initialized with zero for each path */
  const [pathPoints, setPathPoints] = useState(
    paths.reduce((acc, { name }) => {
      acc[name] = 0;
      return acc;
    }, {})
  );

  /** update the current points each time the path points object changes */
  useEffect(() => {
    const points = Object.keys(pathPoints).reduce((acc, key) => {
      return acc + pathPoints[key];
    }, 0);

    setCurrentPoints(points);
  }, [pathPoints]);

  /** updates the path points object with a new value for a given path */
  const updatePathPoints = (name, points) => {
    const pPoints = { ...pathPoints };
    pPoints[name] = points;
    setPathPoints(pPoints);
  };

  return (
    <div className="rune-mastery__loadout">
      <div className="rune-mastery__loadout__title">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </div>

      <div className="rune-mastery__loadout__content">
        <div className="rune-mastery__loadout__content__paths">
          {paths.map(({ name, runes = [] }, i) => (
            <Path
              key={i}
              name={name}
              runes={runes}
              totalPoints={totalPoints}
              currentPoints={currentPoints - pathPoints[name]}
              updatePathPoints={updatePathPoints}
            />
          ))}
        </div>

        <div className="rune-mastery__loadout__content__points">
          <div className="rune-mastery__loadout__content__points__values">
            {currentPoints} / {totalPoints}
          </div>
          <div className="rune-mastery__loadout__content__points__title">
            Points Spent
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadout;
