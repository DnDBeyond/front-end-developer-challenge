import './Path.scss';
import Button from './Button'
import { useEffect, useState } from 'react';

const Path = ({
  name,
  skills,
  allSpentPoints,
  setAllSpentPoints,
  paths,
  setPaths
}) => {
  const [runes, setRunes] = useState(skills)
  const [spentPoints, setSpentPoints] = useState(0)

  useEffect(() => {
    setSpentPoints(runes.filter(rune => rune.active).length)
    
    setTimeout(() => {
      setAllSpentPoints(
        document.querySelectorAll('.skill-button.is-active').length
      )
    }, 250)
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