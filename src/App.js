import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import { Route } from 'react-router-dom'
import WelcomeContainer from './components/WelcomeContainer'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={WelcomeContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;

