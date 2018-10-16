import React, { Component } from 'react';
import PropTypes from 'prop-types';

import close from '@assets/clear-button.svg';

import './style.scss';

class Notification extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="rcw-notification-container">
          <div className="rcw-notification-header">
            <button className="rcw-dismiss-button" onClick={this.props.dismiss}>
              <img src={close} className="rcw-close" alt="close" />
            </button>
          </div>
          <div className="rcw-notification" onClick={this.props.showChat}>
            <span className="rcw-notification-diamond"></span>
            <div className="rcw-notification-text">
              { this.props.message }
            </div>
          </div>
        </div>
      );
    }
  }
}

Notification.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  dismiss: PropTypes.func,
  showChat: PropTypes.func
};

export default Notification;
