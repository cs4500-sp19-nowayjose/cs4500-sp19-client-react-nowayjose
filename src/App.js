import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ServiceCategoryService from './services/ServiceCategoryService'
import serviceCategories from './data/service-categories.mock.json'
import Home from './components/Home'
import ServiceNavigatorContainer from './containers/ServiceNavigatorContainer'
import LoginContainer from './containers/LoginContainer'
import ServiceProviderNavigator from './components/ServiceProviderSearch'
import Admin from './components/Admin'
import RegisterContainer from './containers/RegisterContainer';
import ProviderContainer from './components/Provider/ProviderContainer'
import BusinessInfoContainer from './containers/BusinessInfoContainer'
import BusinessServiceScreen from './components/BusinessServiceScreen'
import UMLClassDiagram from './components/UMLClassDiagram/UMLClassDiagram'

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
                                <Link to="/uml">UML</Link> |
                                <Link to="/home">Home</Link> |
                                <Link to="/services"> Services</Link> |
                                <Link to="/provider-search/2"> Providers</Link> |
                                <Link to="/admin"> Admin</Link> |
                                <Link to="/provider"> Provider</Link> |
                                <Link to="/provider/2"> Provider</Link> |
                                <Link to="/business"> Business</Link> |
                                <Link to="/register"> Register</Link> |
                                <Link to="/login"> Log in</Link> |
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <Route
                            path="/uml"
                            exact
                            render={() => <UMLClassDiagram/>}
                        />
                        <Route
                            path="/home"
                            exact
                            render={() => <Home pillServiceCategories={this.state.pillServiceCategories}/>}/>
                        <Route
                            path="/services"
                            exact
                            component={ServiceNavigatorContainer}/>
                        <Route
                            path="/provider-search/:id"
                            exact
                            component={ServiceProviderNavigator}/>
                        <Route
                            path="/admin"
                            exact
                            component={Admin}/>
                        <Route
                            path="/provider/:id"
                            exact
                            component={ProviderContainer}/>
                        <Route
                            path="/register"
                            exact
                            component={RegisterContainer}/>
                        <Route 
                            path="/login"
                            exact
                            component={LoginContainer}/>
                        <Route
                            path="/business"
                            exact
                            component={BusinessInfoContainer}/>

                        <Route
                            path="/business-service/:providerId"
                            exact
                            component={BusinessServiceScreen} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
