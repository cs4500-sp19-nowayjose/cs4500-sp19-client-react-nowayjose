
import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import FAQs from './FAQs'
import ServiceQuestion from './ServiceQuestion'

const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
      <div>
        <div className="row">
            <div className="col-3">

                <Link to="/admin/service-questions">Service Questions</Link>
                <br/>
                <Link to="/admin/service-questions">Service Answers</Link>
                <br/>
                <Link to="/admin/faqs">FAQs</Link>
                <br/>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/faqs"
                    exact
                    component={FAQs}/>

                <Route
                    path="/admin/service-questions"
                    exact
                    component={ServiceQuestion}/>

                <Route
                    path="/admin/service-questions"
                    exact
                    component={ServiceQuestion}/>
            </div>
        </div>
      </div>
    </Router>
</div>

export default Admin
