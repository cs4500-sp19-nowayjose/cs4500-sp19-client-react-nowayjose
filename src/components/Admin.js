import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import Services from './Services'
import ServiceQuestion from './ServiceQuestion'
import ServiceAnswers from './ServiceAnswers'
import FAQs from './FAQs'
import ServiceCategories from "./ServiceCategories";

const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
      <div>
        <div className="row">
            <div className="col-3">
                <Link to="/admin/users">Users</Link>
                <br/>
                <Link to="/admin/services">Services</Link>
                <br/>
                <Link to="/admin/service-categories">Service Categories</Link>
                <br/>
                <Link to="/admin/service-questions">Service Questions</Link>
                <br/>
                <Link to="/admin/service-answers">Service Answers</Link>
                <br/>
                <Link to="/admin/faqs">FAQs</Link>
                <br/>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/users"
                    exact
                    component={Users}/>
                <Route
                    path="/admin/services"
                    exact
                    component={Services}/>
                <Route
                    path="/admin/service-categories"
                    exact
                    component={ServiceCategories}/>
                <Route
                    path="/admin/service-questions"
                    exact
                    component={ServiceQuestion}/>
                <Route
                    path="/admin/service-answers"
                    exact
                    component={ServiceAnswers}/>
                <Route
                    path="/admin/faqs"
                    exact
                    component={FAQs}/>
            </div>
        </div>
      </div>
    </Router>
</div>

export default Admin
