import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionButton extends Component {

  constructor(props) {
    super();
    this.title = props.title;
    this.onClick = props.onClick;
  }

  handleClick = () => {
    this.onClick(this.title);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
      >
        {this.title}
      </button>
    );
  }
}

OptionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionButton;
