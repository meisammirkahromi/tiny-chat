import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux';
import { selectConversationsSlice, postMessage } from '../../../../state/reducers/conversationsReducer';

import Messages from './components/Messages';
import Compose from './components/Compose';
import { Alert } from 'antd';

const Conversations = ({
  selectedContact,
}) => {
  const conversationsSlice = useSelector(selectConversationsSlice);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 60px)'
      }}
    >
      {
        selectedContact ?
          <>
            <div
              style={{
                flexGrow: 1,
                overflow: 'scroll',
                textAlign: 'left',
                height: '100%',
              }}
            >
              <Messages
                conversations={conversationsSlice.conversations.filter(message => message.contactId === selectedContact.id)}
              />
            </div>
            <div
            >
              <Compose
                onPostMessage={message => dispatch(postMessage(message))}
                contact={selectedContact}
              />
            </div>
          </>
          :
          <Alert
            message="Select a contact to continue"
          />
      }
    </div>
  )
}

Conversations.propTypes = {}

export default Conversations;