import React from 'react';
import {shallow} from 'enzyme';
import DashboardView from './../views/dashboard/DashboardView';
import Dashboard from '../components/dashboard/Dashboard';
it('renders Grid without crashing', () => {
  var wrapped = shallow(<DashboardView />);
  expect(wrapped.find(Dashboard).length).toEqual(1);
});

