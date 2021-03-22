import React from 'react';
import ReactDOM from 'react-dom';

const TalentPath = (props) => {
  const { talentNum, points } = props;
  const talentLevels = [1, 2, 3, 4];
  return (
    <div className={`talent-${talentNum}`}>
      <h4>{`Talent Path ${talentNum}`}</h4>
      {talentLevels.map((num) => {
        const className =
          num <= points ? `talent-${num} selected` : `talent-${num}`;
        return (
          <img
            key={num}
            className={className}
            src="../../public/assets/talent-icons-sprite.png"
          />
        );
      })}
      {talentLevels.map((num) => {
        const className =
          num <= points
            ? `progess-bar-${num} highlighted`
            : `progress-bar-${num}`;
        return num > 1 && <rect key={num} className={className} />;
      })}
    </div>
  );
};

export default TalentPath;
