import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Root from '../components/Root';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Root', () => {
  let root;

  beforeEach(() => {
    root = shallow(<Root />);
  });

  it('renders the page title in an h1', () => {
    expect(root.find('h1').text()).to.be.equal(
      'TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000'
    );
  });
});
