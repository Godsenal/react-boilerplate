import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Home, TodoPage } from '..';
import { Header } from '../../components';

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Sub Route */}
          <Route>
            <div>
              <Header />
              <Route path="/todo" component={TodoPage} />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
// Difference between webpack-hot-middleware & react-hot-loader
// webpack-hot-middleware와 react-hot-loader차이 참고.
// https://github.com/gaearon/react-hot-loader/issues/489
