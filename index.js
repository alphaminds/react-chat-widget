import ConnectedWidget from './src';

import OptionMessage from '@messagesComponents/OptionMessage';
import ContactMessage from '@messagesComponents/ContactMessage';

import ButtonOption from '@optionComponents/ButtonOption';
import TextOption from '@optionComponents/TextOption';
import LinkButtonOption from '@optionComponents/LinkButtonOption';
import MessengerOption from '@optionComponents/MessengerOption';

import {
  addUserMessage,
  addResponseMessage,
  addDelayedResponseMessage,
  addDelayedDynamicMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages,
  isWidgetOpened,
  showNotification,
  dismissNotification
} from './src/store/dispatcher';

export {
  ConnectedWidget as Widget,
  OptionMessage,
  ButtonOption,
  ContactMessage,
  LinkButtonOption,
  MessengerOption,
  TextOption,
  addUserMessage,
  addResponseMessage,
  addDelayedResponseMessage,
  addDelayedDynamicMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages,
  isWidgetOpened,
  showNotification,
  dismissNotification
};
