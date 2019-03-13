import React from 'react';
import {shallow} from 'enzyme';
import CharacterGridView from '../views/marvel/characters/CharacterGridView';
import CharacterGrid from '../components/marvel/characters/CharacterGrid';
it('renders CharacterGrid without crashing', () => {
  var wrapped = shallow(<CharacterGridView />);
  expect(wrapped.find(CharacterGrid).length).toEqual(1);
});
it('renders CharacterGrid without crashing', () => {
  shallow(<CharacterGrid  />);
});
