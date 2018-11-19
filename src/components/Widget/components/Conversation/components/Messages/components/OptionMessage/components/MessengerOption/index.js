import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkButtonOption from '@optionComponents/LinkButtonOption';

import messenger from './messenger.svg';
import './styles.scss';

class MessengerOption extends LinkButtonOption {

  render() {
    const mme = 'http://m.me/' + this.props.messengerAccount
    return (
      <a
        href={mme}
        target="_blank"
        rel="noopener noreferrer"
        className="rcw-link-button-option rcw-messenger-option"
        onClick={this.handleClick}
      >
        <img src={messenger} />
        <span>
          {this.props.title}
        </span>
      </a>
    );
  }
}

MessengerOption.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  messengerAccount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MessengerOption;
