import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES, MESSAGE_SENDER } from 'constants';

import OptionButton from './components/OptionButton';
import Message from 'messagesComponents/Message';
import { createNewMessage } from 'helper';

// TODO: Rename to OptionMessage
class OptionGroup extends Component {

  handleAnswer = (answer) => {
    // custom event handler maybe not needed, as we can 
    // expose a generic onAction / onChange
    // that passes an event object
    const onChange = this.props.message.onChange;
    onChange(answer);
    this.props.onChange(
      {
        component: OptionGroup,
        state: {
          selectedOption: answer
        }
      });
  }

  render() {
    if (this.props.message.selectedOption) {
      let message = createNewMessage(this.props.message.selectedOption, this.props.message.sender || MESSAGE_SENDER.CLIENT );
      return (
        <Message message={message} />
      );
    }

    let buttons = this.props.message.options.map(
      (option, index) => {
        return <OptionButton title={ option } onClick={ this.handleAnswer } key={ index } />;
      });

    return (
      <div className="answer-options">{buttons}</div>
    );
  }
}

OptionGroup.propTypes = {
  message: PROP_TYPES.OPTION_MESSAGE,
  onAction: PropTypes.Fn
};

export default OptionGroup;
