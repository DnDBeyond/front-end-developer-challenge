import React from 'react';
import ReactDOM from 'react-dom';
import TalentPath from './TalentPath';
import PointsDisplay from './PointsDisplay';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      pointsSpent: 0,
      talent1Points: 0,
      talent2Points: 0,
    };
  }

  handleClick(talentNum, level) {
    if (pointsSpent < 6 && level === this.state[`talent${talentNum}Points`]) {
      this.setState({
        [`talent${talentNum}Points`]: level,
      });
    }
  }

  handContentMenu(talentNum, level, event) {
    event.preventDefault();
    if (level === this.state[`talent${talentNum}Points`]) {
      this.setState({
        [`talent${talentNum}Points`]: level - 1,
      });
    }
  }

  render() {
    const { pointsSpent, talent1Points, talent2Points } = this.state;
    return (
      <div>
        <h1 id="title">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </h1>
        <TalentPath talentNum={1} points={talent1Points} />
        <TalentPath talentNum={2} points={talent2Points} />
        <PointsDisplay spent={pointsSpent} />
      </div>
    );
  }
}
