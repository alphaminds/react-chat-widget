import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { MESSAGE_SENDER, MESSAGES_TYPES } from '@constants';
import { DynamicMessageWrapper } from './components/DynamicMessage';

import { hideAvatar } from '@actions';

import './styles.scss';

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {
  componentDidMount() {
    scrollToBottom();
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  getComponentToRender = message => {
    const ComponentToRender = message.get('component');
    const previousMessage = this.props.messages.get()
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    else if (message.get('type') === MESSAGES_TYPES.DYNAMIC) {
      const OnetimeActionMessage = DynamicMessageWrapper(ComponentToRender, message.get('id'), message.get('props'), message.get('sender'));
      return <OnetimeActionMessage />;
    }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage = this.props.messages.get(index - 1);
    if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
      this.props.dispatch(hideAvatar(index));
    }
  }

  render() {
    const { messages, profileAvatar } = this.props;
    return (
      <div id="messages" className="rcw-messages-container">
        {
          messages.map((message, index, list) => {
            const previousMessage = list.get(index -1);
            let successiveMessage = false;
            if (index > 0 && previousMessage != null &&
              previousMessage.get('sender') == message.get('sender')) {
              successiveMessage = true;
            }
            return (
              <div className={`rcw-message${successiveMessage ? ' successive' : ''}`} key={index}>
                {
                  profileAvatar &&
                  message.get('showAvatar') &&
                  <img src={profileAvatar} className="rcw-avatar" alt="profile" />
                }
                {
                  this.getComponentToRender(message)
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string
};

export default connect(store => ({
  messages: store.messages
}))(Messages);
