import React from 'react';
import { create } from 'react-test-renderer';
import SearchList from './SearchList';

describe('SearchList component', () => {
  it('renders correctly', () => {
    const component = create(<SearchList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
