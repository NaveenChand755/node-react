import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './components/signin'
import UserPage from './components/userPage'


const  App = () => {
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/users' component={UserPage} />
    </Switch>
    </div></Router>
  );
}

export default App;
