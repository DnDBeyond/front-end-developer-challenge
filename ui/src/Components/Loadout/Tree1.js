import React from 'react';
import OneNS from '../../assets/1-ns.png';
import TwoNS from '../../assets/2-ns.png';
import ThreeNS from '../../assets/3-ns.png';
import FourNS from '../../assets/4-ns.png';
import OneS from '../../assets/1-s.png';
import TwoS from '../../assets/2-s.png';
import ThreeS from '../../assets/3-s.png';
import FourS from '../../assets/4-s.png';
import LightRail from './LightRail';

function Tree1({
  first,
  second,
  third,
  fourth,
  removeFirst,
  addFirst,
  removeSecond,
  addSecond,
  removeThird,
  addThird,
  removeFourth,
  addFourth,
}) {
  return (
    <div className="loadout-tree">
      <div className="selection-container">
        <div className="loadout-selection">
          {first === true ? (
            <img
              src={OneNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeFirst();
              }}
              className="selected"
            />
          ) : (
            <img src={OneS} alt="" onClick={addFirst} className="deselected" />
          )}
        </div>
        <LightRail num={first} />
        <div className="loadout-selection">
          {second === true ? (
            <img
              src={TwoNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeSecond();
              }}
              className="selected"
            />
          ) : (
            <img src={TwoS} alt="" onClick={addSecond} className="deselected" />
          )}
        </div>
        <LightRail num={second} />
        <div className="loadout-selection">
          {third === true ? (
            <img
              src={ThreeNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeThird();
              }}
              className="selected"
            />
          ) : (
            <img
              src={ThreeS}
              alt=""
              onClick={addThird}
              className="deselected"
            />
          )}
        </div>
        <LightRail num={third} />
        <div className="loadout-selection">
          {fourth === true ? (
            <img
              src={FourNS}
              alt=""
              onContextMenu={(e) => {
                e.preventDefault();
                removeFourth();
              }}
              className="selected"
            />
          ) : (
            <img
              src={FourS}
              alt=""
              onClick={addFourth}
              className="deselected"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tree1;
