import React from 'react';

function LoadoutCounter({ count }) {
  return (
    <div className="point-count-container">
      <div className="point-count">
        <div className="count">{count} / 6</div>
        <div className="count-sub">Points Spent</div>
      </div>
    </div>
  );
}

export default LoadoutCounter;
