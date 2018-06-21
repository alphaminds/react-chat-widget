import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES, MESSAGE_SENDER } from 'constants';

import OptionButton from './components/OptionButton';
import Message from 'messagesComponents/Message';
import { createNewMessage } from 'helper';

import './styles.scss';

class OptionMessage extends Component {

  handleSelectOption = (answer) => {
    if (this.props.onSelect) {
      this.props.onSelect(answer);
    }
    this.props.onChange(
      {
        component: OptionMessage,
        state: {
          selectedOption: answer
        }
      });
  }

  render() {
    if (this.props.selectedOption) {
      let message = createNewMessage(this.props.selectedOption, this.props.sender || MESSAGE_SENDER.CLIENT);
      return (
        <Message message={message} />
      );
    }

    let buttons = this.props.options.map(
      (option, index) => {
        return <OptionButton title={ option } onClick={ this.handleSelectOption } key={ index } />;
      });

    return (
      <div className={`${ this.props.sender } answer-options`}>{buttons}</div>
    );
  }
}

OptionMessage.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOption: PropTypes.string,
  onSelect: PropTypes.func,
  sender: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default OptionMessage;
