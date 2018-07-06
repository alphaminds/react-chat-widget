import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';

const reducer = combineReducers({ behavior, messages });

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' ?
      /* eslint-disable no-underscore-dangle */
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__() : ''
      /* eslint-enable */
  )
);
