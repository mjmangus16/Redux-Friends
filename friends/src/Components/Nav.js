import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    cursor: "pointer",
    width: "100%"
  }
};

const Nav = props => {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div style={styles.container}>
      <Link to="/protected/friendsList">
        <div style={styles.button}>Friends List</div>
      </Link>
      <Link to="/protected/friendForm">
        <div style={styles.button}>Add Friend</div>
      </Link>
      <Link to="/">
        <div style={styles.button} onClick={props.logout}>
          Logout
        </div>
      </Link>
    </div>
  );
};

export default Nav;
