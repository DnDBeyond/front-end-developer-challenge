import config from '../config.json'
import './Button.scss';

const Button = (props) => {

  const handleLeftClick = () => {
    if (props.spentPoints !== props.index || props.allSpentPoints === config.maxPoints) return
    const newRunes = [...props.runes]
    newRunes[props.index].active = true
    props.setRunes(newRunes)
  }
  
  const handleRightClick = (e) => {
    e.preventDefault()
    if (props.spentPoints !== props.index + 1 || props.allSpentPoints === 0) return

    const newRunes = [...props.runes]
    newRunes[props.index].active = false
    props.setRunes(newRunes)
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