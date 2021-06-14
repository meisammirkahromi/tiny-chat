import PropTypes from 'prop-types'

import Messages from './components/Messages';
import Compose from './components/Compose';

const Conversations = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 60px)'
      }}
    >
      <div
        style={{
          flexGrow: 1,
          overflow: 'scroll',
          textAlign: 'left',
          height: '100%',
        }}
      >
        <Messages />
      </div>
      <div
      >
        <Compose />
      </div>
    </div>
  )
}

Conversations.propTypes = {}

export default Conversations;