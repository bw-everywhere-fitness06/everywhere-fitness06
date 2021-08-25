import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Classes from "./components/Classes";
import styled from 'styled-components';
import { AccountBox } from './components/accountBox'
import NavBar from './components/navbar'
import CreateClassForm from "./components/CreateClassForm";
<<<<<<< HEAD
import { LoginForm } from "./components/accountBox/loginForm";
=======
>>>>>>> af6220bbbe4f770df64c937e5ff661b88572507f
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <BrowserRouter>

    <NavBar />
    <AppContainer>
    
  
      <Route exact path="/" component={Home} >
      <AccountBox />
      </Route>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/classes" component={Classes} />
      {/* <Route path="/" component={Home} />

      <AppContainer>
        <Route exact path="/" component={Home}>
          <AccountBox />
        </Route>
        <Route path="/signin" component={LoginForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/classes" component={Classes} />
        <Route path="/newclass" component={CreateClassForm} />

        {/* <Route path="/" component={Home} />

      <Route path="/" component={Home} /> */}
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
