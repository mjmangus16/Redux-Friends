import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../redux/actions/index";

const styles = {
  container: {
    border: "1px solid black",
    width: "400px",
    height: "auto",
    margin: "10px auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px auto"
  }
};

const Friend = ({ friend, deleteFriend, setForm }) => {
  return (
    <div style={styles.container}>
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <div style={styles.buttons}>
        <button onClick={() => setForm(friend)}>UPDATE</button>
        <button onClick={() => deleteFriend(friend.id)}>DELETE</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetching,
    error: state.friendsReducer.error,
    loggingIn: state.friendsReducer.logginIn
  };
};

export default connect(
  mapStateToProps,
  { deleteFriend }
)(Friend);