import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '@messagesComponents/Message';
import { createNewMessage } from '@utils/messages';
import { MESSAGE_SENDER } from  '@constants';

import close from '@assets/clear-button.svg';

import './animation.scss';
import './style.scss';

class Notification extends Component {

  state = { headerVisible: false };

  handleMouseEnter = () => {
    this.setState({ headerVisible: true });
  }

  handleMouseLeave = () => {
    this.setState({ headerVisible: false });
  }

  render() {
    if (this.props.show) {
      let message = createNewMessage(this.props.message, MESSAGE_SENDER.RESPONSE);

      return (
        <div className="rcw-notification-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <div className={
            'rcw-notification-header' +
            (this.state.headerVisible ?
            ' rcw-notification-header-visible' : '') }>
            <button className="rcw-dismiss-button" onClick={this.props.onDismiss}>
              <img src={close} className="rcw-close" alt="close" />
            </button>
          </div>
          <div className="rcw-notification rcw-notification-show" onClick={this.props.onClick}>
            <Message message={message} />
          </div>
        </div>
      );
    }
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func
};

export default Notification;
