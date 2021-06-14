import { ACTIONS } from '../constants';

export const selectConversationsSlice = state => state.conversations;

const initialState = {
  conversations: [],
}

const conversationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.POST_MESSAGE:
      return {
        // can be removed, however it is added not to miss to-be-added-in-the-future keys
        ...state,
        conversations: [
          ...state.conversations, payload
        ]
      }
  }

  return state;
}

export const postMessage = payload => ({
  type: ACTIONS.POST_MESSAGE,
  payload,
})

export default conversationsReducer;