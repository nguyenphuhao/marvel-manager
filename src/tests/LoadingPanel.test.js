import React from 'react';
import {shallow} from 'enzyme';
import LoadingPanel from './../components/common/LoadingPanel';
it('renders LoadingPanel has loaded = true without crashing', () => {
  shallow(<LoadingPanel loaded={true} />);
});
it('renders LoadingPanel has loaded = false without crashing', () => {
  shallow(<LoadingPanel loaded={false} />);
});

it('renders LoadingPanel has no loaded without crashing', () => {
  shallow(<LoadingPanel />);
});

