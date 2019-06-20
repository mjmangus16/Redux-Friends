// we'll need axios
import axios from "axios";

export const FETCHING = "FETCHING";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://localhost:5000/api/friends")
    .then(res => {
      dispatch({
        type: GET_FRIENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE }));
};
