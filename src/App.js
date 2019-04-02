import React, { Component } from 'react';
import './App.css';
import Admin from './components/Admin';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceProviderSearch from './components/ServiceProviderSearch'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ServiceNavigatorComponent from './containers/ServiceNavigatorContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Service</h1>
        <Router>
          <div>
            <div>
              <Link to="/admin">Admin</Link>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>      
            </div>
            <div>
              <Link to="/provider-search">Provider search</Link>
              <Route
                  path="/provider-search"
                  exact
                  component={ServiceProviderSearch}/>
            </div>
            <div>
              <Link to="/service-categories">service categories</Link>
              <Route
                  path="/service-categories"
                  exact
                  component={ServiceNavigatorComponent}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;