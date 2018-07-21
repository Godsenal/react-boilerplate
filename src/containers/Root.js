import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './';
import configureStore from '../store/configureStore';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
// 주의!
// react-hot-loader를 Root에 감싸주면 안됨.
// react-hot-loader를 initialization (render나 provider 같은) 코드 상위에 두면,
// reload를 할 때 마다 initialization을 실행.
