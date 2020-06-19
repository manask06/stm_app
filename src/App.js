import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './PrivateRoute'
import Index from './components/dashboard/Index'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
