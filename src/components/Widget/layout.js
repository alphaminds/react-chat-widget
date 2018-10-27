import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import Notification from './components/Notification';
import './style.scss';


class WidgetLayout extends React.PureComponent {

  componentDidUpdate() {
    // componentDidUpdate fires after render, which fires when rendering of the
    // widget changes, i.e. notification is shown, or widget is opened. The
    // effect of these changes should be measured and notified to any listeners.
    this.measureContainer();
  }

  measureContainer() {
   if (this.props.onSizeChange) {
      this.props.onSizeChange({
        width: this.container.clientWidth,
        height: this.container.clientHeight
      });
    }
  }

  render() {
    return (
      <div
        ref={ container => this.container = container }
        className={
          `rcw-widget-container ${this.props.fullScreenMode ? 'rcw-full-screen' : ''} ${this.props.showChat ? 'rcw-opened' : ''}`
        }
      >
        {this.props.showChat &&
          <Conversation
            headerComponent={this.props.headerComponent}
            footerComponent={this.props.footerComponent}
            title={this.props.title}
            subtitle={this.props.subtitle}
            sendMessage={this.props.onSendMessage}
            senderPlaceHolder={this.props.senderPlaceHolder}
            profileAvatar={this.props.profileAvatar}
            toggleChat={this.props.onToggleConversation}
            showChat={this.props.showChat}
            showCloseButton={this.props.showCloseButton}
            showTitle={this.props.showTitle}
            showSender={this.props.showSender}
            disabledInput={this.props.disabledInput}
            autofocus={this.props.autofocus}
            titleAvatar={this.props.titleAvatar}
          />
        }
        {!this.props.showChat &&
        this.props.showNotification &&
            <Notification
              show={this.props.showNotification}
              message={this.props.notificationText}
              onDismiss={this.props.onDismissNotification}
              onClick={this.props.onClickNotification}
            />
        }
        {this.props.customLauncher ?
          this.props.customLauncher(this.props.onToggleConversation) :
          !this.props.fullScreenMode &&
          <Launcher
            toggle={this.props.onToggleConversation}
            badge={this.props.badge}
          />
        }
      </div>
    );
  }
}

WidgetLayout.propTypes = {
  headerComponent: PropTypes.func,
  footerComponent: PropTypes.func,
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  onSendMessage: PropTypes.func,
  onToggleConversation: PropTypes.func,
  showChat: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  showTitle: PropTypes.bool,
  showSender: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  showNotification: PropTypes.bool,
  notificationText: PropTypes.string,
  onClickNotification: PropTypes.func,
  onDismissNotification: PropTypes.func,
  onSizeChange: PropTypes.func
};

export default connect(store => ({
  showChat: store.behavior.get('showChat'),
  disabledInput: store.behavior.get('disabledInput'),
  showNotification: store.notification.get('showNotification'),
  notificationText: store.notification.get('notificationText')
}))(WidgetLayout);
