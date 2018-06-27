import ConnectedWidget from './src';
import OptionMessage from 'messagesComponents/OptionMessage';
import ContactMessage from 'messagesComponents/ContactMessage';
import {
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages,
  isWidgetOpened
} from './src/store/dispatcher';

export {
  ConnectedWidget as Widget,
  OptionMessage,
  ContactMessage,
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages,
  isWidgetOpened
};
