import ConnectedWidget from './src';
import OptionMessage from '@messagesComponents/OptionMessage';
import ButtonOption from '@messagesComponents/OptionMessage/components/ButtonOption';
import TextOption from '@messagesComponents/OptionMessage/components/TextOption';
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
  ButtonOption,
  ContactMessage,
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
