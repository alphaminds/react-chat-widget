import React, { Component } from 'react';
import Message from '@messagesComponents/Message';
import PropTypes from 'prop-types';
import { createNewMessage } from '@utils/messages';

import './styles.scss';

class TypingIndicatorMessage extends Component {


  componentDidMount(props) {
    if (!this.props.animationStarted) {
      this.startAnimation();
      setTimeout(() => { this.finishAnimating() }, this.props.delay);
    }
  }

  // Only animate the component once - i.e. we need to store this in the Redux
  // state, so it doesn't animate again when the chat is re-rendered which
  // happens on toggeling the chat open/closed.
  startAnimation = () => {
     const eventArgs = {
       component: TypingIndicatorMessage,
       state: {
         animationStarted: true,
         animating: true
       }
     };

    this.props.onChange(eventArgs);
  }

  finishAnimating = () => {
     const eventArgs = {
       component: TypingIndicatorMessage,
       state: {
         animating: false
       }
     };

    this.props.onChange(eventArgs);
  }

  render() {

    if (this.props.animating) {
      return (
        <div className={'rcw-' + this.props.sender + ' typing-indicator'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
    } else {
      let message = createNewMessage(this.props.text, this.props.sender);
      return (
        <Message message={message} />
      );
    }
  }
}

TypingIndicatorMessage.propTypes = {
  text: PropTypes.string,
  sender: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  animationStarted: PropTypes.bool,
  animating: PropTypes.bool
};

export default TypingIndicatorMessage;
