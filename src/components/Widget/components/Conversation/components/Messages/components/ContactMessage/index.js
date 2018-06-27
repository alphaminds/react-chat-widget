import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, {HelperText, Input, Icon} from '@material/react-text-field';
import TextArea from './components/TextArea';

import './styles.scss';

class ContactMessage extends Component {

  state = {
    messageValue: '',
    emailValue: '',
    emailValid: true
  };

  handleEmailChange = (event) => {
    if(this.state.emailValid === false) {
      // ensure that validation error is removed as soon as email is valid
      this.validateEmail(event);
    }
    this.setState({emailValue: event.target.value});
  }

  validateEmail = (event) => {
    const email = event.target.value;
    const emailValid = email.length == 0 || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null;
    this.setState({
      emailValid: emailValid,
    });
  }

  render() {
    const errorIcon =
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      </Icon>;

    return (
      <div class="client contact-message">
        <div class="contact-message-header">{this.props.title}</div>
        <div class="contact-message-content">
          <p class="description">{this.props.instructions}</p>
          <TextField
            label={this.props.messageLabel}
            dense={true}
            textarea={true}
          >
            <TextArea
              rows={5}
              value={this.state.messageValue}
              onChange={(e) => this.setState({messageValue: e.target.value})}
            />
          </TextField>
          {
            this.props.emailHelper &&
              <p>
                {this.props.emailHelper}
              </p>
          }

          <TextField
            label={this.props.emailLabel}
            outlined={true}
            dense={true}
            trailingIcon={!this.state.emailValid && errorIcon}
            className={!this.state.emailValid && 'mdc-text-field--invalid'}
            helperText={
              <HelperText 
                validation={true}
                isValid={this.state.emailValid}>
                {this.props.emailError}
              </HelperText>}
          >
            <Input
              value={this.state.emailValue}
              onBlur={this.validateEmail}
              onChange={this.handleEmailChange}
            />
          </TextField>
        </div>
        <div class="contact-message-footer">
          <button>{this.props.buttonTitle}</button>
        </div>
      </div>
    );
  }
}

ContactMessage.propTypes = {
  buttonTitle: PropTypes.string,
  emailError: PropTypes.string,
  emailHelper: PropTypes.string,
  emailLabel: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  instructions: PropTypes.string,
  messageLabel: PropTypes.string,
  messagePlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  sender: PropTypes.string,
  title: PropTypes.string
};

export default ContactMessage;
