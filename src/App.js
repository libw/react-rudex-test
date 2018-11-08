import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import show from './reducers/home'

let store = createStore(show)
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
