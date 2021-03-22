import React from 'react';
import ReactDOM from 'react-dom';

const TalentPath = (props) => {
  const { talentNum, points, handleContextMenu, handleClick } = props;
  const talentLevels = ['one', 'two', 'three', 'four'];
  return (
    <div className={`talent-${talentNum}`}>
      <div className="name">{`TALENT PATH ${talentNum}`}</div>
      {talentLevels.map((num, i) => {
        const className =
          i + 1 <= points ? `level ${num} selected` : `level ${num}`;
        return (
          <div
            className={className}
            key={i}
            onClick={() => handleClick(talentNum, i + 1)}
            onContextMenu={(e) => handleContextMenu(talentNum, i + 1, e)}
          >
            <div className="sprite" />
          </div>
        );
      })}
      {talentLevels.map((num, i) => {
        const className =
          i + 1 <= points
            ? `progress-${num} highlighted`
            : i + 1 === points + 1
            ? `progress-${num} next`
            : `progress-${num}`;
        return i + 1 > 1 && <div key={i} className={className} />;
      })}
    </div>
  );
};

export default TalentPath;
