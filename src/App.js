import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Cards from './components/Cards'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Cards} />
        </Switch>
      </div>
    );
  }
}

export default App;
