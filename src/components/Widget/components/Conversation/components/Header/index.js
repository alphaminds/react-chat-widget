import React from 'react';
import PropTypes from 'prop-types';

import close from 'assets/clear-button.svg';
import './style.scss';

const Header = ({ title, subtitle, toggleChat, showCloseButton, titleAvatar, showTitle, renderHeaderContent }) =>
  <div className="header">
    {
      showCloseButton &&
      <button className="close-button" onClick={toggleChat}>
        <img src={close} className="close" alt="close" />
      </button>
    }
    {
      showTitle &&
      <div className="content">
        <h4 className="title">
          {
            titleAvatar &&
            <img src={titleAvatar} className="avatar" alt="profile" />
          }
          {title}</h4>
        <span>{subtitle}</span>
      </div>
    }
    {
      renderHeaderContent &&
        renderHeaderContent()
    }

  </div>;

Header.propTypes = {
  renderHeaderContent: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showTitle: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  toggleChat: PropTypes.func
};
export default Header;
