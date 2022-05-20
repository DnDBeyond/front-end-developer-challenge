import React from 'react';

function LightRail({ num }) {
  return (
    <>
      {num === true ? (
        <div className="light-rail activated"></div>
      ) : (
        <div className="light-rail"></div>
      )}
    </>
  );
}

export default LightRail;
