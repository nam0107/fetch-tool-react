import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Main from "./Components/Main";
import Login from "./Components/Auth/Login";


function App() {
  return (
    <BrowserRouter>
        <Route
          path="/"
          exact={true}
          render={() => {
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/home" component={Main} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
  );
}

export default App;
