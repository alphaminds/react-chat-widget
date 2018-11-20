import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material/react-text-field';

export default class TextArea extends Input {

  render() {
    const {
      disabled,
      /* eslint-disable no-unused-vars */
      className,
      foundation,
      value,
      handleFocusChange,
      handleValueChange,
      setDisabled,
      setInputId,
      onFocus,
      onBlur,
      onMouseDown,
      onTouchStart,
      onChange,
      rows,
      /* eslint-enable no-unused-vars */
    } = this.props;
    return (
      <textarea
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
        onChange={this.handleChange}
        disabled={disabled}
        value={value}
        ref={this.inputElement}
        className={this.classes}
        rows={rows}
      />
    );
  }
}
