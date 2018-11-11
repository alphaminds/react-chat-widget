import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES, MESSAGE_SENDER } from '@constants';

import ButtonOption from './components/ButtonOption';
import TextOption from './components/TextOption';

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
          case ButtonOption:
            return (
              <ButtonOption { ...option.props } id={ option.id }
                onClick={ this.handleOption } key={ index } />
            );
            break;
          case TextOption:
            return (
              <TextOption { ...option.props } id={ option.id }
                onSubmit= { this.handleOption } key={ index } />
            );
          default:
            break;
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
