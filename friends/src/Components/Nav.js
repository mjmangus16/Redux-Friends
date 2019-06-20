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

const Nav = () => {
  return (
    <div style={styles.container}>
      <Link to="/login">
        <div style={styles.button}>Login</div>
      </Link>
      <Link to="/">
        <div style={styles.button}>Friends List</div>
      </Link>
      <Link to="friendForm">
        <div style={styles.button}>Add Friend</div>
      </Link>
    </div>
  );
};

export default Nav;
