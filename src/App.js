import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ServiceCategoryService from './services/ServiceCategoryService'
import serviceCategories from './data/service-categories.mock.json'
import Home from './components/Home'
import ServiceNavigatorContainer from './containers/ServiceNavigatorContainer'
import ServiceProviderNavigator from './components/ServiceProviderSearch'
import Admin from './components/Admin'
import RegisterContainer from './containers/RegisterContainer';

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
                                <Link to="/admin"> Admin</Link> |
                                <Link to="/provider/2"> Provider</Link> |
                                <Link to="/register"> Register</Link> |
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
                            path="/services"
                            exact
                            component={ServiceNavigatorContainer}/>
                        <Route
                            path="/providers"
                            exact
                            component={ServiceProviderNavigator}/>
                        <Route
                            path="/admin"
                            exact
                            component={Admin}/>

                        <Route
                            path="/register"
                            exact
                            component={RegisterContainer}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
