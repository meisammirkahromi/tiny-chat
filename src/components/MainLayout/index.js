import PropTypes from 'prop-types'

import { Row, Col } from 'antd';
import ContactList from './components/ContactList';
import Conversations from './components/Conversations';

const MainLayout = () => {
  return (
    <Row
      style={{
        margin: 20,
        height: 'calc(100vh - 200px)'
      }}
    >
      <Col
        span={8}
        style={{
          padding: 20,
          borderRight: '1px solid #eee'
        }}
      >
        <ContactList />
      </Col>
      <Col
        span={16}
        style={{
          padding: 20,
        }}
      >
        <Conversations />
      </Col>
    </Row>
  )
}

MainLayout.propTypes = {}

export default MainLayout;