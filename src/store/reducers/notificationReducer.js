import { Map } from 'immutable';

import { createReducer } from '@utils/store';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showNotification: false, notificationText: '' });

const notificationReducer = {
  [actionTypes.SHOW_NOTIFICATION]: (state, { text }) =>
    state.merge({
      showNotification: true,
      notificationText: text
    }),

  [actionTypes.DISMISS_NOTIFICATION]: state =>
    state.merge({
      showNotification: false,
      notificationText: ''
    })
};

export default (state = initialState, action) => createReducer(notificationReducer, state, action);
