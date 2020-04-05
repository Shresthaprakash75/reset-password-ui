import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from './App'
import ResetPass from './other-app/reset-password'

const routing = (
  <Router>
    <Route exact path="/"><App /></Route>
    <Route path="/reset-password"><ResetPass /></Route>
    
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);