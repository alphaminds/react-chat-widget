import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField, {HelperText, Input, Icon} from '@material/react-text-field';
import TextArea from './components/TextArea';

import './styles.scss';

// Poor mans localization - just to refactor out localized strings
// TODO: Implement a proper localization framework.
const strings = {
  da: {
     send: "Send",
     sent:"Sendt",
  }
};

const locale = "da";

class ContactMessage extends Component {

  constructor(props) {
    super();
    // local state while filling out form
    this.state = {
      messageValue: props.messageValue,
      emailValue: props.emailValue,
      emailValid: props.emailValid
    };
  }

  handleEmailChange = (event) => {
    if(this.state.emailValid === false) {
      // ensure that validation error is removed as soon as email is valid
      this.validateEmail(event);
    }
    this.setState({emailValue: event.target.value});
  }

  validateEmail = (event) => {
    const email = event.target.value;
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null;
    this.setState({
      emailValid: emailValid,
    });
    return emailValid
  }

  handleSend = () => {
    var proxyEvent = {
      target: {
        value: this.state.emailValue
      }
    };
    let emailValid = this.validateEmail(proxyEvent);

    const eventArgs = {
        component: ContactMessage,
        state: {
          messageValue: this.state.messageValue,
          emailValue: this.state.emailValue,
          emailValid: emailValid,
          sent: false
        }
      };

    if (emailValid && this.state.messageValue) {
      eventArgs.state.sent = true;
      if (this.props.onSend) {
        this.props.onSend(eventArgs);
      }
    }
    this.props.onChange(eventArgs);

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
      <div className='rcw-client rcw-contact-message'>
        <div className="rcw-contact-message-header">{this.props.title}</div>
        <div className="rcw-contact-message-content">
          { this.props.instructions &&
            <p className="description">{this.props.instructions}</p>
          }
          <TextField
            label={this.props.messageLabel}
            dense={true}
            textarea={true}
          >
            <TextArea
              rows={5}
              value={this.state.messageValue}
              onChange={(e) => this.setState({messageValue: e.target.value})}
              disabled={this.props.sent}
              required={true}
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
            trailingIcon={!this.state.emailValid ? errorIcon : null}
            className={!this.state.emailValid ? 'mdc-text-field--invalid' : null}
            helperText={
              !this.state.emailValid ?
                <HelperText
                  validation={true}
                  isValid={this.state.emailValid}>
                  {this.props.emailError}
                </HelperText>
                : null
            }
          >
            <Input
              value={this.state.emailValue}
              onBlur={this.validateEmail}
              onChange={this.handleEmailChange}
              disabled={this.props.sent}
            />
          </TextField>
        </div>
        <div className="rcw-contact-message-footer">
          <button
            onClick={this.handleSend}
            disabled={this.props.sent}>
            { this.props.sent ?
              strings[locale].sent :
              strings[locale].send
            }
          </button>
        </div>
      </div>
    );
  }
}

ContactMessage.propTypes = {
  emailError: PropTypes.string,
  emailHelper: PropTypes.string,
  emailLabel: PropTypes.string,
  emailValue: PropTypes.string,
  emailValid: PropTypes.bool,
  emailPlaceholder: PropTypes.string,
  instructions: PropTypes.string,
  messageLabel: PropTypes.string,
  messageValue: PropTypes.string,
  messagePlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  sender: PropTypes.string,
  title: PropTypes.string
};

ContactMessage.defaultProps = {
  messageValue: '',
  emailValue: '',
  emailValid: true,
}

export default ContactMessage;
