import React, { Component, Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Cards from './components/Cards'
import CardFullscreen from './components/CardFullscreen';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { animation } = this.props;

    return (
      <Fragment>
        <Route render={({ location }) => (
          <TransitionGroup className="container">
            <CSSTransition
              key={location.key}
              timeout={2000}
              classNames={animation}
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

const mapStateToProps = (state, ownProps) => {
  return {
    animation: state.animation

  }
}

export default connect(mapStateToProps)(App)
