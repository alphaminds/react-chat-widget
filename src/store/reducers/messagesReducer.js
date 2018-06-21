import { List } from 'immutable';
import { MESSAGE_SENDER, MESSAGES_TYPES } from 'constants';

import {
  createNewMessage,
  createLinkSnippet,
  createDynamicMessage,
  createComponentMessage
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
    case actionTypes.ADD_NEW_DYNAMIC_MESSAGE: {
      return state.push(createDynamicMessage(action.component, action.id, action.props, action.onChange, action.sender));
    }
    case actionTypes.CHANGE_DYNAMIC_MESSAGE: {
       return state.update(
        state.indexOf(stateElement => {
          return stateElement.get('type') === MESSAGES_TYPES.DYNAMIC && stateElement.get('id') === action.id;
        }),
         dynamicMessage => dynamicMessage.set('props', Object.assign({}, dynamicMessage.get('props'), action.event.state))
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
