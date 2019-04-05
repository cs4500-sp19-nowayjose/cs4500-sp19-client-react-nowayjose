import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import ServiceProviderSearch from './components/ServiceProviderSearch'
// import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
import ServiceProviderNavigator from './components/ServiceProviderSearch'
import ServiceNavigatorContainer from './containers/ServiceNavigatorContainer'
import serviceCategories from './data/service-categories.mock.json'
import ServiceCategoryService from './services/ServiceCategoryService'

class App extends Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            pillServiceCategories: serviceCategories
        }
    }
    componentDidMount() {
        this.serviceCategoryService.findAllServiceCategories()
            .then(serviceCategories => this.setState({
                pillServiceCategories: serviceCategories
            }))
    }

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
                  <Link to="/provider"> Provider</Link>
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
                  render={() => <Home pillServiceCategories={this.state.pillServiceCategories}/>}/>

              <Route
                  path="/providers"
                  exact
                  component={ServiceProviderNavigator}/>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
              <Route
                  path="/services"
                  exact
                  component={ServiceNavigatorContainer}/>
              <Route
                  path="/provider-search/:id"
                  exact
                  component={ServiceProviderSearch}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
