import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDynamicMessage } from 'actions';

export const DynamicMessageWrapper = (MessageComponent, id, message, sender) => {
  class DynamicMessage extends Component {

    handleMessageInteraction = (event) => {
      this.props.dispatch(changeDynamicMessage(id, event));
    }

    render() {
      return (
        <MessageComponent onChange={this.handleMessageInteraction}
          message={message}
          sender={sender}
        />
      );
    }
  }

  return connect()(DynamicMessage);
}
