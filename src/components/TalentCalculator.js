import React, { useReducer } from "react";
import PointTracker from "./PointTracker";
import TalentPath from "./TalentPath";

const initialState =  { 
    talents: [
        [{x: 0, y: 0, active: false}, {x: -50, y: 0, active: false}, {x: -100, y:0, active: false}, {x: -150, y:0, active: false}], 
        [{x: -200, y: 0, active: false}, {x: -250, y: 0, active: false}, {x: -300, y:0, active: false}, {x: -350, y:0, active: false}]
    ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TALENT_ACTIVE':
        state.talents[action.path][action.idx].active = true;
        return {...state};
    case 'SET_TALENT_INACTIVE':
        state.talents[action.path][action.idx].active = false;
        return {...state};    default:
      throw new Error();
  }
}

// TalentCalculator is a composite component that holds the parent state and passes it down
// along with callbacks to the child components
const TalentCalculator = () => { 
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
    <div className="TalentCalculator">
        <div>TitanStar Legends - Rune Mastery Talent Calculator 9000</div>
        { 
            state.talents.map((spriteCoord, pathIdx) => {
                return <TalentPath
                    key={pathIdx}
                    path={pathIdx}
                    talents={state.talents}
                    spriteCoords={spriteCoord} 
                    setActive={(idx) => dispatch({type: 'SET_TALENT_ACTIVE', path: pathIdx, idx})}
                    setInactive={(idx) => dispatch({type: 'SET_TALENT_INACTIVE', path: pathIdx, idx})}/>
            })
        }
        {/* TODO: Add point tracking to its own component */}
        <PointTracker/>
    </div>
    )
}

export default TalentCalculator