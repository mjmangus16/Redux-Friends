import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/index";

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

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res) {
          this.props.history.push("/protected/friendsList");
        }
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div style={styles.container}>
        <form onSubmit={this.login}>
          <input
            style={styles.input}
            placeholder="Username"
            name="username"
            onChange={e => this.inputHandler(e)}
            value={username}
          />

          <input
            style={styles.input}
            placeholder="password"
            name="password"
            onChange={e => this.inputHandler(e)}
            value={password}
            type="password"
          />
          <button style={styles.input}>LOG IN</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.friendsReducer.error,
    loggingIn: state.friendsReducer.loggingIn
  };
};

export default connect(
  mapStateToProps,
  {
    login
  }
)(Login);
