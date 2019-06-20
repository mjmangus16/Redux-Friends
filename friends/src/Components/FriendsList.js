import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../redux/actions/index";

import Friend from "./Friend";

class FriendsList extends Component {
  state = {
    active: null
  };

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { friends, setForm } = this.props;
    return (
      <div>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} setForm={setForm} />
        ))}
      </div>
    );
  }
}

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
  { getFriends }
)(FriendsList);
