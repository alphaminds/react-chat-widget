import store from '../store';
import * as actions from './index';
import { MESSAGE_SENDER } from 'constants';

import TypingIndicatorMessage from 'messagesComponents/TypingIndicatorMessage';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

// text:   The message to display
// offset: The amount of time the message should be offset, i.e. if adding a lot 
//         of messages in a row. 0 offset, will add them all instantantly.
// delay:  Duration for the typing indicator
export function addDelayedResponseMessage(text, offset, delay) {
  store.dispatch(dispatch => {
    setTimeout(() => {
      dispatch(actions.addDynamicMessage(TypingIndicatorMessage, {
        text: text,
        delay: delay,
        animationStarted: false,
        animating: false
      }, MESSAGE_SENDER.RESPONSE));
    }, offset);
  });
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function addDynamicMessage(component, props, client = true) {
  store.dispatch(actions.addDynamicMessage(component, props, client === true ? MESSAGE_SENDER.CLIENT : MESSAGE_SENDER.RESPONSE));
}

export function addDelayedDynamicMessage(component, props, delay) {
  store.dispatch(dispatch => {
    setTimeout(() => {
      dispatch(actions.addDynamicMessage(component, props, MESSAGE_SENDER.CLIENT));
    }, delay);
  });
}

export function changeDynamicMessage(id, event) {
  store.dispatch(actions.changeDynamicMessage(id, event));
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}
