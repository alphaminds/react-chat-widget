import store from '../store';
import * as actions from './index';
import { MESSAGE_SENDER } from 'constants';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function addDynamicMessage(component, props, client = true) {
  store.dispatch(actions.addDynamicMessage(component, props, client === true ? MESSAGE_SENDER.CLIENT : MESSAGE_SENDER.RESPONSE));
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
