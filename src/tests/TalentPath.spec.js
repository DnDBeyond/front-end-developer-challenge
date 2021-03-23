import { expect } from 'chai';
import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TalentPath from '../components/TalentPath';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('TalentPath', () => {
  let talentPath;
  let talentPath2;

  beforeEach(() => {
    talentPath = mount(<TalentPath talentNum={1} points={0} />);
    talentPath2 = mount(<TalentPath talentNum={1} points={2} />);
  });

  it('renders the skill path name', () => {
    expect(talentPath.find('.name').text()).to.be.equal('TALENT PATH 1');
  });

  it('number of image with className selected matches number of points in props', () => {
    expect(talentPath.find('.selected')).to.have.lengthOf(0);
    expect(talentPath2.find('.selected')).to.have.lengthOf(2);
  });

  it('number of rectangles with className highlighted is one less than points in props', () => {
    expect(talentPath.find('.highlighted')).to.have.lengthOf(0);
    expect(talentPath2.find('.highlighted')).to.have.lengthOf(1);
  });
});
