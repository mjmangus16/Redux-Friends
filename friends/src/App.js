import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Nav from "./Components/Nav";
import FriendsList from "./Components/FriendsList";
import Form from "./Components/Form";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route path="/friendForm" render={props => <Form {...props} />} />

      <Route exact path="/" render={props => <FriendsList {...props} />} />
    </div>
  );
};

export default App;
