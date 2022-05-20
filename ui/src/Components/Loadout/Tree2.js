import React from 'react';
import FiveNS from '../../assets/5-ns.png';
import SixNS from '../../assets/6-ns.png';
import SevenNS from '../../assets/7-ns.png';
import EightNS from '../../assets/8-ns.png';
import FiveS from '../../assets/5-s.png';
import SixS from '../../assets/6-s.png';
import SevenS from '../../assets/7-s.png';
import EightS from '../../assets/8-s.png';
import LightRail from './LightRail';

function Tree2({
  fifth,
  sixth,
  seventh,
  eighth,
  removeFifth,
  addFifth,
  removeSixth,
  addSixth,
  removeSeventh,
  addSeventh,
  removeEighth,
  addEighth,
}) {
  return (
    <div className="loadout-tree">
      <div className="selection-container">
        <div className="loadout-selection">
          {fifth === true ? (
            <img
              src={FiveNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeFifth();
              }}
              className="selected"
            />
          ) : (
            <img src={FiveS} alt="" onClick={addFifth} className="deselected" />
          )}
        </div>
        <LightRail num={fifth} />
        <div className="loadout-selection">
          {sixth === true ? (
            <img
              src={SixNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeSixth();
              }}
              className="selected"
            />
          ) : (
            <img src={SixS} alt="" onClick={addSixth} className="deselected" />
          )}
        </div>
        <LightRail num={sixth} />
        <div className="loadout-selection">
          {seventh === true ? (
            <img
              src={SevenNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeSeventh();
              }}
              className="selected"
            />
          ) : (
            <img
              src={SevenS}
              alt=""
              onClick={addSeventh}
              className="deselected"
            />
          )}
        </div>
        <LightRail num={seventh} />
        <div className="loadout-selection">
          {eighth === true ? (
            <img
              src={EightNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeEighth();
              }}
              className="selected"
            />
          ) : (
            <img
              src={EightS}
              alt=""
              onClick={addEighth}
              className="deselected"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tree2;
