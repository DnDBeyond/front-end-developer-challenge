import React from 'react';

const TalentLevel = (props) => {
  const {
    levelNum,
    talentNum,
    points,
    handleClick,
    handleContextMenu,
    num,
  } = props;
  const className =
    levelNum <= points ? `level ${num} selected` : `level ${num}`;
  return (
    <div
      className={className}
      onClick={() => handleClick(talentNum, levelNum)}
      onContextMenu={(e) => handleContextMenu(talentNum, levelNum, e)}
    >
      <div className="sprite" />
    </div>
  );
};

export default TalentLevel;
