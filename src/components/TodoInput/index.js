import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoInput.scss';

export default class TodoInput extends Component {
  state = {
    value: '',
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleChange = e => this.setState({ value: e.target.value });
  handleEnter = e => {
    const { value } = this.state;
    if (e.key === 'Enter' && value) {
      const { addTodo } = this.props;
      addTodo(value);
      this.setState({
        value: '',
      });
    }
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <input
          placeholder="What needs to be done?"
          className={styles.input}
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
      </div>
    );
  }
}
