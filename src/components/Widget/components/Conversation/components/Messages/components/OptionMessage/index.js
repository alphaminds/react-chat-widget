import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES, MESSAGE_SENDER } from '@constants';

import TextOption from '@optionComponents/TextOption';

import Message from '@messagesComponents/Message';
import { createNewMessage } from '@utils/messages';

import './styles.scss';

class OptionMessage extends Component {

  handleOption = (id, answer) => {
    const eventArgs = {
      component: OptionMessage,
      id: id,
      state: {
        selectedOption: answer
      }
    };

    if (this.props.onSelect) {
      this.props.onSelect(eventArgs);
    }
    this.props.onChange(eventArgs);
  }

  render() {
    if (this.props.selectedOption) {
      let message = createNewMessage(this.props.selectedOption, this.props.sender || MESSAGE_SENDER.CLIENT);
      return (
        <Message message={message} />
      );
    }

    let options = this.props.options.map(
      (option, index) => {
        switch(option.component) {
          case TextOption:
            return (
              <TextOption { ...option.props } id={ option.id }
                onSubmit= { this.handleOption } key={ index } />
            );
          default:
            const Option = option.component;
            // default options are options that implement onClick
            return (
              <Option { ...option.props } id={ option.id }
                onClick={ this.handleOption } key={ index } />
            );
        }
      });

    return (
      <div className='rcw-options'>{options}</div>
    );
  }
}

OptionMessage.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.string,
  onSelect: PropTypes.func,
  sender: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default OptionMessage;
