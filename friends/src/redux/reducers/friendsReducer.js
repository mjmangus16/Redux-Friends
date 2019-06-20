import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND,
  UPDATE_FRIEND
} from "../actions";
const initialState = {
  friends: [],
  fetching: false,
  error: "",
  loggingIn: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case GET_FRIENDS_START:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        friends: action.payload
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        friends: action.payload
      };
    case DELETE_FRIEND:
      return {
        ...state,
        error: "",
        fetching: false,
        friends: action.payload
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        error: "",
        fetching: false,
        friends: action.payload
      };
    default:
      return state;
  }
};
