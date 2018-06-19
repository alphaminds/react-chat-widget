import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES } from 'constants';

import OptionButton from './components/OptionButton';

// TODO: Rename to OptionMessage
class OptionGroup extends Component {

  handleAnswer = (answer) => {
    // custom event handler maybe not needed, as we can 
    // expose a generic onAction / onChange
    // that passes an event object
    const onChange = this.props.message.onChange;
    onChange(answer);
    //this.props.onSelect(this.props.message.get('id'), answer);
    this.props.onChange(
      {
        component: OptionGroup,
        state: {
          selectedOption: answer
        }
      });
  }

  render() {
    if (this.props.message.selectedOption) {
      // TODO: Use message component
      return (
        <div className="client">
          {this.props.message.selectedOption}
        </div>
      );
    }

    let buttons = this.props.message.options.map(
      (option, index) => {
        return <OptionButton title={ option } onClick={ this.handleAnswer } key={ index } />;
      });

    return (
      <div className="answer-options">{buttons}</div>
    );
  }
}

OptionGroup.propTypes = {
  message: PROP_TYPES.OPTION_MESSAGE,
  onAction: PropTypes.Fn,
};

export default OptionGroup;
