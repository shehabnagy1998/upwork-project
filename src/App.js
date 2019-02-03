import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Cards from './components/Cards'
import CardFullscreen from './components/CardFullscreen';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/card/:id" component={CardFullscreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
