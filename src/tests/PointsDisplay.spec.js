import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PointsDisplay from '../components/PointsDisplay';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('PointsDisplay', () => {
  let pointsDisplay;
  const name = 'Talent Path 1';

  beforeEach(() => {
    pointsDisplay = shallow(<PointsDisplay />);
  });

  it('renders "Points Spent" in an h2', () => {
    expect(pointsDisplay.find('h2').text()).to.be.equal('Points Spent');
  });
});
