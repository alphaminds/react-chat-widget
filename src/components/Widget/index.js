import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleChat, addUserMessage,
  selectOption, clickNotification, dismissNotification } from '@actions';

import WidgetLayout from './layout';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      toggleConversation();
    }
  }

  toggleConversation = () => {
    // Dissmiss any open notifications on widget toggle
    if (this.props.notificationVisible) {
      this.props.dispatch(dismissNotification());
    }
    this.props.dispatch(toggleChat());
    // Call registered onToggle listener if present
    if (this.props.onToggle) {
      this.props.onToggle();
    }
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput) {
      this.props.dispatch(addUserMessage(userInput));
      this.props.handleNewUserMessage(userInput);
    }
    event.target.message.value = '';
  }

  clickNotification = () => {
    this.props.dispatch(clickNotification());
    this.toggleConversation();
  }

  dismissNotification = () => {
    this.props.dispatch(dismissNotification());
  }

  render() {
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        onDismissNotification={this.dismissNotification}
        onClickNotification={this.clickNotification}
        onSizeChange={this.props.onSizeChange}
        title={this.props.title}
        titleAvatar={this.props.titleAvatar}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        showTitle={this.props.showTitle}
        headerComponent={this.props.headerComponent}
        footerComponent={this.props.footerComponent}
        showSender={this.props.showSender}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.props.customLauncher}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  headerComponent: PropTypes.func,
  footerComonent: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  showTitle: PropTypes.bool,
  showSender: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  notificationVisible: PropTypes.bool,
  onToggle: PropTypes.func,
  onSizeChange: PropTypes.func
};

export default connect(store => ({
  notificationVisible: store.notification.get('showNotification'),
}))(Widget);
