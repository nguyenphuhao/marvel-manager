import React from 'react';
import {shallow} from 'enzyme';
import ErrorPanel from '../components/common/ErrorPanel';
it('renders ErrorPanel has error without crashing', () => {
  var error = {hasError: true, errorMsg:"Test"}
  shallow(<ErrorPanel error={error} />);
});

it('renders ErrorPanel no error without crashing', () => {
  shallow(<ErrorPanel />);
});

