import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PointsDisplay from '../components/PointsDisplay';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('PointsDisplay', () => {
  let pointsDisplay;
  let pointsDisplay2;

  beforeEach(() => {
    pointsDisplay = shallow(<PointsDisplay spent={0} />);
    pointsDisplay2 = shallow(<PointsDisplay spent={2} />);
  });

  it('renders "Points Spent"', () => {
    expect(pointsDisplay.find('.label').text()).to.be.equal('Points Spent');
  });

  it('renders the number of points spent', () => {
    expect(pointsDisplay.find('.spent').text()).to.be.equal('0/6');
    expect(pointsDisplay2.find('.spent').text()).to.be.equal('2/6');
  });
});
