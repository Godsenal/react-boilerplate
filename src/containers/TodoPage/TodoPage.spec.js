import React from 'react';
import renderer from 'react-test-renderer';

import { TodoPage } from '.';

const defaultProps = {
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  fetchTodo: () => {},
  setFilter: () => {},
  filteredTodos: [],
  filter: '',
  fetchStatus: '',
};

describe('TodoPage snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoPage {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
