import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';

import Home from './pages/home'
import Details from './pages/details'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path = '/' exact render={()=><Home/>}></Route>
            <Route path = '/detail' exact render={()=><Details/>}></Route>
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
