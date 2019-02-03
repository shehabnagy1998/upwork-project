import React, { Component, Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Cards from './components/Cards'
import CardFullscreen from './components/CardFullscreen';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route render={({ location }) => (
          <TransitionGroup className="container">
            <CSSTransition
              key={location.key}
              timeout={1000}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path="/" exact component={Cards} />
                <Route path="/card/:id" component={CardFullscreen} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Fragment>
    );
  }
}

export default App;
