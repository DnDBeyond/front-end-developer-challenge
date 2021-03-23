import React from 'react';

const TalentLevel = (props) => {
  const {
    levelNum,
    talentNum,
    points,
    handleClick,
    handleContextMenu,
    handleTouchEnd,
    num,
  } = props;

  //if this level's id number is less than or equal to
  //the number of points spent on its talent path
  //the user has selected it, so it receives the 'selected' class name
  const className =
    levelNum <= points ? `level ${num} selected` : `level ${num}`;
  return (
    <div
      className={className}
      onClick={() => handleClick(talentNum, levelNum)}
      onContextMenu={(e) => handleContextMenu(talentNum, levelNum, e)}
      onTouchEnd={(e) => handleTouchEnd(talentNum, levelNum, e)}
    >
      <div className="sprite" />
    </div>
  );
};

export default TalentLevel;
