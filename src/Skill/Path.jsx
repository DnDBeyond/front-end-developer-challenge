import './Path.scss';
import Button from './Button'
import { useEffect, useState } from 'react';

const Path = ({
  name,
  skills,
  allSpentPoints,
  setAllSpentPoints,
  updateSkillInPaths,
  pathIndex,
}) => {
  const [runes, setRunes] = useState(skills)
  const [spentPoints, setSpentPoints] = useState(0)

  useEffect(() => {
    setSpentPoints(runes.filter(rune => rune.active).length)
  }, [runes])

  return (
    <>
      <div className="skill-path">
        <p className="skill-path__title">{name}</p>
        <div className={`skill-path__path step-${spentPoints} ${spentPoints === skills.length ? 'is-completed' : ''}`}>
          {
            runes.map((skill, index) => {
              return (
                <Button
                  key={`${name}-${index}`}
                  {...{
                    pathIndex,
                    updateSkillInPaths,
                    skill,
                    index,
                    allSpentPoints,
                    setAllSpentPoints,
                    runes,
                    setRunes,
                    spentPoints
                  }}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Path;