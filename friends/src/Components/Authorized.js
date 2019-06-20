import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./Nav";
import FriendsList from "./FriendsList";
import Form from "./Form";

class Authorized extends Component {
  state = {
    active: null
  };

  removeActive = () => {
    this.setState({ active: null });
  };

  setUpdateForm = item => {
    this.setState({
      active: item
    });
    this.props.history.push("/protected/friendForm");
  };

  render() {
    return (
      <div>
        <Nav />
        <Route
          path="/protected/friendForm"
          render={props => (
            <Form
              {...props}
              active={this.state.active}
              removeActive={this.removeActive}
            />
          )}
        />

        <Route
          path="/protected/friendsList"
          render={props => (
            <FriendsList {...props} setForm={this.setUpdateForm} />
          )}
        />
      </div>
    );
  }
}

export default Authorized;
