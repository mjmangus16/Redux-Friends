import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend, updateFriend } from "../redux/actions/index";

const styles = {
  container: {
    border: "1px solid black",
    width: "500px",
    height: "auto",
    margin: "10px auto",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    height: 25,
    width: "75%",
    margin: "15px auto"
  }
};

class Form extends Component {
  state = {
    friend: this.props.active || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.active && prevProps.active !== this.props.active) {
      this.setState(() => {
        return {
          friend: {
            name: this.props.active.name,
            age: this.props.active.age,
            email: this.props.active.email
          }
        };
      });
    }
  }

  inputHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: { ...prevState.friend, [e.target.name]: e.target.value }
    }));
  };

  addFriend = () => {
    if (
      this.state.friend.name !== "" &&
      this.state.friend.age !== "" &&
      this.state.friend.email !== ""
    ) {
      this.props.addFriend(this.state.friend);
      this.props.history.push("/protected/friendsList");
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const friend = this.state.friend;

    if (this.props.active) {
      this.props.updateFriend(friend);
      this.props.removeActive();
      this.props.history.push("/protected/friendsList");
    } else {
      this.addFriend();
    }
  };

  render() {
    const { name, age, email } = this.state.friend;

    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <input
            style={styles.input}
            placeholder="Friends Name"
            name="name"
            onChange={e => this.inputHandler(e)}
            value={name}
          />

          <input
            style={styles.input}
            placeholder="Friends Age"
            name="age"
            onChange={e => this.inputHandler(e)}
            value={age}
          />

          <input
            style={styles.input}
            placeholder="Friends Email"
            name="email"
            onChange={e => this.inputHandler(e)}
            value={email}
          />

          <button style={styles.input} onClick={this.handleSubmit}>
            {this.props.active ? "UPDATE" : "SUBMIT"}
          </button>
        </form>
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
  { addFriend, updateFriend }
)(Form);
