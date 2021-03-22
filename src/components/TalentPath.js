import React from 'react';
import ReactDOM from 'react-dom';

const TalentPath = (props) => {
  const { talentNum, points, handleContextMenu, handleClick } = props;
  const talentLevels = [1, 2, 3, 4];
  return (
    <div className={`talent-${talentNum}`}>
      <h4>{`Talent Path ${talentNum}`}</h4>
      {talentLevels.map((num) => {
        const className =
          num <= points ? `level-${num} selected` : `level-${num}`;
        return (
          <img
            key={num}
            className={className}
            src="./assets/talent-icons-sprite.png"
            onClick={() => handleClick(talentNum, num)}
            onContextMenu={(e) => handleContextMenu(talentNum, num, e)}
          />
        );
      })}
      {talentLevels.map((num) => {
        const className =
          num <= points
            ? `progess-bar-${num} highlighted`
            : `progress-bar-${num}`;
        return num > 1 && <div key={num} className={className} />;
      })}
    </div>
  );
};

export default TalentPath;
