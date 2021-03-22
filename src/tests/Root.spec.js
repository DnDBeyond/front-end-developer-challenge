import { expect } from 'chai';
import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Root from '../components/Root';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Root', () => {
  let root;

  beforeEach(() => {
    root = mount(<Root />);
  });

  it('renders the page title', () => {
    expect(root.find('#title').text()).to.be.equal(
      'TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000'
    );
  });

  it('has initial state point totals of 0', () => {
    expect(root.state('pointsSpent')).to.equal(0);
    expect(root.state('talent1Points')).to.equal(0);
    expect(root.state('talent2Points')).to.equal(0);
  });

  it('changes point totals when talent level is clicked, only if available', () => {
    expect(root.state('pointsSpent')).to.equal(0);
    expect(root.state('talent1Points')).to.equal(0);
    root.find('.level').at(0).simulate('click');
    expect(root.state('pointsSpent')).to.equal(1);
    expect(root.state('talent1Points')).to.equal(1);
    root.find('.level').at(3).simulate('click');
    expect(root.state('pointsSpent')).to.equal(1);
    expect(root.state('talent1Points')).to.equal(1);
  });
});
