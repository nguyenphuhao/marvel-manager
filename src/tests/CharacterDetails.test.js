import React from 'react';
import {shallow} from 'enzyme';
import CharacterDetailsView from './../views/marvel/characters/CharacterDetailsView';
import CharacterDetails from './../components/marvel/characters/CharacterDetails';
it('renders CharacterDetailsView without crashing', () => {
  var wrapped = shallow(<CharacterDetailsView match={{params: {id: 1}}} />);
  expect(wrapped.find(CharacterDetails).length).toEqual(1);
});
it('renders CharacterDetails without crashing', () => {
  shallow(<CharacterDetails id={1} />);
});
