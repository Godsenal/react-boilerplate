import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.scss';

const TodoItem = ({ id, description, done, deleteTodo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(id);
  };
  const handleButtonClick = () => {
    deleteTodo(id);
  };
  return (
    <div className={styles.container}>
      <span
        className={`${styles.todo} ${done && styles.todo_done}`}
        onClick={handleTodoClick}
      >
        {description}
      </span>
      <button type="button" onClick={handleButtonClick}>
        Delete
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
