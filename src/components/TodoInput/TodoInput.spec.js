import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '.';

const todos = [];
const addTodo = (value) => {
  todos.push(value);
};
const setup = () => {
  const props = {
    addTodo: (value) => addTodo(value),
  };
  return shallow(<TodoInput {...props} />);
};

describe('TodoInput test', () => {
  it('should do nothing when value is empty', () => {
    const wrapper = setup();
    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
    expect(input.props().value).toEqual('');
    input.simulate('keyPress', { key: 'Enter' });
    expect(todos.length).toEqual(0);
  });
  it('should add todo when value is not empty', () => {
    const wrapper = setup();
    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
    expect(input.props().value).toEqual('');
    input.simulate('change', { target: { value: 'todo' } });
    input.simulate('keyPress', { key: 'Enter' });
    expect(todos[0]).toEqual('todo');
  });
});
