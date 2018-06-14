import { List } from 'immutable';

import { createReducer } from '@utils/store';
import {
  createNewMessage,
  createLinkSnippet,
  createOptionGroup,
  createComponentMessage,
  selectOption
} from '@utils/messages';
import { MESSAGE_SENDER, MESSAGES_TYPES } from '@constants';

import * as actionTypes from '../actions/actionTypes';

const initialState = List([]);

const messagesReducer = {
  [actionTypes.ADD_NEW_USER_MESSAGE]: (state, { text }) =>
    state.push(createNewMessage(text, MESSAGE_SENDER.CLIENT)),

  [actionTypes.ADD_NEW_RESPONSE_MESSAGE]: (state, { text }) =>
    state.push(createNewMessage(text, MESSAGE_SENDER.RESPONSE)),

  [actionTypes.ADD_NEW_LINK_SNIPPET]: (state, { link }) =>
    state.push(createLinkSnippet(link, MESSAGE_SENDER.RESPONSE)),

  [actionTypes.ADD_NEW_OPTION_GROUP]: (state, { options, onAnswer }) =>
    state.push(createOptionGroup(options, onAnswer, MESSAGE_SENDER.CLIENT)),

  [actionTypes.SELECT_OPTION]: (state, { id, selectedOption }) =>
      state.update(
        state.indexOf(stateElement => {
          return stateElement.get('type') === MESSAGES_TYPES.OPTION_GROUP && stateElement.get('id') === id;
        }),
        optionGroup => optionGroup.set('selectedOption', selectedOption)
      ),

  [actionTypes.ADD_COMPONENT_MESSAGE]: (state, { component, props, showAvatar }) =>
    state.push(createComponentMessage(component, props, showAvatar)),

  [actionTypes.DROP_MESSAGES]: () => List([]),

  [actionTypes.HIDE_AVATAR]: (state, { index }) =>
    state.update(index, message => message.set('showAvatar', false))

export default (state = initialState, action) => createReducer(messagesReducer, state, action);
