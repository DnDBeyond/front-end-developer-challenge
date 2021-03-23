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
          const barName =
            i + 1 < points
              ? `progress-bar highlighted`
              : i + 1 === points && pointsSpent < 6
              ? `progress-bar next`
              : `progress-bar`;

          return i + 1 < 4 ? (
            <React.Fragment key={num}>
              <TalentLevel num={num} levelNum={i + 1} {...props} />
              <div className={barName} />
            </React.Fragment>
          ) : (
            <TalentLevel key={num} num={num} levelNum={i + 1} {...props} />
          );
        })}
      </div>
    </div>
  );
};

export default TalentPath;
