import config from '../config.json'
import './Button.scss';
import blockingSound from '../assets/sounds/cant.wav'

const Button = (props) => {

  const playBlockingSound = () => {
    const audio = new Audio(blockingSound)
    audio.play()
  }

  const handleLeftClick = () => {
    if (props.spentPoints !== props.index || props.allSpentPoints === config.maxPoints) {

      playBlockingSound()
      return
    }
    props.updateSkillInPaths(true, props.pathIndex, props.index)
  }
  
  const handleRightClick = (e) => {
    e.preventDefault()
    if (props.spentPoints !== props.index + 1 || props.allSpentPoints === 0) {
      playBlockingSound()
      return
    }
    props.updateSkillInPaths(false, props.pathIndex, props.index)
  }

  return (
    <div
      className={`skill-button ${props.skill.active ? 'is-active' : ''}`}
      data-sprite-x={props.skill.spriteX}
      title={props.skill.title}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      <div
        className="skill-button__img skill-button__img--unactive"
        style={{backgroundPositionX: (props.skill.spriteX * -50) + 'px'}}
      ></div>
      <div
        className="skill-button__img skill-button__img--active"
        style={{backgroundPositionX: (props.skill.spriteX * -50) + 'px'}}
      ></div>
    </div>
  );
}

export default Button;