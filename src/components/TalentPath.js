import React from 'react';
import TalentLevel from './TalentLevel';

const TalentPath = (props) => {
  const { talentNum, points, pointsSpent } = props;
  const talentLevels = ['one', 'two', 'three', 'four'];
  return (
    <div id={`talent-${talentNum}`}>
      <div className="name">{`TALENT PATH ${talentNum}`}</div>
      <div className="path">
        {talentLevels.map((num, i) => {
          //helper function on line 30
          const barClassName = assignBarClassName(i + 1, points, pointsSpent);

          //progress bar rendered after the first 3 talent levels
          return i + 1 < 4 ? (
            <React.Fragment key={num}>
              <TalentLevel num={num} levelNum={i + 1} {...props} />
              <div className={barClassName} />
            </React.Fragment>
          ) : (
            <TalentLevel key={num} num={num} levelNum={i + 1} {...props} />
          );
        })}
      </div>
    </div>
  );
};

function assignBarClassName(level, points, pointsSpent) {
  return level < points
    ? `progress-bar highlighted` //bar between two selected levels
    : level === points && pointsSpent < 6
    ? `progress-bar next` //bar leading to next available levels
    : `progress-bar`;
}

export default TalentPath;
