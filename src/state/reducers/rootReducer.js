import { combineReducers } from 'redux';

import contactsReducer from './contactsReducer';
import conversationsReducer from './conversationsReducer';

export default combineReducers({
  contacts: contactsReducer,
  conversations: conversationsReducer,
});
