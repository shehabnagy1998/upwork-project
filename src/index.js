import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import rootReducer from './store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas/rootSaga';
import { CSSTransition } from 'react-transition-group'

const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="zoomIn">
                <Route path="/" component={App} />
            </CSSTransition>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
