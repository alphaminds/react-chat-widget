import ConnectedWidget from './src';
import OptionMessage from 'messagesComponents/OptionMessage';
import {
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages
} from './src/store/actions/dispatcher';

export {
  ConnectedWidget as Widget,
  OptionMessage,
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages
};
