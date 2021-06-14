const initialValues = {
  contacts: [],
}
const contactsReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    // test the state initiation 
    case '@@INIT':
      return {
        ...state,
        contacts: [
          'sample Contact'
        ]
      }
  }

  return state;
}

export default contactsReducer;