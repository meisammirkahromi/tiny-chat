import PropTypes from 'prop-types'
import moment from 'moment';

import { TIME_FORMAT } from '../../../../../../shared/constants';

const Messages = ({
  conversations, 
}) => {
  return (
    <>
      {conversations.map(message => {
        return (
          <div
            style={{
              textAlign: 'right'
            }}
          >
            <div
              style={{
                backgroundColor: '#eee',
                padding: '10px 15px',
                borderRadius: '15px 15px 0 15px',
                marginBottom: 15,
                display: 'inline-block',
              }}
            >
              <div>{message.message}</div>
              <div
              >
                <span
                  style={{
                    fontSize: 10,
                    color: '#ababab'
                  }}
                >
                  {moment(message.date).format(TIME_FORMAT)}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

Messages.propTypes = {}

export default Messages;