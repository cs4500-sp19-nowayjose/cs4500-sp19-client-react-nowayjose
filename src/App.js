import React, { Component } from 'react';
import './App.css';
import Admin from './components/Admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ServiceProviderSearch from './components/ServiceProviderSearch'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ServiceNavigatorComponent from './containers/ServiceNavigatorContainer';
import LandingScreen from './components/LandingScreen';

class App extends Component {
  routes = [
    { to: '/', text: 'Home', c: LandingScreen },
    { to: '/home', text: 'Home', c: () => <div></div> },
    { to: '/services', text: 'Services', c: ServiceNavigatorComponent },
    { to: '/providers', text: 'Providers', c: ServiceProviderSearch },
    { to: '/admin', text: 'Admin', c: Admin },
  ]


  render() {
    return (
      <Router>
        <div className="container">
          <LandingScreen /> {/* landing screen is header */}
          {
            this.routes.map(({ to, c }) => (
              <Route path={to} exact component={c} />
            ))
          }
          </div>
      </Router>
    );
  }
}

export default App;
