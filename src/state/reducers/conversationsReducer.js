const initialValues = {
  conversations: [],
}
const conversationsReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    // test the state initiation 
    case '@@INIT':
      return {
        ...state,
        conversations: [
          'test conversations'
        ]
      }
  }

  return state;
}

export default conversationsReducer;