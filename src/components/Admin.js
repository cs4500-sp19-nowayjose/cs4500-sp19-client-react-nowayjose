import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UsersContainer from './UsersContainer'
import ServicesContainer from './ServicesContainer'
import ServiceDetails from './ServiceDetails'
import ServiceQuestion from './ServiceQuestion'
import ServiceAnswer from './ServiceAnswer'
import FAQsList from './FAQsList'
import FAQsContainer from './FAQsContainer'
import FAQDetailsContainer from '../containers/FAQDetailsContainer'
import FAQAnswersContainer from './FaqAnswersContainer'
import ServiceQuestionDetails from './ServiceQuestionDetails'
import ServiceAnswerDetails from './ServiceAnswerDetails'
import ServiceCategoriesContainer from './ServiceCategoriesContainer'


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
                <Link to="/admin/faq-answers">FAQ Answers</Link>
                <br/>
                <Link to="/admin/service-answers/1">Service Answers Details</Link>
                <br/>
                <Link to="/admin/service-questions/1">Service Question Details</Link>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/users"
                    exact
                    component={UsersContainer}/>
                <Route
                    path="/admin/services"
                    exact
                    component={ServicesContainer}/>
                <Route
                    path="/admin/services/:id"
                    exact
                    component={ServiceDetails}/>
                <Route
                    path="/admin/service-categories"
                    exact
                    component={ServiceCategoriesContainer}/>
                <Route
                    path="/admin/service-questions"
                    exact
                    component={ServiceQuestion}/>
                <Route
                    path="/admin/service-answers"
                    exact
                    component={ServiceAnswer}/>
                <Route
                    path="/admin/service-answers/:id"
                    exact
                    component={ServiceAnswerDetails}/>
                <Route
                    path="/admin/service-questions/:id"
                    exact
                    component={ServiceQuestionDetails}/>
                <Route
                    path="/admin/faqs"
                    exact
                    component={FAQsContainer}/>
                <Route
                    path="/admin/faqs/:id"
                    exact
                    component={FAQDetailsContainer}/>
                <Route
                    path="/admin/faq-answers"
                    exact
                    component={FAQAnswersContainer}/>
            </div>
        </div>
      </div>
    </Router>
</div>

export default Admin
