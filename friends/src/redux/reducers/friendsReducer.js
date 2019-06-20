import { GET_FRIENDS_SUCCESS, FETCHING, GET_FRIENDS_FAILURE } from "../actions";
const initialState = {
  friends: [],
  fetching: true,
  error: ""
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        friends: action.payload
      };
    default:
      return state;
  }
};
