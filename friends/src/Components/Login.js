import React, { Component } from "react";

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

  render() {
    const { username, password } = this.state;

    return (
      <div style={styles.container}>
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

        <button style={styles.input} onClick={this.handleSubmit}>
          {this.props.active ? "UPDATE" : "SUBMIT"}
        </button>
      </div>
    );
  }
}

export default Login;
