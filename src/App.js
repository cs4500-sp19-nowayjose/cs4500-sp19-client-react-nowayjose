import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
// import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
import ServiceProviderNavigator from './components/ServiceProviderSearch'

class App extends Component {
  render() {
    return (
        <div className="container">
          <Router>
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link to="/home">Home</Link> |
                  <Link to="/services"> Services</Link> |
                  <Link to="/providers"> Providers</Link> |
                  <Link to="/admin"> Admin</Link>
                </div>
                <div className="d-flex flex-row-reverse">
                  <Link to="#"> Sign Up</Link>
                  <div style={{ marginLeft: 10, marginRight: 10 }}/>
                  <Link to="#"> Log in</Link>
                </div>
              </div>
              <br/>
              <br/>
              <br/>

              <Route
                  path="/home"
                  exact
                  component={Home}/>

              <Route
                  path="/providers"
                  exact
                  component={ServiceProviderNavigator}/>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
              {/*<Route*/}
                  {/*path="/providers"*/}
                  {/*exact*/}
                  {/*component={ServiceProviderNavigator}/>*/}
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
