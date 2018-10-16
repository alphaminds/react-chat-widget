import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import notification from './reducers/notificationReducer';

const reducer = combineReducers({ behavior, messages, notification });

export default createStore(
  reducer,
  process.env.NODE_ENV !== 'production' ?
    compose(
      applyMiddleware(thunk),
      /* eslint-disable no-underscore-dangle */
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
      /* eslint-enable */
    )
  : applyMiddleware(thunk)
);
