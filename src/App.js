import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
// import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
// import ServiceProviderNavigator from './components/ServiceProviderNavigator/ServiceProviderNavigator'

class App extends Component {
  render() {
    return (
        <div className="container">
          <Router>
            <div>
              <Link to="/home">Home</Link> |
              <Link to="/services"> Services</Link> |
              <Link to="/providers"> Providers</Link> |
              <Link to="/admin"> Admin</Link> |
              <Link to="/provider"> Provider</Link>
              <br/>
              <br/>
              <br/>

              <Route
                  path="/home"
                  exact
                  component={Home}/>
              {/*<Route*/}
                  {/*path="/services"*/}
                  {/*exact*/}
                  {/*component={ServiceNavigator}/>*/}
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
