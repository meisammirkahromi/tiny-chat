import { useState } from 'react';

import PropTypes from 'prop-types'
import moment from 'moment';

import { Input } from 'antd';

const Compose = ({
  onPostMessage,
  contact,
}) => {
  const [message, setMessage] = useState();

  const handleInputKeyDown = ({ keyCode }) => {
    // if the return is pressed
    if (keyCode === 13) {
      onPostMessage({
        contactId: contact.id,
        message,
        date: moment(),
      });
      setMessage(null);
    }
  }

  return (
    <Input
      onKeyDown={handleInputKeyDown}
      size="large"
      placeholder="Type your message and press enter"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      autoFocus
    />
  )
}

Compose.propTypes = {}

export default Compose;