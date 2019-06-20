import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Authorized from "./Components/Authorized";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRoute path="/protected" component={Authorized} />
    </div>
  );
};

export default App;
