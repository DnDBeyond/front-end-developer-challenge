import { useEffect, useState } from 'react'
import config from './config.json'
import './App.scss'
import Popup from './Skill/Popup'
import Path from './Skill/Path'
import skills from './skills.json'
import addSkillSound from './assets/sounds/skill2.wav'
import removeSkillSound from './assets/sounds/skill4.wav'
import completedSound from './assets/sounds/completed.wav'

function App() {
  const [paths, setPaths] = useState(Object.values(skills))
  const [allSpentPoints, setAllSpentPoints] = useState(0)

  const updateSkillInPaths = (activeStatus, pathIndex, skillIndex) => {
    const newPaths = [...paths]
    newPaths[pathIndex][skillIndex].active = activeStatus
    setPaths(newPaths)

    if (!!activeStatus === false) {
      setAllSpentPoints(allSpentPoints - 1)
      const audio = new Audio(removeSkillSound)
      audio.play()
      return
    }

    setAllSpentPoints(allSpentPoints + 1)
    const audio = new Audio(addSkillSound)
    audio.play()
    
    if (skillIndex === paths[pathIndex].length - 1) {
      setTimeout(() => {
        const audio = new Audio(completedSound)
        audio.play()
      }, 0)
    }
  }

  const SkillPaths = () => (
    <div className="skill-paths">
      {
        Object.entries(skills).map(([path, skills], index) => (
          <Path
            key={`${path}-${index}`}
            name={path}
            pathIndex={index}
            skills={paths[index]}
            {...{
              updateSkillInPaths,
              allSpentPoints,
              setAllSpentPoints,
              paths,
              setPaths
            }}
          />
        ))
      }
    </div>
  )

  const SkillPointsCounter = () => (
    <div className="skill-points-counter">
      <p className={`
        skill-points-counter__points 
        ${allSpentPoints === config.maxPoints ? 'is-max' : ''}
      `}>{`${allSpentPoints} / ${config.maxPoints}`}</p>
      <p className="skill-points-counter__title">Points Spent</p>
    </div>
  )

  return (
    <Popup title={`${config.domain} - ${config.title}`}>
      <SkillPaths />
      <SkillPointsCounter />
    </Popup>
  )
}

export default App
