import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  return axiosWithAuth()
    .post("/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axiosWithAuth()
    .get("/friends")
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response.data.error });
    });
};

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = data => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post("/friends", data)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response.data.error });
    });
};

export const DELETE_FRIEND = "DELETE_FRIEND";

export const deleteFriend = id => dispatch => {
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE_FRIEND, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const updateFriend = friend => dispatch => {
  axiosWithAuth()
    .put(`/friends/${friend.id}`, friend)
    .then(res => {
      dispatch({ type: UPDATE_FRIEND, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
