import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../redux/actions/index";

import Friend from "./Friend";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { friends } = this.props;
    console.log(friends);
    return (
      <div>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetching,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(FriendsList);
