import React, { Component } from 'react';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import PropTypes from 'prop-types';

import close from '@assets/clear-button.svg';

import './animation.scss';
import './style.scss';

class Notification extends Component {

  state = { headerVisible: false };

  handleMouseEnter = () => {
    this.setState({ headerVisible: true });
  }

  handleMouseLeave = () => {
    this.setState({ headerVisible: false });
  }

  render() {
    if (this.props.show) {
      const sanitizedHTML = markdownIt()
      .use(markdownItSup)
      .use(markdownItSanitizer)
      .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
      .render(this.props.message);

      return (
        <div className="rcw-notification-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <div className={
            'rcw-notification-header' +
            (this.state.headerVisible ?
            ' rcw-notification-header-visible' : '') }>
            <button className="rcw-dismiss-button" onClick={this.props.onDismiss}>
              <img src={close} className="rcw-close" alt="close" />
            </button>
          </div>
          <div className="rcw-notification rcw-notification-show" onClick={this.props.onClick}>
            <span className="rcw-notification-diamond"></span>
            <div className="rcw-notification-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </div>
        </div>
      );
    }
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func
};

export default Notification;
