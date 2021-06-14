import PropTypes from 'prop-types'
import { isEmpty } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { selectContactSlice, setSelectedContact } from '../../../../state/reducers/contactsReducer';
import { selectConversationsSlice } from '../../../../state/reducers/conversationsReducer';

import ContactRow from './components/ContactRow';

const ContactList = () => {
  const contactsSlice = useSelector(selectContactSlice);
  const conversationsSlice = useSelector(selectConversationsSlice);
  const dispatch = useDispatch();

  const getContactLastConversation = (contact, conversations) => {
    const messages = conversations.filter(message => message.contactId === contact.id);

    if (!isEmpty(messages)) {
      return messages[messages.length - 1];
    }

    return null;
  }

  const handleSetSelectedContact = contact => {
    dispatch(setSelectedContact(contact));
  }

  return (
    <>
      {
        contactsSlice.contacts && contactsSlice.contacts.map(contact => (
          <ContactRow 
            key={contact.id} 
            contact={contact} 
            onContactRowClick={handleSetSelectedContact} 
            selected={contactsSlice.selectedContact && contact.id === contactsSlice.selectedContact.id}
            lastConversation={getContactLastConversation(contact, conversationsSlice.conversations)}
          />
        ))
      }
    </>
  )
}

ContactList.propTypes = {}

export default ContactList;