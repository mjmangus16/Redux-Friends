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
      this.setState({
        name: this.props.active.name,
        age: this.props.active.age,
        email: this.props.active.email
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
      this.props.history.push("/");
    }
  };

  handleSubmit = () => {
    const friend = this.state.friend;

    if (this.props.active) {
      console.log(this.state.friend);
      this.props.editFriend(friend);
    } else {
      this.addFriend();
    }
  };

  render() {
    const { name, age, email } = this.state.friend;

    return (
      <div style={styles.container}>
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
      </div>
    );
  }
}

export default Form;
