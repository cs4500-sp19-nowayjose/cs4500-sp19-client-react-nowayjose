import React from 'react'
import ServiceCategoryTabItem from './ServiceCategoryTabItem'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const ServiceCategoryTabNavigator = ({serviceCategories}) =>
    <Router>
        <div>
            <ul className="nav nav-tabs">
                {
                    serviceCategories.map(serviceCategory =>
                        <li key={serviceCategory.id} className="nav-item">
                            <Link to={serviceCategory.serviceCategoryName} className="nav-link" href="#">
                                {serviceCategory.serviceCategoryName}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <br/>
            <Route path="/Home Improvements" render={() =>
                <ServiceCategoryTabItem services={serviceCategories[0].services.splice(0, 6)}/>}/>
            <Route path="/Wellness" render={() =>
                <ServiceCategoryTabItem services={serviceCategories[1].services.splice(0, 6)}/>}/>
        </div>
    </Router>

export default ServiceCategoryTabNavigator