import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Classes from "./components/Classes";
import styled from 'styled-components';
import { AccountBox } from './components/accountBox'
import NavBar from './components/navbar'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
      <Route path="/" component={Home} /> */}
        </AppContainer>
    </BrowserRouter>
  );
}

export default App;
