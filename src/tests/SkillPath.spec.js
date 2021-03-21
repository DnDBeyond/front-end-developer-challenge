import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SkillPath from '../components/SkillPath';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('SkillPath', () => {
  let skillPath;
  const name = 'Talent Path 1';

  beforeEach(() => {
    skillPath = shallow(<SkillPath name={name} />);
  });

  it('renders the skill path name in an h4', () => {
    expect(skillPath.find('h4').text()).to.be.equal(name);
  });
});
