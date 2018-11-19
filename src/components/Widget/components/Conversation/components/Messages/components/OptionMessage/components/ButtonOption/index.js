import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class ButtonOption extends Component {

  constructor(props) {
    super();
    this.title = props.title;
    this.onClick = props.onClick;
  }

  handleClick = () => {
    this.onClick(this.props.id, this.title);
  }

  render() {
    return (
      <button
        className="rcw-button-option"
        onClick={this.handleClick}
      >
        {this.title}
      </button>
    );
  }
}

ButtonOption.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonOption;
