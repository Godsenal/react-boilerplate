import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchButton, FilterTab, TodoInput, TodoItem } from '../../components';
import * as TodoActions from '../../actions/todo';
import * as FilterActions from '../../actions/filter';
import { getFilteredTodos } from '../../selectors/todo';
import styles from './TodoPage.scss';

const FILTER_TYPES = ['ALL', 'INCOMPLETED', 'COMPLETED'];

const TodoPage = ({ filteredTodos, filter, fetchStatus, addTodo, deleteTodo, toggleTodo, fetchTodo, setFilter }) => (
  <div className={styles.container}>
    <FetchButton fetchStatus={fetchStatus} fetchTodo={fetchTodo} />
    <TodoInput addTodo={addTodo} />
    <FilterTab filter={filter} filterTypes={FILTER_TYPES} setFilter={setFilter} />
    {
      filteredTodos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)
    }
  </div>
);

TodoPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  fetchStatus: PropTypes.string.isRequired,
  fetchTodo: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filteredTodos: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  filteredTodos: getFilteredTodos(state),
  filter: state.filter.filter,
  fetchStatus: state.todo.status,
});
const mapDispatchToProps = dispatch => ({
  addTodo: (description) => dispatch(TodoActions.addTodo(description)),
  deleteTodo: (id) => dispatch(TodoActions.deleteTodo(id)),
  toggleTodo: (id) => dispatch(TodoActions.toggleTodo(id)),
  fetchTodo: () => dispatch(TodoActions.fetchTodo()),
  setFilter: (filter) => dispatch(FilterActions.setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
