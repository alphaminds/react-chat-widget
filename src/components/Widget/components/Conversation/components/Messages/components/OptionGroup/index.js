import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';

import OptionButton from './components/OptionButton';

class OptionGroup extends Component {

  handleAnswer = (answer) => {
    const onAnswer = this.props.message.get('onAnswer');
    onAnswer(answer);
    this.props.onSelect(this.props.message.get('id'), answer);
  }

  render() {
    if (this.props.message.get('selectedOption')) {
      return (
        <div className="client">
          {this.props.message.get('selectedOption')}
        </div>
      );
    }

    let buttons = this.props.message.get('options').map(
      (option, index) => {
        return <OptionButton title={ option } onClick={ this.handleAnswer } key={ index } />;
      });

    return (
      <div className="answer-options">{buttons}</div>
    );
  }
}

OptionGroup.propTypes = {
  message: PROP_TYPES.OPTION_GROUP
};

export default OptionGroup;
