import { Map } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER } from '@constants';

import Message from '@messagesComponents/Message';
import Snippet from '@messagesComponents/Snippet';
import OptionGroup from '@messagesComponents/OptionGroup';

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
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

export function createOptionGroup(options, onAnswer, sender) {
  return Map({
    type: MESSAGES_TYPES.OPTION_GROUP,
    component: OptionGroup,
    options,
    onAnswer,
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
