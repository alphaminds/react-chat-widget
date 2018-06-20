import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES, MESSAGE_SENDER } from 'constants';

import OptionButton from './components/OptionButton';
import Message from 'messagesComponents/Message';
import { createNewMessage } from 'helper';

import './styles.scss';

class OptionMessage extends Component {

  handleSelectOption = (answer) => {
    const onSelectOption = this.props.message.onChange;
    onSelectOption(answer);
    this.props.onChange(
      {
        component: OptionMessage,
        state: {
          selectedOption: answer
        }
      });
  }

  render() {
    if (this.props.message.selectedOption) {
      let message = createNewMessage(this.props.message.selectedOption, this.props.message.sender || MESSAGE_SENDER.CLIENT);
      return (
        <Message message={message} />
      );
    }

    let buttons = this.props.message.options.map(
      (option, index) => {
        return <OptionButton title={ option } onClick={ this.handleSelectOption } key={ index } />;
      });

    return (
      <div className={`${ this.props.sender } answer-options`}>{buttons}</div>
    );
  }
}

OptionMessage.propTypes = {
  message: PROP_TYPES.OPTION_MESSAGE,
  sender: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default OptionMessage;
