import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      return (
        <div className="rcw-notification-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <div className={
            'rcw-notification-header' +
            (this.state.headerVisible ?
            ' rcw-notification-header-visible' : '') }>
            <button className="rcw-dismiss-button" onClick={this.props.dismiss}>
              <img src={close} className="rcw-close" alt="close" />
            </button>
          </div>
          <div className="rcw-notification rcw-notification-show" onClick={this.props.showChat}>
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
