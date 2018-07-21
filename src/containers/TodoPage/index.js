import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterTab, TodoInput, TodoItem } from '../../components';
import * as TodoActions from '../../actions/todo';
import * as FilterActions from '../../actions/filter';
import styles from './TodoPage.scss';

const FILTER_TYPES = ['ALL', 'INCOMPLETED', 'COMPLETED'];
const mapStateToProps = state => ({
  todos: state.todo.todos,
  filter: state.filter.filter,
});
const mapDispatchToProps = dispatch => ({
  addTodo: (description) => dispatch(TodoActions.addTodo(description)),
  toggleTodo: (id) => dispatch(TodoActions.toggleTodo(id)),
  setFilter: (filter) => dispatch(FilterActions.setFilter(filter)),
});

const TodoPage = ({ todos, filter, addTodo, toggleTodo, setFilter }) => {
  const getVisibleTodo = list => {
    switch (filter) {
      case 'ALL':
        return list;
      case 'COMPLETED':
        return list.filter(todo => todo.done);
      case 'INCOMPLETED':
        return list.filter(todo => !todo.done);
      default:
        return list;
    }
  };
  return (
    <div className={styles.container}>
      <TodoInput addTodo={addTodo} />
      <FilterTab filter={filter} filterTypes={FILTER_TYPES} setFilter={setFilter} />
      {
        getVisibleTodo(todos).map(todo => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />)
      }
    </div>
  );
};

TodoPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
