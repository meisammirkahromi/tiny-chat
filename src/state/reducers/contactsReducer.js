import { ACTIONS } from '../constants';

// slice selector 
export const selectContactSlice = state => state.contacts;

const initialValues = {
  contacts: [],
  selectedContact: null,
}

const contactsReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CONTACT_LIST:
      return {
        ...state,
        contacts: payload
      }
    case ACTIONS.SET_SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: payload
      }
  }

  return state;
}

export const setContactList = payload => ({
  type: ACTIONS.SET_CONTACT_LIST, 
  payload, 
})

export const setSelectedContact = (payload) => ({
  type: ACTIONS.SET_SELECTED_CONTACT, 
  payload, 
})


export default contactsReducer;