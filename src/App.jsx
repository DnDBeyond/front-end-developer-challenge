import { useEffect, useState } from 'react'
import config from './config.json'
import './App.scss'
import Popup from './Skill/Popup'
import Path from './Skill/Path'
import skills from './skills.json'

function App() {
  const [paths, setPaths] = useState(Object.values(skills))
  const [allSpentPoints, setAllSpentPoints] = useState(0)

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
      <p className="skill-points-counter__points">{`${allSpentPoints} / ${config.maxPoints}`}</p>
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
