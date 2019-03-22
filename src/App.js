import React, { Component } from 'react';
import './App.css';
import Admin from './components/Admin';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Service</h1>
        <Router>
          <div>
            <Link to="/admin">Admin</Link>
            <Route
                path="/admin"
                exact
                component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
