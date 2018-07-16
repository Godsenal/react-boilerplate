import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from '../Home';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.cocntainer}>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);

