import { List } from 'immutable';
import { MESSAGE_SENDER, MESSAGES_TYPES } from 'constants';

import {
  createNewMessage,
  createLinkSnippet,
  createOptionGroup,
  createComponentMessage,
  selectOption
} from './helper';
import * as actionTypes from '../actions/actionTypes';

const initialState = List([]);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      return state.push(createNewMessage(action.text, MESSAGE_SENDER.CLIENT));
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      return state.push(createNewMessage(action.text, MESSAGE_SENDER.RESPONSE));
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      return state.push(createLinkSnippet(action.link, MESSAGE_SENDER.RESPONSE));
    }
    case actionTypes.ADD_NEW_OPTION_GROUP: {
      return state.push(createOptionGroup(action.id, action.options, action.onAnswer, MESSAGE_SENDER.CLIENT));
    }
    case actionTypes.SELECT_OPTION: {
      return state.update(
        state.indexOf(stateElement => {
          return stateElement.get('type') === MESSAGES_TYPES.OPTION_GROUP && stateElement.get('id') === action.id;
        }),
        optionGroup => optionGroup.set('selectedOption', action.selectedOption)
      );
    }
    case actionTypes.ADD_COMPONENT_MESSAGE: {
      return state.push(createComponentMessage(action.component, action.props, action.showAvatar));
    }
    case actionTypes.DROP_MESSAGES: {
      return List([]);
    }
    default:
      return state;
  }
}
