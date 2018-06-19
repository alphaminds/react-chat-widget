import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDynamicMessage } from 'actions';

//import { PROP_TYPES } from 'constants';

export const DynamicMessageWrapper = (MessageComponent, message) => {
  class DynamicMessage extends Component {

    handleMessageInteraction = (event) => {
      //if (onMessageAction) {
      //  onMessageAction(event);
      //}
      console.log('Message event fired: ');
      console.log(event);
      this.props.dispatch(changeDynamicMessage(0, event));
    }

    render() {
      return <MessageComponent onChange={this.handleMessageInteraction} message={message} />;
    }
  }

  return connect()(DynamicMessage);
}
