import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

export const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  OPTION_GROUP: 'option_group',
  CUSTOM_COMPONENT: 'component'
};

export const PROP_TYPES = {
  MESSAGE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  SNIPPET: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    title: PropTypes.string,
    link: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  OPTION_GROUP: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.OPTION_GROUP
    ]),
    options: PropTypes.arrayOf(PropTypes.string),
    onAnswer: PropTypes.func,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  })

};
