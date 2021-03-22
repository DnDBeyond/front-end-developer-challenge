import React from 'react';
import ReactDOM from 'react-dom';

const PointsDisplay = (props) => {
  const { spent } = props;

  return (
    <div className="points">
      <h2>{spent}/6</h2>
      <h3>Points Spent</h3>
    </div>
  );
};

export default PointsDisplay;
