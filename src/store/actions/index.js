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

export function addResponseMessage(text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
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

let nextOptionGroupId = 0;
export function addOptionGroup(options, onAnswer) {
  return {
    type: actions.ADD_NEW_OPTION_GROUP,
    id: nextOptionGroupId++,
    options,
    onAnswer
  };
}

export function selectOption(id, selectedOption) {
  return {
    type: actions.SELECT_OPTION,
    id: id,
    selectedOption: selectedOption
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}
