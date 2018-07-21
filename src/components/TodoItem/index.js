import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.scss';

const TodoItem = ({ id, description, done, toggleTodo }) => {
  const handleClick = () => {
    toggleTodo(id);
  };
  return (
    <div className={styles.container}>
      <span
        className={`${styles.todo} ${done && styles.todo_done}`}
        onClick={handleClick}
      >
        {description}
      </span>
    </div>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
