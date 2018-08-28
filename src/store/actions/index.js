import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text, delay) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text,
    delay
  };
}

export function addLinkSnippet(link) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link
  };
}

export function renderCustomComponent(component, props, showAvatar) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar
  };
}

let nextDynamicMessageId = 0;
export function addDynamicMessage(component, props, sender) {
  return {
    type: actions.ADD_NEW_DYNAMIC_MESSAGE,
    id: nextDynamicMessageId++,
    component,
    props,
    sender
  };
}

export function changeDynamicMessage(id, event) {
  return {
    type: actions.CHANGE_DYNAMIC_MESSAGE,
    id: id,
    event: event
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}

export function hideAvatar() {
  return {
    type: actions.HIDE_AVATAR
  };
}
