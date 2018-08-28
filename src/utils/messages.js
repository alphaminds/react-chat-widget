import { Map } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER } from '@constants';

import Message from '@messagesComponents/Message';
import TypingIndicatorMessage from '@messagesComponents/TypingIndicatorMessage';
import Snippet from '@messagesComponents/Snippet';

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createTypingIndicatorMessage(text, sender, delay) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: TypingIndicatorMessage,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE,
    delay
  });
}

export function createLinkSnippet(link) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    title: link.title,
    link: link.link,
    target: link.target || '_blank',
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar: true
  });
}

export function createDynamicMessage(component, id, props, onChange, sender) {
  return Map({
    type: MESSAGES_TYPES.DYNAMIC,
    component,
    id: id,
    props,
    onChange,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createComponentMessage(component, props, showAvatar) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}
