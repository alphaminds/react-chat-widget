import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';

import OptionButton from './components/OptionButton';

class OptionGroup extends Component {

  constructor(props) {
    super();
    this.state = { active: true };
    this.options = props.message.get('options');
    this.onAnswer = props.message.get('onAnswer');
    this.selectedAnswer = '';
  }

  handleAnswer = (answer) => {
    this.onAnswer(answer);
    this.setState({ active: false });
    this.selectedAnswer = answer;
  }

  render() {
    if (this.state.active) {
      let buttons = this.options.map(
        (option, index) => {
          return <OptionButton title={ option } onClick={ this.handleAnswer } key={ index } />;
        });

      return (
        <div className="answer-options">{buttons}</div>
      );
    }

    return (
      <div className="client">
        {this.selectedAnswer}
      </div>
    );
  }
}

OptionGroup.propTypes = {
  message: PROP_TYPES.OPTION_GROUP
};

export default OptionGroup;
