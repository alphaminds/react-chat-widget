import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, {HelperText, Input, Icon} from '@material/react-text-field';
import { PROP_TYPES, MESSAGE_SENDER } from '@constants';

import Message from '@messagesComponents/Message';
import { createNewMessage } from '@utils/messages';
import SendIcon from './components/SendIcon';

import './styles.scss';

class TextOption extends Component {

  state = { messageValue: '' }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.props.id, this.state.messageValue);
    }
  }

  handleChange = (event) => {
    this.setState({messageValue: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    let className = 'rcw-text-option';

    if (!this.state.messageValue) {
      className += ' empty';
    }

    return (
      <div
        className={className}>
      <input type="text"
        value={this.state.messageValue}
        placeholder={this.props.inputPlaceholder}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        autoFocus={true}
      />
        <button
          type="button"
          className="rcw-send"
          onClick={this.handleSubmit}>
          <SendIcon/>
        </button>
      </div>
    );
  }
}

TextOption.propTypes = {
  id: PropTypes.number,
  inputPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func,
  sender: PropTypes.string,
  submitted: PropTypes.bool
};

export default TextOption;
