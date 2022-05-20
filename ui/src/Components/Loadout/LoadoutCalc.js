import React, { useState } from 'react';

import Tp1 from './Tp1';
import Tree1 from './Tree1';
import LoadoutCounter from './LoadoutCounter';
import Tp2 from './Tp2';
import Tree2 from './Tree2';

function LoadoutCalc() {
  let [count, setCount] = useState(0);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eighth, setEighth] = useState(false);

  function addFirst() {
    if (count < 6) {
      setCount((count += 1));
      setFirst(true);
    }
  }

  function removeFirst() {
    if (count > 0 && second === false) {
      setCount((count -= 1));
      setFirst(false);
    }
  }

  function addSecond() {
    if (count < 6 && first === true) {
      setCount((count += 1));
      setSecond(true);
    }
  }

  function removeSecond() {
    if (count > 0 && third === false) {
      setCount((count -= 1));
      setSecond(false);
    }
  }

  function addThird() {
    if (count < 6 && second === true) {
      setCount((count += 1));
      setThird(true);
    }
  }

  function removeThird() {
    if (count > 0 && fourth === false) {
      setCount((count -= 1));
      setThird(false);
    }
  }

  function addFourth() {
    if (count < 6 && third === true) {
      setCount((count += 1));
      setFourth(true);
    }
  }

  function removeFourth() {
    if (count > 0) {
      setCount((count -= 1));
      setFourth(false);
    }
  }

  function addFifth() {
    if (count < 6) {
      setCount((count += 1));
      setFifth(true);
    }
  }

  function removeFifth() {
    if (count > 0 && sixth === false) {
      setCount((count -= 1));
      setFifth(false);
    }
  }

  function addSixth() {
    if (count < 6 && fifth === true) {
      setCount((count += 1));
      setSixth(true);
    }
  }

  function removeSixth() {
    if (count > 0 && seventh === false) {
      setCount((count -= 1));
      setSixth(false);
    }
  }

  function addSeventh() {
    if (count < 6 && sixth === true) {
      setCount((count += 1));
      setSeventh(true);
    }
  }

  function removeSeventh() {
    if (count > 0 && fourth === false) {
      setCount((count -= 1));
      setSeventh(false);
    }
  }

  function addEighth() {
    if (count < 6 && seventh === true) {
      setCount((count += 1));
      setEighth(true);
    }
  }

  function removeEighth() {
    if (count > 0) {
      setCount((count -= 1));
      setEighth(false);
    }
  }
  return (
    <div className="loadout-calc">
      <Tp1 />
      <Tree1
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        removeFirst={removeFirst}
        addFirst={addFirst}
        removeSecond={removeSecond}
        addSecond={addSecond}
        removeThird={removeThird}
        addThird={addThird}
        removeFourth={removeFourth}
        addFourth={addFourth}
      />
      <LoadoutCounter count={count} />
      <Tp2 />
      <Tree2
        fifth={fifth}
        sixth={sixth}
        seventh={seventh}
        eighth={eighth}
        removeFifth={removeFifth}
        addFifth={addFifth}
        removeSixth={removeSixth}
        addSixth={addSixth}
        removeSeventh={removeSeventh}
        addSeventh={addSeventh}
        removeEighth={removeEighth}
        addEighth={addEighth}
      />
      
    </div>
  );
}

export default LoadoutCalc;
