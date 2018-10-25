import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import notification from './reducers/notificationReducer';

const reducer = combineReducers({ behavior, messages, notification });

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable */

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
