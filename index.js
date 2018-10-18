import ConnectedWidget from './src';
import OptionMessage from '@messagesComponents/OptionMessage';
import ContactMessage from '@messagesComponents/ContactMessage';
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
  ContactMessage,
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
