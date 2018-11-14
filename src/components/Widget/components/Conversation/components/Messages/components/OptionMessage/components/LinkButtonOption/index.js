import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class LinkButtonOption extends Component {

  handleClick = () => {
    this.props.onClick(this.props.id, this.props.title);
  }

  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rcw-link-button-option"
        onClick={this.handleClick}
      >
        {this.props.title}
      </a>
    );
  }
}

LinkButtonOption.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default LinkButtonOption;
