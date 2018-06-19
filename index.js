import ConnectedWidget from './src';
import OptionGroup from 'messagesComponents/OptionGroup';
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
  OptionGroup,
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addDynamicMessage,
  renderCustomComponent,
  toggleWidget,
  toggleInputDisabled,
  dropMessages
};
