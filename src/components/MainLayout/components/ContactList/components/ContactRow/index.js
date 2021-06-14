import PropTypes from 'prop-types'
import moment from 'moment';

import { Row, Col, } from "antd";

import { TIME_FORMAT } from '../../../../../../shared/constants';

const ContactRow = ({
  contact,
  lastConversation,
  onContactRowClick,
  selected,
}) => {

  const onRowContactClick = () => {
    onContactRowClick(contact);
  }

  return (
    <div
      onClick={onRowContactClick}
      style={
        {
          backgroundColor: selected ? '#EBF5FB' : 'unset',
          padding: 10,
          borderBottom: '1px solid #eee',
          minHeight: 70
        }
      }
    >
      <Row
        gutter={[5]}
      >
        <Col span={12}>
          <b>{contact.name}</b>
        </Col>
        <Col
          span={12}
          style={{
            textAlign: 'right'
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: '#ababab'
            }}
          >
            {lastConversation && moment(lastConversation.date).format(TIME_FORMAT)}
          </span>
        </Col>
        <Col
          span={24}
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <p
            style={{
              margin: 0,
            }}
          >
            {lastConversation && lastConversation.message}
          </p>
        </Col>
      </Row>
    </div>
  )
}

ContactRow.propTypes = {}

export default ContactRow;