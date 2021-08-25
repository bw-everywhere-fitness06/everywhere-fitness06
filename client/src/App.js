import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Classes from "./components/Classes";
import CreateClassForm from "./components/CreateClassForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/classes" component={Classes} />
      </Switch>
      {/* <Route path="/" component={Home} />
      <Route path="/" component={Home} /> */}
    </BrowserRouter>
  );
}

export default App;
