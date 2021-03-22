import React from 'react';
import ReactDOM from 'react-dom';

const TalentPath = (props) => {
  const {
    talentNum,
    points,
    pointsSpent,
    handleContextMenu,
    handleClick,
  } = props;
  const talentLevels = ['one', 'two', 'three', 'four'];
  return (
    <div className={`talent-${talentNum}`}>
      <div className="name">{`TALENT PATH ${talentNum}`}</div>
      <div className="path">
        {talentLevels.map((num, i) => {
          const levelName =
            i + 1 <= points ? `level ${num} selected` : `level ${num}`;
          const levelDiv = (
            <div
              className={levelName}
              key={i}
              onClick={() => handleClick(talentNum, i + 1)}
              onContextMenu={(e) => handleContextMenu(talentNum, i + 1, e)}
            >
              <div className="sprite" />
            </div>
          );
          const barName =
            i + 1 < points
              ? `progress-${num} highlighted`
              : i + 1 === points && pointsSpent < 6
              ? `progress-${num} next`
              : `progress-${num}`;

          return i + 1 < 4 ? (
            <>
              {levelDiv}
              <div key={i} className={barName} />
            </>
          ) : (
            levelDiv
          );
        })}
      </div>
    </div>
  );
};

export default TalentPath;
