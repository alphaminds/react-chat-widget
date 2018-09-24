import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDynamicMessage } from '@actions';

export const DynamicMessageWrapper = (MessageComponent, id, props, sender) => {
  class DynamicMessage extends Component {

    handleMessageInteraction = (event) => {
      this.props.dispatch(changeDynamicMessage(id, event));
    }

    render() {
      // TODO: sender might need to be moved above {...props} to allow
      // for custom sender passing from library consumer.
      //
      // onChange should be last, to ensure that redux connection
      // stays intact, regardless of a 'malicious' library consumer passing
      // an onChange handler.
      return (
        <MessageComponent
          {...props}
          onChange={this.handleMessageInteraction}
          sender={sender}
        />
      );
    }
  }

  return connect()(DynamicMessage);
}
