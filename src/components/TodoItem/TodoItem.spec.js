import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '.';
import styles from './TodoItem.scss';

let todos = {};
const deleteTodoMock = () => {
  todos = {};
};
const toggleTodoMock = () => {
  todos.done = !todos.done;
};
const setup = ({
  id = 0,
  description = 'todo',
  done = false,
  deleteTodo = deleteTodoMock,
  toggleTodo = toggleTodoMock,
}) => {
  const props = { id, description, done, deleteTodo, toggleTodo };
  todos = { ...props };
  return shallow(<TodoItem {...props} />);
};

describe('TodoItem test', () => {
  it('should toggle on click span', () => {
    const wrapper = setup({});
    const span = wrapper.find('span');
    expect(span.length).toEqual(1);
    span.simulate('click');
    expect(todos.done).toEqual(true);
  });
  it('should delete on click button', () => {
    const wrapper = setup({});
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
    button.simulate('click');
    expect(todos).toEqual({});
  });
  it('should span have classname todo_done when done is true', () => {
    const wrapper = setup({ done: true });
    const span = wrapper.find('span');
    expect(span.length).toEqual(1);
    expect(span.props().className).toEqual(`${styles.todo} ${styles.todo_done}`);
  });
});
