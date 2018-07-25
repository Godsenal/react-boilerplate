import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FilterTab, TodoInput, TodoItem } from '../../components';
import * as TodoActions from '../../actions/todo';
import * as FilterActions from '../../actions/filter';
import { getFilteredTodos } from '../../reducers/todo';
import styles from './TodoPage.scss';

const FILTER_TYPES = ['ALL', 'INCOMPLETED', 'COMPLETED'];

const TodoPage = ({ filteredTodos, filter, addTodo, toggleTodo, setFilter }) => (
  <div className={styles.container}>
    <TodoInput addTodo={addTodo} />
    <FilterTab filter={filter} filterTypes={FILTER_TYPES} setFilter={setFilter} />
    {
      filteredTodos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />)
    }
  </div>
);

TodoPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filteredTodos: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  filteredTodos: getFilteredTodos(state),
  filter: state.filter.filter,
});
const mapDispatchToProps = dispatch => ({
  addTodo: (description) => dispatch(TodoActions.addTodo(description)),
  toggleTodo: (id) => dispatch(TodoActions.toggleTodo(id)),
  setFilter: (filter) => dispatch(FilterActions.setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
